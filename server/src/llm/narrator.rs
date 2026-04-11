use std::time::Duration;

use serde::{Deserialize, Serialize};

use crate::sim::events::GameEvent;

#[derive(Serialize)]
struct AnthropicRequest {
    model: String,
    max_tokens: u32,
    #[serde(skip_serializing_if = "Option::is_none")]
    system: Option<String>,
    messages: Vec<OwnedMessage>,
}

/// An owned (role, content) pair for building multi-turn conversation context.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OwnedMessage {
    pub role: String,
    pub content: String,
}

#[derive(Deserialize)]
struct AnthropicResponse {
    content: Vec<AnthropicContent>,
}

#[derive(Deserialize)]
struct AnthropicContent {
    text: String,
}

/// Fire a single request to the Anthropic Messages API.
/// Times out after 10 s so a slow/unresponsive API never blocks a spawned task.
async fn call_api(req: &AnthropicRequest, api_key: &str) -> Result<String, String> {
    let client = reqwest::Client::builder()
        .timeout(Duration::from_secs(10))
        .build()
        .map_err(|e| e.to_string())?;

    let resp = client
        .post("https://api.anthropic.com/v1/messages")
        .header("x-api-key", api_key)
        .header("anthropic-version", "2023-06-01")
        .json(req)
        .send()
        .await
        .map_err(|e| e.to_string())?;

    if !resp.status().is_success() {
        return Err(format!("API error: {}", resp.status()));
    }

    let body: AnthropicResponse = resp.json().await.map_err(|e| e.to_string())?;
    body.content
        .into_iter()
        .next()
        .map(|c| c.text.trim().to_string())
        .ok_or_else(|| "empty response".to_string())
}

/// Generate personalised financial education coaching for one player.
/// Called per-player after each resolution phase (fire-and-forget, Haiku).
#[allow(clippy::too_many_arguments)]
pub async fn generate_feedback(
    name: &str,
    role: &str,
    cash: rust_decimal::Decimal,
    shares: i64,
    net_worth: rust_decimal::Decimal,
    aura: f64,
    options_count: usize,
    price: f64,
    events: &[GameEvent],
    cycle: u64,
    api_key: &str,
) -> Result<String, String> {
    let event_summary: String = events
        .iter()
        .take(6)
        .map(|e| format!("{e:?}"))
        .collect::<Vec<_>>()
        .join("; ");

    let prompt = format!(
        "You are a financial markets educator coaching a player in Aura Farmers, a corn-economy trading game.\n\
Player: {name} (role: {role})\n\
Portfolio at end of cycle {cycle}: ${cash:.0} cash, {shares} shares, ${net_worth:.0} net worth, \
{aura:.0} aura, {options_count} active options\n\
CornCo price this cycle: ${price:.2}\n\
Events this cycle: {event_summary}\n\n\
Give exactly 2–3 bullet points of specific, actionable financial education feedback. \
Reference real finance concepts (risk management, market timing, diversification, options hedging, \
supply/demand signals, inventory management). Be direct and concrete about what this player should \
or should not have done given the information available. Under 90 words total. Use • for bullets."
    );

    let req = AnthropicRequest {
        model: "claude-haiku-4-5-20251001".to_string(),
        max_tokens: 160,
        system: None,
        messages: vec![OwnedMessage {
            role: "user".to_string(),
            content: prompt,
        }],
    };
    call_api(&req, api_key).await
}

/// Generate a short narrator headline for the current cycle (Haiku, fire-and-forget).
pub async fn generate(
    events: &[GameEvent],
    cycle: u64,
    price: f64,
    api_key: &str,
) -> Result<String, String> {
    let event_summary: String = events
        .iter()
        .take(8)
        .map(|e| format!("{e:?}"))
        .collect::<Vec<_>>()
        .join("; ");

    let prompt = format!(
        "You are the dramatic narrator for Aura Farmers, a chaotic corn-economy game. \
Write ONE short, punchy news headline (under 60 words) about what happened this cycle. \
Be dramatic. Mention corn prices and any notable events. Never mention player IDs or NPC IDs directly — \
use evocative nicknames if you must name someone. \
Cycle: {cycle}. Corn price: ${price:.2}. Events: {event_summary}"
    );

    let req = AnthropicRequest {
        model: "claude-haiku-4-5-20251001".to_string(),
        max_tokens: 120,
        system: None,
        messages: vec![OwnedMessage {
            role: "user".to_string(),
            content: prompt,
        }],
    };
    call_api(&req, api_key).await
}

