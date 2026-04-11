use std::collections::{HashMap, HashSet, VecDeque};

use rand::rngs::StdRng;
use rand::RngExt;
use rand::SeedableRng;
use rust_decimal::prelude::{FromPrimitive, ToPrimitive};
use rust_decimal::Decimal;

use super::actions::{OptionRequest, PlayerAction};
use super::aura;
use super::entities::{Farm, FarmId, FarmState, Mill, MillId, MillState, NpcId, NpcOwner, Role};
use super::events::{EventLog, GameEvent};
use crate::agents::npc_owner::NpcOwnerAgent;
use crate::agents::{MarketAgent, WorldView};
use crate::error::GameError;
use crate::market::book::{Order, OrderBook, PlayerId, Side};
use crate::market::matching;
use crate::market::options::{self, OptionPosition, OptionType};
use crate::market::portfolio::Portfolio;

pub const HISTORY_LEN: usize = 300;
const INITIAL_PRICE: f64 = 100.0;
/// Player IDs 1–1000 are abstract market agents; 1001–1007 are named NPCs; ≥2001 are human players.

#[derive(Debug, Clone, PartialEq, Eq)]
pub enum CyclePhase {
    Lobby,
    Decision,
    Resolving,
    Summary,
}

/// A human player's full state.
#[derive(Debug, Clone)]
pub struct PlayerState {
    pub id: PlayerId,
    pub name: String,
    pub role: Role,
    pub portfolio: Portfolio,
    pub aura: f64,
    pub farm_ids: Vec<FarmId>,
    pub mill_ids: Vec<MillId>,
}

impl PlayerState {
    fn new(id: PlayerId, name: String, role: Role) -> Self {
        let portfolio = Portfolio::new(role.starting_cash());
        Self {
            id,
            name,
            role,
            portfolio,
            aura: 0.0,
            farm_ids: vec![],
            mill_ids: vec![],
        }
    }
}

pub struct World {
    // Price state
    pub price: f64,
    pub history: VecDeque<Decimal>,
    pub rng: StdRng,

    // Market
    pub book: OrderBook,

    // Game state
    pub cycle: u64,
    pub phase: CyclePhase,
    pub cycle_duration_secs: u64,

    // Participants
    pub players: HashMap<PlayerId, PlayerState>,
    pub npc_owners: HashMap<NpcId, NpcOwner>,

    // Physical world
    pub farms: HashMap<FarmId, Farm>,
    pub mills: HashMap<MillId, Mill>,

    // Agents
    pub market_agents: Vec<Box<dyn MarketAgent>>,
    pub npc_agents: Vec<NpcOwnerAgent>,

    // Pending actions for current decision phase
    pub action_queue: HashMap<PlayerId, PlayerAction>,

    // World modifiers
    pub drought_cycles: u32,
    pub famine_active: bool,
    /// Price multiplier injected by SpreadRumor; biases MM quotes for TTL cycles.
    pub rumour_shift: f64,
    pub rumour_shift_ttl: u32,

    // MM blowup tracking
    pub mm_blowups: u32,

    // Game over
    pub game_over: bool,
    pub game_over_reason: Option<String>,

    // Pause state
    pub paused: bool,

    // Players who have locked in their action this decision phase.
    pub locked_in: HashSet<PlayerId>,

    // Event log
    pub event_log: EventLog,

    // Volume tracking (reset each cycle)
    pub cycle_volume: u32,

    // ID counters
    next_farm_id: u64,
    next_mill_id: u64,
    next_npc_id: u64,
    next_option_id: u64,
}

impl World {
    pub fn new(seed: u64) -> Self {
        let mut w = Self {
            price: INITIAL_PRICE,
            history: VecDeque::with_capacity(HISTORY_LEN + 1),
            rng: StdRng::seed_from_u64(seed),
            book: OrderBook::new(),
            cycle: 0,
            phase: CyclePhase::Lobby,
            cycle_duration_secs: 8,
            players: HashMap::new(),
            npc_owners: HashMap::new(),
            farms: HashMap::new(),
            mills: HashMap::new(),
            market_agents: Vec::new(),
            npc_agents: Vec::new(),
            action_queue: HashMap::new(),
            drought_cycles: 0,
            famine_active: false,
            rumour_shift: 1.0,
            rumour_shift_ttl: 0,
            mm_blowups: 0,
            game_over: false,
            game_over_reason: None,
            paused: false,
            locked_in: HashSet::new(),
            event_log: EventLog::default(),
            cycle_volume: 0,
            next_farm_id: 1,
            next_mill_id: 1,
            next_npc_id: 1,
            next_option_id: 1,
        };
        w.history.push_back(w.price_as_decimal());
        w.spawn_abstract_agents();
        w.spawn_npc_world();
        w
    }

    // ── Price ─────────────────────────────────────────────────────────────────

    /// Push the current price into history. Called once per cycle after resolution.
    fn record_price(&mut self) {
        let d = self.price_as_decimal();
        self.history.push_back(d);
        if self.history.len() > HISTORY_LEN {
            self.history.pop_front();
        }
    }

