use rust_decimal::Decimal;
use serde::Serialize;

use super::entities::{FarmId, MillId, NpcId};
use crate::market::book::PlayerId;

/// Every observable outcome that can happen in a cycle.
/// Public events are broadcast to all clients; the `hidden` flag marks events
/// that should appear anonymised in the narrator prompt (no actor name) and
/// only fully revealed in the debrief.
#[derive(Debug, Clone, Serialize)]
#[serde(tag = "kind", rename_all = "snake_case")]
pub enum GameEvent {
    // Market
    OrderFilled {
        player_id: PlayerId,
        side: String,
        price: Decimal,
        quantity: u32,
    },

    // Physical world
    FarmBurned {
        farm_id: FarmId,
        #[serde(skip_serializing_if = "Option::is_none")]
        arsonist: Option<PlayerId>,
    },
    FarmHealed {
        farm_id: FarmId,
    },
    MillBurned {
        mill_id: MillId,
    },
    WorkerKilled {
        farm_id: FarmId,
    },
    NpcKilled {
        npc_id: NpcId,
        npc_name: String,
    },
    NpcFarmAuctioned {
        farm_id: FarmId,
        buyer: PlayerId,
        price: Decimal,
    },
    Rumor {
        text: String,
    },

    // God-tier
    Drought {
        cycles: u32,
    },
    Famine,
    BumperHarvest,
    MarketPanic,
    NuclearFallout,

    // Harvest / corn production
    FieldsPlanted {
        farm_id: FarmId,
        count: u32,
    },
    CornHarvested {
        farm_id: FarmId,
        bushels: u32,
    },
    CornSold {
        player_id: PlayerId,
        bushels: u32,
        revenue: Decimal,
    },

    // Option expiry
    OptionExpired {
        player_id: PlayerId,
        pnl: Decimal,
    },

    // Game flow
    PlayerJoined {
        player_id: PlayerId,
        name: String,
    },
    CycleStart {
        cycle: u64,
    },
    GameOver {
        reason: String,
    },
}

/// Append-only event log for the entire game session.
/// The LLM debrief consumes this at the end.
#[derive(Debug, Default)]
pub struct EventLog {
    pub entries: Vec<(u64, GameEvent)>, // (cycle, event)
}

impl EventLog {
    pub fn push(&mut self, cycle: u64, event: GameEvent) {
        self.entries.push((cycle, event));
    }
}
