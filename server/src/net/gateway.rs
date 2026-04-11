use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::{Arc, Mutex};
use std::time::Duration;

use axum::extract::ws::{Message, WebSocket};
use tokio::sync::{broadcast, mpsc};

use super::protocol::{ClientMsg, ServerMsg};
use crate::market::book::PlayerId;
use crate::sim::actions::InboundMsg;

/// Shared application state injected into every WS handler.
#[derive(Clone)]
pub struct AppState {
    /// Broadcast channel — sim loop publishes pre-serialised JSON frames here.
    pub broadcast_tx: broadcast::Sender<Arc<String>>,
    /// Full state snapshot — all messages sent to newly-connected clients.
    pub snapshot: Arc<Mutex<Vec<Arc<String>>>>,
    /// Channel into the sim loop for joins, actions, and disconnects.
    pub action_tx: mpsc::Sender<InboundMsg>,
    /// Monotonically increasing player ID allocator.
    pub next_player_id: Arc<AtomicU64>,
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
        }
    }

    pub fn allocate_player_id(&self) -> PlayerId {
        PlayerId(self.next_player_id.fetch_add(1, Ordering::Relaxed))
    }
}

/// Handle one WebSocket connection.
pub async fn handle_socket(mut socket: WebSocket, state: AppState) {
    // Subscribe before reading latest_msg to avoid missing a tick.
    let mut rx = state.broadcast_tx.subscribe();

    // Allocate a PlayerId for this connection upfront.
    let player_id = state.allocate_player_id();

    // Send the full state snapshot immediately so reconnecting clients see current state.
    let msgs = state.snapshot.lock().unwrap().clone();
    for msg in msgs {
        if socket
            .send(Message::Text(msg.as_str().into()))
            .await
            .is_err()
        {
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
                    Err(broadcast::error::RecvError::Lagged(_)) => {} // skip lost frames
                    Err(broadcast::error::RecvError::Closed) => break,
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
                            Ok(client_msg) => {
                                handle_client_msg(client_msg, player_id, &state, &mut socket).await;
                            }
                            Err(e) => {
                                let err = serde_json::to_string(&ServerMsg::Error {
                                    message: format!("parse error: {e}"),
                                }).unwrap_or_default();
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

    // Notify sim of disconnect.
    let _ = state
        .action_tx
        .send(InboundMsg::Disconnect { player_id })
        .await;
}

async fn handle_client_msg(
    msg: ClientMsg,
    player_id: PlayerId,
    state: &AppState,
    _socket: &mut WebSocket,
) {
    let inbound = match msg {
        ClientMsg::Join {
            name,
            role,
            client_nonce,
        } => InboundMsg::Join {
            player_id,
            name,
            role,
            client_nonce,
        },
        ClientMsg::Action { action } => InboundMsg::Action { player_id, action },
        ClientMsg::Admin { command } => InboundMsg::Admin { command },
        ClientMsg::Ping => return,
    };
    let _ = state.action_tx.send(inbound).await;
}