    pub fn price_as_decimal(&self) -> Decimal {
        Decimal::from_f64(self.price).unwrap_or(Decimal::ONE_HUNDRED)
    }

    pub fn history_snapshot(&self) -> Vec<Decimal> {
        self.history.iter().copied().collect()
    }

    /// Rolling realized vol from recent price history (annualised in cycle-years).
    pub fn realized_vol(&self) -> f64 {
        if self.history.len() < 4 {
            return 0.3;
        }
        let h: Vec<f64> = self
            .history
            .iter()
            .map(|d| d.to_f64().unwrap_or(self.price))
            .collect();
        let returns: Vec<f64> = h.windows(2).map(|w| (w[1] / w[0]).ln()).collect();
        let n = returns.len() as f64;
        let mean = returns.iter().sum::<f64>() / n;
        let var = returns.iter().map(|r| (r - mean).powi(2)).sum::<f64>() / n;
        // One data point per cycle; scale to cycle-vol units.
        var.sqrt().max(0.02)
    }

    // ── Player registration ───────────────────────────────────────────────────

    pub fn register_player(&mut self, id: PlayerId, name: String, role: Role) {
        // Reconnect: player already in world — preserve their existing state.
        if self.players.contains_key(&id) {
            return;
        }

        let mut state = PlayerState::new(id, name.clone(), role);

        // Assign starting physical assets.
        match role {
            Role::Farmer => {
                let fid = self.new_farm(id, 3, 2);
                state.farm_ids.push(fid);
            }
            Role::Trader => {
                // Extra cash only — no physical assets.
            }
        }

        self.event_log.push(
            self.cycle,
            GameEvent::PlayerJoined {
                player_id: id,
                name,
            },
        );
        self.players.insert(id, state);
    }

    // ── Action queue ─────────────────────────────────────────────────────────

    pub fn queue_action(&mut self, player_id: PlayerId, action: PlayerAction) {
        // Mark player as locked in regardless of action type.
        self.locked_in.insert(player_id);
        if let PlayerAction::NoOp = action {
            // NoOp just locks in — no action queued.
            return;
        }
        // Only one action per player per decision phase; latest wins.
        self.action_queue.insert(player_id, action);
    }

    /// True when every connected player has locked in their action.
    pub fn all_players_locked_in(&self) -> bool {
        !self.players.is_empty() && self.locked_in.len() >= self.players.len()
    }

    // ── Cycle resolution ─────────────────────────────────────────────────────

