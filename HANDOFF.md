# Aura Farmers — Handoff Prompt for Claude Code

Paste this as the first message in a fresh Claude Code session to bootstrap context.

---

I'm building a hackathon project called **Aura Farmers**. Full design below. Read it, read `CLAUDE.md` in the repo root, then wait for me to tell you which step to start on. Do not start coding until I greenlight a specific build step.

## Concept

A multiplayer financial markets game set in a chaotic corn economy. Players spend each cycle either trading the market like rational investors — buying CornCo stock, writing options, hedging — or sabotaging it like agents of chaos — torching fields, hiring hitmen, and saving up enough **aura** to play god and bend reality toward famine or nuclear fallout. The corn price is governed by a jump-diffusion process whose drift is mutated by everything players (and 100 NPCs) do, so the chart on screen is a live consequence of the room's collective greed and malice. An AI narrator reports the public events each cycle, and at the end of the game an AI-written debrief reveals what was actually going on under the surface.

## World model (three layers)

The world is split into three layers. Every entity lives on exactly one layer and interacts with the others through well-defined interfaces. This keeps the model clean as features pile up.

### Layer 1 — Physical assets
Where corn actually gets grown.

- **Farms** — each has an owner, a number of fields, and a number of workers. Workers are an *attribute* of the farm (a productivity multiplier), not independent entities. A farm with 5 workers produces 5× baseline yield. No workers, no production. Farms have a state: `healthy | burning | idle`.
- **Elevators** — each has an owner and a throughput capacity. Process harvested corn into sellable inventory. Can be burned.

### Layer 2 — Actors (anyone who makes decisions)
- **Players** — humans, picking actions each cycle
- **NPC farm owners** — 5 of them at game start, each named, each owning one farm with workers, runs on autopilot (hire workers, plant, harvest, sell, occasionally hedge)
- **NPC industrialists** — 2 of them, named, each owning one elevator, runs on autopilot

These are the only "characters" with names, portfolios, and aura. NPC owners can be killed (permanently) or bought out.

### Layer 3 — The market
Pure financial layer. Everyone with cash trades here: all players, all named NPC owners, plus 100 abstract anonymous traders that exist *only* on this layer (see NPCs section). Workers do not trade.

## Roles (picked at game start)

Roles set the player's *starting position*. After the game starts, anyone can buy any asset — the role label is just a starting bundle, not a permanent gate.

- **Farmer** — starts with 1 farm, 3 fields, 2 workers, modest cash.
- **Industrialist** — starts with 1 elevator, small option position, modest cash.
- **Trader** — starts with no assets, extra cash.

Every role can take every chaotic and god-tier action. Anyone can buy farms, elevators, or workers later.

## The cycle loop

Each cycle (default ~20s, admin-tunable):

1. **Decision phase** — every player picks one action (or passes). Committed silently.
2. **Resolution phase** — actions apply simultaneously, SDE advances, NPCs trade, order book matches, prices move, narrator drops a public headline.
3. **Aura tick** — everyone earns aura each cycle automatically. Passing just means you don't spend any.

## Action menu

**Constructive (anyone with the right asset)**
- Plant a field (farm owners)
- Harvest corn (farm owners)
- Hire a worker (farm owners) — increases farm productivity
- Operate the elevator (elevator owners)
- Buy/sell CornCo stock (everyone)
- Buy/sell/write European options on CornCo (everyone)
- Short CornCo (everyone)

**Chaotic (visible-but-anonymous in public events)**
- Burn a rival's farm — visible damage, farm enters `burning` state
- Burn the grain elevator — temporary supply shock
- **Hitman — worker hit** (cheap) — kills 1 worker on a target farm, drops productivity
- **Hitman — owner hit** (expensive) — kills the target owner. NPC owners die permanently and the farm goes to auction; player owners are removed for one cycle and the narrator writes their obituary.
- Spread a rumor — fake headline injected into the narrator stream

