// Remove this once all modules are wired in.
#![allow(dead_code)]

mod config;
mod market;

use std::time::Duration;

use axum::{
    Router,
    extract::{
        WebSocketUpgrade,
        ws::{Message, WebSocket},
    },
    response::IntoResponse,
    routing::get,
};
use tower_http::services::ServeDir;
use tracing_subscriber::EnvFilter;

#[tokio::main]
async fn main() {
    let cfg = config::Config::from_env();

    tracing_subscriber::fmt()
        .with_env_filter(
            EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| EnvFilter::new("info")),
        )
        .init();

    let app = Router::new()
        .route("/ws", get(ws_handler))
        .fallback_service(ServeDir::new(&cfg.static_dir));

    let listener = tokio::net::TcpListener::bind(&cfg.bind_addr)
        .await
        .expect("failed to bind");

    tracing::info!("listening on {}", cfg.bind_addr);
    tracing::info!("static files from {}", cfg.static_dir);

    axum::serve(listener, app).await.expect("server error");
}

async fn ws_handler(ws: WebSocketUpgrade) -> impl IntoResponse {
    ws.on_upgrade(handle_socket)
}

/// Stub socket handler — accepts connections and keeps them alive with pings.
/// Game logic will be wired in during later build steps.
///
/// Cloudflare Free plan silently drops WebSocket connections after 100 s of
/// inactivity, so we ping every 30 s unconditionally.
async fn handle_socket(mut socket: WebSocket) {
    let mut ping_interval = tokio::time::interval(Duration::from_secs(30));
    // Skip the immediate first tick so we don't ping before the client is ready.
    ping_interval.set_missed_tick_behavior(tokio::time::MissedTickBehavior::Delay);
    ping_interval.tick().await;

    loop {
        tokio::select! {
            _ = ping_interval.tick() => {
                if socket.send(Message::Ping(Default::default())).await.is_err() {
                    return;
                }
            }
            msg = socket.recv() => {
                match msg {
                    Some(Ok(_)) => {} // will dispatch to game logic in later steps
                    _ => return,
                }
            }
        }
    }
}
