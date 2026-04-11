use rust_decimal::Decimal;
use serde::{Deserialize, Serialize};

use super::entities::{FarmId, MillId, NpcId, Role};
use crate::market::book::{PlayerId, Side};

/// Everything a player can do during the decision phase.
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(tag = "kind", rename_all = "snake_case")]
pub enum PlayerAction {
    // ── Market orders ────────────────────────────────────────────────────────
    PlaceOrder {
        side: Side,
        /// None = market order.
        price: Option<Decimal>,
        quantity: u32,
    },
    CancelOrder {
        order_id: u64,
    },

    // ── Constructive (Farmer) ─────────────────────────────────────────────────
    PlantFields {
        farm_id: FarmId,
        count: u32,
    },
    HarvestCorn {
        farm_id: FarmId,
    },
    HireWorker {
        farm_id: FarmId,
    },
    /// Fire a worker — free action, reduces farm yield next cycle.
    FireWorker {
        farm_id: FarmId,
    },
    SellCorn {
        farm_id: FarmId,
    },
    OperateMill {
        mill_id: MillId,
    },

    // Options (simplified: direct purchase/writing, no option order book)
    BuyOption {
        option_type: OptionRequest,
        strike: Decimal,
        expiry_cycles: u64, // cycles from now until expiry
        quantity: u32,
    },
    WriteOption {
        option_type: OptionRequest,
        strike: Decimal,
        expiry_cycles: u64,
        quantity: u32,
    },

    // ── Chaotic (anonymous in public events) ─────────────────────────────────
    BurnFarm {
        target_farm: FarmId,
    },
    BurnMill {
        target_mill: MillId,
    },
    HitmanWorker {
        target_farm: FarmId,
    },
    HitmanOwner {
        target_npc: NpcId,
    },
    SpreadRumor {
        text: String,
    },

    // ── God-tier (require aura) ───────────────────────────────────────────────
    Drought,
    Famine,
    BumperHarvest,
    MarketPanic,
    NuclearFallout,

    // ── Corporate (require wealth tier) ──────────────────────────────────────
    AcquireFarm {
        target_farm: FarmId,
    },
    AcquireMill {
        target_mill: MillId,
    },
    DumpShares,
    CornerMarket,
    /// Explicitly take no action this cycle — marks the player as locked-in.
    NoOp,
}

#[derive(Debug, Clone, Copy, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum OptionRequest {
    Call,
    Put,
}

/// Messages flowing from WS handlers into the sim loop.
#[derive(Debug)]
pub enum InboundMsg {
    Join {
        player_id: PlayerId,
        name: String,
        role: Role,
        client_nonce: String,
    },
    Action {
        player_id: PlayerId,
        action: PlayerAction,
    },
    /// WebSocket closed (network drop / tab close). Player stays in world for reconnect.
    Disconnect { player_id: PlayerId },
    /// Player explicitly left (clicked Leave). Removes them from the world.
    Leave { player_id: PlayerId },
    /// Admin commands (pause, end game, tune params).
    Admin { command: AdminCommand },
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(tag = "cmd", rename_all = "snake_case")]
pub enum AdminCommand {
    EndGame,
    PauseGame,
    ResumeGame,
    SetCycleSecs {
        secs: u64,
    },
    SetSeed {
        seed: u64,
    },
    KickPlayer {
        player_id: u64,
    },
    /// Tear down the current game and start a fresh one from cycle 0.
    ResetGame,
    /// Begin the first cycle (host-only; server idles in lobby until this arrives).
    StartGame,
    /// Advance from the post-cycle summary screen to the next decision phase.
    ContinueGame,
}