**God-tier (huge aura cost)**
- Drought — raises probability of bad weather for N cycles
- Famine — supply collapse, demand shock
- Nuclear fallout — destroys a fraction of all fields, massive vol spike. **Ends the game if it fires.**
- Bumper harvest — opposite of drought
- Market panic — injects a downward jump

Players never see underlying probabilities. The narrator reports what happens, never what was risked.

## Wealth tiers (corporate actions)

Once a player's net worth crosses a threshold, new actions unlock.

**Tier 1 — Conglomerate (>$500k net worth, admin-tunable)**
- **Acquire a field / elevator** — forced buyout of an NPC-owned asset at market price + premium.
- **Hostile takeover of a rival's field** — public offer at N× book value. Other players can counter-bid.
- **Price floor / ceiling contracts** — standing orders to buy below $X or sell above $Y.

**Tier 2 — Monopoly (>$2M net worth AND >40% of fields or elevator capacity)**
- **Dump** — large block sell, craters the price.
- **Corner the market** — buy enough supply to set spot price for several cycles. Triggered when one entity holds >X% of deliverable corn.
- **Lobby the weather** — spend cash to reduce bad-weather probability on your own fields.
- **Blacklist a rival** — refuse to trade with a specific player.

### Squeeze mechanics
- **Supply squeeze** — buy spot, refuse to sell, dictate harvest prices to small farmers
- **Input squeeze** — elevator owner refuses to process a specific farmer's harvest
- **Options squeeze** — write deep-OTM options, then trigger a god-tier event to force them ITM
- **Short squeeze** — detect heavy short interest and corner against it

### Counter-balancers (essential)
1. **Monopoly attracts sabotage** — chaos score multiplier for sabotaging monopolists
2. **Antitrust events** — random NPC event forces divestment at fire-sale prices
3. **Cash ≠ aura** — wealth unlocks corporate actions but not god-tier. A broke chaos agent can still nuke an empire builder.
4. **Liquidity cost** — corner/dump actions incur real slippage against the NPC book
5. **Public visibility** — narrator announces threshold crossings publicly without leaking numbers

## What players see vs. what's hidden

**Public:** live price chart, order book top, own portfolio, public world events, AI narrator headlines.

**Hidden until debrief:** other players' net worth, aura, positions, PnL; who cast which god-tier event; who hired the hitman; who started the rumor; chaos/kindness scores; leaderboards.

There is **no live leaderboard**. The reveal at the end is the payoff.

## NPCs

NPCs split into two groups serving different purposes. Workers are **not** NPCs — they're an integer attribute on a farm.

### World participants (named characters, gameplay targets)

Inhabit the world, own physical assets, can be sabotaged or acquired. The narrator talks about them by name. They participate in the market by selling their harvest and occasionally hedging.

| Count | Type | Notes |
|---|---|---|
| 5 | NPC farm owners | Each named, owns 1 farm with workers, runs on autopilot (hire, plant, harvest, sell, occasionally hedge). Can be killed by an owner-hit hitman; farm goes to auction. |
| 2 | NPC industrialists | Each named, owns 1 elevator, processes corn for a fee, runs on autopilot. Can be killed or bought out. |

### Market participants (anonymous, liquidity)

Pure trading agents that exist only on the market layer. Players never see them as characters — they're just the other side of every trade. The mix is what creates emergent realism: momentum amplifies trends, mean-reversion brakes them, fundamentalists anchor to truth, market makers provide the spread, noise traders add baseline activity.

| Count | Strategy | What they do |
|---|---|---|
| 40 | Noise traders | Random buy/sell at random times, baseline liquidity (the "dumb money" — retail panic, lottery-ticket gamblers). Without them the order book feels dead. |
| 25 | Momentum traders | Buy when price has been rising recently, sell when falling. Amplify rallies and crashes — a small spike snowballs into a big one. |
| 20 | Mean-reversion traders | Buy when price has crashed below average, sell when it has spiked above. Brake runaway prices, create natural choppy oscillation. |
| 10 | Fundamentalists | Compute "fair value" from world state (planted acreage, weather, demand) with noisy info, trade toward that value. Anchor prices to reality so famines actually move the market. |
| 5 | Day-trader market makers | Quote both sides of the book simultaneously (bid + ask), earn the spread, hedge inventory using options to stay neutral. The pros everyone trades against. **Can blow up dramatically** on catastrophic single-cycle losses. |

