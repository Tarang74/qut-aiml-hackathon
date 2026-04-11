use std::collections::{BTreeMap, HashMap, VecDeque};

use rust_decimal::Decimal;

/// Unique order identifier, monotonically increasing within a session.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, PartialOrd, Ord)]
pub struct OrderId(pub u64);

/// Identifies any market participant — human player, named NPC, or abstract trader.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub struct PlayerId(pub u64);

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
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

/// Aggregated view of one price level for display.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct PriceLevel {
    pub price: Decimal,
    pub quantity: u32,
}

/// Top-of-book snapshot sent to the client HUD.
#[derive(Debug, Clone)]
pub struct BookDepth {
    /// Best bid first (highest price).
    pub bids: Vec<PriceLevel>,
    /// Best ask first (lowest price).
    pub asks: Vec<PriceLevel>,
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

    /// Bid-ask spread, or `None` if either side is empty.
    pub fn spread(&self) -> Option<Decimal> {
        Some(self.best_ask()? - self.best_bid()?)
    }

    /// Snapshot of the top `n` price levels on each side.
    pub fn depth(&self, n: usize) -> BookDepth {
        BookDepth {
            bids: self
                .bids
                .iter()
                .rev()
                .take(n)
                .map(|(&price, q)| PriceLevel {
                    price,
                    quantity: q.iter().map(|o| o.quantity).sum(),
                })
                .collect(),
            asks: self
                .asks
                .iter()
                .take(n)
                .map(|(&price, q)| PriceLevel {
                    price,
                    quantity: q.iter().map(|o| o.quantity).sum(),
                })
                .collect(),
        }
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
        assert!(book.spread().is_none());
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
    fn spread_is_ask_minus_bid() {
        let mut book = OrderBook::new();
        let bid = limit(&mut book, Side::Bid, dec!(100), 10);
        book.insert(bid);
        let ask = limit(&mut book, Side::Ask, dec!(102), 10);
        book.insert(ask);
        assert_eq!(book.spread(), Some(dec!(2)));
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
        assert_eq!(book.depth(1).bids[0].quantity, 3);
    }

    #[test]
    fn depth_aggregates_quantity_at_same_price() {
        let mut book = OrderBook::new();
        for qty in [5u32, 3, 7] {
            let o = limit(&mut book, Side::Bid, dec!(100), qty);
            book.insert(o);
        }
        let depth = book.depth(5);
        assert_eq!(depth.bids.len(), 1);
        assert_eq!(depth.bids[0], PriceLevel { price: dec!(100), quantity: 15 });
    }

    #[test]
    fn depth_bids_descending_asks_ascending() {
        let mut book = OrderBook::new();
        for price in [dec!(98), dec!(100), dec!(99)] {
            let o = limit(&mut book, Side::Bid, price, 1);
            book.insert(o);
        }
        for price in [dec!(103), dec!(101), dec!(102)] {
            let o = limit(&mut book, Side::Ask, price, 1);
            book.insert(o);
        }
        let depth = book.depth(3);
        let bid_prices: Vec<_> = depth.bids.iter().map(|l| l.price).collect();
        let ask_prices: Vec<_> = depth.asks.iter().map(|l| l.price).collect();
        assert_eq!(bid_prices, vec![dec!(100), dec!(99), dec!(98)]);
        assert_eq!(ask_prices, vec![dec!(101), dec!(102), dec!(103)]);
    }
}
