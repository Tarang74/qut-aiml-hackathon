use serde::{Deserialize, Serialize};

use crate::sim::events::GameEvent;
use crate::sim::world::PlayerState;

#[derive(Serialize)]
struct AnthropicRequest<'a> {
    model: &'a str,
    max_tokens: u32,
    messages: Vec<AnthropicMessage<'a>>,
}

#[derive(Serialize)]
struct AnthropicMessage<'a> {
    role: &'a str,
    content: &'a str,
}

#[derive(Deserialize)]
struct AnthropicResponse {
    content: Vec<AnthropicContent>,
}

#[derive(Deserialize)]
struct AnthropicContent {
    text: String,
}

/// Generate the end-of-game debrief essay.
/// Uses claude-sonnet for higher quality (user waits for this at game end).
pub async fn generate(
    event_log: &[(u64, GameEvent)],
    players: &[PlayerState],
    final_price: f64,
    total_cycles: u64,
    api_key: &str,
) -> Result<String, String> {
    // Compact event log summary.
    let log_summary: String = event_log
        .iter()
        .take(60)
        .map(|(cycle, e)| format!("[Cycle {cycle}] {e:?}"))
        .collect::<Vec<_>>()
        .join("\n");

    // Player stats.
    let player_stats: String = players
        .iter()
        .map(|p| {
            format!(
                "{} ({:?}): cash=${:.0}, shares={}, aura={:.0}",
                p.name, p.role, p.portfolio.cash, p.portfolio.shares, p.aura,
            )
        })
        .collect::<Vec<_>>()
        .join("\n");

    let prompt = format!(
        "You are writing the dramatic year-in-review for Aura Farmers, a chaotic corn-economy game \
that just ended after {total_cycles} cycles. The final CornCo stock price was ${final_price:.2}.\n\n\
Write a 300–500 word narrative recap in the style of a breathless financial news magazine. \
Name the players by their in-game names. Reveal who did what secretly (the hitmen, the arsonists, \
the god-tier events). Give out the following awards with a brief reason: \
👑 Most Profitable, 💀 Most Chaotic, 😇 Most Kind, 📉 Worst Trader, 🌽 People's Champion.\n\n\
Player stats:\n{player_stats}\n\nEvent log (abridged):\n{log_summary}"
    );

    let client = reqwest::Client::new();
    let req = AnthropicRequest {
        model: "claude-sonnet-4-6",
        max_tokens: 1024,
        messages: vec![AnthropicMessage {
            role: "user",
            content: &prompt,
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