/// Generate a milestone recap covering the last N cycles — shown to all players at checkpoint pauses.
/// Uses Sonnet with a longer timeout since users are actively waiting for it.
pub async fn generate_milestone_summary(
    recent_events: &[(u64, crate::sim::events::GameEvent)],
    cycle: u64,
    price: f64,
    player_standings: &[(String, rust_decimal::Decimal)], // (name, net_worth)
    api_key: &str,
) -> Result<String, String> {
    let event_summary: String = recent_events
        .iter()
        .rev() // most recent first
        .take(30)
        .rev()
        .map(|(c, e)| format!("[Cycle {c}] {e:?}"))
        .collect::<Vec<_>>()
        .join("\n");

    let standings: String = player_standings
        .iter()
        .enumerate()
        .map(|(i, (name, nw))| format!("{}. {} — ${nw:.0}", i + 1, name))
        .collect::<Vec<_>>()
        .join(", ");

    let prompt = format!(
        "You are the game master for Aura Farmers, a chaotic corn-economy game. \
A checkpoint has been reached at cycle {cycle}. CornCo price: ${price:.2}.\n\n\
Current standings: {standings}\n\n\
Recent events (last 5 cycles):\n{event_summary}\n\n\
Write a punchy 3–5 sentence milestone recap for ALL players to read together. \
Highlight what's been dramatic, who's rising and falling, and what to watch next. \
Be vivid and entertaining — players are watching this on a shared screen."
    );

    let client = reqwest::Client::builder()
        .timeout(std::time::Duration::from_secs(25))
        .build()
        .map_err(|e| e.to_string())?;

    let req = AnthropicRequest {
        model: "claude-sonnet-4-6".to_string(),
        max_tokens: 250,
        system: None,
        messages: vec![OwnedMessage {
            role: "user".to_string(),
            content: prompt,
        }],
    };

    let resp = client
        .post("https://api.anthropic.com/v1/messages")
        .header("x-api-key", api_key)
        .header("anthropic-version", "2023-06-01")
        .json(&req)
        .send()
        .await
        .map_err(|e| e.to_string())?;

    if !resp.status().is_success() {
        return Err(format!("API error: {}", resp.status()));
    }

    let body: AnthropicResponse = resp.json().await.map_err(|e| e.to_string())?;
    body.content
        .into_iter()
        .next()
        .map(|c| c.text.trim().to_string())
        .ok_or_else(|| "empty response".to_string())
}

/// Generate a per-cycle admin game summary using Sonnet with rolling conversation context.
/// Returns the summary text plus the updated context to store for next cycle.
pub async fn generate_admin_summary(
    events: &[GameEvent],
    cycle: u64,
    price: f64,
    player_count: usize,
    prior_context: Vec<OwnedMessage>,
    api_key: &str,
) -> Result<(String, Vec<OwnedMessage>), String> {
    let event_summary: String = events
        .iter()
        .take(12)
        .map(|e| format!("{e:?}"))
        .collect::<Vec<_>>()
        .join("; ");

    let user_content = format!(
        "Cycle {cycle} completed. CornCo price: ${price:.2}. Active players: {player_count}.\n\
Events this cycle: {event_summary}\n\n\
Provide a concise admin game summary (4–6 sentences): \
current market dynamics, notable player actions, risk events, and recommended watch items for the next cycle."
    );

    let system = "You are an expert financial markets analyst and game master for Aura Farmers. \
You maintain running awareness of all game cycles and provide sharp, \
insightful admin summaries that help the host understand market dynamics, player strategies, and emerging risks. \
Be analytical and specific. Reference prior cycles when relevant.";

    let mut messages = prior_context.clone();
    messages.push(OwnedMessage {
        role: "user".to_string(),
        content: user_content.clone(),
    });

    let req = AnthropicRequest {
        model: "claude-sonnet-4-6".to_string(),
        max_tokens: 300,
        system: Some(system.to_string()),
        messages,
    };

    let text = call_api(&req, api_key).await?;

    // Append both turns and keep context bounded to last 20 turns (10 cycles).
    let mut new_ctx = prior_context;
    new_ctx.push(OwnedMessage {
        role: "user".to_string(),
        content: user_content,
    });
    new_ctx.push(OwnedMessage {
        role: "assistant".to_string(),
        content: text.clone(),
    });
    if new_ctx.len() > 20 {
        new_ctx.drain(0..new_ctx.len() - 20);
    }

    Ok((text, new_ctx))
}
