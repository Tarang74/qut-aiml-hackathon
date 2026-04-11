/**
 * HostScreen — /host
 *
 * Admin/spectator view. Never joins as a player.
 * Shows the live price chart, stock price, player list (with kick), and AI summaries.
 */
import { useGameState, useWsSend } from "../state/store";
import type { GameEvent } from "../ws/protocol";
import PriceChart from "./PriceChart";
import { TICKER_HEIGHT } from "./NewsTicker";

function describeEvent(ev: GameEvent): string {
  switch (ev.kind) {
    case "order_filled":       return `Order filled: ${ev.side} ${ev.quantity} @ $${parseFloat(ev.price).toFixed(2)}`;
    case "farm_burned":        return `Farm #${ev.farm_id} was set on fire`;
    case "farm_healed":        return `Farm #${ev.farm_id} recovered`;
    case "mill_burned":        return `Mill #${ev.mill_id} was burned`;
    case "worker_killed":      return `A worker on farm #${ev.farm_id} was killed`;
    case "npc_killed":         return `${ev.npc_name} was eliminated`;
    case "npc_farm_auctioned": return `Farm #${ev.farm_id} auctioned for $${parseFloat(ev.price).toFixed(0)}`;
    case "rumor":              return `Rumor: "${ev.text}"`;
    case "drought":            return `Drought — ${ev.cycles} cycles of poor weather`;
    case "famine":             return "Famine — supply collapse";
    case "bumper_harvest":     return "Bumper harvest — exceptional yields";
    case "market_panic":       return "Market panic — prices crashed";
    case "nuclear_fallout":    return "NUCLEAR FALLOUT";
    case "fields_planted":     return `Farm #${ev.farm_id} planted ${ev.count} fields`;
    case "corn_harvested":     return `Farm #${ev.farm_id} harvested ${ev.bushels} bushels`;
    case "corn_sold":          return `Corn sold — ${ev.bushels} bu for $${parseFloat(ev.revenue).toFixed(0)}`;
    case "option_expired":     return `Option expired — PnL $${parseFloat(ev.pnl).toFixed(0)}`;
    case "player_joined":      return `${ev.name} joined`;
    case "cycle_start":        return `Cycle ${ev.cycle} started`;
    case "game_over":          return `Game over: ${ev.reason}`;
    case "headline":           return `"${ev.text}"`;
    default:                   return "";
  }
}

