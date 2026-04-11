/**
 * HostScreen — /host
 *
 * Admin/spectator view. Never joins as a player.
 * Shows the live price chart, stock price, player list (with kick), and AI summaries.
 */
import { useState } from "react";
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
  const [copied, setCopied] = useState(false);

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

  async function copyUrl() {
    if (!joinUrl) return;
    await navigator.clipboard.writeText(joinUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div style={styles.root}>
      <div style={styles.header}>
        <span style={styles.badge}>HOST VIEW</span>
        <span style={styles.phase}>{state.paused ? "⏸ PAUSED" : phase}</span>
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

      {/* ── Join URL ─────────────────────────────────────────────────────── */}
      {joinUrl && (
        <div style={styles.urlBar}>
          <span style={styles.urlText}>{joinUrl}</span>
          <button style={styles.copyBtn} onClick={copyUrl}>
            {copied ? "✓ Copied" : "Copy"}
          </button>
        </div>
      )}

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
    <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", minWidth: 44 }}>
      <span style={{ fontSize: "0.6rem", color: "#8a8a80", letterSpacing: "0.06em", textTransform: "uppercase" as const }}>{label}</span>
      <span style={{ fontSize: "0.85rem", fontWeight: "600" as const, color: color ?? "#3a3a36", marginTop: 2 }}>{value}</span>
    </div>
  );
}

const styles = {
  root: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "stretch",
    gap: "1.5rem",
    padding: "1.5rem 2rem",
    width: "100%",
    minHeight: "100vh",
    background: "#f5f3ef",
    paddingTop: `calc(1.5rem + ${TICKER_HEIGHT}px)`,
  },
  header: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap" as const,
    gap: "0.75rem",
  },
  badge: {
    background: "#e8eef5",
    color: "#1a3a6a",
    fontSize: "0.8rem",
    fontWeight: "bold" as const,
    letterSpacing: "0.1em",
    padding: "0.3rem 0.8rem",
    borderRadius: 3,
    flexShrink: 0,
  },
  phase: { color: "#7a7a70", fontSize: "1rem", flex: 1, minWidth: 0 },
  startBtn: {
    background: "#e8f5e8",
    border: "1px solid #4a9a4a",
    color: "#1d6b1d",
    fontSize: "1rem",
    fontWeight: "bold" as const,
    padding: "0.5rem 1.5rem",
    borderRadius: 4,
    cursor: "pointer",
    flexShrink: 0,
  },
  pauseBtn: {
    background: "transparent",
    border: "1px solid #c8b060",
    color: "#7a5010",
    fontSize: "0.9rem",
    padding: "0.4rem 1rem",
    borderRadius: 3,
    cursor: "pointer",
    flexShrink: 0,
  },
  endBtn: {
    background: "transparent",
    border: "1px solid #c89090",
    color: "#7a1a1a",
    fontSize: "0.9rem",
    padding: "0.4rem 1rem",
    borderRadius: 3,
    cursor: "pointer",
    flexShrink: 0,
  },
  urlBar: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    background: "#ffffff",
    border: "1px solid #ddd9d2",
    borderRadius: 6,
    padding: "0.65rem 1rem",
    minWidth: 0,
  },
  urlText: {
    flex: 1,
    fontSize: "1rem",
    color: "#1d6b1d",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap" as const,
    minWidth: 0,
  },
  copyBtn: {
    background: "transparent",
    border: "1px solid #c8c4be",
    color: "#5a5a54",
    fontSize: "0.85rem",
    padding: "0.35rem 0.9rem",
    borderRadius: 3,
    cursor: "pointer",
    flexShrink: 0,
  },
  priceCard: {
    background: "#ffffff",
    border: "1px solid #ddd9d2",
    borderRadius: 8,
    padding: "1.5rem",
  },
  priceLine: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: "wrap" as const,
    gap: "1rem",
    marginBottom: "1.25rem",
  },
  priceLabel: { margin: 0, color: "#8a8a80", fontSize: "0.9rem", letterSpacing: "0.12em" },
  priceValue: { margin: "0.25rem 0 0", fontSize: "5rem", fontWeight: "bold" as const, color: "#1d6b1d", lineHeight: 1 },
  countdown: { margin: "0.5rem 0 0", color: "#7a7a70", fontSize: "1rem" },
  chartBox: {
    width: "100%",
    height: 320,
    borderRadius: 4,
    overflow: "hidden",
  },
  card: {
    background: "#ffffff",
    border: "1px solid #ddd9d2",
    borderRadius: 8,
    padding: "1.25rem 1.5rem",
  },
  cardTitle: { margin: "0 0 0.75rem", fontSize: "0.9rem", color: "#8a8a80", letterSpacing: "0.08em", textTransform: "uppercase" as const },
  empty: { color: "#9a9a90", fontSize: "1rem", margin: 0 },
  table: { width: "100%", borderCollapse: "collapse" as const },
  th: { textAlign: "left" as const, color: "#9a9a90", fontSize: "0.8rem", padding: "0 0.75rem 0.6rem", letterSpacing: "0.06em" },
  td: { color: "#3a3a36", fontSize: "1rem", padding: "0.5rem 0.75rem", borderTop: "1px solid #e8e4df" },
  kickBtn: {
    background: "transparent",
    border: "1px solid #c89090",
    color: "#7a1a1a",
    fontSize: "0.85rem",
    padding: "0.3rem 0.75rem",
    borderRadius: 3,
    cursor: "pointer",
  },
  headline: { margin: 0, color: "#3a3a36", fontStyle: "italic" as const, fontSize: "1.05rem", lineHeight: 1.6 },
  summary: { margin: 0, color: "#4a4a44", fontSize: "1rem", lineHeight: 1.7, whiteSpace: "pre-wrap" as const },
  marketMini: {
    display: "flex", flexWrap: "wrap" as const, gap: "1rem 1.5rem",
    alignItems: "flex-start",
  },
  eventRow: {
    margin: "0 0 0.35rem",
    fontSize: "0.85rem",
    color: "#4a4a44",
    borderLeft: "2px solid #ddd9d2",
    paddingLeft: "0.6rem",
  },
  continueBtn: {
    background: "#e8f5e8",
    border: "1px solid #4a9a4a",
    color: "#1d6b1d",
    fontSize: "1rem",
    fontWeight: "bold" as const,
    padding: "0.5rem 1.5rem",
    borderRadius: 4,
    cursor: "pointer",
    flexShrink: 0,
  },
} as const;
