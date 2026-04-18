/**
 * SummaryScreen — shown to players during the post-cycle "summary" phase.
 *
 * Displays what happened this cycle. Host sees this too (via HostScreen),
 * which shows a "Continue" button instead.
 */
import { useGameState } from "../state/store";
import type { GameEvent } from "../ws/protocol";
import { TICKER_HEIGHT } from "./NewsTicker";

const AURA_TOP5_BONUSES = [50, 40, 30, 25, 20] as const;

export default function SummaryScreen() {
  const state = useGameState();
  const cash = parseFloat(state.myCash);
  const netWorth = parseFloat(state.myNetWorth);
  const isCheckpointCycle = state.cycle > 0 && state.cycle % 5 === 0;
  const leaderboard = Object.entries(state.playerNetWorths)
    .map(([id, { name, netWorth: nw }]) => ({
      id: Number(id),
      name,
      netWorth: parseFloat(nw),
    }))
    .sort((a, b) => b.netWorth - a.netWorth);
  const myRankIndex = leaderboard.findIndex((p) => p.id === state.myPlayerId);
  const myAuraBonus =
    isCheckpointCycle &&
    myRankIndex >= 0 &&
    myRankIndex < AURA_TOP5_BONUSES.length
      ? AURA_TOP5_BONUSES[myRankIndex]
      : 0;
  const auraValue =
    myAuraBonus > 0
      ? `${state.myAura.toFixed(0)} (+${myAuraBonus})`
      : state.myAura.toFixed(0);

  return (
    <div style={s.root}>
      <div style={s.header}>
        <span style={s.cycleTag}>CYCLE {state.cycle} COMPLETE</span>
        <p style={s.waiting}>Waiting for host to continue…</p>
      </div>

      {/* ── Personal stats ───────────────────────────────────────────── */}
      <div style={s.card}>
        <p style={s.cardTitle}>Your Portfolio</p>
        <div style={s.statGrid}>
          <StatCell label="Cash" value={`$${cash.toFixed(0)}`} />
          <StatCell
            label="Shares"
            value={String(state.myShares)}
            color={state.myShares < 0 ? "#7a1a1a" : undefined}
          />
          <StatCell
            label="Net Worth"
            value={`$${netWorth.toFixed(0)}`}
            color="#1d6b1d"
          />
          <StatCell label="Aura" value={auraValue} color="#7a5010" />
        </div>
      </div>

      {/* ── Price ───────────────────────────────────────────────────── */}
      <div style={s.card}>
        <p style={s.cardTitle}>Market</p>
        <div style={s.statGrid}>
          <StatCell
            label="CornCo Price"
            value={`$${parseFloat(state.price).toFixed(2)}`}
            color="#1d6b1d"
          />
          <StatCell label="Volume" value={String(state.cycleVolume)} />
          <StatCell label="Bid Depth" value={String(state.bidDepth)} />
          <StatCell label="Ask Depth" value={String(state.askDepth)} />
        </div>
      </div>

      {/* ── Cycle events ────────────────────────────────────────────── */}
      {state.cycleEvents.length > 0 && (
        <div style={s.card}>
          <p style={s.cardTitle}>Events this cycle</p>
          <div style={s.eventList}>
            {state.cycleEvents.map((ev, i) => (
              <EventRow key={i} event={ev} />
            ))}
          </div>
        </div>
      )}

      {/* ── AI coaching tip ─────────────────────────────────────────── */}
      {state.myFeedback && (
        <div style={s.feedbackCard}>
          <p style={s.cardTitle}>Coach</p>
          {state.myFeedback
            .split(/\n/)
            .filter(Boolean)
            .map((line, i) => (
              <p key={i} style={s.feedbackLine}>
                {line.trim()}
              </p>
            ))}
        </div>
      )}

      {/* ── Milestone recap (every 5 cycles) ────────────────────────── */}
      {state.milestoneSummary?.cycle === state.cycle ? (
        <div style={s.milestoneCard}>
          <span style={s.milestoneLabel}>CHECKPOINT RECAP</span>
          <p style={s.milestoneText}>{state.milestoneSummary.text}</p>
        </div>
      ) : (
        <div style={s.milestoneCard}>
          <span style={s.milestoneLabel}>CHECKPOINT RECAP</span>
          <p style={s.milestoneLoading}>Generating recap…</p>
        </div>
      )}

      {/* ── Latest headline ─────────────────────────────────────────── */}
      {state.headlines.length > 0 && (
        <div style={s.headlineCard}>
          <span style={s.headlineLabel}>HEADLINE</span>
          <p style={s.headlineText}>
            {state.headlines[state.headlines.length - 1].text}
          </p>
        </div>
      )}
    </div>
  );
}

function EventRow({ event }: { event: GameEvent }) {
  const text = describeEvent(event);
  if (!text) return null;
  return <p style={s.eventRow}>{text}</p>;
}

