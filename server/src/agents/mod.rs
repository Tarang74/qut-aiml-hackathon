pub mod market_maker;
pub mod npc_owner;

use rand::rngs::StdRng;
use rust_decimal::Decimal;

use crate::market::book::{PlayerId, Side};

/// Read-only view of world state passed to agents each resolution phase.
#[derive(Debug, Clone)]
pub struct WorldView {
    pub price: f64,
}

/// An order request returned by an agent, before book-ID assignment.
#[derive(Debug, Clone)]
pub struct PendingOrder {
    pub player_id: PlayerId,
    pub side: Side,
    /// None = market order.
    pub price: Option<Decimal>,
    pub quantity: u32,
}

/// Trait for all abstract market participants.
pub trait MarketAgent: Send {
    fn player_id(&self) -> PlayerId;
    fn act(&mut self, view: &WorldView, rng: &mut StdRng) -> Vec<PendingOrder>;
    /// Called after the matching engine has processed fills so the agent can
    /// update its own notional cash/share state if needed.
    fn apply_fill(&mut self, side: Side, price: Decimal, quantity: u32);
    /// True once a market maker has blown up and should no longer quote.
    fn is_active(&self) -> bool {
        true
    }
    /// Record NAV at cycle start for blowup detection (no-op for non-MMs).
    fn snapshot_nav(&mut self, _price: f64) {}
    /// Check if this cycle's drawdown triggers a blowup; returns true if just blown up.
    fn check_blowup(&mut self, _price: f64) -> bool {
        false
    }
}
