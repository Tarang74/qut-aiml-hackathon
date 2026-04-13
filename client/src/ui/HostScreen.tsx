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

const AURA_TOP5_BONUSES = [50, 40, 30, 25, 20] as const;

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
      return `Drought — ${ev.cycles} cycles of poor weather`;
    case "famine":
      return "Famine — supply collapse";
    case "bumper_harvest":
      return "Bumper harvest — exceptional yields";
    case "market_panic":
      return "Market panic — prices crashed";
    case "nuclear_fallout":
      return "NUCLEAR FALLOUT";
    case "fields_planted":
      return `Farm #${ev.farm_id} planted ${ev.count} fields`;
    case "corn_harvested":
      return `Farm #${ev.farm_id} harvested ${ev.bushels} bushels`;
    case "corn_sold":
      return `Corn sold — ${ev.bushels} bu for $${parseFloat(ev.revenue).toFixed(0)}`;
    case "option_expired":
      return `Option expired — PnL $${parseFloat(ev.pnl).toFixed(0)}`;
    case "player_joined":
      return `${ev.name} joined`;
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

export default function HostScreen() {
  const state = useGameState();
  const send = useWsSend();
  const priceNum = parseFloat(state.price);
  const price = priceNum.toFixed(2);
  const isSummary = state.phase === "summary";
  const phase = `Cycle ${state.cycle}`;
  const playerText = `${state.knownPlayers.length} player${state.knownPlayers.length !== 1 ? "s" : ""}`;
  const joinText = `${playerText} (join with code: ${state.gameCode ?? "----"})`;
  const hist = state.priceHistory.map(parseFloat).filter((n) => !isNaN(n));
  const prev = hist.length >= 2 ? hist[hist.length - 2] : null;
  const change = prev !== null ? priceNum - prev : 0;
  const changePct = prev && prev !== 0 ? (change / prev) * 100 : 0;
  const changeColor =
    prev === null ? "#6b6b63" : change >= 0 ? "#1d6b1d" : "#a03333";
  const changeSign = change >= 0 ? "+" : "";
  const returns = hist.slice(1).map((priceValue, index) => {
    const prior = hist[index];
    return prior !== 0 ? (priceValue - prior) / prior : 0;
  });
  const avgReturn = returns.length
    ? returns.reduce((sum, value) => sum + value, 0) / returns.length
    : 0;
  const volatilityPct = returns.length
    ? Math.sqrt(
        returns.reduce((sum, value) => sum + (value - avgReturn) ** 2, 0) /
          returns.length,
      ) * 100
    : 0;

  // Local countdown — mirrors state.secondsRemaining but ticks every 1s locally
  // so the display doesn't stutter waiting for server messages.
  const [localSecs, setLocalSecs] = useState<number | null>(null);
  useEffect(() => {
    // Only tick during a live decision phase; hide before game starts or when paused.
    if (state.phase !== "decision") {
      setLocalSecs(null);
      return;
    }
    if (state.paused) return; // freeze display, don't start a new interval
    setLocalSecs(state.secondsRemaining);
    const id = setInterval(
      () => setLocalSecs((s) => (s !== null && s > 0 ? s - 1 : s)),
      1000,
    );
    return () => clearInterval(id);
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
  useEffect(() => {
    sendRef.current = send;
  }, [send]);

  // Auto-start intentionally removed: the "Start Match" button on CreateScreen
  // calls /api/session/start (HTTP) before navigating to /host, so the game is
  // already running by the time this component mounts. Auto-starting here would
  // re-trigger on every host refresh/reconnect and could start a new game
  // unexpectedly after a reset.

  useEffect(() => {
    if (autoCycle && state.phase === "summary") {
      setAutoCountdown(5);
      const interval = setInterval(() => {
        setAutoCountdown((prev) => {
          if (prev === null || prev <= 1) {
            clearInterval(interval);
            sendRef.current({
              type: "admin",
              command: { cmd: "continue_game" },
            });
            return null;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
    setAutoCountdown(null);
    // phase and autoCycle are the only triggers; sendRef is stable
  }, [autoCycle, state.phase]);

  function endGame() {
    send({ type: "admin", command: { cmd: "end_game" } });
  }

  function continueGame() {
    send({ type: "admin", command: { cmd: "continue_game" } });
  }

  function togglePause() {
    send({
      type: "admin",
      command: { cmd: state.paused ? "resume_game" : "pause_game" },
    });
  }

  return (
    <div style={styles.root}>
      <div style={styles.header}>
        {/* Left: logo + phase/buttons */}
        <div style={styles.headerLeft}>
          <span style={styles.logoText}>🌽 Aura Farmers</span>
          <div style={styles.headerButtons}>
            {state.phase === "lobby" ? (
              <>
                <div style={styles.joinHintRow}>
                  <span style={styles.phasePlayers}>{joinText}</span>
                </div>
              </>
            ) : (
              <div style={styles.phaseBlock}>
                <span
                  style={{
                    ...styles.phase,
                    ...(state.paused
                      ? { color: "#c8a830", fontWeight: 700 }
                      : {}),
                  }}
                >
                  {state.paused ? "⏸ PAUSED" : phase}
                </span>
                <div style={styles.joinHintRow}>
                  <span style={styles.phasePlayers}>{joinText}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: controls */}
        <div style={styles.headerRight}>
          <div style={styles.rightBtnGroup}>
            <div style={styles.rightBtnRow}>
              {isSummary ? (
                <>
                  <button style={styles.continueBtn} onClick={continueGame}>
                    Continue
                  </button>
                  <button
                    style={{
                      ...styles.autoBtn,
                      ...(autoCycle ? styles.autoBtnOn : {}),
                    }}
                    onClick={() => setAutoCycle((v) => !v)}
                  >
                    {autoCycle && autoCountdown !== null
                      ? `Auto ${autoCountdown}s`
                      : "Auto"}
                  </button>
                </>
              ) : (
                <>
                  <button
                    style={{
                      ...styles.pauseBtn,
                      ...(state.paused
                        ? {
                            background: "#c8a830",
                            border: "2px solid #c8a830",
                            color: "#ffffff",
                            fontWeight: 700,
                          }
                        : {}),
                    }}
                    onClick={togglePause}
                  >
                    {state.paused ? "Resume" : "Pause"}
                  </button>
                  <button
                    style={{
                      ...styles.autoBtn,
                      ...(autoCycle ? styles.autoBtnOn : {}),
                    }}
                    onClick={() => setAutoCycle((v) => !v)}
                  >
                    Auto
                  </button>
                </>
              )}
              <button style={styles.endBtn} onClick={endGame}>
                End
              </button>
            </div>
            <div style={styles.secsRow}>
              <button
                style={styles.secsAdj}
                onClick={() => adjustCycleSecs(-5)}
              >
                −5
              </button>
              <button
                style={styles.secsAdj}
                onClick={() => adjustCycleSecs(-1)}
              >
                −1
              </button>
              <span style={styles.secsLabel}>{cycleSecs}s</span>
              <button style={styles.secsAdj} onClick={() => adjustCycleSecs(1)}>
                +1
              </button>
              <button style={styles.secsAdj} onClick={() => adjustCycleSecs(5)}>
                +5
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Milestone summary (every 5 cycles) ──────────────────────────── */}
      {isSummary && <MilestoneSummary />}

      {/* ── Price + chart ─────────────────────────────────────────────────── */}
      <div style={styles.priceCard}>
        <div style={styles.marketTopRow}>
          <div style={styles.marketLeftGroup}>
            <div style={styles.marketPriceBlock}>
              <span style={styles.priceLabel}>CORNCO</span>
              <span style={styles.priceValue}>${price}</span>
            </div>
            <div style={{ ...styles.priceChange, color: changeColor }}>
              {changeSign}
              {change.toFixed(2)} ({changeSign}
              {changePct.toFixed(2)}%)
            </div>
          </div>
        </div>

        <div style={styles.graphMetaRow}>
          <span style={styles.volumeText}>
            Volume this cycle {state.cycleVolume}
          </span>
          <span style={styles.metaDivider} />
          <span style={styles.volumeText}>
            Volatility {volatilityPct.toFixed(1)}%
          </span>
        </div>

        <div style={styles.chartRow}>
          <div style={{ ...styles.chartBox, flex: 1 }}>
            <PriceChart
              history={state.priceHistory}
              volumeHistory={state.volumeHistory}
            />
          </div>
        </div>
      </div>

      {/* ── Cycle events (summary phase) ─────────────────────────────────── */}
      {isSummary && state.cycleEvents.length > 0 && (
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Cycle {state.cycle} Events</h2>
          {state.cycleEvents.map((ev, i) => (
            <p key={i} style={styles.eventRow}>
              {describeEvent(ev)}
            </p>
          ))}
        </div>
      )}

      {/* ── Latest narrator headline ──────────────────────────────────────── */}
      {state.headlines.length > 0 && (
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Latest Headline</h2>
          <p style={styles.headline}>
            {state.headlines[state.headlines.length - 1].text}
          </p>
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
        <div style={styles.countdownOverlay}>{localSecs}</div>
      )}
    </div>
  );
}

function MilestoneSummary() {
  const state = useGameState();
  // const hist = state.priceHistory.map(parseFloat).filter((n) => !isNaN(n));

  // Price 5 cycles ago vs now
  // const nowPrice = hist.length ? hist[hist.length - 1] : null;
  // const thenPrice =
  //   hist.length >= 6 ? hist[hist.length - 6] : (hist[0] ?? null);
  // const priceDelta =
  //   nowPrice != null && thenPrice != null && thenPrice !== 0
  //     ? ((nowPrice - thenPrice) / thenPrice) * 100
  //     : null;

  // Leaderboard from accumulated PlayerState broadcasts
  const leaderboard = Object.entries(state.playerNetWorths)
    .map(([id, { name, netWorth }]) => ({
      id: Number(id),
      name,
      netWorth: parseFloat(netWorth),
    }))
    .sort((a, b) => b.netWorth - a.netWorth);

  // Dedicated milestone summary — arrives async shortly after the phase change.
  const summaryReady =
    state.milestoneSummary !== null &&
    state.milestoneSummary.cycle === state.cycle;

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
        {/* <div style={styles.milestoneStat}>
          <span style={styles.milestoneStatLabel}>Price (last 5 cycles)</span>
          <span style={styles.milestoneStatValue}>
            {nowPrice != null ? `$${nowPrice.toFixed(2)}` : "—"}
            {priceDelta != null && (
              <span style={{ color: priceDelta >= 0 ? "#1d6b1d" : "#7a1a1a", marginLeft: "0.5rem", fontSize: "0.9em" }}>
                {priceDelta >= 0 ? "+" : ""}{priceDelta.toFixed(1)}%
              </span>
            )}
          </span>
        </div> */}

        {leaderboard.length > 0 && (
          <div style={styles.milestoneLeaderboard}>
            <span style={styles.milestoneStatLabel}>Leaderboard</span>
            <div style={styles.leaderHeaderRow}>
              <span style={styles.leaderHeaderRank}>#</span>
              <span style={styles.leaderHeaderName}>Player</span>
              {/* <span style={styles.leaderHeaderNum}>Net Worth</span> */}
              <span style={styles.leaderHeaderNum}>Bonus Aura</span>
            </div>
            {leaderboard.map((p, i) => (
              <div key={p.id} style={styles.leaderRow}>
                <span style={styles.leaderRank}>{i + 1}</span>
                <span style={styles.leaderName}>{p.name}</span>
                {/* <span style={styles.leaderWorth}>${p.netWorth.toFixed(0)}</span> */}
                <span style={styles.leaderBonus}>
                  {i < AURA_TOP5_BONUSES.length
                    ? `+${AURA_TOP5_BONUSES[i]}`
                    : "-"}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
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
  phaseBlock: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start",
    minWidth: 0,
  },
  phase: {
    color: "#5a5a54",
    fontSize: "1.15rem",
    fontWeight: 500,
    flex: 1,
    minWidth: 0,
  },
  phasePlayers: {
    fontSize: "0.85rem",
    color: "#8a8a80",
    fontWeight: 600,
    lineHeight: 1.1,
    marginTop: "0.15rem",
  },
  joinHintRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.55rem",
    flexWrap: "wrap" as const,
    marginTop: "0.1rem",
  },
  codeWrap: {
    position: "relative" as const,
  },
  inlineCodeBtn: {
    background: "transparent",
    border: "1px solid #d1cbc3",
    borderRadius: 999,
    padding: "0.15rem 0.55rem",
    fontSize: "0.78rem",
    color: "#5a5a54",
    cursor: "pointer",
    fontFamily: "inherit",
    fontWeight: 600,
    letterSpacing: "0.01em",
  },
  startBtn: {
    background: "#1d6b1d",
    border: "none",
    color: "#ffffff",
    fontSize: "0.9rem",
    fontWeight: "700" as const,
    padding: "0.4rem 0.8rem",
    borderRadius: 8,
    cursor: "pointer",
    flexShrink: 0,
    letterSpacing: "0.02em",
  },
  pauseBtn: {
    background: "transparent",
    border: "2px solid #c8b060",
    color: "#7a5010",
    fontSize: "0.95rem",
    fontWeight: 600,
    padding: "0.58rem 1rem",
    borderRadius: 8,
    cursor: "pointer",
    flex: 1,
    whiteSpace: "nowrap" as const,
  },
  autoBtn: {
    background: "transparent",
    border: "2px solid #8ab08a",
    color: "#3a6a3a",
    fontSize: "0.95rem",
    fontWeight: 600,
    padding: "0.58rem 1rem",
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
    fontSize: "0.95rem",
    fontWeight: 600,
    padding: "0.58rem 1rem",
    borderRadius: 8,
    cursor: "pointer",
    flex: 1,
    whiteSpace: "nowrap" as const,
  },
  rightBtnGroup: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.5rem",
    width: "auto",
    minWidth: "20rem",
  },
  rightBtnRow: {
    display: "flex",
    gap: "0.55rem",
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
  qrDropdownLeft: {
    position: "absolute" as const,
    top: "calc(100% + 6px)",
    left: 0,
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
    padding: "0.7rem 0.9rem 0.85rem",
  },
  marketTopRow: {
    display: "flex",
    alignItems: "flex-end",
    flexWrap: "wrap" as const,
    gap: "0.9rem 1.2rem",
    marginBottom: "0.35rem",
    minWidth: 0,
  },
  marketLeftGroup: {
    display: "flex",
    alignItems: "flex-end",
    gap: "0.85rem",
    minWidth: 0,
  },
  marketPriceBlock: {
    display: "flex",
    flexDirection: "column" as const,
    width: "fit-content",
  },
  priceLabel: {
    margin: 0,
    color: "#67675f",
    fontSize: "1rem",
    fontWeight: 800,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
  },
  priceValue: {
    margin: "0.2rem 0 0",
    fontSize: "clamp(2.5rem, 5vw, 6rem)",
    fontWeight: "800" as const,
    color: "#18181a",
    lineHeight: 1,
  },
  priceChange: {
    fontSize: "clamp(1.45rem, 2.1vw, 2.1rem)",
    fontWeight: 800,
    lineHeight: 1,
    marginBottom: "0.45rem",
    whiteSpace: "nowrap" as const,
    textAlign: "left" as const,
  },
  marketDepthBlock: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "stretch",
    gap: "0.25rem",
    marginBottom: "0.15rem",
    marginLeft: "auto",
    marginRight: "58px",
    justifyContent: "flex-start",
    minWidth: "13rem",
  },
  depthHeaderRow: {
    display: "grid",
    gridTemplateColumns: "1fr 3.2rem 3.2rem",
    columnGap: "0.6rem",
    fontSize: "0.68rem",
    color: "#6f6f66",
    letterSpacing: "0.09em",
    textTransform: "uppercase" as const,
    fontWeight: 700,
    lineHeight: 1.1,
  },
  depthDataRow: {
    display: "grid",
    gridTemplateColumns: "1fr 3.2rem 3.2rem",
    columnGap: "0.6rem",
    alignItems: "baseline",
    fontSize: "1rem",
    color: "#3a3a36",
    fontWeight: 700,
    lineHeight: 1.15,
  },
  depthEmptyRow: {
    display: "grid",
    gridTemplateColumns: "1fr 3.2rem 3.2rem",
    columnGap: "0.6rem",
    alignItems: "baseline",
    fontSize: "1rem",
    color: "#b0aea8",
    fontWeight: 700,
    lineHeight: 1.15,
  },
  depthTotalsRow: {
    display: "grid",
    gridTemplateColumns: "1fr 3.2rem 3.2rem",
    columnGap: "0.6rem",
    alignItems: "baseline",
    fontSize: "0.86rem",
    color: "#6b6b63",
    fontWeight: 700,
    borderTop: "1px solid #e6e2db",
    paddingTop: "0.2rem",
    marginTop: "0.1rem",
  },
  depthColStrike: {
    textAlign: "left" as const,
    fontVariantNumeric: "tabular-nums",
  },
  depthColNum: {
    textAlign: "right" as const,
    fontVariantNumeric: "tabular-nums",
  },
  graphMetaRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "0.2rem",
    gap: "0.55rem",
  },
  volumeText: {
    fontSize: "0.86rem",
    color: "#5f5f57",
    fontWeight: 800,
  },
  metaDivider: {
    width: 1,
    height: "0.95rem",
    background: "#e0dbd2",
    flexShrink: 0,
  },
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
  cardTitle: {
    margin: "0 0 1rem",
    fontSize: "0.85rem",
    color: "#67675f",
    fontWeight: 800,
    letterSpacing: "0.09em",
    textTransform: "uppercase" as const,
  },
  empty: { color: "#9a9a90", fontSize: "1.1rem", margin: 0 },
  headline: {
    margin: 0,
    color: "#2a2a26",
    fontStyle: "italic" as const,
    fontSize: "1.2rem",
    lineHeight: 1.7,
  },
  summary: {
    margin: 0,
    color: "#3a3a36",
    fontSize: "1.05rem",
    lineHeight: 1.8,
    whiteSpace: "pre-wrap" as const,
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
    background: "transparent",
    border: "2px solid #8ab08a",
    color: "#3a6a3a",
    fontSize: "0.95rem",
    fontWeight: 600,
    padding: "0.58rem 1rem",
    borderRadius: 8,
    cursor: "pointer",
    flex: 1.25,
    minWidth: "8.5rem",
    whiteSpace: "nowrap" as const,
    letterSpacing: "normal",
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
  leaderHeaderRow: {
    display: "grid",
    gridTemplateColumns: "1.6rem minmax(0, 1fr) 6.8rem",
    gap: "0.5rem",
    alignItems: "center",
    padding: "0.05rem 0 0.15rem",
    borderBottom: "1px solid #e1ddd6",
  },
  leaderHeaderRank: {
    fontSize: "0.7rem",
    color: "#8a8a80",
    fontWeight: "700" as const,
    textAlign: "left" as const,
  },
  leaderHeaderName: {
    fontSize: "0.7rem",
    color: "#8a8a80",
    fontWeight: "700" as const,
    textAlign: "left" as const,
    letterSpacing: "0.03em",
    textTransform: "uppercase" as const,
  },
  leaderHeaderNum: {
    fontSize: "0.7rem",
    color: "#8a8a80",
    fontWeight: "700" as const,
    textAlign: "right" as const,
    letterSpacing: "0.03em",
    textTransform: "uppercase" as const,
  },
  leaderRow: {
    display: "grid",
    gridTemplateColumns: "1.6rem minmax(0, 1fr) 6.8rem",
    alignItems: "center",
    gap: "0.5rem",
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
    textAlign: "right" as const,
  },
  leaderBonus: {
    fontSize: "0.95rem",
    fontWeight: "700" as const,
    color: "#1d6b1d",
    textAlign: "right" as const,
    fontFamily: "monospace",
  },
} as const;