    /// Full resolution step: apply queued actions, run agents, advance world.
    /// Returns events generated this cycle.
    pub fn resolve_cycle(&mut self) -> Vec<GameEvent> {
        let mut events: Vec<GameEvent> = Vec::new();

        // Expire orders older than 2 cycles — keeps the book live without wiping it.
        self.book.prune_stale(self.cycle, 2);
        self.cycle_volume = 0;
        self.locked_in.clear();

        self.event_log
            .push(self.cycle, GameEvent::CycleStart { cycle: self.cycle });

        // 1. Snapshot MM NAV, then let agents quote first so players can trade against fresh liquidity.
        let price = self.price;
        for agent in self.market_agents.iter_mut() {
            agent.snapshot_nav(price);
        }
        let view = self.world_view();
        let agent_orders: Vec<_> = self
            .market_agents
            .iter_mut()
            .filter(|a| a.is_active())
            .flat_map(|a| a.act(&view, &mut self.rng))
            .collect();
        self.submit_pending_orders(agent_orders, &mut events);

        // 2. Apply queued player actions (trade against agent liquidity).
        let actions: Vec<(PlayerId, PlayerAction)> = self.action_queue.drain().collect();
        for (pid, action) in actions {
            match self.apply_player_action(pid, action) {
                Ok(mut evs) => events.append(&mut evs),
                Err(e) => tracing::warn!("player {pid:?} action error: {e}"),
            }
        }

        // 3. NPC farm autopilot: harvest + sell against remaining liquidity.
        let npc_orders = self.run_npc_farm_autopilot();
        self.submit_pending_orders(npc_orders, &mut events);

        // 4. Check MM blowups.
        for agent in self.market_agents.iter_mut() {
            if agent.check_blowup(price) {
                self.mm_blowups += 1;
            }
        }

        let active_mms = self.market_agents.iter().filter(|a| a.is_active()).count();
        if active_mms == 0 {
            events.push(GameEvent::GameOver {
                reason: "Market collapse — all market makers blown up".to_string(),
            });
            self.game_over = true;
            self.game_over_reason = Some("Market collapse".to_string());
        }

        // 6. Aura tick.
        for player in self.players.values_mut() {
            player.aura += aura::AURA_PER_CYCLE;
        }

        // Every 5 cycles, reward top net-worth players with bonus aura.
        if (self.cycle + 1).is_multiple_of(aura::AURA_LEADERBOARD_BONUS_INTERVAL_CYCLES) {
            let vol = self.realized_vol();
            let mut standings: Vec<(PlayerId, Decimal)> = self
                .players
                .iter()
                .map(|(pid, p)| (*pid, p.portfolio.net_worth(self.price, self.cycle, vol)))
                .collect();
            standings.sort_by(|a, b| b.1.cmp(&a.1).then_with(|| a.0 .0.cmp(&b.0 .0)));

            for (rank, (pid, _)) in standings.into_iter().take(5).enumerate() {
                if let Some(player) = self.players.get_mut(&pid) {
                    player.aura += aura::AURA_TOP5_BONUSES[rank];
                }
            }
        }

        // 7. Decay world modifiers.
        if self.drought_cycles > 0 {
            self.drought_cycles -= 1;
        }
        if self.famine_active && self.cycle.is_multiple_of(3) {
            self.famine_active = false;
        }
        if self.rumour_shift_ttl > 0 {
            self.rumour_shift_ttl -= 1;
        }

        // 8. Tick farm burn timers.
        let farm_ids: Vec<FarmId> = self.farms.keys().copied().collect();
        for fid in farm_ids {
            if let Some(farm) = self.farms.get_mut(&fid) {
                if farm.state == FarmState::Burning {
                    if farm.burn_remaining > 0 {
                        farm.burn_remaining -= 1;
                    }
                    if farm.burn_remaining == 0 {
                        farm.state = FarmState::Idle;
                        farm.workers /= 2;
                        events.push(GameEvent::FarmHealed { farm_id: fid });
                        self.event_log
                            .push(self.cycle, GameEvent::FarmHealed { farm_id: fid });
                    }
                }
            }
        }
        let mill_ids: Vec<MillId> = self.mills.keys().copied().collect();
        for mid in mill_ids {
            if let Some(mill) = self.mills.get_mut(&mid) {
                if mill.state == MillState::Burning {
                    if mill.burn_remaining > 0 {
                        mill.burn_remaining -= 1;
                    }
                    if mill.burn_remaining == 0 {
                        mill.state = MillState::Operating;
                    }
                }
            }
        }

        // 9. Settle expired options.
        let spot = self.price_as_decimal();
        let cycle = self.cycle;
        for player in self.players.values_mut() {
            let pnl = player.portfolio.settle_expired_options(cycle, spot);
            if pnl != Decimal::ZERO {
                events.push(GameEvent::OptionExpired {
                    player_id: player.id,
                    pnl,
                });
            }
        }

        // Derive price from order-book midpoint so only player/NPC trades move it.
        if let (Some(bid), Some(ask)) = (self.book.best_bid(), self.book.best_ask()) {
            let mid = (bid + ask) / Decimal::from(2u32);
            if let Some(f) = mid.to_f64() {
                self.price = f;
            }
        }
        self.record_price();

        self.cycle += 1;

        // Log all events.
        for e in &events {
            self.event_log.push(self.cycle, e.clone());
        }

        events
    }

    // ── Player action dispatch ────────────────────────────────────────────────

