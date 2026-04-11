mod agents;
mod config;
mod error;
mod llm;
mod market;
mod net;
mod sim;

use axum::{
    extract::{State, WebSocketUpgrade},
    response::IntoResponse,
    routing::get,
    Router,
};
use tokio::sync::mpsc;
use tower_http::services::{ServeDir, ServeFile};
use tracing_subscriber::EnvFilter;

use net::gateway::AppState;
use sim::world::World;

/// Human player IDs start at 1001; abstract agents use 1–100, named NPCs 101–107.
const PLAYER_ID_START: u64 = 1001;

#[tokio::main]
async fn main() {
    let cfg = config::Config::from_env();

    tracing_subscriber::fmt()
        .with_env_filter(
            EnvFilter::try_from_default_env().unwrap_or_else(|_| EnvFilter::new("info")),
        )
        .init();

    // Channel: WS handlers → sim loop.
    let (action_tx, action_rx) = mpsc::channel(256);

    let state = AppState::new(256, action_tx, PLAYER_ID_START);

    let mut world = World::new(cfg.game_seed);
    world.cycle_duration_secs = cfg.cycle_secs;
    tokio::spawn(sim::run_loop(
        world,
        state.broadcast_tx.clone(),
        state.snapshot.clone(),
        action_rx,
        cfg.anthropic_api_key.clone(),
        cfg.game_seed,
    ));

    // Serve the SPA: any path that isn't /ws and isn't a static asset gets
    // index.html so the client-side router handles /create, /join, /1234, etc.
    let spa_fallback = ServeFile::new(format!("{}/index.html", cfg.static_dir));
    let app = Router::new()
        .route("/ws", get(ws_handler))
        .fallback_service(ServeDir::new(&cfg.static_dir).fallback(spa_fallback))
        .with_state(state);

    let listener = tokio::net::TcpListener::bind(&cfg.bind_addr)
        .await
        .expect("failed to bind");

    tracing::info!("listening on {}", cfg.bind_addr);
    tracing::info!("static files from {}", cfg.static_dir);

    axum::serve(listener, app).await.expect("server error");
}

async fn ws_handler(ws: WebSocketUpgrade, State(state): State<AppState>) -> impl IntoResponse {
    ws.on_upgrade(move |socket| net::gateway::handle_socket(socket, state))
}
