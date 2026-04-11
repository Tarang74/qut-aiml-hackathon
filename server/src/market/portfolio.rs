use rust_decimal::prelude::FromPrimitive;
use rust_decimal::Decimal;
use serde::Serialize;

use super::options::{option_mtm, OptionPosition};

/// A player's complete financial position.
#[derive(Debug, Clone, Serialize)]
pub struct Portfolio {
    pub cash: Decimal,
    /// Positive = long stock. Negative = short stock.
    pub shares: i64,
    pub options: Vec<OptionPosition>,
}

impl Portfolio {
    pub fn new(starting_cash: Decimal) -> Self {
        Self {
            cash: starting_cash,
            shares: 0,
            options: vec![],
        }
    }

    /// Total mark-to-market net worth including stock and options.
    pub fn net_worth(&self, spot: f64, current_cycle: u64, vol: f64) -> Decimal {
        let spot_d = Decimal::from_f64(spot).unwrap_or_default();
        let stock_value = Decimal::from(self.shares) * spot_d;
        let option_value: Decimal = self
            .options
            .iter()
            .map(|o| option_mtm(o, spot, current_cycle, vol))
            .sum();
        self.cash + stock_value + option_value
    }

    /// Add an option position (either long or short).
    pub fn add_option(&mut self, pos: OptionPosition) {
        if pos.long {
            self.cash -= pos.premium;
        } else {
            self.cash += pos.premium;
        }
        self.options.push(pos);
    }

    /// Settle all options that expire at `current_cycle`.
    /// Returns the net cash PnL from expiry.
    pub fn settle_expired_options(&mut self, current_cycle: u64, spot: Decimal) -> Decimal {
        let mut total_pnl = Decimal::ZERO;
        let (expired, live): (Vec<_>, Vec<_>) = self
            .options
            .drain(..)
            .partition(|o| o.expiry_cycle <= current_cycle);

        self.options = live;

        for opt in expired {
            let intrinsic = match opt.option_type {
                super::options::OptionType::Call => (spot - opt.strike).max(Decimal::ZERO),
                super::options::OptionType::Put => (opt.strike - spot).max(Decimal::ZERO),
            };
            let pnl = if opt.long {
                intrinsic * Decimal::from(opt.quantity) - opt.premium
            } else {
                opt.premium - intrinsic * Decimal::from(opt.quantity)
            };
            self.cash += pnl;
            total_pnl += pnl;
        }

        total_pnl
    }
}
