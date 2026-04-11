use std::sync::Arc;

use dashmap::DashMap;
use uuid::Uuid;

#[derive(Debug, Clone)]
pub enum SessionData {
    /// Cookie issued but identity not yet known (pre-Join connection).
    Anonymous,
    /// Browser tab that is watching as host/admin.
    Host { game_code: Option<String> },
    /// Joined player — carries identity so reconnects restore state.
    Player {
        player_id: u64,
        name: String,
        /// lowercase: "farmer" | "trader"
        role: String,
    },
}

pub struct SessionStore(DashMap<Uuid, SessionData>);

impl Default for SessionStore {
    fn default() -> Self {
        Self(DashMap::new())
    }
}

impl SessionStore {
    pub fn new() -> Arc<Self> {
        Arc::new(Self::default())
    }

    pub fn create(&self, data: SessionData) -> Uuid {
        let id = Uuid::new_v4();
        self.0.insert(id, data);
        id
    }

    pub fn get(&self, id: Uuid) -> Option<SessionData> {
        self.0.get(&id).map(|r| r.clone())
    }

    pub fn set(&self, id: Uuid, data: SessionData) {
        self.0.insert(id, data);
    }

    pub fn remove(&self, id: Uuid) {
        self.0.remove(&id);
    }

    /// Drop all Player sessions. Called on game reset/end so stale cookies
    /// don't auto-rejoin players into the next game.
    pub fn clear_players(&self) {
        self.0
            .retain(|_, v| !matches!(v, SessionData::Player { .. }));
    }

    /// Parse a raw Cookie header value and return the value for a named cookie.
    pub fn parse_cookie_value(cookie_header: &str, cookie_name: &str) -> Option<String> {
        let needle = format!("{cookie_name}=");
        for part in cookie_header.split(';') {
            let part = part.trim();
            if let Some(val) = part.strip_prefix(&needle) {
                return Some(val.trim().to_string());
            }
        }
        None
    }

    /// Parse a raw Cookie header value and return the aura_session UUID if present.
    pub fn parse_cookie(cookie_header: &str) -> Option<Uuid> {
        Self::parse_cookie_value(cookie_header, "aura_session")
            .and_then(|raw| Uuid::parse_str(raw.trim()).ok())
    }
}
