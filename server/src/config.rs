/// Runtime configuration read from environment variables.
/// All values have sensible defaults so the server starts without a .env file.
pub struct Config {
    /// Address to bind the HTTP/WebSocket server, e.g. "0.0.0.0:8080".
    pub bind_addr: String,
    /// Directory from which to serve the compiled React app.
    pub static_dir: String,
    /// Anthropic API key for narrator + debrief.
    pub anthropic_api_key: String,
    /// RNG seed — same seed + same actions = identical game replay.
    pub game_seed: u64,
    /// Decision phase length in seconds. Override with CYCLE_SECS env var.
    pub cycle_secs: u64,
}

impl Config {
    pub fn from_env() -> Self {
        Self {
            bind_addr: std::env::var("BIND_ADDR").unwrap_or_else(|_| "0.0.0.0:8080".to_string()),
            static_dir: std::env::var("STATIC_DIR").unwrap_or_else(|_| "./static".to_string()),
            anthropic_api_key: std::env::var("ANTHROPIC_API_KEY").unwrap_or_default(),
            game_seed: std::env::var("GAME_SEED")
                .ok()
                .and_then(|s| s.parse().ok())
                .unwrap_or(42),
            cycle_secs: std::env::var("CYCLE_SECS")
                .ok()
                .and_then(|s| s.parse().ok())
                .unwrap_or(8),
        }
    }
}
