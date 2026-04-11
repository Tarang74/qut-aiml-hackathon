# CLAUDE.md

Operating instructions for Claude Code working on **Aura Farmers**. Read this first, every session.

## What this project is

A multiplayer financial markets game built for a hackathon. Rust backend (single binary, WebSocket server, sim core), React + Vite + Three.js frontend, deployed as one Docker container on AWS Lightsail with Cloudflare in front for DNS, TLS, and reverse proxy. Full design lives in `HANDOFF.md` — read it before your first edit.

## Architecture at a glance

```
client (React + Vite + Three.js + canvas)
        │ WSS (JSON)
        ▼
server (single Rust binary)
  ├─ net/      axum WebSocket gateway
  ├─ sim/      cycle FSM, world state, SDE integrator, event log
  ├─ market/   order book, matching, options pricing, portfolio
  ├─ agents/   100 NPCs (noise, momentum, reversion, fundamental, market makers)
  ├─ corp/     wealth tiers, takeovers, squeezes
  └─ llm/      narrator (per-cycle) + debrief (end-of-game) via reqwest
```

Sim core is **single-threaded and deterministic given a seed**. WS gateway talks to it via `tokio::sync::mpsc` for inbound and `tokio::sync::broadcast` for outbound. Don't add threads to the sim. Don't add a database. Don't add a framework on the frontend beyond what's already in `package.json`.

## How to work

### Before editing
- Read `HANDOFF.md` for full game design
- Read the module(s) you're about to touch
- If the task is ambiguous, **ask one clarifying question** and stop. Don't guess at scope.

### While editing
- **One build step at a time.** The user will tell you which step from the build order in `HANDOFF.md`. Don't skip ahead, don't pull in unrelated changes.
- **Keep modules small and focused.** If a file grows past ~300 lines, consider splitting.
- **No premature abstraction.** Concrete types first, traits only when there are 2+ concrete uses.
- **No new dependencies without asking.** The dep list in `HANDOFF.md` is the budget.

### Checking your work
Run the appropriate check **once** after a logical chunk of changes, not after every line:

- Rust: `cargo check` for compile, `cargo test` if you wrote or touched tests, `cargo clippy -- -D warnings` before declaring done
- TS: `npm tsc --noEmit` for type check, `npm run build` only at the end of a build step

If a check fails, fix it and re-run **at most twice** before stopping to report. Don't loop indefinitely.

### Tests
- Write unit tests for the order book, matching engine, SDE step, Black-Scholes, aura math, and tier detection. Pure functions deserve tests.
- Don't write tests for WS plumbing, React components, or anything that requires a running server. Manual smoke test those.
- Tests live next to the code: `#[cfg(test)] mod tests` in the same file.

## Code style

### Rust
- `rustfmt` defaults, no custom config
- `snake_case` everything except types (`PascalCase`)
- Prefer `&str` over `String` in function signatures unless you need ownership
- Use `Result<T, E>` with a crate-level error type (`thiserror`); avoid `unwrap()` outside tests and `main`
- Avoid `async` where sync would do. The sim core is sync; only `net/` and `llm/` are async.
- Newtype primitive IDs: `struct PlayerId(u64);` not bare `u64`
- `rust_decimal::Decimal` for prices and money. Never `f64` for cash.
- `f64` is fine for SDE state, vol, probabilities

### TypeScript
- `strict: true` in `tsconfig.json`, no `any` unless wrapping an external untyped boundary
- Function components only, no classes
- `useReducer` over `useState` once a component has 3+ pieces of state
- Mirror server protocol types in `client/src/ws/protocol.ts` — keep them in sync by hand for MVP
- No default exports except for React components
- Use prettier and ESLint and use `npm run format` and `npm run lint` to format and lint code. This reduces the risk of obscuring commits with whitespace/formatting changes 

### Comments
- **Comment *why*, not *what*.** Code shows what; comments justify non-obvious choices.
- No file headers, no JSDoc/rustdoc on every function. Doc the public surface of a module only.
- No commented-out code. Delete it; git remembers.
- A function that needs a comment to explain what it does is probably misnamed.

### Modularity
- Each file should answer one question. `book.rs` is "what is an order book." `matching.rs` is "how do orders match."
- Cross-module dependencies flow one way: `net → sim → market → agents`. No cycles.
- The sim core never imports from `net/` or `llm/`. It emits events; others consume.

## Reporting back to the human

After each build step, write a short summary in this format:

```
## What I did
- 2–5 bullets, plain English, no jargon dump

## Files touched
- path/to/file.rs (new | modified | deleted)

## How I checked it
- cargo check: ok
- cargo test sim::: 7 passed
- (anything you couldn't verify and why)

## Open questions / next step
- Any decisions you deferred
- What you think step N+1 should be
```

Keep it under ~20 lines. The human is reviewing this between commits.

## Things that will get you in trouble

- **Adding dependencies without asking.** Especially heavy ones (tokio runtime extras, react-router, redux, chart libraries, UI kits).
- **Refactoring code outside the current build step.** If you see something ugly in a file you're not working on, note it in your summary but leave it.
- **Writing 500 lines of speculative scaffolding.** Build the smallest thing that makes the current step work.
- **Making the sim core async.** It's a single-threaded tick loop. Keep it that way.
- **Using `f64` for money.** Always `Decimal`.
- **Skipping `cargo clippy`.** Run it once before saying you're done with a Rust step.
- **Looping on a failing test/compile more than twice.** Stop, report, ask.
- **Reformatting unrelated files.** Stay in your lane.

## Things I want you to do without being asked

- Run `cargo fmt` before declaring a Rust step done
- Run `cargo clippy -- -D warnings` before declaring a Rust step done
- Add unit tests for any pure function you write in `market/`, `sim/sde.rs`, `sim/aura.rs`, `corp/`
- Mirror Rust protocol types into `client/src/ws/protocol.ts` whenever you change `server/src/net/protocol.rs`
- Update `README.md` build/run instructions if you change how the server or client is built or started

## WebSocket heartbeat (non-negotiable)

The server is behind Cloudflare's reverse proxy, which has a **100-second idle timeout** on Free plan WebSocket connections. The WS gateway must send a `Ping` frame to every connected client every **30 seconds** regardless of game state, using a `tokio::time::interval` inside each client's send task. This keeps connections alive during the lobby, during long cycles, during pauses, and on the debrief screen where game traffic may be sparse or absent. Do not skip this — connections will silently drop after 100s of inactivity otherwise.

## Determinism

The sim core takes a seed at startup. Given the same seed and the same sequence of inbound actions, two runs must produce identical event logs. This is non-negotiable — it's how we replay games and how we debug. Any RNG in the sim must come from the seeded `StdRng` owned by `World`. Never call `rand::thread_rng()` inside `sim/`, `market/`, `agents/`, or `corp/`.

## When in doubt

Default to the simpler thing. This is a hackathon — shipping a working slice beats a perfect architecture. If you're choosing between two designs and one is half the code, pick that one and note the tradeoff in your summary.
