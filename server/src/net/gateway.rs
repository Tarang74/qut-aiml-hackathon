use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::{Arc, Mutex};
use std::time::Duration;

use axum::extract::ws::{Message, WebSocket};
use dashmap::DashMap;
use tokio::sync::{broadcast, mpsc};
use uuid::Uuid;

use super::protocol::{ClientMsg, ServerMsg};
use super::sessions::{SessionData, SessionStore};
use crate::market::book::PlayerId;
use crate::sim::actions::InboundMsg;

/// Shared application state injected into every WS handler and HTTP route.
#[derive(Clone)]
pub struct AppState {
    /// Broadcast channel — sim loop publishes pre-serialised JSON frames here.
    pub broadcast_tx: broadcast::Sender<Arc<String>>,
    /// Full state snapshot — sent to newly-connected clients for instant catch-up.
    pub snapshot: Arc<Mutex<Vec<Arc<String>>>>,
    /// Channel into the sim loop for joins, actions, and disconnects.
    pub action_tx: mpsc::Sender<InboundMsg>,
    /// Monotonically increasing player ID allocator.
    pub next_player_id: Arc<AtomicU64>,
    /// Session store: UUID cookie → identity.
    pub session_store: Arc<SessionStore>,
    /// Per-player targeted sender (for PlayerFeedback).
    pub personal_senders: Arc<DashMap<u64, mpsc::UnboundedSender<Arc<String>>>>,
    /// Host connection senders (for AdminSummary).
    pub host_senders: Arc<Mutex<Vec<mpsc::UnboundedSender<Arc<String>>>>>,
    /// Current game code (set by host via /api/session/host).
    pub game_code: Arc<Mutex<Option<String>>>,
    /// Unique token for this server process; used to invalidate stale cookies.
    pub server_token: Arc<String>,
}

impl AppState {
    pub fn new(
        capacity: usize,
        action_tx: mpsc::Sender<InboundMsg>,
        starting_player_id: u64,
    ) -> Self {
        let (broadcast_tx, _) = broadcast::channel(capacity);
        Self {
            broadcast_tx,
            snapshot: Arc::new(Mutex::new(Vec::new())),
            action_tx,
            next_player_id: Arc::new(AtomicU64::new(starting_player_id)),
            session_store: SessionStore::new(),
            personal_senders: Arc::new(DashMap::new()),
            host_senders: Arc::new(Mutex::new(Vec::new())),
            game_code: Arc::new(Mutex::new(None)),
            server_token: Arc::new(Uuid::new_v4().to_string()),
        }
    }

    pub fn allocate_player_id(&self) -> PlayerId {
        PlayerId(self.next_player_id.fetch_add(1, Ordering::Relaxed))
    }

    /// Parse the current snapshot to extract phase and player count (for /api/lobby).
    pub fn snapshot_info(&self) -> (String, usize) {
        let snap = self.snapshot.lock().unwrap();
        let mut phase = "lobby".to_string();
        let mut players = 0usize;
        for msg in snap.iter() {
            if let Ok(v) = serde_json::from_str::<serde_json::Value>(msg) {
                match v.get("type").and_then(|t| t.as_str()) {
                    Some("cycle_phase") => {
                        phase = v
                            .get("phase")
                            .and_then(|p| p.as_str())
                            .unwrap_or("lobby")
                            .to_string();
                    }
                    Some("player_state") => {
                        players += 1;
                    }
                    _ => {}
                }
            }
        }
        (phase, players)
    }
}

