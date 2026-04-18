use rand::rngs::StdRng;
use rand::RngExt;
use rust_decimal::prelude::FromPrimitive;
use rust_decimal::Decimal;

use super::{MarketAgent, PendingOrder, WorldView};
use crate::market::book::{PlayerId, Side};
/// Autopilot NPC noise trader: symmetric small orders on both sides to add
/// realistic volume without net directional bias.
pub struct NpcOwnerAgent {
    id: PlayerId,
}

impl NpcOwnerAgent {
    pub fn new(player_id: PlayerId, _farm_id: Option<crate::sim::entities::FarmId>) -> Self {
        Self { id: player_id }
    }
}

impl MarketAgent for NpcOwnerAgent {
    fn player_id(&self) -> PlayerId {
        self.id
    }

    fn act(&mut self, view: &WorldView, rng: &mut StdRng) -> Vec<PendingOrder> {
        let mut orders = Vec::new();

        // 20% chance to sell a small lot just below market.
        if rng.random::<f64>() < 0.20 {
            let price_d = Decimal::from_f64(view.price * 0.997).unwrap_or(Decimal::ONE_HUNDRED);
            orders.push(PendingOrder {
                player_id: self.id,
                side: Side::Ask,
                price: Some(price_d),
                quantity: rng.random_range(2u32..=8),
            });
        }

        // 20% chance to buy a small lot just above market.
        if rng.random::<f64>() < 0.20 {
            let price_d = Decimal::from_f64(view.price * 1.003).unwrap_or(Decimal::ONE_HUNDRED);
            orders.push(PendingOrder {
                player_id: self.id,
                side: Side::Bid,
                price: Some(price_d),
                quantity: rng.random_range(2u32..=8),
            });
        }

        orders
    }

    fn apply_fill(&mut self, _side: Side, _price: Decimal, _quantity: u32) {}
}