**Total: 7 named NPCs + 100 anonymous market traders.**

### Market maker blowups
Day traders track inventory and PnL. Catastrophic single-cycle drawdown (god-tier event wrecking their hedged book, coordinated squeeze, etc.) → blow up and exit. Spread widens, surviving MMs may briefly pull quotes (small contagion effect). Narrator emits a death headline naming them. Chaos credit toward **Widowmaker** award. If all 5 blow up → **market collapse** game-end condition.

### Workers (not NPCs — a property of farms)
Workers are just an integer on a farm: more workers means more yield. They don't trade, don't act, don't have names in code. They can be killed by worker-hit hitman actions (decrements the count) or scattered when a farm burns. The fiction is richer than the simulation — the narrator can reference "three workers on the Hopkins farm" by name without those workers ever existing as code entities.

## The math

$$dS_t = \mu(X_t)\,S_t\,dt + \sigma\,S_t\,dW_t + S_{t-}\,dJ_t$$

- Brownian $dW_t$: ambient noise
- Drift $\mu(X_t)$: depends on weather, planted acreage, harvest pipeline, demand, elevator capacity
- Jump $dJ_t$: fires on sabotage and god-tier events, intensity $\lambda(X_t)$

CornCo stock tracks corn spot with idiosyncratic noise. European options Black-Scholes priced using realized vol. Market makers quote with the same model.

## Game-end conditions

1. Admin calls it
2. Nuclear fallout fires
3. All 5 market makers have blown up (market collapse)

## End-of-game debrief

Server replays event log, computes per-player stats, renders summary charts client-side, sends event log to LLM for a narrative recap (year-in-review essay naming names, revealing secret plays).

**Awards:**
- 👑 Most Profitable
- 💀 Most Chaotic
- 😇 Most Kind
- 📉 Worst Trader
- 🕵️ Best Schemer
- 🌽 People's Champion
- ☠️ Widowmaker (most MM blowups caused)
- ☢️ World Ender (triggered nuclear fallout)
- 🏢 Empire Builder (highest peak net worth)
- 🦑 Kraken (most cash extracted via squeezes)
- 🎯 David (biggest takedown of a monopolist while in bottom half)

## Stack

**Backend (Rust, single binary)**
- `tokio`, `axum`, `tokio-tungstenite`
- `serde`, `serde_json`
- `rand`, `rand_distr`
- `rust_decimal`
- `reqwest` (Anthropic API)
- `tracing`

**Frontend (TypeScript)**
- React + Vite
- Three.js for the farm scene
- Raw 2D canvas for the price chart
- Plain CSS, no Tailwind, no UI library
- `useReducer` + context for state

**Infra**
- One Dockerfile, multi-stage Rust build
- AWS Lightsail ($3.50/mo instance) running Docker, Cloudflare proxy in front for TLS + DNS
- Anthropic API: Haiku for headlines, Sonnet for debrief

## Project structure

