# Aura Farmers — Handoff

Read this and `CLAUDE.md` at the start of every session before touching any code.

---

## What this is

A multiplayer financial markets game set in a chaotic corn economy. Players trade CornCo stock, write options, run farms, and spend **aura** on chaos actions (arson, hitmen, god-tier market events). The price is driven by a jump-diffusion SDE whose drift is mutated by everything players and 100 NPC traders do. After each cycle an AI coach gives private feedback to each player; a separate AI summary lands on the host's screen. End-of-game is a pure-math leaderboard — no LLM.

Deployed at: **farm.tarangjanawalkar.com** (Cloudflare → AWS Lightsail, port 80)

---

## Current implementation status

Everything below is **built and working** unless noted otherwise.

### Server (Rust)

| Module | What's there |
|---|---|
| `sim/mod.rs` | Cycle FSM: lobby wait loop → decision phase → resolution phase. Ticker fires every `cycle_duration_secs` (default 20s, admin-tunable). Early advance when all players lock in. Broadcasts state on every transition. |
| `sim/world.rs` | Full world state: farms, mills, NPC owners, player portfolios, order book, aura, locked_in set, price history, SDE parameters. Seeded RNG — deterministic given same seed + same action sequence. |
| `sim/actions.rs` | All `PlayerAction` variants (farm ops, orders, options, chaos, god-tier, `NoOp`). All `AdminCommand` variants (`StartGame`, `EndGame`, `PauseGame`, `ResumeGame`, `SetCycleSecs`, `KickPlayer`, `ResetGame`). |
| `sim/entities.rs` | `Farm`, `Mill`, `NpcOwner` types. |
| `sim/events.rs` | `GameEvent` enum — append-only per-cycle log. |
| `sim/aura.rs` | Aura accumulation + spend logic. |
| `market/book.rs` | Order book (price-time priority). `total_bid_depth()`, `total_ask_depth()`. |
| `market/matching.rs` | Continuous order matching. |
| `market/options.rs` | Black-Scholes pricing. |
| `market/portfolio.rs` | Portfolio + `net_worth()` with options MtM. |
| `agents/` | 100 anonymous market traders: 40 noise, 25 momentum, 20 mean-reversion, 10 fundamental, 5 market makers with blowup detection. |
| `corp/` | Wealth tier detection, `DumpShares`, `CornerMarket`. Squeeze mechanics are partial — framework exists, not fully connected to events. |
| `net/gateway.rs` | axum WebSocket handler. New connections receive the full snapshot Vec (all current state messages). Ping frame every 30s to keep Cloudflare alive (100s idle timeout). |
| `net/protocol.rs` | All `ServerMsg` and `ClientMsg` types. See **Protocol** section below. |
| `llm/narrator.rs` | `generate()` → Haiku per-cycle headline. `generate_feedback()` → Haiku private per-player coaching. `generate_admin_summary()` → Sonnet admin summary with rolling context. All fire-and-forget via `tokio::spawn`. |

### Client (React + Vite)

| File | What's there |
|---|---|
| `App.tsx` | Root. Routing + all context providers. Host session via `sessionStorage`. Game code via `localStorage`. Detects `game_reset` while host → clears session, navigates to `/create`. Host routed to `DebriefScreen` on `game_over`. |
| `router/index.ts` | Hash-free client-side routing. Routes: `/` `/join` `/create` `/host` `/{4-digit-code}`. `useNavigate()` hook. |
| `state/store.ts` | `GameState`, `GameAction`, `reducer`. `useGameState()`, `useGameDispatch()`, `useWsSend()` hooks. |
| `ws/protocol.ts` | Mirror of `server/src/net/protocol.rs`. Keep in sync by hand. |
| `ws/useWs.ts` | WebSocket connection management. |
| `ui/CreateScreen.tsx` | Host creates game. Shows join URL + live player waiting list (`knownPlayers`). |
| `ui/HostScreen.tsx` | Host view: price chart, player list with kick, AI summaries, pause/resume, end game. Start Game button in lobby. |
| `ui/JoinScreen.tsx` | Enter 4-digit game code. Pre-fills from `localStorage` if a game is active. |
| `ui/LobbyScreen.tsx` | Enter name + role, send join WS message with client nonce. |
| `ui/WaitingScreen.tsx` | Shown to players in lobby phase after joining — "Waiting for host to start…". |
| `ui/GameScreen.tsx` | 5-tab layout: **Farm** (Farmer only) \| **Market** \| **Options** \| **Chaos** \| **God**. Lock-in flow: action buttons select locally (no WS send), sticky "Lock In" / "Take No Action" bar at bottom sends ONE message. All buttons disabled once locked. Big countdown timer. |
| `ui/DebriefScreen.tsx` | Leaderboard, market stats, season headlines. "New Game" button for host clears session and goes to `/create`. |
| `ui/PriceChart.tsx` | Canvas-based price history chart. |

---

## Game flow

