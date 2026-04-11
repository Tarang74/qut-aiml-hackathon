use thiserror::Error;

use crate::market::book::PlayerId;

#[derive(Debug, Error)]
pub enum GameError {
    #[error("player {0:?} not found")]
    PlayerNotFound(PlayerId),
    #[error("insufficient funds: need {need}, have {have}")]
    InsufficientFunds {
        need: rust_decimal::Decimal,
        have: rust_decimal::Decimal,
    },
    #[error("action not allowed: {0}")]
    ActionNotAllowed(String),
    #[error("target not found: {0}")]
    TargetNotFound(String),
    #[error("not enough aura: need {need:.1}, have {have:.1}")]
    InsufficientAura { need: f64, have: f64 },
    #[error("game is over")]
    GameOver,
}
