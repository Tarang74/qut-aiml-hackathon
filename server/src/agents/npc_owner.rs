use rand::rngs::StdRng;
use rand::RngExt;
use rust_decimal::prelude::FromPrimitive;
use rust_decimal::Decimal;

use super::{MarketAgent, PendingOrder, WorldView};
use crate::market::book::{PlayerId, Side};
/// Autopilot NPC farm owner: sells corn on the market and occasionally buys.
pub struct NpcOwnerAgent {
    id: PlayerId,
    /// Stored corn awaiting sale.
    corn: u32,
}

impl NpcOwnerAgent {
    pub fn new(player_id: PlayerId, _farm_id: Option<crate::sim::entities::FarmId>) -> Self {
        Self {
            id: player_id,
            corn: 0,
        }
    }
}

impl MarketAgent for NpcOwnerAgent {
    fn player_id(&self) -> PlayerId {
        self.id
    }

    fn act(&mut self, view: &WorldView, rng: &mut StdRng) -> Vec<PendingOrder> {
        let mut orders = Vec::new();

        // Sell stored corn at slightly below market (eager seller).
        if self.corn > 0 && rng.random::<f64>() < 0.70 {
            let sell_qty = (self.corn / 2).max(1).min(self.corn);
            let sell_price = view.price * 0.995;
            let sell_price_d = Decimal::from_f64(sell_price).unwrap_or(Decimal::ONE_HUNDRED);
            orders.push(PendingOrder {
                player_id: self.id,
                side: Side::Ask,
                price: Some(sell_price_d),
                quantity: sell_qty,
            });
            self.corn -= sell_qty;
        }

        // Occasional buy to hedge / accumulate shares.
        if rng.random::<f64>() < 0.15 {
            let buy_price = view.price * 0.998;
            let buy_price_d = Decimal::from_f64(buy_price).unwrap_or(Decimal::ONE_HUNDRED);
            orders.push(PendingOrder {
                player_id: self.id,
                side: Side::Bid,
                price: Some(buy_price_d),
                quantity: rng.random_range(1u32..=5),
            });
        }

        orders
    }

    fn apply_fill(&mut self, _side: Side, _price: Decimal, _quantity: u32) {
        // NpcOwner cash/shares are tracked on NpcOwner in World, not here.
    }
}