```
aura-farmers/
├── README.md
├── CLAUDE.md
├── Dockerfile
├── scripts/
│   └── deploy.sh           # build, push, ssh into Lightsail, pull & restart
├── server/                     # Rust backend
│   ├── Cargo.toml
│   └── src/
│       ├── main.rs
│       ├── config.rs
│       ├── sim/
│       │   ├── mod.rs          # cycle FSM
│       │   ├── world.rs        # X_t state, holds all actors and assets
│       │   ├── entities.rs     # Farm, Elevator, Actor enum
│       │   ├── sde.rs          # Euler-Maruyama + jumps
│       │   ├── actions.rs      # action types + resolver
│       │   ├── aura.rs
│       │   └── events.rs       # append-only event log
│       ├── market/
│       │   ├── book.rs         # order book
│       │   ├── matching.rs
│       │   ├── options.rs      # Black-Scholes
│       │   └── portfolio.rs
│       ├── agents/
│       │   ├── mod.rs          # Agent trait
│       │   ├── noise.rs
│       │   ├── momentum.rs
│       │   ├── reversion.rs
│       │   ├── fundamental.rs
│       │   ├── market_maker.rs # day traders + blowup logic
│       │   └── npc_owner.rs    # autopilot for NPC farm/elevator owners
│       ├── corp/
│       │   ├── mod.rs          # tier detection
│       │   ├── actions.rs      # acquire, takeover, dump, corner
│       │   └── squeeze.rs
│       ├── net/
│       │   ├── gateway.rs      # axum WS handler
│       │   ├── protocol.rs     # serde message types
│       │   ├── session.rs
│       │   └── admin.rs
│       └── llm/
│           ├── narrator.rs     # per-cycle headlines (Haiku)
│           └── debrief.rs      # year-in-review (Sonnet)
└── client/                     # React frontend
    ├── package.json
    ├── vite.config.ts
    ├── tsconfig.json
    ├── index.html
    └── src/
        ├── main.tsx
        ├── App.tsx
        ├── ws/
        │   ├── client.ts
        │   └── protocol.ts
        ├── state/store.ts
        ├── scene/
        │   ├── Scene.tsx
        │   ├── farm.ts
        │   └── effects.ts
        ├── chart/
        │   ├── PriceChart.tsx
        │   └── draw.ts
        ├── ui/
        │   ├── OrderForm.tsx
        │   ├── OptionChain.tsx
        │   ├── Portfolio.tsx
        │   ├── ActionMenu.tsx
        │   ├── AuraMeter.tsx
        │   ├── Headlines.tsx
        │   ├── CycleTimer.tsx
        │   └── AdminPanel.tsx
        └── debrief/
            ├── Debrief.tsx
            └── charts.ts
```

## Build order

1. Rust: order book + matching, unit-tested
2. Rust: SDE loop on stub world state, broadcast over WS
3. React + Vite: connect, render price chart, place a market order
4. Rust: cycle FSM (Decision → Resolve), 20s timer, action queue
5. React: action menu, cycle timer, portfolio panel
6. Rust: world entities — `Farm`, `Elevator`, `Actor` enum; 5 NPC farm owners + 2 NPC industrialists at world init
7. Rust: world state mutations — plant, harvest, hire worker, burn farm, hitman (worker + owner variants)
8. React + Three.js: farm scene rendering farms with field tiles and worker counts, click to interact
9. Rust: 100 abstract market traders (noise, momentum, reversion, fundamental, 5 market makers with blowup detection)
10. Rust: NPC owner autopilot (npc_owner.rs) — they hire, plant, harvest, sell, occasionally hedge
11. Rust: option chain + Black-Scholes + portfolio MtM
12. React: option chain UI
13. Rust: aura system + god-tier actions
14. Rust: corporate tiers + squeeze mechanics + antitrust events
15. Rust: narrator (Anthropic API, per-cycle, async)
16. React: headlines ticker
17. Rust: admin commands + debrief generation
18. React: debrief screen with charts and awards
19. Deploy to AWS Lightsail, Cloudflare DNS + proxy (Flexible SSL)

## Key design principles

1. **The chart is alive** — prices move because of player actions, not just RNG
2. **Information asymmetry is the game** — trade on what you can infer from price and headlines
3. **Numbers are hidden, consequences are visible** — no probability bars, no live leaderboards
4. **The debrief is the payoff** — playing blind makes the reveal hit harder
5. **Roles create identity, not gates** — anyone can do anything chaotic
6. **Cash and aura are orthogonal power axes** — wealth unlocks empire, aura unlocks chaos
7. **Admin runs the show** — cycle length, aura economy, game end are tunable

---

**Wait for my greenlight before coding. When I tell you a build step, ask any clarifying questions, then proceed.**