    fn apply_player_action(
        &mut self,
        pid: PlayerId,
        action: PlayerAction,
    ) -> Result<Vec<GameEvent>, GameError> {
        if self.game_over {
            return Err(GameError::GameOver);
        }
        if !self.players.contains_key(&pid) {
            return Err(GameError::PlayerNotFound(pid));
        }

        let mut events = Vec::new();

        match action {
            PlayerAction::PlaceOrder {
                side,
                price,
                quantity,
            } => {
                let order = Order {
                    id: self.book.next_order_id(),
                    player_id: pid,
                    side,
                    price,
                    quantity,
                    placed_at_cycle: self.cycle,
                };
                let fills = matching::match_order(&mut self.book, order);
                for fill in &fills {
                    // taker (pid) side and maker side are opposite
                    self.apply_trade(fill.taker_player_id, side, fill.price, fill.quantity);
                    let maker_side = if side == Side::Bid {
                        Side::Ask
                    } else {
                        Side::Bid
                    };
                    self.apply_trade(fill.maker_player_id, maker_side, fill.price, fill.quantity);
                    events.push(GameEvent::OrderFilled {
                        player_id: pid,
                        side: format!("{side:?}"),
                        price: fill.price,
                        quantity: fill.quantity,
                    });
                }
            }

            PlayerAction::CancelOrder { order_id } => {
                self.book.cancel(crate::market::book::OrderId(order_id));
            }

            PlayerAction::PlantFields { farm_id, count } => {
                let farm = self
                    .farms
                    .get_mut(&farm_id)
                    .ok_or_else(|| GameError::TargetNotFound(format!("{farm_id:?}")))?;
                if farm.owner != pid {
                    return Err(GameError::ActionNotAllowed("not your farm".into()));
                }
                let available = farm.fields.saturating_sub(farm.planted_fields);
                let to_plant = count.min(available);
                farm.planted_fields += to_plant;
                events.push(GameEvent::FieldsPlanted {
                    farm_id,
                    count: to_plant,
                });
            }

            PlayerAction::HarvestCorn { farm_id } => {
                let farm = self
                    .farms
                    .get_mut(&farm_id)
                    .ok_or_else(|| GameError::TargetNotFound(format!("{farm_id:?}")))?;
                if farm.owner != pid {
                    return Err(GameError::ActionNotAllowed("not your farm".into()));
                }
                let yield_mult = farm.yield_multiplier();
                let harvested = (farm.planted_fields as f64 * yield_mult * 10.0) as u32;
                farm.stored_corn += harvested;
                farm.planted_fields = 0;
                events.push(GameEvent::CornHarvested {
                    farm_id,
                    bushels: harvested,
                });
            }

            PlayerAction::HireWorker { farm_id } => {
                let player = self
                    .players
                    .get(&pid)
                    .ok_or(GameError::PlayerNotFound(pid))?;
                let cost = Decimal::from(500);
                if player.portfolio.cash < cost {
                    return Err(GameError::InsufficientFunds {
                        need: cost,
                        have: player.portfolio.cash,
                    });
                }
                let farm = self
                    .farms
                    .get_mut(&farm_id)
                    .ok_or_else(|| GameError::TargetNotFound(format!("{farm_id:?}")))?;
                if farm.owner != pid {
                    return Err(GameError::ActionNotAllowed("not your farm".into()));
                }
                farm.workers += 1;
                self.players.get_mut(&pid).unwrap().portfolio.cash -= cost;
            }

            PlayerAction::SellCorn { farm_id } => {
                // Compute price before mutable borrow of farm.
                let price_per_bushel = self.price_as_decimal() * Decimal::new(8, 1);
                let farm = self
                    .farms
                    .get_mut(&farm_id)
                    .ok_or_else(|| GameError::TargetNotFound(format!("{farm_id:?}")))?;
                if farm.owner != pid {
                    return Err(GameError::ActionNotAllowed("not your farm".into()));
                }
                if farm.stored_corn == 0 {
                    return Ok(events);
                }
                let bushels = farm.stored_corn;
                // Sell at 80% of current stock price (corn → stock price proxy).
                let revenue = price_per_bushel * Decimal::from(bushels);
                farm.stored_corn = 0;
                self.players.get_mut(&pid).unwrap().portfolio.cash += revenue;
                events.push(GameEvent::CornSold {
                    player_id: pid,
                    bushels,
                    revenue,
                });
            }

            PlayerAction::OperateMill { mill_id: _ } => {
                // Processing fee collected — for now, just a no-op placeholder.
            }

            PlayerAction::FireWorker { farm_id } => {
                let farm = self
                    .farms
                    .get_mut(&farm_id)
                    .ok_or_else(|| GameError::TargetNotFound(format!("{farm_id:?}")))?;
                if farm.owner != pid {
                    return Err(GameError::ActionNotAllowed("not your farm".into()));
                }
                if farm.workers > 0 {
                    farm.workers -= 1;
                }
            }

            PlayerAction::BuyOption {
                option_type,
                strike,
                expiry_cycles,
                quantity,
            } => {
                let spot = self.price;
                let vol = self.realized_vol().max(0.1);
                let opt_type = match option_type {
                    OptionRequest::Call => OptionType::Call,
                    OptionRequest::Put => OptionType::Put,
                };
                let strike_f: f64 = strike.to_f64().unwrap_or(spot);
                let premium_f =
                    options::bs_price(opt_type, spot, strike_f, expiry_cycles as f64, vol);
                let total_premium =
                    Decimal::from_f64(premium_f * quantity as f64).unwrap_or_default();
                let player = self
                    .players
                    .get(&pid)
                    .ok_or(GameError::PlayerNotFound(pid))?;
                if player.portfolio.cash < total_premium {
                    return Err(GameError::InsufficientFunds {
                        need: total_premium,
                        have: player.portfolio.cash,
                    });
                }
                let opt = OptionPosition {
                    id: self.next_option_id,
                    option_type: opt_type,
                    strike,
                    expiry_cycle: self.cycle + expiry_cycles,
                    quantity,
                    long: true,
                    premium: total_premium,
                    counter_party: None,
                };
                self.next_option_id += 1;
                self.players
                    .get_mut(&pid)
                    .unwrap()
                    .portfolio
                    .add_option(opt);
            }

            PlayerAction::WriteOption {
                option_type,
                strike,
                expiry_cycles,
                quantity,
            } => {
                let spot = self.price;
                let vol = self.realized_vol().max(0.1);
                let opt_type = match option_type {
                    OptionRequest::Call => OptionType::Call,
                    OptionRequest::Put => OptionType::Put,
                };
                let strike_f: f64 = strike.to_f64().unwrap_or(spot);
                let premium_f =
                    options::bs_price(opt_type, spot, strike_f, expiry_cycles as f64, vol);
                let total_premium =
                    Decimal::from_f64(premium_f * quantity as f64).unwrap_or_default();
                let opt = OptionPosition {
                    id: self.next_option_id,
                    option_type: opt_type,
                    strike,
                    expiry_cycle: self.cycle + expiry_cycles,
                    quantity,
                    long: false,
                    premium: total_premium,
                    counter_party: None,
                };
                self.next_option_id += 1;
                self.players
                    .get_mut(&pid)
                    .unwrap()
                    .portfolio
                    .add_option(opt);
            }

            // ── Chaotic actions ───────────────────────────────────────────────
            PlayerAction::BurnFarm { target_farm } => {
                let player = self
                    .players
                    .get(&pid)
                    .ok_or(GameError::PlayerNotFound(pid))?;
                if player.aura < aura::COST_BURN_FARM {
                    return Err(GameError::InsufficientAura {
                        need: aura::COST_BURN_FARM,
                        have: player.aura,
                    });
                }
                let farm = self
                    .farms
                    .get_mut(&target_farm)
                    .ok_or_else(|| GameError::TargetNotFound(format!("{target_farm:?}")))?;
                farm.state = FarmState::Burning;
                farm.burn_remaining = 3;
                let player = self.players.get_mut(&pid).unwrap();
                player.aura -= aura::COST_BURN_FARM;
                player.aura += aura::AURA_CHAOS_BONUS;
                events.push(GameEvent::FarmBurned {
                    farm_id: target_farm,
                    arsonist: None,
                });
            }

            PlayerAction::BurnMill { target_mill } => {
                let player = self
                    .players
                    .get(&pid)
                    .ok_or(GameError::PlayerNotFound(pid))?;
                if player.aura < aura::COST_BURN_MILL {
                    return Err(GameError::InsufficientAura {
                        need: aura::COST_BURN_MILL,
                        have: player.aura,
                    });
                }
                let mill = self
                    .mills
                    .get_mut(&target_mill)
                    .ok_or_else(|| GameError::TargetNotFound(format!("{target_mill:?}")))?;
                mill.state = MillState::Burning;
                mill.burn_remaining = 2;
                let player = self.players.get_mut(&pid).unwrap();
                player.aura -= aura::COST_BURN_MILL;
                player.aura += aura::AURA_CHAOS_BONUS;
                events.push(GameEvent::MillBurned {
                    mill_id: target_mill,
                });
            }

            PlayerAction::HitmanWorker { target_farm } => {
                let player = self
                    .players
                    .get(&pid)
                    .ok_or(GameError::PlayerNotFound(pid))?;
                if player.aura < aura::COST_HITMAN_WORKER {
                    return Err(GameError::InsufficientAura {
                        need: aura::COST_HITMAN_WORKER,
                        have: player.aura,
                    });
                }
                if let Some(farm) = self.farms.get_mut(&target_farm) {
                    if farm.workers > 0 {
                        farm.workers -= 1;
                    }
                }
                let player = self.players.get_mut(&pid).unwrap();
                player.aura -= aura::COST_HITMAN_WORKER;
                player.aura += aura::AURA_CHAOS_BONUS;
                events.push(GameEvent::WorkerKilled {
                    farm_id: target_farm,
                });
            }

            PlayerAction::HitmanOwner { target_npc } => {
                let player = self
                    .players
                    .get(&pid)
                    .ok_or(GameError::PlayerNotFound(pid))?;
                if player.aura < aura::COST_HITMAN_OWNER {
                    return Err(GameError::InsufficientAura {
                        need: aura::COST_HITMAN_OWNER,
                        have: player.aura,
                    });
                }
                let npc_name = self
                    .npc_owners
                    .get(&target_npc)
                    .ok_or_else(|| GameError::TargetNotFound(format!("{target_npc:?}")))?
                    .name
                    .clone();
                // Compute auction price before mutable borrow of npc_owners.
                let auction_price = self.price_as_decimal() * Decimal::from(10);
                if let Some(npc) = self.npc_owners.get_mut(&target_npc) {
                    npc.alive = false;
                    // Farm goes to auction at current price.
                    if let Some(fid) = npc.farm_id {
                        npc.farm_id = None;
                        events.push(GameEvent::NpcFarmAuctioned {
                            farm_id: fid,
                            buyer: pid,
                            price: auction_price,
                        });
                        // Transfer farm to the killer.
                        if let Some(farm) = self.farms.get_mut(&fid) {
                            farm.owner = pid;
                        }
                        let player = self.players.get_mut(&pid).unwrap();
                        player.portfolio.cash -= auction_price.min(player.portfolio.cash);
                        player.farm_ids.push(fid);
                    }
                }
                let player = self.players.get_mut(&pid).unwrap();
                player.aura -= aura::COST_HITMAN_OWNER;
                player.aura += aura::AURA_CHAOS_BONUS;
                events.push(GameEvent::NpcKilled {
                    npc_id: target_npc,
                    npc_name,
                });
            }

            PlayerAction::SpreadRumor { text } => {
                let player = self
                    .players
                    .get(&pid)
                    .ok_or(GameError::PlayerNotFound(pid))?;
                if player.aura < aura::COST_RUMOR {
                    return Err(GameError::InsufficientAura {
                        need: aura::COST_RUMOR,
                        have: player.aura,
                    });
                }
                // Random directional shock: 8–18% move, bullish or bearish.
                // Uses the seeded RNG so replays are deterministic.
                let magnitude = 0.08 + self.rng.random::<f64>() * 0.10;
                self.rumour_shift = if self.rng.random::<bool>() {
                    1.0 + magnitude
                } else {
                    1.0 - magnitude
                };
                // TTL=2: decremented at end of this cycle → active for exactly 1 full cycle.
                self.rumour_shift_ttl = 2;
                let p = self.players.get_mut(&pid).unwrap();
                p.aura -= aura::COST_RUMOR;
                p.aura += aura::AURA_CHAOS_BONUS;
                events.push(GameEvent::Rumor { text });
            }

            // ── God-tier ──────────────────────────────────────────────────────
            PlayerAction::Drought => {
                let player = self
                    .players
                    .get(&pid)
                    .ok_or(GameError::PlayerNotFound(pid))?;
                if player.aura < aura::COST_DROUGHT {
                    return Err(GameError::InsufficientAura {
                        need: aura::COST_DROUGHT,
                        have: player.aura,
                    });
                }
                self.drought_cycles += 4;
                self.players.get_mut(&pid).unwrap().aura -= aura::COST_DROUGHT;
                events.push(GameEvent::Drought { cycles: 4 });
            }

            PlayerAction::Famine => {
                let player = self
                    .players
                    .get(&pid)
                    .ok_or(GameError::PlayerNotFound(pid))?;
                if player.aura < aura::COST_FAMINE {
                    return Err(GameError::InsufficientAura {
                        need: aura::COST_FAMINE,
                        have: player.aura,
                    });
                }
                self.famine_active = true;
                self.players.get_mut(&pid).unwrap().aura -= aura::COST_FAMINE;
                events.push(GameEvent::Famine);
            }

            PlayerAction::BumperHarvest => {
                let player = self
                    .players
                    .get(&pid)
                    .ok_or(GameError::PlayerNotFound(pid))?;
                if player.aura < aura::COST_BUMPER_HARVEST {
                    return Err(GameError::InsufficientAura {
                        need: aura::COST_BUMPER_HARVEST,
                        have: player.aura,
                    });
                }
                self.players.get_mut(&pid).unwrap().aura -= aura::COST_BUMPER_HARVEST;
                events.push(GameEvent::BumperHarvest);
            }

            PlayerAction::MarketPanic => {
                let player = self
                    .players
                    .get(&pid)
                    .ok_or(GameError::PlayerNotFound(pid))?;
                if player.aura < aura::COST_MARKET_PANIC {
                    return Err(GameError::InsufficientAura {
                        need: aura::COST_MARKET_PANIC,
                        have: player.aura,
                    });
                }
                self.players.get_mut(&pid).unwrap().aura -= aura::COST_MARKET_PANIC;
                events.push(GameEvent::MarketPanic);
            }

            PlayerAction::NuclearFallout => {
                let player = self
                    .players
                    .get(&pid)
                    .ok_or(GameError::PlayerNotFound(pid))?;
                if player.aura < aura::COST_NUCLEAR_FALLOUT {
                    return Err(GameError::InsufficientAura {
                        need: aura::COST_NUCLEAR_FALLOUT,
                        have: player.aura,
                    });
                }
                // Destroy half of all farm fields.
                for farm in self.farms.values_mut() {
                    farm.fields /= 2;
                    farm.planted_fields = farm.planted_fields.min(farm.fields);
                    farm.state = FarmState::Burning;
                    farm.burn_remaining = 5;
                }
                self.price *= 0.3;
                self.players.get_mut(&pid).unwrap().aura -= aura::COST_NUCLEAR_FALLOUT;
                events.push(GameEvent::NuclearFallout);
                events.push(GameEvent::GameOver {
                    reason: format!("Nuclear fallout triggered by player {pid:?}"),
                });
                self.game_over = true;
                self.game_over_reason = Some("Nuclear fallout".to_string());
            }

            // ── Corporate ────────────────────────────────────────────────────
            PlayerAction::AcquireFarm { target_farm } => {
                // Compute price before mutable borrow of farms.
                let buy_price = self.price_as_decimal() * Decimal::from(15); // premium
                let farm = self
                    .farms
                    .get_mut(&target_farm)
                    .ok_or_else(|| GameError::TargetNotFound(format!("{target_farm:?}")))?;
                let player = self
                    .players
                    .get(&pid)
                    .ok_or(GameError::PlayerNotFound(pid))?;
                if player.portfolio.cash < buy_price {
                    return Err(GameError::InsufficientFunds {
                        need: buy_price,
                        have: player.portfolio.cash,
                    });
                }
                farm.owner = pid;
                let player = self.players.get_mut(&pid).unwrap();
                player.portfolio.cash -= buy_price;
                player.farm_ids.push(target_farm);
            }

            PlayerAction::AcquireMill { target_mill } => {
                // Compute price before mutable borrow of mills.
                let buy_price = self.price_as_decimal() * Decimal::from(20);
                let mill = self
                    .mills
                    .get_mut(&target_mill)
                    .ok_or_else(|| GameError::TargetNotFound(format!("{target_mill:?}")))?;
                let player = self
                    .players
                    .get(&pid)
                    .ok_or(GameError::PlayerNotFound(pid))?;
                if player.portfolio.cash < buy_price {
                    return Err(GameError::InsufficientFunds {
                        need: buy_price,
                        have: player.portfolio.cash,
                    });
                }
                mill.owner = pid;
                let player = self.players.get_mut(&pid).unwrap();
                player.portfolio.cash -= buy_price;
                player.mill_ids.push(target_mill);
            }

            PlayerAction::NoOp => {
                // Intentional pass — nothing to apply.
            }

            PlayerAction::DumpShares => {
                let player = self
                    .players
                    .get(&pid)
                    .ok_or(GameError::PlayerNotFound(pid))?;
                let qty = player.portfolio.shares.max(0) as u32;
                if qty == 0 {
                    return Ok(events);
                }
                let order = Order {
                    id: self.book.next_order_id(),
                    player_id: pid,
                    side: Side::Ask,
                    price: None, // market order
                    quantity: qty,
                    placed_at_cycle: self.cycle,
                };
                let fills = matching::match_order(&mut self.book, order);
                for fill in &fills {
                    self.apply_trade(fill.taker_player_id, Side::Ask, fill.price, fill.quantity);
                    self.apply_trade(fill.maker_player_id, Side::Bid, fill.price, fill.quantity);
                }
            }

            PlayerAction::CornerMarket => {
                // Aggressive buy sweep — buy everything available.
                let qty = 200u32;
                let order = Order {
                    id: self.book.next_order_id(),
                    player_id: pid,
                    side: Side::Bid,
                    price: None,
                    quantity: qty,
                    placed_at_cycle: self.cycle,
                };
                let fills = matching::match_order(&mut self.book, order);
                for fill in &fills {
                    self.apply_trade(fill.taker_player_id, Side::Bid, fill.price, fill.quantity);
                    self.apply_trade(fill.maker_player_id, Side::Ask, fill.price, fill.quantity);
                }
            }
        }

        Ok(events)
    }