export default function HostScreen() {
  const state = useGameState();
  const send = useWsSend();
  const price = parseFloat(state.price).toFixed(2);
  const isSummary = state.phase === "summary";
  const phase = state.phase === "lobby" ? "Waiting for players…" : `${state.phase} — cycle ${state.cycle}`;
  const joinUrl = state.gameCode ? `${window.location.origin}/${state.gameCode}` : null;

  function kickPlayer(playerId: number) {
    send({ type: "admin", command: { cmd: "kick_player", player_id: playerId } });
  }

  function startGame() {
    send({ type: "admin", command: { cmd: "start_game" } });
  }

  function endGame() {
    send({ type: "admin", command: { cmd: "end_game" } });
  }

  function continueGame() {
    send({ type: "admin", command: { cmd: "continue_game" } });
  }

  function togglePause() {
    send({ type: "admin", command: { cmd: state.paused ? "resume_game" : "pause_game" } });
  }

  return (
    <div style={styles.root}>
      <div style={styles.header}>
        <span style={styles.badge}>HOST VIEW</span>
        <span style={styles.phase}>
          {state.paused ? "⏸ PAUSED" : phase}
          {joinUrl && <span style={styles.urlInline}> · {joinUrl}</span>}
        </span>
        {state.phase === "lobby" ? (
          <button style={styles.startBtn} onClick={startGame}>
            Start Game
          </button>
        ) : isSummary ? (
          <>
            <button style={styles.continueBtn} onClick={continueGame}>
              Continue →
            </button>
            <button style={styles.endBtn} onClick={endGame}>End Game</button>
          </>
        ) : (
          <>
            <button style={styles.pauseBtn} onClick={togglePause}>
              {state.paused ? "Resume" : "Pause"}
            </button>
            <button style={styles.endBtn} onClick={endGame}>End Game</button>
          </>
        )}
      </div>

      {/* ── Price + chart ─────────────────────────────────────────────────── */}
      <div style={styles.priceCard}>
        <div style={styles.priceLine}>
          <div>
            <p style={styles.priceLabel}>CORNCO</p>
            <p style={styles.priceValue}>${price}</p>
            {state.phase === "decision" && (
              <p style={styles.countdown}>{state.secondsRemaining}s remaining</p>
            )}
          </div>
          <div style={styles.marketMini}>
            {(() => {
              const hist = state.priceHistory.map(parseFloat).filter(n => !isNaN(n));
              const hi = hist.length ? Math.max(...hist).toFixed(2) : "—";
              const lo = hist.length ? Math.min(...hist).toFixed(2) : "—";
              return (
                <>
                  <MiniStat label="High" value={`$${hi}`} color="#1d6b1d" />
                  <MiniStat label="Low"  value={`$${lo}`} color="#7a1a1a" />
                  <MiniStat label="Bid"  value={String(state.bidDepth)} />
                  <MiniStat label="Ask"  value={String(state.askDepth)} />
                  <MiniStat label="Vol"  value={String(state.cycleVolume)} />
                  <MiniStat label="Cycle" value={String(state.cycle)} />
                </>
              );
            })()}
          </div>
        </div>
        <div style={styles.chartBox}>
          <PriceChart history={state.priceHistory} />
        </div>
      </div>

      {/* ── Player list ───────────────────────────────────────────────────── */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Players ({state.knownPlayers.length})</h2>
        {state.knownPlayers.length === 0 ? (
          <p style={styles.empty}>No players yet — share the join URL.</p>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>#</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Role</th>
                <th style={styles.th}></th>
              </tr>
            </thead>
            <tbody>
              {state.knownPlayers.map((p, i) => (
                <tr key={p.id}>
                  <td style={styles.td}>{i + 1}</td>
                  <td style={styles.td}>{p.name}</td>
                  <td style={{ ...styles.td, color: p.role === "farmer" ? "#1d6b1d" : "#0d5858" }}>
                    {p.role}
                  </td>
                  <td style={styles.td}>
                    <button style={styles.kickBtn} onClick={() => kickPlayer(p.id)}>
                      Kick
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* ── Cycle events (summary phase) ─────────────────────────────────── */}
      {isSummary && state.cycleEvents.length > 0 && (
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Cycle {state.cycle} Events</h2>
          {state.cycleEvents.map((ev, i) => (
            <p key={i} style={styles.eventRow}>{describeEvent(ev)}</p>
          ))}
        </div>
      )}

      {/* ── Latest narrator headline ──────────────────────────────────────── */}
      {state.headlines.length > 0 && (
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Latest Headline</h2>
          <p style={styles.headline}>{state.headlines[state.headlines.length - 1].text}</p>
        </div>
      )}

      {/* ── Admin AI summary ─────────────────────────────────────────────── */}
      {state.adminSummary && (
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Analyst Summary</h2>
          <p style={styles.summary}>{state.adminSummary}</p>
        </div>
      )}
    </div>
  );
}

function MiniStat({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", minWidth: 64 }}>
      <span style={{ fontSize: "0.75rem", color: "#8a8a80", letterSpacing: "0.06em", textTransform: "uppercase" as const, fontWeight: 600 }}>{label}</span>
      <span style={{ fontSize: "1.1rem", fontWeight: "700" as const, color: color ?? "#3a3a36", marginTop: 2 }}>{value}</span>
    </div>
  );
}

const styles = {
  root: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "stretch",
    gap: "1.75rem",
    padding: "2rem 3rem",
    maxWidth: 1100,
    margin: "0 auto",
    width: "100%",
    minHeight: "100vh",
    background: "#f5f3ef",
    paddingTop: `calc(2rem + ${TICKER_HEIGHT}px)`,
  },
  header: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap" as const,
    gap: "1rem",
  },
  badge: {
    background: "#e8eef5",
    color: "#1a3a6a",
    fontSize: "0.85rem",
    fontWeight: "700" as const,
    letterSpacing: "0.12em",
    padding: "0.4rem 1rem",
    borderRadius: 4,
    flexShrink: 0,
    textTransform: "uppercase" as const,
  },
  phase: { color: "#5a5a54", fontSize: "1.15rem", fontWeight: 500, flex: 1, minWidth: 0 },
  startBtn: {
    background: "#1d6b1d",
    border: "none",
    color: "#ffffff",
    fontSize: "1rem",
    fontWeight: "700" as const,
    padding: "0.6rem 1.8rem",
    borderRadius: 6,
    cursor: "pointer",
    flexShrink: 0,
    letterSpacing: "0.02em",
  },
  pauseBtn: {
    background: "transparent",
    border: "2px solid #c8b060",
    color: "#7a5010",
    fontSize: "1rem",
    fontWeight: 600,
    padding: "0.5rem 1.2rem",
    borderRadius: 6,
    cursor: "pointer",
    flexShrink: 0,
  },
  endBtn: {
    background: "transparent",
    border: "2px solid #c89090",
    color: "#7a1a1a",
    fontSize: "1rem",
    fontWeight: 600,
    padding: "0.5rem 1.2rem",
    borderRadius: 6,
    cursor: "pointer",
    flexShrink: 0,
  },
  urlInline: {
    fontFamily: "monospace",
    color: "#1d6b1d",
    fontWeight: 600,
  },
  priceCard: {
    background: "#ffffff",
    border: "1px solid #ddd9d2",
    borderRadius: 10,
    padding: "1.75rem 2rem",
  },
  priceLine: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: "wrap" as const,
    gap: "1.5rem",
    marginBottom: "1.5rem",
  },
  priceLabel: { margin: 0, color: "#8a8a80", fontSize: "1rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" as const },
  priceValue: { margin: "0.2rem 0 0", fontSize: "6rem", fontWeight: "800" as const, color: "#1d6b1d", lineHeight: 1 },
  countdown: { margin: "0.6rem 0 0", color: "#5a5a54", fontSize: "1.2rem", fontWeight: 600 },
  chartBox: {
    width: "100%",
    height: 340,
    borderRadius: 6,
    overflow: "hidden",
  },
  card: {
    background: "#ffffff",
    border: "1px solid #ddd9d2",
    borderRadius: 10,
    padding: "1.5rem 2rem",
  },
  cardTitle: { margin: "0 0 1rem", fontSize: "0.85rem", color: "#8a8a80", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const },
  empty: { color: "#9a9a90", fontSize: "1.1rem", margin: 0 },
  table: { width: "100%", borderCollapse: "collapse" as const },
  th: { textAlign: "left" as const, color: "#8a8a80", fontSize: "0.85rem", fontWeight: 700, padding: "0 1rem 0.75rem", letterSpacing: "0.07em", textTransform: "uppercase" as const },
  td: { color: "#2a2a26", fontSize: "1.1rem", padding: "0.65rem 1rem", borderTop: "1px solid #e8e4df" },
  kickBtn: {
    background: "transparent",
    border: "1px solid #c89090",
    color: "#7a1a1a",
    fontSize: "0.9rem",
    fontWeight: 600,
    padding: "0.35rem 0.9rem",
    borderRadius: 4,
    cursor: "pointer",
  },
  headline: { margin: 0, color: "#2a2a26", fontStyle: "italic" as const, fontSize: "1.2rem", lineHeight: 1.7 },
  summary: { margin: 0, color: "#3a3a36", fontSize: "1.05rem", lineHeight: 1.8, whiteSpace: "pre-wrap" as const },
  marketMini: {
    display: "flex", flexWrap: "wrap" as const, gap: "1rem 2rem",
    alignItems: "flex-start",
  },
  eventRow: {
    margin: "0 0 0.5rem",
    fontSize: "1rem",
    color: "#3a3a36",
    borderLeft: "3px solid #ddd9d2",
    paddingLeft: "0.75rem",
    lineHeight: 1.5,
  },
  continueBtn: {
    background: "#1d6b1d",
    border: "none",
    color: "#ffffff",
    fontSize: "1rem",
    fontWeight: "700" as const,
    padding: "0.6rem 1.8rem",
    borderRadius: 6,
    cursor: "pointer",
    flexShrink: 0,
    letterSpacing: "0.02em",
  },
} as const;
