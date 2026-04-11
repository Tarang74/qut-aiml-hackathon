pub mod actions;
pub mod aura;
pub mod entities;
pub mod events;
pub mod world;

use std::sync::{Arc, Mutex};
use std::time::Duration;

use tokio::sync::{broadcast, mpsc};
use tokio::time::{sleep_until, Instant};

use crate::llm::narrator::OwnedMessage;
use crate::net::protocol::{RosterEntry, ServerMsg};
use actions::InboundMsg;
use world::{CyclePhase, World};

/// Serialise a message and broadcast it to all connected clients.
fn broadcast_msg(tx: &broadcast::Sender<Arc<String>>, msg: &ServerMsg) {
    if let Ok(json) = serde_json::to_string(msg) {
        let _ = tx.send(Arc::new(json));
    }
}

/// Broadcast a full state snapshot and atomically replace the reconnect snapshot.
///
/// The snapshot is sent to every new WebSocket connection so clients that
/// reconnect mid-game (including the host) immediately see current state.
fn broadcast_all_state(
    world: &World,
    tx: &broadcast::Sender<Arc<String>>,
    snapshot: &Mutex<Vec<Arc<String>>>,
    cycle_events: &[crate::sim::events::GameEvent],
) {
    let mut new_snap: Vec<Arc<String>> = Vec::new();

    let mut push = |msg: ServerMsg| {
        if let Ok(json) = serde_json::to_string(&msg) {
            let arc = Arc::new(json);
            let _ = tx.send(arc.clone());
            new_snap.push(arc);
        }
    };

    // Include current phase so reconnecting clients know whether the game has started.
    let phase_str = match world.phase {
        CyclePhase::Lobby => "lobby",
        CyclePhase::Decision => "decision",
        CyclePhase::Resolving => "resolving",
        CyclePhase::Summary => "summary",
    };
    push(ServerMsg::CyclePhase {
        phase: phase_str.to_string(),
        cycle: world.cycle,
        seconds_remaining: 0,
    });
    push(ServerMsg::PriceUpdate {
        price: world.price_as_decimal(),
        history: world.history_snapshot(),
        bid_depth: world.book.total_bid_depth(),
        ask_depth: world.book.total_ask_depth(),
        cycle_volume: world.cycle_volume,
    });
    push(ServerMsg::WorldSnapshot {
        farms: world.farms.values().cloned().collect(),
        mills: world.mills.values().cloned().collect(),
        npc_owners: world.npc_owners.values().cloned().collect(),
    });
    push(ServerMsg::CycleEvents {
        cycle: world.cycle,
        events: cycle_events.to_vec(),
    });
    // PlayerRoster last — so reconnecting hosts see the current player list.
    push(ServerMsg::PlayerRoster {
        players: world
            .players
            .values()
            .map(|p| RosterEntry {
                player_id: p.id.0,
                name: p.name.clone(),
                role: format!("{:?}", p.role),
            })
            .collect(),
    });

    // Per-player portfolio (broadcast to all; each client filters on its own id).
    let vol = world.realized_vol();
    for player in world.players.values() {
        push(ServerMsg::PlayerState {
            player_id: player.id.0,
            name: player.name.clone(),
            cash: player.portfolio.cash,
            shares: player.portfolio.shares,
            aura: player.aura,
            net_worth: player.portfolio.net_worth(world.price, world.cycle, vol),
            options: player.portfolio.options.clone(),
        });
    }

    *snapshot.lock().unwrap() = new_snap;
}