    // ── Helpers ───────────────────────────────────────────────────────────────

    fn apply_trade(&mut self, player_id: PlayerId, side: Side, price: Decimal, quantity: u32) {
        // Only count each fill once (the taker side) to avoid double-counting.
        if side == Side::Bid {
            self.cycle_volume += quantity;
        }
        let qty_signed = quantity as i64;
        let cost = price * Decimal::from(quantity);
        if let Some(p) = self.players.get_mut(&player_id) {
            match side {
                Side::Bid => {
                    p.portfolio.cash -= cost;
                    p.portfolio.shares += qty_signed;
                }
                Side::Ask => {
                    p.portfolio.cash += cost;
                    p.portfolio.shares -= qty_signed;
                }
            }
        }
        // Update NPC owner cash/shares too.
        for npc in self.npc_owners.values_mut() {
            if npc.player_id == player_id {
                match side {
                    Side::Bid => {
                        npc.cash -= cost;
                        npc.shares += qty_signed;
                    }
                    Side::Ask => {
                        npc.cash += cost;
                        npc.shares -= qty_signed;
                    }
                }
            }
        }
        // Notify market agents of fills so MMs can skew quotes on inventory.
        for agent in self.market_agents.iter_mut() {
            if agent.player_id() == player_id {
                agent.apply_fill(side, price, quantity);
                break;
            }
        }
    }

