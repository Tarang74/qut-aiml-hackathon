/**
 * HostScreen — /host
 *
 * Admin/spectator view. Never joins as a player.
 * Shows the live price chart, stock price, player list (with kick), and AI summaries.
 */
import { useEffect, useRef, useState } from "react";
import { useGameState, useWsSend } from "../state/store";
import type { GameEvent } from "../ws/protocol";
import PriceChart from "./PriceChart";
import { TICKER_HEIGHT } from "./NewsTicker";
import QRCode from "./QRCode";

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
  const phase = `Cycle ${state.cycle}`;

  // Local countdown — mirrors state.secondsRemaining but ticks every 1s locally
  // so the display doesn't stutter waiting for server messages.
  const [showQR, setShowQR] = useState(true);
  const [localSecs, setLocalSecs] = useState<number | null>(null);
  useEffect(() => {
    // Only tick during a live decision phase; hide before game starts or when paused.
    if (state.phase !== "decision") { setLocalSecs(null); return; }
    if (state.paused) return; // freeze display, don't start a new interval
    setLocalSecs(state.secondsRemaining);
    const id = setInterval(() => setLocalSecs(s => (s !== null && s > 0 ? s - 1 : s)), 1000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.secondsRemaining, state.phase, state.paused, state.cycle]);

  // Cycle duration control — default 8s matches server config default
  const [cycleSecs, setCycleSecs] = useState(8);
  function adjustCycleSecs(delta: number) {
    const next = Math.max(5, cycleSecs + delta);
    setCycleSecs(next);
    send({ type: "admin", command: { cmd: "set_cycle_secs", secs: next } });
  }

  // Auto-cycle: automatically continue after each summary phase
  const [autoCycle, setAutoCycle] = useState(false);
  const [autoCountdown, setAutoCountdown] = useState<number | null>(null);
  // Keep send stable inside the interval callback
  const sendRef = useRef(send);
  useEffect(() => { sendRef.current = send; }, [send]);

  useEffect(() => {
    if (autoCycle && state.phase === "summary") {
      setAutoCountdown(5);
      const interval = setInterval(() => {
        setAutoCountdown(prev => {
          if (prev === null || prev <= 1) {
            clearInterval(interval);
            sendRef.current({ type: "admin", command: { cmd: "continue_game" } });
            return null;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
    setAutoCountdown(null);
    // phase and autoCycle are the only triggers; sendRef is stable
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoCycle, state.phase]);

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
        {/* Left: logo + phase/buttons */}
        <div style={styles.headerLeft}>
          <span style={styles.logoText}>Aura Farmers</span>
          <div style={styles.headerButtons}>
            {state.phase === "lobby" ? (
              <>
                <button style={styles.startBtn} onClick={startGame}>Start Game</button>
                <span style={styles.playerCount}>
                  {state.knownPlayers.length} player{state.knownPlayers.length !== 1 ? "s" : ""}
                </span>
              </>
            ) : (
              <span style={{ ...styles.phase, ...(state.paused ? { color: "#c8a830", fontWeight: 700 } : {}) }}>
                {state.paused ? "⏸ PAUSED" : phase}
              </span>
            )}
          </div>
        </div>

        {/* Center: QR toggle */}
        <div style={{ position: "relative" as const, flexShrink: 0 }}>
          <button style={styles.qrToggleBtn} onClick={() => setShowQR(v => !v)}>
            {state.gameCode ?? "—"}
          </button>
          {showQR && (
            <div style={styles.qrDropdown}>
              <QRCode value={`${window.location.origin}/${state.gameCode ?? ""}`} style={{ display: "block" }} />
            </div>
          )}
        </div>

        {/* Right: controls */}
        <div style={styles.headerRight}>
          {state.phase !== "lobby" && (
            <div style={styles.rightBtnGroup}>
              <div style={styles.rightBtnRow}>
                {isSummary ? (
                  <>
                    <button style={styles.continueBtn} onClick={continueGame}>Continue →</button>
                    <button
                      style={{ ...styles.autoBtn, ...(autoCycle ? styles.autoBtnOn : {}) }}
                      onClick={() => setAutoCycle(v => !v)}
                    >
                      {autoCycle && autoCountdown !== null ? `Auto ${autoCountdown}s` : "Auto"}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      style={{
                        ...styles.pauseBtn,
                        ...(state.paused
                          ? { background: "#c8a830", border: "2px solid #c8a830", color: "#ffffff", fontWeight: 700 }
                          : {}),
                      }}
                      onClick={togglePause}
                    >
                      {state.paused ? "▶ Resume" : "⏸ Pause"}
                    </button>
                    <button
                      style={{ ...styles.autoBtn, ...(autoCycle ? styles.autoBtnOn : {}) }}
                      onClick={() => setAutoCycle(v => !v)}
                    >
                      Auto
                    </button>
                  </>
                )}
              </div>
              <button style={styles.endBtn} onClick={endGame}>End Game</button>
              <div style={styles.secsRow}>
                <button style={styles.secsAdj} onClick={() => adjustCycleSecs(-5)}>−5</button>
                <button style={styles.secsAdj} onClick={() => adjustCycleSecs(-1)}>−1</button>
                <span style={styles.secsLabel}>{cycleSecs}s</span>
                <button style={styles.secsAdj} onClick={() => adjustCycleSecs(1)}>+1</button>
                <button style={styles.secsAdj} onClick={() => adjustCycleSecs(5)}>+5</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Milestone summary (every 5 cycles) ──────────────────────────── */}
      {isSummary && <MilestoneSummary />}

      {/* ── Price + chart ─────────────────────────────────────────────────── */}
      <div style={styles.priceCard}>
        <div style={styles.priceLine}>
          <div style={{ flexShrink: 0, minWidth: 0 }}>
            <p style={styles.priceLabel}>CORNCO</p>
            <p style={styles.priceValue}>${price}</p>
          </div>
          <div style={styles.marketMini}>
            {(() => {
              const hist = state.priceHistory.map(parseFloat).filter(n => !isNaN(n));
              const hi = hist.length ? fmtNum(Math.max(...hist)) : "—";
              const lo = hist.length ? fmtNum(Math.min(...hist)) : "—";
              return (
                <>
                  <MiniStat label="High" value={`$${hi}`} color="#1d6b1d" />
                  <MiniStat label="Low"  value={`$${lo}`} color="#7a1a1a" />
                  <MiniStat label="Bid"  value={String(state.bidDepth)} />
                  <MiniStat label="Ask"  value={String(state.askDepth)} />
                  <MiniStat label="Vol"  value={String(state.cycleVolume)} />
                  <MiniStat label="Cycle" value={String(state.cycle)} />
                  {state.phase !== "lobby" && (
                    <MiniStat label="Players" value={String(state.knownPlayers.length)} />
                  )}
                </>
              );
            })()}
          </div>
        </div>
        <div style={styles.chartRow}>
          <div style={{ ...styles.chartBox, flex: 1 }}>
            <PriceChart history={state.priceHistory} />
          </div>
        </div>
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

      {/* ── Admin AI summary — shown outside summary phase only ──────────── */}
      {!isSummary && state.adminSummary && (
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Analyst Summary</h2>
          <p style={styles.summary}>{state.adminSummary.text}</p>
        </div>
      )}

      {/* ── Decision countdown — fixed screen-centre overlay ─────────────── */}
      {localSecs !== null && (
        <div style={styles.countdownOverlay}>
          {localSecs}
        </div>
      )}
    </div>
  );
}

function MilestoneSummary() {
  const state = useGameState();
  const hist = state.priceHistory.map(parseFloat).filter(n => !isNaN(n));

  // Price 5 cycles ago vs now
  const nowPrice = hist.length ? hist[hist.length - 1] : null;
  const thenPrice = hist.length >= 6 ? hist[hist.length - 6] : hist[0] ?? null;
  const priceDelta = nowPrice != null && thenPrice != null && thenPrice !== 0
    ? ((nowPrice - thenPrice) / thenPrice) * 100
    : null;

  // Leaderboard from accumulated PlayerState broadcasts
  const leaderboard = Object.entries(state.playerNetWorths)
    .map(([id, { name, netWorth }]) => ({ id: Number(id), name, netWorth: parseFloat(netWorth) }))
    .sort((a, b) => b.netWorth - a.netWorth);

  // Dedicated milestone summary — arrives async shortly after the phase change.
  const summaryReady = state.milestoneSummary !== null && state.milestoneSummary.cycle === state.cycle;

  return (
    <div style={styles.milestoneCard}>
      <h2 style={styles.milestoneTitle}>Checkpoint — cycle {state.cycle}</h2>

      {/* ── AI Narration — centrepiece ──────────────────────────────────── */}
      <div style={styles.narratorBlock}>
        <span style={styles.narratorLabel}>Checkpoint Recap</span>
        {summaryReady ? (
          <p style={styles.narratorText}>{state.milestoneSummary!.text}</p>
        ) : (
          <p style={styles.narratorLoading}>Generating recap…</p>
        )}
      </div>

      {/* ── Stats + leaderboard ─────────────────────────────────────────── */}
      <div style={styles.milestoneBody}>
        <div style={styles.milestoneStat}>
          <span style={styles.milestoneStatLabel}>Price (last 5 cycles)</span>
          <span style={styles.milestoneStatValue}>
            {nowPrice != null ? `$${nowPrice.toFixed(2)}` : "—"}
            {priceDelta != null && (
              <span style={{ color: priceDelta >= 0 ? "#1d6b1d" : "#7a1a1a", marginLeft: "0.5rem", fontSize: "0.9em" }}>
                {priceDelta >= 0 ? "+" : ""}{priceDelta.toFixed(1)}%
              </span>
            )}
          </span>
        </div>

        {leaderboard.length > 0 && (
          <div style={styles.milestoneLeaderboard}>
            <span style={styles.milestoneStatLabel}>Leaderboard</span>
            {leaderboard.map((p, i) => (
              <div key={p.id} style={styles.leaderRow}>
                <span style={styles.leaderRank}>{i + 1}</span>
                <span style={styles.leaderName}>{p.name}</span>
                <span style={styles.leaderWorth}>${p.netWorth.toFixed(0)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function MiniStat({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", flex: "1 1 0", minWidth: 0 }}>
      <span style={{ fontSize: "0.9rem", color: "#8a8a80", letterSpacing: "0.06em", textTransform: "uppercase" as const, fontWeight: 600, whiteSpace: "nowrap" as const }}>{label}</span>
      <span style={{ fontSize: "1.75rem", fontWeight: "700" as const, color: color ?? "#3a3a36", marginTop: 2, whiteSpace: "nowrap" as const }}>{value}</span>
    </div>
  );
}

function fmtNum(n: number): string {
  if (Math.abs(n) >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
  if (Math.abs(n) >= 1_000)     return `${(n / 1_000).toFixed(1)}k`;
  return n.toFixed(2);
}

const styles = {
  root: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "stretch",
    gap: "1.25rem",
    padding: "1.5rem",
    maxWidth: "100%",
    margin: "0",
    width: "100%",
    minHeight: "100vh",
    background: "#f5f3ef",
    paddingTop: `calc(1.5rem + ${TICKER_HEIGHT}px)`,
  },
  logoText: {
    fontSize: "1.8rem",
    fontWeight: "800" as const,
    color: "#18181a",
    letterSpacing: "-0.02em",
    lineHeight: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    width: "100%",
    minWidth: 0,
  },
  headerLeft: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start",
    gap: "0.4rem",
    minWidth: 0,
  },
  headerRight: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-end",
    gap: "0.4rem",
    minWidth: 0,
  },
  headerButtons: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap" as const,
    gap: "0.75rem",
    minWidth: 0,
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
  roomBadge: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    background: "#f0f7f0",
    border: "2px solid #1d6b1d",
    borderRadius: 8,
    padding: "0.25rem 1rem",
    flexShrink: 0,
  },
  roomBadgeLabel: {
    fontSize: "0.65rem",
    color: "#5a8a5a",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    lineHeight: 1,
  },
  roomBadgeCode: {
    fontSize: "1.6rem",
    fontWeight: "800" as const,
    fontFamily: "monospace",
    color: "#1d6b1d",
    letterSpacing: "0.15em",
    lineHeight: 1.1,
  },
  roomBadgePlayers: {
    fontSize: "0.65rem",
    color: "#5a8a5a",
    fontWeight: 600,
    lineHeight: 1,
  },
  phase: { color: "#5a5a54", fontSize: "1.15rem", fontWeight: 500, flex: 1, minWidth: 0 },
  startBtn: {
    background: "#1d6b1d",
    border: "none",
    color: "#ffffff",
    fontSize: "1.2rem",
    fontWeight: "700" as const,
    padding: "0.8rem 2.4rem",
    borderRadius: 8,
    cursor: "pointer",
    flexShrink: 0,
    letterSpacing: "0.02em",
  },
  pauseBtn: {
    background: "transparent",
    border: "2px solid #c8b060",
    color: "#7a5010",
    fontSize: "1.2rem",
    fontWeight: 600,
    padding: "0.75rem 0",
    borderRadius: 8,
    cursor: "pointer",
    flex: 1,
    whiteSpace: "nowrap" as const,
  },
  autoBtn: {
    background: "transparent",
    border: "2px solid #8ab08a",
    color: "#3a6a3a",
    fontSize: "1.2rem",
    fontWeight: 600,
    padding: "0.75rem 0",
    borderRadius: 8,
    cursor: "pointer",
    flex: 1,
    whiteSpace: "nowrap" as const,
  },
  autoBtnOn: {
    background: "#1d6b1d",
    border: "2px solid #1d6b1d",
    color: "#ffffff",
  },
  endBtn: {
    background: "transparent",
    border: "2px solid #c89090",
    color: "#7a1a1a",
    fontSize: "1.2rem",
    fontWeight: 600,
    padding: "0.75rem 0",
    borderRadius: 8,
    cursor: "pointer",
    width: "100%",
    whiteSpace: "nowrap" as const,
  },
  rightBtnGroup: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.5rem",
    width: "16rem",
  },
  rightBtnRow: {
    display: "flex",
    gap: "0.5rem",
  },
  secsRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
  },
  secsAdj: {
    background: "transparent",
    border: "1px solid #d1cbc3",
    borderRadius: 5,
    padding: "0.2rem 0.45rem",
    fontSize: "0.8rem",
    color: "#5a5a54",
    cursor: "pointer",
    fontFamily: "inherit",
    fontWeight: 600,
  },
  secsLabel: {
    flex: 1,
    textAlign: "center" as const,
    fontSize: "0.9rem",
    fontWeight: "700" as const,
    color: "#3a3a36",
    fontVariantNumeric: "tabular-nums",
  },
  playerCount: {
    fontSize: "1.1rem",
    color: "#5a8a5a",
    fontWeight: 600,
    flexShrink: 0,
  },
  chartRow: {
    display: "flex",
    gap: "1rem",
    alignItems: "stretch",
  },
  qrToggleBtn: {
    background: "transparent",
    border: "1px solid #d1cbc3",
    borderRadius: 6,
    padding: "0.3rem 0.8rem",
    fontSize: "0.9rem",
    color: "#5a5a54",
    cursor: "pointer",
    fontFamily: "inherit",
    fontWeight: 600,
  },
  qrDropdown: {
    position: "absolute" as const,
    top: "calc(100% + 6px)",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#ffffff",
    border: "1px solid #e2ddd6",
    borderRadius: 8,
    padding: "0.4rem",
    boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
    zIndex: 20,
  },
  joinLabel: {
    margin: 0,
    fontSize: "0.7rem",
    color: "#9a9a90",
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    fontWeight: 700,
  },
  joinSub: {
    margin: 0,
    fontSize: "0.7rem",
    color: "#9a9a90",
    textAlign: "center" as const,
  },
  playerList: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.25rem",
  },
  playerRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "0.4rem 0",
    borderBottom: "1px solid #f0ede8",
  },
  playerNum: { fontSize: "0.75rem", color: "#b0aea8", minWidth: 18 },
  playerName: { flex: 1, fontSize: "1rem", color: "#2a2a26" },
  playerRole: { fontSize: "0.8rem", fontWeight: 600 },
  priceCard: {
    background: "#ffffff",
    border: "1px solid #e2ddd6",
    borderRadius: 10,
    padding: "1.1rem 1.25rem",
  },
  priceLine: {
    display: "flex",
    alignItems: "flex-start",
    flexWrap: "wrap" as const,
    gap: "1.5rem",
    marginBottom: "1.5rem",
    minWidth: 0,
  },
  priceLabel: { margin: 0, color: "#8a8a80", fontSize: "1rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" as const },
  priceValue: { margin: "0.2rem 0 0", fontSize: "clamp(2.5rem, 5vw, 6rem)", fontWeight: "800" as const, color: "#1d6b1d", lineHeight: 1 },
  countdownOverlay: {
    position: "fixed" as const,
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none" as const,
    fontSize: "clamp(12rem, 28vw, 28rem)",
    fontWeight: "900" as const,
    color: "rgba(0,0,0,0.06)",
    lineHeight: 1,
    userSelect: "none" as const,
    fontVariantNumeric: "tabular-nums",
    zIndex: 5,
  },
  chartBox: {
    height: "clamp(260px, 22vw, 480px)",
    borderRadius: 6,
    overflow: "hidden",
    minWidth: 0,
  },
  card: {
    background: "#ffffff",
    border: "1px solid #e2ddd6",
    borderRadius: 10,
    padding: "1rem 1.25rem",
  },
  cardTitle: { margin: "0 0 1rem", fontSize: "0.85rem", color: "#8a8a80", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const },
  empty: { color: "#9a9a90", fontSize: "1.1rem", margin: 0 },
  headline: { margin: 0, color: "#2a2a26", fontStyle: "italic" as const, fontSize: "1.2rem", lineHeight: 1.7 },
  summary: { margin: 0, color: "#3a3a36", fontSize: "1.05rem", lineHeight: 1.8, whiteSpace: "pre-wrap" as const },
  marketMini: {
    display: "flex", flexWrap: "wrap" as const, gap: "1rem 1.5rem",
    alignItems: "flex-start", flex: 1, minWidth: 0,
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
    fontSize: "1.2rem",
    fontWeight: "700" as const,
    padding: "0.75rem 0",
    borderRadius: 8,
    cursor: "pointer",
    flex: 1,
    whiteSpace: "nowrap" as const,
    letterSpacing: "0.02em",
  },
  milestoneCard: {
    background: "#fffdf5",
    border: "2px solid #c8b060",
    borderRadius: 10,
    padding: "1.25rem 1.5rem",
  },
  milestoneTitle: {
    margin: "0 0 1.25rem",
    fontSize: "1rem",
    fontWeight: "700" as const,
    color: "#7a5010",
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
  },
  narratorBlock: {
    background: "#fffaea",
    border: "1px solid #e8d890",
    borderRadius: 8,
    padding: "1rem 1.25rem",
    marginBottom: "1.5rem",
  },
  narratorLabel: {
    display: "block",
    fontSize: "0.7rem",
    fontWeight: "700" as const,
    color: "#9a7020",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    marginBottom: "0.6rem",
  },
  narratorText: {
    margin: 0,
    fontSize: "1.15rem",
    lineHeight: 1.75,
    color: "#2a2a26",
    whiteSpace: "pre-wrap" as const,
  },
  narratorLoading: {
    margin: 0,
    fontSize: "1rem",
    color: "#b0a060",
    fontStyle: "italic" as const,
    animation: "pulse 1.5s ease-in-out infinite",
  },
  milestoneBody: {
    display: "flex",
    gap: "2rem",
    flexWrap: "wrap" as const,
    alignItems: "flex-start",
  },
  milestoneStat: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.25rem",
  },
  milestoneStatLabel: {
    fontSize: "0.75rem",
    color: "#8a8a80",
    fontWeight: "700" as const,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
  },
  milestoneStatValue: {
    fontSize: "1.5rem",
    fontWeight: "800" as const,
    color: "#2a2a26",
  },
  milestoneLeaderboard: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.35rem",
    flex: 1,
    minWidth: 0,
  },
  leaderRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    padding: "0.3rem 0",
    borderBottom: "1px solid #e8e4df",
    minWidth: 0,
  },
  leaderRank: {
    fontSize: "0.8rem",
    fontWeight: "700" as const,
    color: "#8a8a80",
    flexShrink: 0,
    width: 18,
  },
  leaderName: {
    flex: 1,
    fontSize: "1rem",
    color: "#2a2a26",
    fontWeight: 500,
    minWidth: 0,
    overflow: "hidden" as const,
    textOverflow: "ellipsis" as const,
    whiteSpace: "nowrap" as const,
  },
  leaderWorth: {
    fontSize: "1rem",
    fontWeight: "700" as const,
    color: "#1d6b1d",
    fontFamily: "monospace",
  },
} as const;