/// Main game loop.  Runs as a background tokio task.
pub async fn run_loop(
    mut world: World,
    broadcast_tx: broadcast::Sender<Arc<String>>,
    snapshot: Arc<Mutex<Vec<Arc<String>>>>,
    mut action_rx: mpsc::Receiver<InboundMsg>,
    api_key: String,
    seed: u64,
) {
    // Rolling conversation context for the per-cycle admin summary (Sonnet).
    let admin_context: Arc<Mutex<Vec<OwnedMessage>>> = Arc::new(Mutex::new(Vec::new()));
    tracing::info!("Sim loop started — waiting for host to start game");

    // ── Lobby: wait for StartGame before running any cycles ──────────────────
    'lobby: loop {
        let Some(msg) = action_rx.recv().await else {
            return;
        };
        if let actions::InboundMsg::Admin {
            command: actions::AdminCommand::StartGame,
        } = &msg
        {
            tracing::info!("Host started the game");
            break 'lobby;
        }
        let reset = handle_inbound(&mut world, msg, &broadcast_tx, &snapshot);
        if reset {
            let cycle_secs = world.cycle_duration_secs;
            world = World::new(seed);
            world.cycle_duration_secs = cycle_secs;
            admin_context.lock().unwrap().clear();
            broadcast_msg(&broadcast_tx, &ServerMsg::GameReset {});
        }
    }

    'game: loop {
        // ── Decision phase ────────────────────────────────────────────────────
        world.locked_in.clear();
        world.phase = CyclePhase::Decision;
        broadcast_msg(
            &broadcast_tx,
            &ServerMsg::CyclePhase {
                phase: "decision".to_string(),
                cycle: world.cycle,
                seconds_remaining: world.cycle_duration_secs,
            },
        );

        let mut decision_end = Instant::now() + Duration::from_secs(world.cycle_duration_secs);
        let deadline = sleep_until(decision_end);
        tokio::pin!(deadline);
        let mut paused_at: Option<Instant> = None;

        let mut reset_requested = false;
        let mut all_locked_in = false;
        loop {
            tokio::select! {
                msg = action_rx.recv() => {
                    if let Some(msg) = msg {
                        let was_paused = world.paused;
                        reset_requested = handle_inbound(&mut world, msg, &broadcast_tx, &snapshot);
                        all_locked_in = world.all_players_locked_in();
                        if !was_paused && world.paused {
                            paused_at = Some(Instant::now());
                            deadline.as_mut().reset(Instant::now() + Duration::from_secs(86400));
                        } else if was_paused && !world.paused {
                            if let Some(at) = paused_at.take() {
                                decision_end += at.elapsed();
                                deadline.as_mut().reset(decision_end);
                            }
                            let secs_left = decision_end.duration_since(Instant::now()).as_secs();
                            broadcast_msg(&broadcast_tx, &ServerMsg::CyclePhase {
                                phase: "decision".to_string(),
                                cycle: world.cycle,
                                seconds_remaining: secs_left,
                            });
                        }
                    }
                }
                _ = &mut deadline => {
                    if !world.paused { break; }
                    deadline.as_mut().reset(Instant::now() + Duration::from_secs(86400));
                }
            }
            if reset_requested || world.game_over || all_locked_in {
                if all_locked_in {
                    tracing::info!("All players locked in — advancing cycle early");
                }
                break;
            }
        }

        if reset_requested {
            let cycle_secs = world.cycle_duration_secs;
            world = World::new(seed);
            world.cycle_duration_secs = cycle_secs;
            admin_context.lock().unwrap().clear();
            broadcast_msg(&broadcast_tx, &ServerMsg::GameReset {});
            tracing::info!("Game reset by admin");
            continue 'game;
        }

        if world.game_over {
            tracing::info!("Game over (admin end): {:?}", world.game_over_reason);
            let stats = world.compute_debrief();
            broadcast_msg(&broadcast_tx, &ServerMsg::Debrief { stats });
            break 'game;
        }

        // ── Resolution phase ──────────────────────────────────────────────────
        world.phase = CyclePhase::Resolving;
        broadcast_msg(
            &broadcast_tx,
            &ServerMsg::CyclePhase {
                phase: "resolving".to_string(),
                cycle: world.cycle,
                seconds_remaining: 0,
            },
        );

        let cycle_events = world.resolve_cycle();
        broadcast_all_state(&world, &broadcast_tx, &snapshot, &cycle_events);

        if !api_key.is_empty() {
            // ── Per-cycle narrator headline (fire-and-forget, Haiku) ──────────
            {
                let tx2 = broadcast_tx.clone();
                let key = api_key.clone();
                let evs = cycle_events.clone();
                let cycle = world.cycle;
                let price = world.price;
                tokio::spawn(async move {
                    match crate::llm::narrator::generate(&evs, cycle, price, &key).await {
                        Ok(text) => broadcast_msg(&tx2, &ServerMsg::Headline { text, cycle }),
                        Err(e) => tracing::warn!("narrator error: {e}"),
                    }
                });
            }

            // ── Per-cycle admin summary (fire-and-forget, Sonnet + rolling ctx) ──
            {
                let tx2 = broadcast_tx.clone();
                let key = api_key.clone();
                let evs = cycle_events.clone();
                let cycle = world.cycle;
                let price = world.price;
                let player_count = world.players.len();
                let ctx_arc = admin_context.clone();
                let prior = admin_context.lock().unwrap().clone();
                tokio::spawn(async move {
                    match crate::llm::narrator::generate_admin_summary(
                        &evs,
                        cycle,
                        price,
                        player_count,
                        prior,
                        &key,
                    )
                    .await
                    {
                        Ok((text, new_ctx)) => {
                            *ctx_arc.lock().unwrap() = new_ctx;
                            broadcast_msg(&tx2, &ServerMsg::AdminSummary { text, cycle });
                        }
                        Err(e) => tracing::warn!("admin summary error: {e}"),
                    }
                });
            }

            // ── Per-player finance coaching (fire-and-forget, one task per player) ──
            let vol = world.realized_vol();
            for player in world.players.values() {
                let tx2 = broadcast_tx.clone();
                let key = api_key.clone();
                let player_id = player.id.0;
                let name = player.name.clone();
                let role = format!("{:?}", player.role);
                let cash = player.portfolio.cash;
                let shares = player.portfolio.shares;
                let net_worth = player.portfolio.net_worth(world.price, world.cycle, vol);
                let aura = player.aura;
                let options_count = player.portfolio.options.len();
                let price = world.price;
                let evs = cycle_events.clone();
                let cycle = world.cycle;
                tokio::spawn(async move {
                    match crate::llm::narrator::generate_feedback(
                        &name,
                        &role,
                        cash,
                        shares,
                        net_worth,
                        aura,
                        options_count,
                        price,
                        &evs,
                        cycle,
                        &key,
                    )
                    .await
                    {
                        Ok(tips) => {
                            broadcast_msg(&tx2, &ServerMsg::PlayerFeedback { player_id, tips });
                        }
                        Err(e) => tracing::warn!("feedback error for {name}: {e}"),
                    }
                });
            }
        }

        if world.game_over {
            tracing::info!("Game over: {:?}", world.game_over_reason);
            let stats = world.compute_debrief();
            broadcast_msg(&broadcast_tx, &ServerMsg::Debrief { stats });
            break 'game;
        }

        // ── Summary phase — only every 5 cycles; otherwise auto-advance ───────
        // world.cycle was incremented by resolve_cycle(), so the cycle that just
        // finished is world.cycle - 1.  Pause at multiples of 5 (cycles 5, 10, …).
        let is_milestone = world.cycle.is_multiple_of(5) && world.cycle > 0;
        if is_milestone {
            world.phase = CyclePhase::Summary;
            broadcast_msg(
                &broadcast_tx,
                &ServerMsg::CyclePhase {
                    phase: "summary".to_string(),
                    cycle: world.cycle,
                    seconds_remaining: 0,
                },
            );

            let mut reset_in_summary = false;
            loop {
                let Some(msg) = action_rx.recv().await else {
                    return;
                };
                if let actions::InboundMsg::Admin {
                    command: actions::AdminCommand::ContinueGame,
                } = &msg
                {
                    break;
                }
                reset_in_summary = handle_inbound(&mut world, msg, &broadcast_tx, &snapshot);
                if reset_in_summary || world.game_over {
                    break;
                }
            }

            if reset_in_summary {
                let cycle_secs = world.cycle_duration_secs;
                world = World::new(seed);
                world.cycle_duration_secs = cycle_secs;
                admin_context.lock().unwrap().clear();
                broadcast_msg(&broadcast_tx, &ServerMsg::GameReset {});
                tracing::info!("Game reset by admin (during summary)");
                continue 'game;
            }

            if world.game_over {
                tracing::info!("Game over: {:?}", world.game_over_reason);
                let stats = world.compute_debrief();
                broadcast_msg(&broadcast_tx, &ServerMsg::Debrief { stats });
                break 'game;
            }
        }
        // Non-milestone cycles fall through here and loop straight back to decision.
    }
}

