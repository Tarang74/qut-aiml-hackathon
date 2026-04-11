use std::collections::{BTreeMap, HashMap, VecDeque};

use rust_decimal::Decimal;
use serde::{Deserialize, Serialize};

/// Unique order identifier, monotonically increasing within a session.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, PartialOrd, Ord, Serialize, Deserialize)]
pub struct OrderId(pub u64);

/// Identifies any market participant — human player, named NPC, or abstract trader.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
pub struct PlayerId(pub u64);

#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum Side {
    Bid,
    Ask,
}

#[derive(Debug, Clone)]
pub struct Order {
    pub id: OrderId,
    pub player_id: PlayerId,
    pub side: Side,
    /// `None` = market order: fill at any available price, drop the remainder.
    /// `Some(p)` = limit order at price `p`: fill where price crosses, rest the remainder.
    pub price: Option<Decimal>,
    /// Remaining unfilled quantity in shares.
    pub quantity: u32,
}

/// Price-time priority limit order book for CornCo stock.
///
/// Bids are keyed by price ascending; we iterate them in reverse to get best
/// (highest) first. Asks are keyed ascending; best (lowest) is the first entry.
/// At each price level orders are served FIFO.
///
/// Market orders never rest here — they are consumed entirely by
/// `matching::match_order` and any unfilled remainder is dropped.
pub struct OrderBook {
    pub(super) bids: BTreeMap<Decimal, VecDeque<Order>>,
    pub(super) asks: BTreeMap<Decimal, VecDeque<Order>>,
    /// Fast O(1) lookup for cancellation: order id → (side, limit price).
    pub(super) index: HashMap<OrderId, (Side, Decimal)>,
    next_id: u64,
}

impl OrderBook {
    pub fn new() -> Self {
        Self {
            bids: BTreeMap::new(),
            asks: BTreeMap::new(),
            index: HashMap::new(),
            next_id: 1,
        }
    }

    /// Allocate a fresh `OrderId`. Call before constructing an `Order`.
    pub fn next_order_id(&mut self) -> OrderId {
        let id = OrderId(self.next_id);
        self.next_id += 1;
        id
    }

    /// Insert a resting limit order. Only called by `matching::match_order`.
    pub(super) fn insert(&mut self, order: Order) {
        let price = order.price.expect("only limit orders rest in the book");
        self.index.insert(order.id, (order.side, price));
        match order.side {
            Side::Bid => &mut self.bids,
            Side::Ask => &mut self.asks,
        }
        .entry(price)
        .or_default()
        .push_back(order);
    }

    /// Cancel a resting order by id. Returns `true` if found and removed.
    pub fn cancel(&mut self, id: OrderId) -> bool {
        let Some((side, price)) = self.index.remove(&id) else {
            return false;
        };
        let levels = match side {
            Side::Bid => &mut self.bids,
            Side::Ask => &mut self.asks,
        };
        if let Some(queue) = levels.get_mut(&price) {
            queue.retain(|o| o.id != id);
            if queue.is_empty() {
                levels.remove(&price);
            }
        }
        true
    }

    /// Best (highest) bid price, or `None` if the bid side is empty.
    pub fn best_bid(&self) -> Option<Decimal> {
        self.bids.keys().next_back().copied()
    }

    /// Best (lowest) ask price, or `None` if the ask side is empty.
    pub fn best_ask(&self) -> Option<Decimal> {
        self.asks.keys().next().copied()
    }

    /// Total shares resting on the bid side.
    pub fn total_bid_depth(&self) -> u32 {
        self.bids
            .values()
            .flat_map(|q| q.iter())
            .map(|o| o.quantity)
            .sum()
    }

    /// Total shares resting on the ask side.
    pub fn total_ask_depth(&self) -> u32 {
        self.asks
            .values()
            .flat_map(|q| q.iter())
            .map(|o| o.quantity)
            .sum()
    }
}

impl Default for OrderBook {
    fn default() -> Self {
        Self::new()
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use rust_decimal_macros::dec;

    fn limit(book: &mut OrderBook, side: Side, price: Decimal, qty: u32) -> Order {
        Order {
            id: book.next_order_id(),
            player_id: PlayerId(1),
            side,
            price: Some(price),
            quantity: qty,
        }
    }

    #[test]
    fn empty_book_has_no_prices() {
        let book = OrderBook::new();
        assert!(book.best_bid().is_none());
        assert!(book.best_ask().is_none());
    }

    #[test]
    fn best_bid_is_highest_price() {
        let mut book = OrderBook::new();
        let o1 = limit(&mut book, Side::Bid, dec!(99), 10);
        book.insert(o1);
        let o2 = limit(&mut book, Side::Bid, dec!(100), 5);
        book.insert(o2);
        assert_eq!(book.best_bid(), Some(dec!(100)));
    }

    #[test]
    fn best_ask_is_lowest_price() {
        let mut book = OrderBook::new();
        let o1 = limit(&mut book, Side::Ask, dec!(102), 10);
        book.insert(o1);
        let o2 = limit(&mut book, Side::Ask, dec!(101), 5);
        book.insert(o2);
        assert_eq!(book.best_ask(), Some(dec!(101)));
    }

    #[test]
    fn cancel_removes_order_and_clears_level() {
        let mut book = OrderBook::new();
        let o = limit(&mut book, Side::Ask, dec!(105), 10);
        let id = o.id;
        book.insert(o);
        assert_eq!(book.best_ask(), Some(dec!(105)));
        assert!(book.cancel(id));
        assert_eq!(book.best_ask(), None);
        assert!(!book.cancel(id)); // second cancel is a no-op
    }

    #[test]
    fn cancel_unknown_id_returns_false() {
        let mut book = OrderBook::new();
        assert!(!book.cancel(OrderId(999)));
    }

    #[test]
    fn cancel_one_of_two_at_same_level_keeps_level() {
        let mut book = OrderBook::new();
        let o1 = limit(&mut book, Side::Bid, dec!(100), 5);
        let id1 = o1.id;
        book.insert(o1);
        let o2 = limit(&mut book, Side::Bid, dec!(100), 3);
        book.insert(o2);
        assert!(book.cancel(id1));
        assert_eq!(book.best_bid(), Some(dec!(100)));
        assert_eq!(book.total_bid_depth(), 3);
    }

    #[test]
    fn total_depth_aggregates_all_resting_shares() {
        let mut book = OrderBook::new();
        for qty in [5u32, 3, 7] {
            let o = limit(&mut book, Side::Bid, dec!(100), qty);
            book.insert(o);
        }
        assert_eq!(book.total_bid_depth(), 15);
        assert_eq!(book.total_ask_depth(), 0);
    }

    #[test]
    fn best_prices_reflect_book_extremes() {
        let mut book = OrderBook::new();
        for price in [dec!(98), dec!(100), dec!(99)] {
            let o = limit(&mut book, Side::Bid, price, 1);
            book.insert(o);
        }
        for price in [dec!(103), dec!(101), dec!(102)] {
            let o = limit(&mut book, Side::Ask, price, 1);
            book.insert(o);
        }
        assert_eq!(book.best_bid(), Some(dec!(100)));
        assert_eq!(book.best_ask(), Some(dec!(101)));
    }
}
