mod agents;
mod config;
mod error;
mod llm;
mod market;
mod net;
mod sim;

use axum::{
    extract::{State, WebSocketUpgrade},
    http::{header, HeaderMap, StatusCode},
    response::{IntoResponse, Json},
    routing::{get, post},
    Router,
};
use serde::{Deserialize, Serialize};
use tokio::sync::mpsc;
use tower_http::services::{ServeDir, ServeFile};
use tracing_subscriber::EnvFilter;

use net::gateway::AppState;
use net::sessions::SessionData;
use sim::world::World;

const PLAYER_ID_START: u64 = 2001;

#[tokio::main]
async fn main() {
    let cfg = config::Config::from_env();

    tracing_subscriber::fmt()
        .with_env_filter(
            EnvFilter::try_from_default_env().unwrap_or_else(|_| EnvFilter::new("info")),
        )
        .init();

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
        state.personal_senders.clone(),
        state.host_senders.clone(),
    ));

    let spa_fallback = ServeFile::new(format!("{}/index.html", cfg.static_dir));
    let app = Router::new()
        .route("/ws", get(ws_handler))
        .route("/api/lobby", get(api_lobby))
        .route("/api/session", get(api_session_get))
        .route("/api/session/host", post(api_session_host))
        .fallback_service(ServeDir::new(&cfg.static_dir).fallback(spa_fallback))
        .with_state(state);

    let listener = tokio::net::TcpListener::bind(&cfg.bind_addr)
        .await
        .expect("failed to bind");

    tracing::info!("listening on {}", cfg.bind_addr);
    tracing::info!("static files from {}", cfg.static_dir);

    axum::serve(listener, app).await.expect("server error");
}

// ── WebSocket handler ──────────────────────────────────────────────────────────

async fn ws_handler(
    ws: WebSocketUpgrade,
    headers: HeaderMap,
    State(state): State<AppState>,
) -> impl IntoResponse {
    // Parse or create session cookie.
    let cookie_str = headers
        .get("cookie")
        .and_then(|v| v.to_str().ok())
        .unwrap_or("");

    let session_id = match net::sessions::SessionStore::parse_cookie(cookie_str) {
        Some(id) if state.session_store.get(id).is_some() => id,
        _ => state.session_store.create(SessionData::Anonymous),
    };

    let mut response = ws
        .on_upgrade(move |socket| net::gateway::handle_socket(socket, state, Some(session_id)))
        .into_response();

    // Set or refresh session cookie (7 days).
    let cookie = format!(
        "aura_session={}; Path=/; SameSite=Lax; Max-Age=604800",
        session_id
    );
    if let Ok(v) = cookie.parse() {
        response.headers_mut().insert(header::SET_COOKIE, v);
    }

    response
}

// ── /api/lobby ─────────────────────────────────────────────────────────────────

#[derive(Serialize)]
struct LobbyResponse {
    phase: String,
    player_count: usize,
    game_code: Option<String>,
    is_public: bool,
}

async fn api_lobby(State(state): State<AppState>) -> Json<LobbyResponse> {
    let (phase, player_count) = state.snapshot_info();
    let game_code = state.game_code.lock().unwrap().clone();
    Json(LobbyResponse {
        phase,
        player_count,
        game_code,
        is_public: true,
    })
}

// ── /api/session ───────────────────────────────────────────────────────────────

#[derive(Serialize)]
struct SessionResponse {
    #[serde(rename = "type")]
    session_type: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    game_code: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    player_id: Option<u64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    name: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    role: Option<String>,
    /// Session UUID echoed back so client can use it as the reconnect nonce.
    #[serde(skip_serializing_if = "Option::is_none")]
    session_id: Option<String>,
}

async fn api_session_get(
    headers: HeaderMap,
    State(state): State<AppState>,
) -> Json<SessionResponse> {
    let cookie_str = headers
        .get("cookie")
        .and_then(|v| v.to_str().ok())
        .unwrap_or("");
    let sid = net::sessions::SessionStore::parse_cookie(cookie_str);

    let data = sid.and_then(|id| state.session_store.get(id));
    match data {
        Some(SessionData::Host { game_code }) => Json(SessionResponse {
            session_type: "host".into(),
            game_code,
            player_id: None,
            name: None,
            role: None,
            session_id: sid.map(|id| id.to_string()),
        }),
        Some(SessionData::Player {
            player_id,
            name,
            role,
        }) => Json(SessionResponse {
            session_type: "player".into(),
            game_code: None,
            player_id: Some(player_id),
            name: Some(name),
            role: Some(role),
            session_id: sid.map(|id| id.to_string()),
        }),
        _ => Json(SessionResponse {
            session_type: "none".into(),
            game_code: None,
            player_id: None,
            name: None,
            role: None,
            session_id: None,
        }),
    }
}

// ── /api/session/host (POST) ───────────────────────────────────────────────────

#[derive(Deserialize)]
struct HostSessionRequest {
    game_code: Option<String>,
}

async fn api_session_host(
    headers: HeaderMap,
    State(state): State<AppState>,
    Json(body): Json<HostSessionRequest>,
) -> impl IntoResponse {
    // Store game_code in AppState so /api/lobby can expose it.
    if let Some(ref code) = body.game_code {
        *state.game_code.lock().unwrap() = Some(code.clone());
    }

    // Reuse existing session if present, otherwise create one.
    let cookie_str = headers
        .get("cookie")
        .and_then(|v| v.to_str().ok())
        .unwrap_or("");
    let session_id = match net::sessions::SessionStore::parse_cookie(cookie_str) {
        Some(id) => {
            state.session_store.set(
                id,
                SessionData::Host {
                    game_code: body.game_code,
                },
            );
            id
        }
        None => state.session_store.create(SessionData::Host {
            game_code: body.game_code,
        }),
    };

    let cookie = format!(
        "aura_session={}; Path=/; SameSite=Lax; Max-Age=604800",
        session_id
    );
    (
        StatusCode::OK,
        [(header::SET_COOKIE, cookie)],
        Json(serde_json::json!({ "ok": true })),
    )
}
