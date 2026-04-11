use rand::rngs::StdRng;
use rand::RngExt;
use rust_decimal::prelude::FromPrimitive;
use rust_decimal::Decimal;

use super::{MarketAgent, PendingOrder, WorldView};
use crate::market::book::{PlayerId, Side};

/// Max single-cycle drawdown before a MM blows up (in Decimal dollars).
const BLOWUP_THRESHOLD: f64 = 80_000.0;

/// Day-trader market maker: quotes both sides simultaneously to earn the
/// spread.  Tracks inventory and PnL.  Blows up on catastrophic drawdown.
pub struct MarketMakerAgent {
    id: PlayerId,
    cash: f64,
    shares: i64,
    /// Cash + shares * price at start of last cycle (for drawdown check).
    cycle_start_nav: f64,
    pub blown_up: bool,
    pub name: String,
}

impl MarketMakerAgent {
    pub fn new(id: PlayerId, name: &str) -> Self {
        Self {
            id,
            cash: 200_000.0,
            shares: 0,
            cycle_start_nav: 200_000.0,
            blown_up: false,
            name: name.to_string(),
        }
    }

    /// Check if this cycle's drawdown exceeds the blowup threshold.
    pub fn check_blowup(&mut self, price: f64) -> bool {
        if self.blown_up {
            return false;
        }
        let nav = self.cash + self.shares as f64 * price;
        if self.cycle_start_nav - nav > BLOWUP_THRESHOLD {
            self.blown_up = true;
            tracing::info!("Market maker {} blew up!", self.name);
            return true;
        }
        false
    }
}

impl MarketAgent for MarketMakerAgent {
    fn player_id(&self) -> PlayerId {
        self.id
    }

    fn is_active(&self) -> bool {
        !self.blown_up
    }

    fn snapshot_nav(&mut self, price: f64) {
        self.cycle_start_nav = self.cash + self.shares as f64 * price;
    }

    fn check_blowup(&mut self, price: f64) -> bool {
        self.check_blowup(price)
    }

    fn act(&mut self, view: &WorldView, rng: &mut StdRng) -> Vec<PendingOrder> {
        if self.blown_up {
            return vec![];
        }

        // Spread: 0.5% on each side, widened slightly by inventory skew.
        let inventory_skew = (self.shares as f64 * 0.001).clamp(-0.02, 0.02);
        let half_spread = 0.005 + rng.random::<f64>() * 0.003;

        let bid_price = view.price * (1.0 - half_spread - inventory_skew);
        let ask_price = view.price * (1.0 + half_spread - inventory_skew);

        // Size: 10–30 shares per side.
        let size = rng.random_range(10u32..=30);

        let bid_d = Decimal::from_f64(bid_price).unwrap_or(Decimal::ONE_HUNDRED);
        let ask_d = Decimal::from_f64(ask_price).unwrap_or(Decimal::ONE_HUNDRED);

        vec![
            PendingOrder {
                player_id: self.id,
                side: Side::Bid,
                price: Some(bid_d),
                quantity: size,
            },
            PendingOrder {
                player_id: self.id,
                side: Side::Ask,
                price: Some(ask_d),
                quantity: size,
            },
        ]
    }

    fn apply_fill(&mut self, side: Side, price: Decimal, quantity: u32) {
        use rust_decimal::prelude::ToPrimitive;
        let cost: f64 = price.to_f64().unwrap_or(0.0) * quantity as f64;
        match side {
            Side::Bid => {
                self.cash -= cost;
                self.shares += quantity as i64;
            }
            Side::Ask => {
                self.cash += cost;
                self.shares -= quantity as i64;
            }
        }
    }
}
