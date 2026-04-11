use rust_decimal::prelude::{FromPrimitive, ToPrimitive};
use rust_decimal::Decimal;
use serde::{Deserialize, Serialize};

use super::book::PlayerId;

/// How many game cycles equal one "year" for Black-Scholes time.
pub const CYCLES_PER_YEAR: f64 = 10.0;
/// Assumed risk-free rate (annual).
pub const RISK_FREE_RATE: f64 = 0.05;

#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum OptionType {
    Call,
    Put,
}

/// A single option position held by a player.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OptionPosition {
    pub id: u64,
    pub option_type: OptionType,
    pub strike: Decimal,
    /// Absolute game cycle at which this option expires.
    pub expiry_cycle: u64,
    pub quantity: u32,
    /// `true` = long (bought), `false` = short (written).
    pub long: bool,
    /// Premium paid (long) or received (short) at inception.
    pub premium: Decimal,
    /// Counter-party — the writer or buyer on the other side. Used for debrief.
    pub counter_party: Option<PlayerId>,
}

/// Black-Scholes price for a European option.
///
/// `cycles_to_expiry` is in game cycles; internally converted to years.
pub fn bs_price(
    option_type: OptionType,
    spot: f64,
    strike: f64,
    cycles_to_expiry: f64,
    vol: f64,
) -> f64 {
    let t = (cycles_to_expiry / CYCLES_PER_YEAR).max(1e-6);
    let r = RISK_FREE_RATE;

    if t <= 0.0 {
        return match option_type {
            OptionType::Call => (spot - strike).max(0.0),
            OptionType::Put => (strike - spot).max(0.0),
        };
    }

    let d1 = ((spot / strike).ln() + (r + 0.5 * vol * vol) * t) / (vol * t.sqrt());
    let d2 = d1 - vol * t.sqrt();
    let pv_k = strike * (-r * t).exp();

    match option_type {
        OptionType::Call => spot * norm_cdf(d1) - pv_k * norm_cdf(d2),
        OptionType::Put => pv_k * norm_cdf(-d2) - spot * norm_cdf(-d1),
    }
}

/// Mark-to-market value of one `OptionPosition` at current price.
pub fn option_mtm(pos: &OptionPosition, spot: f64, current_cycle: u64, vol: f64) -> Decimal {
    let cycles_left = (pos.expiry_cycle as f64 - current_cycle as f64).max(0.0);
    let raw = bs_price(
        pos.option_type,
        spot,
        pos.strike.to_f64().unwrap_or(spot),
        cycles_left,
        vol,
    );
    let value = Decimal::from_f64(raw * pos.quantity as f64).unwrap_or_default();
    if pos.long {
        value
    } else {
        -value
    }
}

/// Abramowitz & Stegun polynomial approximation of the standard normal CDF.
/// Error < 7.5 × 10⁻⁸ — good enough for options pricing.
fn norm_cdf(x: f64) -> f64 {
    if x >= 0.0 {
        let t = 1.0 / (1.0 + 0.2316419 * x);
        let poly = t
            * (0.319_381_53
                + t * (-0.356_563_782
                    + t * (1.781_477_937 + t * (-1.821_255_978 + t * 1.330_274_429))));
        1.0 - std::f64::consts::FRAC_1_SQRT_2
            * std::f64::consts::FRAC_2_SQRT_PI.sqrt()
            * (-x * x / 2.0).exp()
            * poly
    } else {
        1.0 - norm_cdf(-x)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn atm_call_equals_put_roughly() {
        // Put-call parity: C - P = S - K·e^{-rT} ≈ 0 at-the-money
        let c = bs_price(OptionType::Call, 100.0, 100.0, 5.0, 0.3);
        let p = bs_price(OptionType::Put, 100.0, 100.0, 5.0, 0.3);
        let parity = c - p - (100.0 - 100.0 * (-RISK_FREE_RATE * 5.0 / CYCLES_PER_YEAR).exp());
        assert!(parity.abs() < 0.01, "parity violation: {parity}");
    }

    #[test]
    fn deep_itm_call_approaches_intrinsic() {
        let c = bs_price(OptionType::Call, 150.0, 100.0, 0.001, 0.3);
        assert!((c - 50.0).abs() < 1.0, "deep ITM call: {c}");
    }

    #[test]
    fn expired_option_returns_intrinsic() {
        let c = bs_price(OptionType::Call, 110.0, 100.0, 0.0, 0.3);
        assert!((c - 10.0).abs() < 0.01);
        let p = bs_price(OptionType::Put, 90.0, 100.0, 0.0, 0.3);
        assert!((p - 10.0).abs() < 0.01);
    }

    #[test]
    fn otm_option_positive_value_before_expiry() {
        let c = bs_price(OptionType::Call, 80.0, 100.0, 3.0, 0.3);
        assert!(c > 0.0, "OTM call should have time value: {c}");
    }
}