function describeEvent(ev: GameEvent): string {
  switch (ev.kind) {
    case "order_filled":
      return `Order filled: ${ev.side} ${ev.quantity} @ $${parseFloat(ev.price).toFixed(2)}`;
    case "farm_burned":
      return `Farm #${ev.farm_id} was set on fire`;
    case "farm_healed":
      return `Farm #${ev.farm_id} recovered`;
    case "mill_burned":
      return `Mill #${ev.mill_id} was burned`;
    case "worker_killed":
      return `A worker on farm #${ev.farm_id} was killed`;
    case "npc_killed":
      return `${ev.npc_name} was eliminated`;
    case "npc_farm_auctioned":
      return `Farm #${ev.farm_id} auctioned for $${parseFloat(ev.price).toFixed(0)}`;
    case "rumor":
      return `Rumor: "${ev.text}"`;
    case "drought":
      return `Drought declared — ${ev.cycles} cycles of poor weather`;
    case "famine":
      return "Famine — supply collapse across all farms";
    case "bumper_harvest":
      return "Bumper harvest — exceptional yields this cycle";
    case "market_panic":
      return "Market panic — prices in freefall";
    case "nuclear_fallout":
      return "NUCLEAR FALLOUT — catastrophic destruction";
    case "fields_planted":
      return `Farm #${ev.farm_id} planted ${ev.count} fields`;
    case "corn_harvested":
      return `Farm #${ev.farm_id} harvested ${ev.bushels} bushels`;
    case "corn_sold":
      return `Corn sold — ${ev.bushels} bushels for $${parseFloat(ev.revenue).toFixed(0)}`;
    case "option_expired":
      return `Option expired — PnL $${parseFloat(ev.pnl).toFixed(0)}`;
    case "player_joined":
      return `${ev.name} joined the game`;
    case "cycle_start":
      return `Cycle ${ev.cycle} started`;
    case "game_over":
      return `Game over: ${ev.reason}`;
    case "headline":
      return `"${ev.text}"`;
    default:
      return "";
  }
}

function StatCell({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <div style={s.stat}>
      <span style={s.statLabel}>{label}</span>
      <span style={{ ...s.statValue, color: color ?? "#18181a" }}>{value}</span>
    </div>
  );
}

const s = {
  root: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.75rem",
    padding: "1rem",
    width: "100%",
    minHeight: "100vh",
    background: "#f5f3ef",
    fontFamily: "inherit",
    paddingTop: `calc(1rem + ${TICKER_HEIGHT}px)`,
  },
  header: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    padding: "1.5rem 1rem 1rem",
  },
  cycleTag: {
    fontSize: "1.5rem",
    fontWeight: "700" as const,
    color: "#7a5010",
    letterSpacing: "0.04em",
  },
  waiting: {
    fontSize: "0.8rem",
    color: "#9a9a90",
    margin: "0.4rem 0 0",
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
  },
  card: {
    background: "#ffffff",
    border: "1px solid #ddd9d2",
    borderRadius: 8,
    padding: "0.9rem 1rem",
  },
  feedbackCard: {
    background: "#edf8ed",
    border: "1px solid #9ac89a",
    borderRadius: 8,
    padding: "0.9rem 1rem",
  },
  headlineCard: {
    background: "#ffffff",
    border: "1px solid #ddd9d2",
    borderRadius: 8,
    padding: "0.75rem 1rem",
  },
  cardTitle: {
    margin: "0 0 0.6rem",
    fontSize: "0.7rem",
    color: "#8a8a80",
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
  },
  statGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.5rem 1rem",
  },
  stat: { display: "flex", flexDirection: "column" as const },
  statLabel: {
    fontSize: "0.65rem",
    color: "#9a9a90",
    textTransform: "uppercase" as const,
    letterSpacing: "0.06em",
  },
  statValue: {
    fontSize: "1rem",
    fontWeight: "500" as const,
    marginTop: "0.1rem",
  },
  eventList: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.3rem",
  },
  eventRow: {
    margin: 0,
    fontSize: "0.85rem",
    color: "#4a4a44",
    padding: "0.3rem 0",
    borderBottom: "1px solid #e8e4df",
  },
  feedbackLine: {
    fontSize: "0.82rem",
    color: "#1a4a1a",
    lineHeight: 1.5,
    margin: "0.2rem 0",
  },
  headlineLabel: {
    fontSize: "0.6rem",
    color: "#9a9a90",
    letterSpacing: "0.1em",
    display: "block",
    marginBottom: "0.3rem",
  },
  headlineText: {
    fontSize: "0.85rem",
    color: "#4a4a44",
    fontStyle: "italic" as const,
    margin: 0,
    lineHeight: 1.5,
  },
  milestoneCard: {
    background: "#fffdf5",
    border: "2px solid #c8b060",
    borderRadius: 8,
    padding: "0.9rem 1rem",
  },
  milestoneLabel: {
    fontSize: "0.6rem",
    color: "#9a7020",
    letterSpacing: "0.1em",
    fontWeight: 700 as const,
    display: "block",
    marginBottom: "0.4rem",
    textTransform: "uppercase" as const,
  },
  milestoneText: {
    fontSize: "0.9rem",
    color: "#3a3a36",
    margin: 0,
    lineHeight: 1.6,
  },
  milestoneLoading: {
    fontSize: "0.85rem",
    color: "#b0a060",
    fontStyle: "italic" as const,
    margin: 0,
  },
} as const;