    fn submit_pending_orders(
        &mut self,
        orders: Vec<crate::agents::PendingOrder>,
        _events: &mut Vec<GameEvent>,
    ) {
        for po in orders {
            let order = Order {
                id: self.book.next_order_id(),
                player_id: po.player_id,
                side: po.side,
                price: po.price,
                quantity: po.quantity,
                placed_at_cycle: self.cycle,
            };
            matching::match_order(&mut self.book, order);
        }
    }

    fn world_view(&self) -> WorldView {
        let effective_price = if self.rumour_shift_ttl > 0 {
            self.price * self.rumour_shift
        } else {
            self.price
        };
        WorldView {
            price: effective_price,
        }
    }

    fn run_npc_farm_autopilot(&mut self) -> Vec<crate::agents::PendingOrder> {
        let view = self.world_view();
        let mut orders = Vec::new();
        // Borrow npc_agents safely (no world mutation needed here).
        for agent in self.npc_agents.iter_mut() {
            orders.extend(agent.act(&view, &mut self.rng));
        }
        orders
    }

    fn new_farm(&mut self, owner: PlayerId, fields: u32, workers: u32) -> FarmId {
        let id = FarmId(self.next_farm_id);
        self.next_farm_id += 1;
        self.farms.insert(id, Farm::new(id, owner, fields, workers));
        id
    }