/// Returns true if a game reset was requested (caller should reinitialise World).
fn handle_inbound(
    world: &mut World,
    msg: InboundMsg,
    tx: &broadcast::Sender<Arc<String>>,
    snapshot: &Mutex<Vec<Arc<String>>>,
) -> bool {
    match msg {
        InboundMsg::Join {
            player_id,
            name,
            role,
            client_nonce,
        } => {
            world.register_player(player_id, name.clone(), role);
            broadcast_msg(
                tx,
                &ServerMsg::Welcome {
                    player_id: player_id.0,
                    name,
                    role: format!("{role:?}"),
                    client_nonce,
                },
            );
            // Full state broadcast updates the snapshot so reconnecting clients see the new player.
            broadcast_all_state(world, tx, snapshot, &[]);
        }
        InboundMsg::Action { player_id, action } => {
            world.queue_action(player_id, action);
        }
        InboundMsg::Disconnect { player_id } => {
            tracing::info!("Player {player_id:?} disconnected");
            world.players.remove(&player_id);
            broadcast_msg(
                tx,
                &ServerMsg::PlayerLeft {
                    player_id: player_id.0,
                },
            );
        }
        InboundMsg::Admin { command } => {
            use actions::AdminCommand;
            match command {
                AdminCommand::ResetGame => {
                    // Signal the sim loop to reinitialise World.
                    return true;
                }
                AdminCommand::EndGame => {
                    world.game_over = true;
                    world.game_over_reason = Some("Admin ended game".to_string());
                    broadcast_msg(
                        tx,
                        &ServerMsg::GameOver {
                            reason: "Admin ended the game".to_string(),
                        },
                    );
                }
                AdminCommand::PauseGame => {
                    world.paused = true;
                    broadcast_msg(tx, &ServerMsg::GamePaused {});
                }
                AdminCommand::ResumeGame => {
                    world.paused = false;
                    // Actual seconds_remaining is broadcast by the decision loop after
                    // it extends the deadline — we just flip the flag here.
                    broadcast_msg(
                        tx,
                        &ServerMsg::GameResumed {
                            seconds_remaining: 0,
                        },
                    );
                }
                AdminCommand::SetCycleSecs { secs } => {
                    world.cycle_duration_secs = secs.max(5);
                }
                AdminCommand::SetSeed { .. } => {
                    tracing::warn!("SetSeed ignored mid-game");
                }
                AdminCommand::StartGame => {
                    // Already running — no-op.
                }
                AdminCommand::ContinueGame => {
                    // Handled by the summary wait loop — no-op here.
                }
                AdminCommand::KickPlayer { player_id } => {
                    const KICK_MSGS: &[&str] = &[
                        "Your aura simply wasn't it",
                        "Voted off the cornfield",
                        "The market has spoken — exit immediately",
                        "Margin called out of existence",
                        "You've been harvested",
                        "The board found your stock worthless",
                        "Not hedge-fund material",
                        "Escorted out by the grain police",
                        "Even the NPCs felt sorry for you",
                        "Your crops are someone else's problem now",
                    ];
                    let idx =
                        (world.cycle as usize).wrapping_add(player_id as usize) % KICK_MSGS.len();
                    let reason = KICK_MSGS[idx].to_string();
                    let pid = crate::market::book::PlayerId(player_id);
                    world.players.remove(&pid);
                    broadcast_msg(tx, &ServerMsg::Kicked { player_id, reason });
                    broadcast_msg(tx, &ServerMsg::PlayerLeft { player_id });
                }
            }
        }
    }
    false
}
