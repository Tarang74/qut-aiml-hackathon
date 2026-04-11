use rust_decimal::Decimal;

use super::book::{Order, OrderBook, OrderId, PlayerId, Side};

/// A completed trade between a resting maker and an incoming taker.
#[derive(Debug, Clone)]
pub struct Fill {
    pub maker_player_id: PlayerId,
    pub taker_player_id: PlayerId,
    /// Execution price — always the resting maker's limit price.
    pub price: Decimal,
    pub quantity: u32,
}

/// Submit `incoming` to `book` using price-time priority.
///
/// - **Limit orders**: cross against resting orders where price allows;
///   rest any unfilled remainder.
/// - **Market orders**: cross at any available price; drop any unfilled
///   remainder (never rests).
///
/// Returns every fill produced. The book is mutated in place.
pub fn match_order(book: &mut OrderBook, mut incoming: Order) -> Vec<Fill> {
    let mut fills = Vec::new();

    match incoming.side {
        Side::Bid => fill_bid(book, &mut incoming, &mut fills),
        Side::Ask => fill_ask(book, &mut incoming, &mut fills),
    }

    // Rest unfilled limit order remainder.
    if incoming.price.is_some() && incoming.quantity > 0 {
        book.insert(incoming);
    }

    fills
}

/// Match an incoming bid against resting asks (lowest ask first).
fn fill_bid(book: &mut OrderBook, incoming: &mut Order, fills: &mut Vec<Fill>) {
    let mut dead_ids: Vec<OrderId> = Vec::new();
    let mut empty_levels: Vec<Decimal> = Vec::new();

    // book.asks is ascending — iterate naturally for best (lowest) ask first.
    'levels: for (&ask_price, queue) in book.asks.iter_mut() {
        if let Some(limit) = incoming.price {
            if limit < ask_price {
                break 'levels;
            }
        }

        while let Some(maker) = queue.front_mut() {
            let qty = incoming.quantity.min(maker.quantity);
            fills.push(Fill {
                maker_player_id: maker.player_id,
                taker_player_id: incoming.player_id,
                price: ask_price,
                quantity: qty,
            });
            maker.quantity -= qty;
            incoming.quantity -= qty;

            if maker.quantity == 0 {
                dead_ids.push(queue.pop_front().unwrap().id);
            }
            if incoming.quantity == 0 {
                break;
            }
        }

        if queue.is_empty() {
            empty_levels.push(ask_price);
        }
        if incoming.quantity == 0 {
            break 'levels;
        }
    }

    for p in empty_levels {
        book.asks.remove(&p);
    }
    for id in dead_ids {
        book.index.remove(&id);
    }
}