    fn new_mill(&mut self, owner: PlayerId, throughput: u32) -> MillId {
        let id = MillId(self.next_mill_id);
        self.next_mill_id += 1;
        self.mills.insert(id, Mill::new(id, owner, throughput));
        id
    }

    // ── World initialisation ──────────────────────────────────────────────────

    fn spawn_abstract_agents(&mut self) {
        use crate::agents::market_maker::MarketMakerAgent;

        // 1000 anonymous market makers — provide deep two-sided liquidity.
        // IDs 1–1000 reserved for abstract traders; named NPCs start at 1001.
        for i in 1u64..=1000 {
            let name = format!("MM-{i:04}");
            self.market_agents
                .push(Box::new(MarketMakerAgent::new(PlayerId(i), &name)));
        }
    }

    // ── End-of-game stats ─────────────────────────────────────────────────────

    /// Compute structured end-of-game statistics.  Pure calculation — no LLM.
    pub fn compute_debrief(&self) -> crate::net::protocol::DebriefStats {
        use crate::net::protocol::{DebriefStats, PlayerSummary};

        let vol = self.realized_vol();

        // Build per-player summaries.
        let mut entries: Vec<PlayerSummary> = self
            .players
            .values()
            .map(|p| {
                let starting = p.role.starting_cash();
                let nw = p.portfolio.net_worth(self.price, self.cycle, vol);
                let pnl = nw - starting;
                let return_pct =
                    pnl.to_f64().unwrap_or(0.0) / starting.to_f64().unwrap_or(1.0) * 100.0;
                PlayerSummary {
                    player_id: p.id.0,
                    name: p.name.clone(),
                    role: format!("{:?}", p.role),
                    net_worth: nw,
                    pnl,
                    return_pct,
                    rank: 0, // filled after sort
                }
            })
            .collect();

        entries.sort_by(|a, b| b.net_worth.cmp(&a.net_worth));
        for (i, e) in entries.iter_mut().enumerate() {
            e.rank = (i + 1) as u32;
        }

        // Price stats from history (highest resolution data available).
        let prices: Vec<f64> = self.history.iter().filter_map(|p| p.to_f64()).collect();

        let price_high = prices.iter().cloned().fold(self.price, f64::max);
        let price_low = prices.iter().cloned().fold(self.price, f64::min);

        // Cycle-to-cycle volatility: std dev of simple returns (as %).
        let returns: Vec<f64> = prices
            .windows(2)
            .filter(|w| w[0] != 0.0)
            .map(|w| (w[1] - w[0]) / w[0])
            .collect();

        let price_vol_pct = if returns.len() > 1 {
            let mean = returns.iter().sum::<f64>() / returns.len() as f64;
            let var =
                returns.iter().map(|r| (r - mean).powi(2)).sum::<f64>() / returns.len() as f64;
            var.sqrt() * 100.0
        } else {
            0.0
        };

        DebriefStats {
            total_cycles: self.cycle,
            final_price: self.price,
            price_high,
            price_low,
            price_vol_pct,
            mm_blowups: self.mm_blowups,
            game_over_reason: self.game_over_reason.clone().unwrap_or_default(),
            leaderboard: entries,
        }
    }