/// Handle one WebSocket connection.
pub async fn handle_socket(mut socket: WebSocket, state: AppState, session_id: Option<Uuid>) {
    // Subscribe before reading snapshot to avoid missing a tick.
    let mut rx = state.broadcast_tx.subscribe();

    // Personal targeted channel for this connection.
    let (personal_tx, mut personal_rx) = mpsc::unbounded_channel::<Arc<String>>();

    // Resolve identity from session.
    let session_data = session_id.and_then(|id| state.session_store.get(id));
    let mut is_host = matches!(&session_data, Some(SessionData::Host { .. }));

    let player_id = match &session_data {
        Some(SessionData::Player { player_id, .. }) => PlayerId(*player_id),
        _ => state.allocate_player_id(),
    };

    match &session_data {
        Some(SessionData::Host { game_code }) => {
            tracing::info!(
                session_id = ?session_id,
                game_code = ?game_code,
                "ws connected (host session)"
            );
        }
        Some(SessionData::Player {
            player_id,
            name,
            role,
        }) => {
            tracing::info!(
                session_id = ?session_id,
                player_id = *player_id,
                name = %name,
                role = %role,
                "ws connected (player session)"
            );
        }
        _ => {
            tracing::info!(
                session_id = ?session_id,
                allocated_player_id = player_id.0,
                "ws connected (anonymous session)"
            );
        }
    }

    // Register targeted sender.
    if is_host {
        state.host_senders.lock().unwrap().push(personal_tx.clone());
    } else {
        state
            .personal_senders
            .insert(player_id.0, personal_tx.clone());
    }

    // Send the full state snapshot immediately.
    let msgs = state.snapshot.lock().unwrap().clone();
    for msg in &msgs {
        if socket
            .send(Message::Text(msg.as_str().into()))
            .await
            .is_err()
        {
            deregister(&state, player_id, is_host);
            return;
        }
    }

    let mut ping_interval = tokio::time::interval(Duration::from_secs(30));
    ping_interval.set_missed_tick_behavior(tokio::time::MissedTickBehavior::Delay);
    ping_interval.tick().await;

    loop {
        tokio::select! {
            // Forward broadcast ticks from the sim.
            result = rx.recv() => {
                match result {
                    Ok(msg) => {
                        if socket.send(Message::Text(msg.as_str().into())).await.is_err() {
                            break;
                        }
                    }
                    Err(broadcast::error::RecvError::Lagged(_)) => {}
                    Err(broadcast::error::RecvError::Closed) => break,
                }
            }
            // Targeted messages (feedback, admin summary).
            msg = personal_rx.recv() => {
                if let Some(msg) = msg {
                    if socket.send(Message::Text(msg.as_str().into())).await.is_err() {
                        break;
                    }
                }
            }
            // Cloudflare keepalive.
            _ = ping_interval.tick() => {
                if socket.send(Message::Ping(Default::default())).await.is_err() {
                    break;
                }
            }
            // Receive from client.
            msg = socket.recv() => {
                match msg {
                    Some(Ok(Message::Text(text))) => {
                        match serde_json::from_str::<ClientMsg>(&text) {
                            Ok(ClientMsg::ClaimHost) => {
                                let fresh = session_id.and_then(|id| state.session_store.get(id));
                                if !is_host && matches!(fresh, Some(SessionData::Host { .. })) {
                                    state.personal_senders.remove(&player_id.0);
                                    state.host_senders.lock().unwrap().push(personal_tx.clone());
                                    is_host = true;
                                    tracing::info!(session_id = ?session_id, "ws upgraded to host");
                                }
                            }
                            Ok(client_msg) => {
                                let is_leave = matches!(client_msg, ClientMsg::Leave);
                                handle_client_msg(
                                    client_msg,
                                    player_id,
                                    &state,
                                    session_id,
                                    is_host,
                                    &mut socket,
                                )
                                .await;
                                if is_leave {
                                    break;
                                }
                            }
                            Err(e) => {
                                let err = serde_json::to_string(&ServerMsg::Error {
                                    message: format!("parse error: {e}"),
                                })
                                .unwrap_or_default();
                                let _ = socket.send(Message::Text(err.into())).await;
                            }
                        }
                    }
                    Some(Ok(Message::Close(_))) | None => break,
                    Some(Ok(_)) | Some(Err(_)) => {}
                }
            }
        }
    }

    // Drop personal_rx so is_closed() becomes true on retained senders.
    drop(personal_rx);
    deregister(&state, player_id, is_host);

    tracing::info!(
        session_id = ?session_id,
        player_id = player_id.0,
        is_host,
        "ws disconnected"
    );

    // Notify sim of disconnect — player stays in world for reconnect.
    let _ = state
        .action_tx
        .send(InboundMsg::Disconnect { player_id })
        .await;
}

/// Remove this connection's sender from the appropriate registry.
fn deregister(state: &AppState, player_id: PlayerId, is_host: bool) {
    if is_host {
        state
            .host_senders
            .lock()
            .unwrap()
            .retain(|s| !s.is_closed());
    } else {
        state.personal_senders.remove(&player_id.0);
    }
}

async fn handle_client_msg(
    msg: ClientMsg,
    player_id: PlayerId,
    state: &AppState,
    session_id: Option<Uuid>,
    is_host: bool,
    socket: &mut WebSocket,
) {
    let inbound = match msg {
        ClientMsg::Join {
            name,
            role,
            client_nonce,
            game_code,
        } => {
            let expected_code = state.game_code.lock().unwrap().clone();
            let valid_code = matches!(expected_code.as_ref(), Some(code) if code == &game_code);
            if !valid_code {
                tracing::warn!(
                    session_id = ?session_id,
                    player_id = player_id.0,
                    provided_game_code = %game_code,
                    expected_game_code = ?expected_code,
                    "join rejected: invalid or inactive game code"
                );
                let err = serde_json::to_string(&ServerMsg::Error {
                    message: "invalid or inactive game code".to_string(),
                })
                .unwrap_or_default();
                let _ = socket.send(Message::Text(err.into())).await;
                return;
            }

            tracing::info!(
                session_id = ?session_id,
                player_id = player_id.0,
                name = %name,
                role = ?role,
                game_code = %game_code,
                "join accepted"
            );

            // Upgrade anonymous session to Player.
            if let Some(sid) = session_id {
                let role_str = format!("{role:?}").to_lowercase();
                state.session_store.set(
                    sid,
                    SessionData::Player {
                        player_id: player_id.0,
                        name: name.clone(),
                        role: role_str,
                    },
                );
            }
            InboundMsg::Join {
                player_id,
                name,
                role,
                client_nonce,
            }
        }
        ClientMsg::Action { action } => InboundMsg::Action { player_id, action },
        ClientMsg::Admin { command } => {
            if !is_host {
                tracing::warn!(
                    session_id = ?session_id,
                    player_id = player_id.0,
                    command = ?command,
                    "admin command rejected: non-host session"
                );
                let err = serde_json::to_string(&ServerMsg::Error {
                    message: "admin commands require a host session".to_string(),
                })
                .unwrap_or_default();
                let _ = socket.send(Message::Text(err.into())).await;
                return;
            }
            tracing::info!(
                session_id = ?session_id,
                player_id = player_id.0,
                command = ?command,
                "admin command accepted"
            );
            InboundMsg::Admin { command }
        }
        ClientMsg::Ping => return,
        ClientMsg::Leave => {
            tracing::info!(
                session_id = ?session_id,
                player_id = player_id.0,
                "player leave requested"
            );
            // Invalidate session so reconnect won't auto-rejoin.
            if let Some(sid) = session_id {
                state.session_store.remove(sid);
            }
            InboundMsg::Leave { player_id }
        }
        // Handled inline in handle_socket before this function is called.
        ClientMsg::ClaimHost => return,
    };
    let _ = state.action_tx.send(inbound).await;
}
