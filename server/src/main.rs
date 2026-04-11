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
use sim::actions::{AdminCommand, InboundMsg};
use sim::world::World;

const PLAYER_ID_START: u64 = 2001;
const COOKIE_MAX_AGE_SECS: u64 = 2 * 60 * 60;

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
    let ss = state.session_store.clone();
    let on_game_end = std::sync::Arc::new(move || {
        tracing::info!("Clearing player sessions");
        ss.clear_players();
    });
    tokio::spawn(sim::run_loop(
        world,
        state.broadcast_tx.clone(),
        state.snapshot.clone(),
        action_rx,
        cfg.anthropic_api_key.clone(),
        cfg.game_seed,
        state.personal_senders.clone(),
        state.host_senders.clone(),
        state.game_code.clone(),
        on_game_end,
    ));

    let spa_fallback = ServeFile::new(format!("{}/index.html", cfg.static_dir));
    let app = Router::new()
        .route("/ws", get(ws_handler))
        .route("/api/lobby", get(api_lobby))
        .route("/api/game/code", post(api_set_game_code))
        .route("/api/session", get(api_session_get))
        .route("/api/session/host", post(api_session_host))
        .route("/api/session/start", post(api_session_start))
        .route("/api/session/clear", post(api_session_clear))
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

    let server_cookie_ok =
        net::sessions::SessionStore::parse_cookie_value(cookie_str, "aura_server")
            .is_some_and(|v| v == *state.server_token);

    let session_id = match (
        server_cookie_ok,
        net::sessions::SessionStore::parse_cookie(cookie_str),
    ) {
        (true, Some(id)) if state.session_store.get(id).is_some() => id,
        _ => state.session_store.create(SessionData::Anonymous),
    };

    let server_token = state.server_token.clone();

    let mut response = ws
        .on_upgrade(move |socket| net::gateway::handle_socket(socket, state, Some(session_id)))
        .into_response();

    // Set or refresh session cookie (2 hours).
    let cookie = format!(
        "aura_session={}; Path=/; SameSite=Lax; Max-Age={}",
        session_id, COOKIE_MAX_AGE_SECS
    );
    let server_cookie = format!(
        "aura_server={}; Path=/; SameSite=Lax; Max-Age={}",
        server_token, COOKIE_MAX_AGE_SECS
    );
    if let Ok(v) = cookie.parse() {
        response.headers_mut().append(header::SET_COOKIE, v);
    }
    if let Ok(v) = server_cookie.parse() {
        response.headers_mut().append(header::SET_COOKIE, v);
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

// ── /api/game/code (POST) ──────────────────────────────────────────────────────
// Called by CreateScreen as soon as a code is generated, so /api/lobby reflects
// the code immediately — before the host clicks "Watch as Host".

#[derive(Deserialize)]
struct SetCodeRequest {
    game_code: String,
}

async fn api_set_game_code(
    State(state): State<AppState>,
    Json(body): Json<SetCodeRequest>,
) -> impl IntoResponse {
    tracing::info!("Game code registered: {}", body.game_code);
    *state.game_code.lock().unwrap() = Some(body.game_code);
    Json(serde_json::json!({ "ok": true }))
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
    let server_cookie_ok =
        net::sessions::SessionStore::parse_cookie_value(cookie_str, "aura_server")
            .is_some_and(|v| v == *state.server_token);
    let sid = if server_cookie_ok {
        net::sessions::SessionStore::parse_cookie(cookie_str)
    } else {
        None
    };

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
    // Reuse existing session if present, otherwise create one.
    let cookie_str = headers
        .get("cookie")
        .and_then(|v| v.to_str().ok())
        .unwrap_or("");
    let server_cookie_ok =
        net::sessions::SessionStore::parse_cookie_value(cookie_str, "aura_server")
            .is_some_and(|v| v == *state.server_token);
    let mut locked_to_existing = false;
    let mut effective_code = body.game_code.clone();

    let session_id = match (
        server_cookie_ok,
        net::sessions::SessionStore::parse_cookie(cookie_str),
    ) {
        (true, Some(id)) => {
            if let Some(SessionData::Host {
                game_code: Some(existing_code),
            }) = state.session_store.get(id)
            {
                effective_code = Some(existing_code);
                locked_to_existing = true;
            }
            state.session_store.set(
                id,
                SessionData::Host {
                    game_code: effective_code.clone(),
                },
            );
            id
        }
        _ => state.session_store.create(SessionData::Host {
            game_code: effective_code.clone(),
        }),
    };

    // Reflect the effective code (requested or locked existing) in /api/lobby.
    *state.game_code.lock().unwrap() = effective_code.clone();

    let cookie = format!(
        "aura_session={}; Path=/; SameSite=Lax; Max-Age={}",
        session_id, COOKIE_MAX_AGE_SECS
    );
    let server_cookie = format!(
        "aura_server={}; Path=/; SameSite=Lax; Max-Age={}",
        state.server_token, COOKIE_MAX_AGE_SECS
    );
    (
        StatusCode::OK,
        [
            (header::SET_COOKIE, cookie),
            (header::SET_COOKIE, server_cookie),
        ],
        Json(serde_json::json!({
            "ok": true,
            "game_code": effective_code,
            "locked_to_existing": locked_to_existing,
        })),
    )
}

// ── /api/session/clear (POST) ────────────────────────────────────────────────

async fn api_session_clear(headers: HeaderMap, State(state): State<AppState>) -> impl IntoResponse {
    let cookie_str = headers
        .get("cookie")
        .and_then(|v| v.to_str().ok())
        .unwrap_or("");

    let server_cookie_ok =
        net::sessions::SessionStore::parse_cookie_value(cookie_str, "aura_server")
            .is_some_and(|v| v == *state.server_token);

    if server_cookie_ok {
        if let Some(sid) = net::sessions::SessionStore::parse_cookie(cookie_str) {
            let was_host = matches!(state.session_store.get(sid), Some(SessionData::Host { .. }));
            state.session_store.remove(sid);
            if was_host {
                *state.game_code.lock().unwrap() = None;
            }
        }
    }

    let clear_session = "aura_session=; Path=/; SameSite=Lax; Max-Age=0";
    let clear_server = "aura_server=; Path=/; SameSite=Lax; Max-Age=0";
    (
        StatusCode::OK,
        [
            (header::SET_COOKIE, clear_session),
            (header::SET_COOKIE, clear_server),
        ],
        Json(serde_json::json!({ "ok": true })),
    )
}

// ── /api/session/start (POST) ────────────────────────────────────────────────

async fn api_session_start(headers: HeaderMap, State(state): State<AppState>) -> impl IntoResponse {
    let cookie_str = headers
        .get("cookie")
        .and_then(|v| v.to_str().ok())
        .unwrap_or("");

    let server_cookie_ok =
        net::sessions::SessionStore::parse_cookie_value(cookie_str, "aura_server")
            .is_some_and(|v| v == *state.server_token);

    if !server_cookie_ok {
        return (
            StatusCode::FORBIDDEN,
            Json(serde_json::json!({ "ok": false, "error": "invalid session" })),
        );
    }

    let is_host = net::sessions::SessionStore::parse_cookie(cookie_str)
        .and_then(|sid| state.session_store.get(sid))
        .is_some_and(|s| matches!(s, SessionData::Host { .. }));

    if !is_host {
        return (
            StatusCode::FORBIDDEN,
            Json(serde_json::json!({ "ok": false, "error": "host session required" })),
        );
    }

    let _ = state
        .action_tx
        .send(InboundMsg::Admin {
            command: AdminCommand::StartGame,
        })
        .await;

    (StatusCode::OK, Json(serde_json::json!({ "ok": true })))
}