```
Host opens /create
  → WS connects, server assigns host gameCode
  → Host clicks "Watch as Host →" (sets sessionStorage SS_HOST)
  → CreateScreen shows join URL + player waiting list

Players open /{code}
  → Enter name + role on LobbyScreen
  → Join WS with client nonce → server sends Welcome (claimed by matching nonce only)
  → WaitingScreen: "Waiting for host to start…"

Host clicks "Start Game"
  → AdminCommand::StartGame → server exits 'lobby loop, enters 'game loop
  → Players transition to GameScreen (decision phase)

Each cycle:
  1. Decision phase (countdown timer)
     - Players select action on GameScreen (local state, no WS send)
     - "Lock In" sends ONE action message; "Take No Action" sends NoOp
     - If ALL players locked in → cycle advances immediately
     - Timer expiry also advances the cycle
  2. Resolution phase
     - Server resolves all actions, advances SDE, NPCs trade
     - Full state broadcast (+ snapshot update for reconnectors)
     - LLM tasks fire in background (headlines, feedback, admin summary)
  3. Repeat until game_over

Host ends game:
  → AdminCommand::EndGame → server sends GameOver + Debrief
  → Host (and players) see DebriefScreen
  → Host clicks "New Game" → clears SS_HOST, navigates to /create

Admin reset mid-game:
  → AdminCommand::ResetGame → server sends GameReset
  → Host tab detects resetCount increment, clears session, navigates to /create
  → Player tabs return to pre-join state
```

---

## Protocol

**Key ServerMsg types:**

| Message | When sent | Key fields |
|---|---|---|
| `welcome` | After join | `player_id`, `name`, `role`, `client_nonce` |
| `cycle_phase` | Phase transition | `phase` (lobby/decision/resolving), `cycle`, `seconds_remaining` |
| `price_update` | After each order match | `price`, `history`, `bid_depth`, `ask_depth`, `cycle_volume` |
| `world_snapshot` | After resolution | `farms`, `mills`, `npc_owners` |
| `cycle_events` | After resolution | `events: GameEvent[]` |
| `player_state` | After resolution (per player) | `player_id`, `cash`, `shares`, `aura`, `net_worth`, `options` |
| `player_roster` | On join + reconnect | `players: [{player_id, name, role}]` |
| `player_feedback` | After resolution (Haiku) | `player_id`, `tips` |
| `headline` | After resolution (Haiku) | `text`, `cycle` |
| `admin_summary` | After resolution (Sonnet) | `text`, `cycle` |
| `debrief` | On game_over | `stats: DebriefStats` |
| `game_reset` | On admin reset | — |
| `game_paused` / `game_resumed` | Admin pause | `seconds_remaining` on resume |
| `kicked` | Admin kick | `player_id`, `reason` |

**Snapshot Vec:** On WS connect, the server replays the entire current snapshot (CyclePhase + PriceUpdate + WorldSnapshot + CycleEvents + PlayerRoster + PlayerState×N) so reconnecting clients and the host are immediately in sync.

---

## Roles

**Farmer** — starts with 1 farm, 3 fields, 2 workers. Income from farm operations. Farm tab visible.

**Trader** — no land. Extra cash. Income from speculation. Farm tab hidden.

Both roles have access to Market, Options, Chaos, and God tabs. Role only restricts the farm operations tab.

---

## Aura

- Accumulates +10 base per cycle (auto, no action needed)
- `NoOp` / "Take No Action" preserves aura (same as passing)
- God-tier actions spend aura: Bumper Harvest (60), Drought (80), Market Panic (100), Famine (150), Nuclear Fallout (300)
- Chaos actions also spend aura: Hitman Worker (15), Burn Farm (20), Burn Mill (25), Hitman Owner (50), Spread Rumor (5)

---

## Session handling

- `sessionStorage["aura_is_host"]` — per-tab host flag. Cleared on game_reset or "New Game".
- `localStorage["aura_game_code"]` — shared across tabs so JoinScreen pre-fills the active code.
- `state.resetCount` — integer in GameState, increments on every `game_reset`. App.tsx watches it; if it increments while `isHost`, clears the session and navigates to `/create`.

---

## Infrastructure

**Deploy:**
```bash
./scripts/deploy.sh
```
Builds `linux/amd64` Docker image locally, streams via SSH to Lightsail, restarts container on port 80.

**Requirements:**
- `AWS_PROFILE=personal` (or set `AWS_PROFILE` env var)
- SSH key at `~/.ssh/lightsail/aura-farmers` (or set `SSH_KEY_PATH`)
- Docker running locally
- Terraform state initialized (`terraform -chdir=terraform init`)

**Architecture:**
- Lightsail instance → Docker container → port 80
- Cloudflare proxy in front → HTTPS termination (Flexible SSL) → origin on port 80
- Env vars read from `/app/.env` on the instance (created by `provision-infrastructure.sh`)
- `ANTHROPIC_API_KEY` in `.env` enables LLM features; empty key disables them gracefully

---

## What's NOT built yet

- Three.js farm scene (farms visible only as data in the UI, not rendered 3D)
- Store inventory action (corn can be sold but not held speculatively for later cycles via explicit UI)
- Buy Research action
- Full antitrust event system
- Detailed per-award computation (debrief has leaderboard + market stats, not the full awards table)
- Net worth curves over time (only final snapshot in debrief)
- Short selling UI (order book supports it but no dedicated button)

---

## Key invariants — do not break

1. **Sim is single-threaded and deterministic.** All RNG goes through `World.rng` (seeded). Never call `rand::thread_rng()` inside `sim/`, `market/`, `agents/`, or `corp/`.
2. **One action per player per cycle.** `action_queue: HashMap<PlayerId, PlayerAction>` enforces this server-side. Client enforces via lock-in state.
3. **Snapshot Vec must stay coherent.** `broadcast_all_state()` atomically rebuilds it. Every new WS connection receives the full Vec.
4. **WS ping every 30s.** Required for Cloudflare (100s idle timeout). Lives in the send task in `net/gateway.rs`.
5. **`f64` for SDE/vol/probabilities only.** All money is `rust_decimal::Decimal`.
6. **Client nonce join.** Client generates nonce, sends with join, only claims the `welcome` that echoes its own nonce. Prevents one player's welcome from being claimed by another tab.