    fn spawn_npc_world(&mut self) {
        let npc_data: &[(&str, u32, u32)] = &[
            ("Old MacDonald", 4, 3),
            ("Farmer Brown", 3, 2),
            ("Corn King", 5, 4),
            ("Prairie Pete", 3, 2),
            ("Harvest Hannah", 4, 3),
        ];

        for (i, &(name, fields, workers)) in npc_data.iter().enumerate() {
            let npc_id = NpcId(self.next_npc_id);
            self.next_npc_id += 1;
            let player_id = PlayerId(1001 + i as u64);
            let farm_id = self.new_farm(player_id, fields, workers);
            let npc = NpcOwner::new_farmer(npc_id, player_id, name, farm_id);
            self.npc_owners.insert(npc_id, npc);
            self.npc_agents
                .push(NpcOwnerAgent::new(player_id, Some(farm_id)));
        }

        let mill_owner_data: &[&str] = &["The Grain Baron", "Mill Master"];
        for (i, &name) in mill_owner_data.iter().enumerate() {
            let npc_id = NpcId(self.next_npc_id);
            self.next_npc_id += 1;
            let player_id = PlayerId(1006 + i as u64);
            let mill_id = self.new_mill(player_id, 200);
            let npc = NpcOwner::new_mill_owner(npc_id, player_id, name, mill_id);
            self.npc_owners.insert(npc_id, npc);
            self.npc_agents.push(NpcOwnerAgent::new(player_id, None));
        }
    }
}
