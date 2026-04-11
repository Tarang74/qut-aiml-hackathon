use rust_decimal::Decimal;
use serde::{Deserialize, Serialize};

use crate::market::book::PlayerId;

// ── ID newtypes ──────────────────────────────────────────────────────────────

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
pub struct FarmId(pub u64);

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
pub struct MillId(pub u64);

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
pub struct NpcId(pub u64);

// ── Physical assets ──────────────────────────────────────────────────────────

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum FarmState {
    Healthy,
    Burning,
    Idle,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Farm {
    pub id: FarmId,
    pub owner: PlayerId,
    pub fields: u32,
    pub workers: u32,
    pub state: FarmState,
    pub planted_fields: u32,
    pub stored_corn: u32,
    /// Remaining cycles on fire; auto-heals to Idle when it hits 0.
    pub burn_remaining: u32,
}

impl Farm {
    pub fn new(id: FarmId, owner: PlayerId, fields: u32, workers: u32) -> Self {
        Self {
            id,
            owner,
            fields,
            workers,
            state: FarmState::Healthy,
            planted_fields: 0,
            stored_corn: 0,
            burn_remaining: 0,
        }
    }

    /// Productivity multiplier for yield calculations.
    pub fn yield_multiplier(&self) -> f64 {
        if self.state == FarmState::Burning || self.workers == 0 {
            0.0
        } else {
            self.workers as f64
        }
    }
}

/// A mill processes raw corn into sellable inventory and charges a fee.
/// NPC-owned at game start; can be acquired or burned.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum MillState {
    Operating,
    Burning,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Mill {
    pub id: MillId,
    pub owner: PlayerId,
    /// Corn bushels processed per cycle.
    pub throughput: u32,
    pub state: MillState,
    pub burn_remaining: u32,
}

impl Mill {
    pub fn new(id: MillId, owner: PlayerId, throughput: u32) -> Self {
        Self {
            id,
            owner,
            throughput,
            state: MillState::Operating,
            burn_remaining: 0,
        }
    }
}

// ── Roles ────────────────────────────────────────────────────────────────────

/// Players pick exactly one role at game start.
/// Farmers run real businesses (farms, operations, hedges).
/// Traders are pure financial players (stocks, options, short-selling).
#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum Role {
    Farmer,
    Trader,
}

impl Role {
    pub fn starting_cash(self) -> Decimal {
        match self {
            Role::Farmer => Decimal::from(10_000),
            Role::Trader => Decimal::from(15_000),
        }
    }
}

// ── Named NPC owners ─────────────────────────────────────────────────────────

/// A named NPC that owns physical assets (farm or mill).
/// `player_id` is in the 101..=107 range and appears in order book fills.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct NpcOwner {
    pub id: NpcId,
    pub player_id: PlayerId,
    pub name: String,
    pub cash: Decimal,
    pub shares: i64,
    pub farm_id: Option<FarmId>,
    pub mill_id: Option<MillId>,
    pub alive: bool,
}

impl NpcOwner {
    pub fn new_farmer(id: NpcId, player_id: PlayerId, name: &str, farm_id: FarmId) -> Self {
        Self {
            id,
            player_id,
            name: name.to_string(),
            cash: Decimal::from(5_000),
            shares: 20,
            farm_id: Some(farm_id),
            mill_id: None,
            alive: true,
        }
    }

    pub fn new_mill_owner(id: NpcId, player_id: PlayerId, name: &str, mill_id: MillId) -> Self {
        Self {
            id,
            player_id,
            name: name.to_string(),
            cash: Decimal::from(8_000),
            shares: 50,
            farm_id: None,
            mill_id: Some(mill_id),
            alive: true,
        }
    }
}