/// Match an incoming ask against resting bids (highest bid first).
fn fill_ask(book: &mut OrderBook, incoming: &mut Order, fills: &mut Vec<Fill>) {
    let mut dead_ids: Vec<OrderId> = Vec::new();
    let mut empty_levels: Vec<Decimal> = Vec::new();

    // Collect prices descending first so we can mutably borrow queues per level.
    let bid_prices: Vec<Decimal> = book.bids.keys().rev().copied().collect();

    for bid_price in bid_prices {
        if let Some(limit) = incoming.price {
            if limit > bid_price {
                break;
            }
        }

        let Some(queue) = book.bids.get_mut(&bid_price) else {
            continue;
        };

        while let Some(maker) = queue.front_mut() {
            let qty = incoming.quantity.min(maker.quantity);
            fills.push(Fill {
                maker_player_id: maker.player_id,
                taker_player_id: incoming.player_id,
                price: bid_price,
                quantity: qty,
            });
            maker.quantity -= qty;
            incoming.quantity -= qty;

            if maker.quantity == 0 {
                dead_ids.push(queue.pop_front().unwrap().id);
            }
            if incoming.quantity == 0 {
                break;
            }
        }

        if queue.is_empty() {
            empty_levels.push(bid_price);
        }
        if incoming.quantity == 0 {
            break;
        }
    }

    for p in empty_levels {
        book.bids.remove(&p);
    }
    for id in dead_ids {
        book.index.remove(&id);
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::market::book::OrderBook;
    use rust_decimal_macros::dec;

    fn limit(book: &mut OrderBook, player: u64, side: Side, price: Decimal, qty: u32) -> Order {
        Order {
            id: book.next_order_id(),
            player_id: PlayerId(player),
            side,
            price: Some(price),
            quantity: qty,
            placed_at_cycle: 0,
        }
    }

    fn market(book: &mut OrderBook, player: u64, side: Side, qty: u32) -> Order {
        Order {
            id: book.next_order_id(),
            player_id: PlayerId(player),
            side,
            price: None,
            quantity: qty,
            placed_at_cycle: 0,
        }
    }

    #[test]
    fn no_cross_orders_rest() {
        let mut book = OrderBook::new();
        let bid = limit(&mut book, 1, Side::Bid, dec!(99), 10);
        let ask = limit(&mut book, 2, Side::Ask, dec!(101), 10);
        assert!(match_order(&mut book, bid).is_empty());
        assert!(match_order(&mut book, ask).is_empty());
        assert_eq!(book.best_bid(), Some(dec!(99)));
        assert_eq!(book.best_ask(), Some(dec!(101)));
    }

    #[test]
    fn exact_fill_clears_both_sides() {
        let mut book = OrderBook::new();
        let ask = limit(&mut book, 1, Side::Ask, dec!(100), 10);
        match_order(&mut book, ask);
        let bid = limit(&mut book, 2, Side::Bid, dec!(100), 10);
        let fills = match_order(&mut book, bid);
        assert_eq!(fills.len(), 1);
        assert_eq!(fills[0].price, dec!(100));
        assert_eq!(fills[0].quantity, 10);
        assert!(book.best_ask().is_none());
        assert!(book.best_bid().is_none());
    }

    #[test]
    fn partial_fill_taker_rests_remainder() {
        let mut book = OrderBook::new();
        let ask = limit(&mut book, 1, Side::Ask, dec!(100), 5);
        match_order(&mut book, ask);
        let bid = limit(&mut book, 2, Side::Bid, dec!(100), 10);
        let fills = match_order(&mut book, bid);
        assert_eq!(fills[0].quantity, 5);
        // Remaining 5 of the bid rests
        assert_eq!(book.best_bid(), Some(dec!(100)));
        assert!(book.best_ask().is_none());
    }

    #[test]
    fn partial_fill_maker_keeps_remainder() {
        let mut book = OrderBook::new();
        let ask = limit(&mut book, 1, Side::Ask, dec!(100), 10);
        match_order(&mut book, ask);
        let bid = limit(&mut book, 2, Side::Bid, dec!(100), 4);
        let fills = match_order(&mut book, bid);
        assert_eq!(fills[0].quantity, 4);
        // 6 units of the ask remain
        assert_eq!(book.best_ask(), Some(dec!(100)));
        assert_eq!(book.total_ask_depth(), 6);
    }

    #[test]
    fn bid_sweeps_multiple_ask_levels() {
        let mut book = OrderBook::new();
        for (price, qty) in [(dec!(100), 5u32), (dec!(101), 5), (dec!(102), 5)] {
            let o = limit(&mut book, 1, Side::Ask, price, qty);
            match_order(&mut book, o);
        }
        let bid = limit(&mut book, 2, Side::Bid, dec!(102), 12);
        let fills = match_order(&mut book, bid);
        assert_eq!(fills.len(), 3);
        assert_eq!(fills[0].price, dec!(100));
        assert_eq!(fills[0].quantity, 5);
        assert_eq!(fills[1].price, dec!(101));
        assert_eq!(fills[1].quantity, 5);
        assert_eq!(fills[2].price, dec!(102));
        assert_eq!(fills[2].quantity, 2);
        let total: u32 = fills.iter().map(|f| f.quantity).sum();
        assert_eq!(total, 12);
        // 3 shares left at 102
        assert_eq!(book.best_ask(), Some(dec!(102)));
    }

    #[test]
    fn ask_sweeps_multiple_bid_levels() {
        let mut book = OrderBook::new();
        for (price, qty) in [(dec!(100), 5u32), (dec!(99), 5), (dec!(98), 5)] {
            let o = limit(&mut book, 1, Side::Bid, price, qty);
            match_order(&mut book, o);
        }
        let ask = limit(&mut book, 2, Side::Ask, dec!(98), 12);
        let fills = match_order(&mut book, ask);
        assert_eq!(fills.len(), 3);
        assert_eq!(fills[0].price, dec!(100)); // best bid filled first
        assert_eq!(fills[1].price, dec!(99));
        assert_eq!(fills[2].price, dec!(98));
        let total: u32 = fills.iter().map(|f| f.quantity).sum();
        assert_eq!(total, 12);
    }

    #[test]
    fn market_buy_fills_at_any_price() {
        let mut book = OrderBook::new();
        let ask = limit(&mut book, 1, Side::Ask, dec!(105), 10);
        match_order(&mut book, ask);
        let bid = market(&mut book, 2, Side::Bid, 10);
        let fills = match_order(&mut book, bid);
        assert_eq!(fills.len(), 1);
        assert_eq!(fills[0].price, dec!(105));
        assert_eq!(fills[0].quantity, 10);
    }

    #[test]
    fn market_order_drops_unfilled_remainder() {
        let mut book = OrderBook::new();
        let ask = limit(&mut book, 1, Side::Ask, dec!(100), 3);
        match_order(&mut book, ask);
        let bid = market(&mut book, 2, Side::Bid, 10);
        let fills = match_order(&mut book, bid);
        assert_eq!(fills[0].quantity, 3);
        // Market order remainder is NOT rested
        assert!(book.best_bid().is_none());
    }

    #[test]
    fn fifo_within_price_level() {
        let mut book = OrderBook::new();
        let a1 = limit(&mut book, 1, Side::Ask, dec!(100), 3);
        let a2 = limit(&mut book, 2, Side::Ask, dec!(100), 7);
        match_order(&mut book, a1);
        match_order(&mut book, a2);
        let bid = limit(&mut book, 3, Side::Bid, dec!(100), 5);
        let fills = match_order(&mut book, bid);
        // Player 1's order (first in queue) fills first
        assert_eq!(fills[0].maker_player_id, PlayerId(1));
        assert_eq!(fills[0].quantity, 3);
        // Then player 2's order partially fills
        assert_eq!(fills[1].maker_player_id, PlayerId(2));
        assert_eq!(fills[1].quantity, 2);
    }

    #[test]
    fn fill_executes_at_maker_price() {
        // Aggressive bid at 105 crosses ask at 100 — fills at 100 (maker price)
        let mut book = OrderBook::new();
        let ask = limit(&mut book, 1, Side::Ask, dec!(100), 5);
        match_order(&mut book, ask);
        let bid = limit(&mut book, 2, Side::Bid, dec!(105), 5);
        let fills = match_order(&mut book, bid);
        assert_eq!(fills[0].price, dec!(100));
    }

    #[test]
    fn bid_does_not_cross_above_limit() {
        let mut book = OrderBook::new();
        let ask = limit(&mut book, 1, Side::Ask, dec!(102), 10);
        match_order(&mut book, ask);
        // Bid at 101 cannot fill against ask at 102
        let bid = limit(&mut book, 2, Side::Bid, dec!(101), 10);
        let fills = match_order(&mut book, bid);
        assert!(fills.is_empty());
        assert_eq!(book.best_ask(), Some(dec!(102)));
        assert_eq!(book.best_bid(), Some(dec!(101)));
    }
}
