/**
 * DebriefScreen — shown when phase === "game_over".
 *
 * Host layout:
 *  1. Header — reason + New Game button
 *  2. Podium — top 3 players
 *  3. Market stats strip
 *  4. Price history chart
 *  5. Full leaderboard table
 *  6. Season headlines
 *  7. Chronicle (LLM narrative)
 *  8. Analyst summary (last cycle)
 *
 * Player layout:
 *  1. Aura comment banner (rank-based)
 *  2. Personal result card
 *  3. Leaderboard table
 *  4. Chronicle (LLM narrative)
 */
import { useGameDispatch, useGameState, useWsSend } from "../state/store";
import { useNavigate } from "../router/index";
import PriceChart from "./PriceChart";
import type { PlayerSummary } from "../ws/protocol";

const SS_HOST = "aura_is_host";

// ── Aura comment ───────────────────────────────────────────────────────────────

const AURA_TOP = [
  "You have infinite aura ✨👑✨",
  "Your aura has its own aura 🌹💫",
  "Aura so strong it bends the leaderboard 💪🔥",
];

const AURA_BOTTOM = [
  "Aura declared a biohazard ☣️💀",
  "Aura so bad it affects others nearby 😰🥀",
  "You are actively draining the aura economy 📉💸😭",
  "You have negative infinity aura 🥀💀🥀",
];

const AURA_MIDDLE = [
  "Certified aura farmer 🌾😤",
  "Aura positive, vibes immaculate 🫶✨",
  "Mid aura, but you tried 😐🌸",
  "Your aura is being investigated 🔍😟",
  "Aura in shambles 😭💀",
  "Your aura owes people aura 😳🙏",
];

function getAuraComment(rank: number, totalPlayers: number, playerId: number): string {
  if (totalPlayers <= 0) return "Aura status: undetermined";
  if (rank === 1) return AURA_TOP[playerId % AURA_TOP.length];
  if (rank === totalPlayers || totalPlayers === 1) return AURA_BOTTOM[playerId % AURA_BOTTOM.length];
  // Interpolate for middle ranks: percentile 0 (rank 2) → 1 (rank N-1)
  const pct = (rank - 2) / Math.max(totalPlayers - 2, 1);
  const idx = Math.min(Math.floor(pct * AURA_MIDDLE.length), AURA_MIDDLE.length - 1);
  return AURA_MIDDLE[idx];
}

// ── Top-level component ────────────────────────────────────────────────────────

export default function DebriefScreen() {
  const { debrief, headlines, priceHistory, myPlayerId, isHost, adminSummary, debriefNarrative } = useGameState();
  const dispatch = useGameDispatch();
  const navigate = useNavigate();
  const send = useWsSend();

  function endHostSession() {
    sessionStorage.removeItem(SS_HOST);
    dispatch({ type: "clear_host" });
    navigate("/create");
  }

  function quitGame() {
    // For players, remove them from the world; host tabs don't own a player entity.
    if (!isHost) {
      send({ type: "leave" });
    }
    fetch("/api/session/clear", { method: "POST", keepalive: true }).catch(() => {});
    document.cookie = "aura_session=; Max-Age=0; Path=/";
    document.cookie = "aura_server=; Max-Age=0; Path=/";
    sessionStorage.removeItem(SS_HOST);
    if (isHost) {
      dispatch({ type: "clear_host" });
    } else {
      dispatch({ type: "leave_game" });
    }
    navigate("/");
  }

  if (!debrief) {
    return (
      <div style={s.root}>
        <div style={s.header}>
          <p style={s.loading}>Calculating results…</p>
          <div style={s.hostBtns}>
            {isHost && (
              <button style={s.newGameBtn} onClick={endHostSession}>New Game</button>
            )}
            <button style={s.quitBtn} onClick={quitGame}>Leave</button>
          </div>
        </div>
      </div>
    );
  }

  const { leaderboard, final_price, price_high, price_low, price_vol_pct, mm_blowups, total_cycles, game_over_reason } = debrief;
  const myRow = leaderboard.find((p) => p.player_id === myPlayerId) ?? null;

  // ── Player view ─────────────────────────────────────────────────────────────
  if (!isHost && myPlayerId !== null) {
    const pnl = myRow ? parseFloat(myRow.pnl) : 0;
    const auraComment = myRow
      ? getAuraComment(myRow.rank, leaderboard.length, myPlayerId)
      : "Aura status: undetermined";

    return (
      <div style={s.playerRoot}>

        {/* Aura banner — full bleed, centred */}
        <div style={{
          ...s.auraBanner,
          ...(myRow?.rank === 1 ? s.auraBannerTop : myRow?.rank === leaderboard.length ? s.auraBannerBottom : s.auraBannerMid),
        }}>
          <p style={s.auraComment}>{auraComment}</p>
          {myRow && (
            <p style={s.auraRank}>#{myRow.rank} of {leaderboard.length}</p>
          )}
        </div>

        {/* Personal stats */}
        {myRow && (
          <div style={s.playerStatsCard}>
            <div style={s.playerStatRow}>
              <span style={s.playerStatLabel}>Net Worth</span>
              <span style={s.playerStatValue}>${fmt(myRow.net_worth)}</span>
            </div>
            <div style={s.playerStatRow}>
              <span style={s.playerStatLabel}>PnL</span>
              <span style={{ ...s.playerStatValue, color: pnl >= 0 ? "#1d6b1d" : "#7a1a1a" }}>
                {pnl >= 0 ? "+" : ""}${Math.abs(pnl).toFixed(0)}
              </span>
            </div>
            <div style={s.playerStatRow}>
              <span style={s.playerStatLabel}>Return</span>
              <span style={{ ...s.playerStatValue, color: myRow.return_pct >= 0 ? "#1d6b1d" : "#7a1a1a" }}>
                {myRow.return_pct >= 0 ? "+" : ""}{myRow.return_pct.toFixed(1)}%
              </span>
            </div>
            <div style={s.playerStatRow}>
              <span style={s.playerStatLabel}>Role</span>
              <span style={{ ...s.playerStatValue, color: myRow.role === "farmer" ? "#1d6b1d" : "#0d5858" }}>
                {myRow.role}
              </span>
            </div>
          </div>
        )}

        <button style={s.playerLeaveBtn} onClick={quitGame}>Leave Game</button>

      </div>
    );
  }

  // ── Host view ────────────────────────────────────────────────────────────────
  const winner = leaderboard[0] ?? null;
  const top3 = leaderboard.slice(0, 3);

  return (
    <div style={s.root}>

      {/* ── 1. Header ───────────────────────────────────────────────────────── */}
      <div style={s.header}>
        <div>
          <h1 style={s.title}>Game Over</h1>
          <p style={s.reason}>{game_over_reason}</p>
        </div>
        {isHost && (
          <div style={s.hostBtns}>
            <button style={s.newGameBtn} onClick={endHostSession}>New Game</button>
            <button style={s.quitBtn} onClick={quitGame}>Quit</button>
          </div>
        )}
      </div>

      {/* ── 2. Podium ───────────────────────────────────────────────────────── */}
      {leaderboard.length > 0 && (
        <div style={s.podiumRow}>
          {top3[1] ? (
            <PodiumCard player={top3[1]} highlight={top3[1].player_id === myPlayerId} />
          ) : <div />}
          {winner && (
            <PodiumCard player={winner} first highlight={winner.player_id === myPlayerId} />
          )}
          {top3[2] ? (
            <PodiumCard player={top3[2]} highlight={top3[2].player_id === myPlayerId} />
          ) : <div />}
        </div>
      )}

      {/* ── 3. Market stats ─────────────────────────────────────────────────── */}
      <div style={s.statsStrip}>
        <Stat label="Final Price" value={`$${final_price.toFixed(2)}`} />
        <Stat label="Season High" value={`$${price_high.toFixed(2)}`} color="#1d6b1d" />
        <Stat label="Season Low"  value={`$${price_low.toFixed(2)}`}  color="#7a1a1a" />
        <Stat label="Volatility"  value={`${price_vol_pct.toFixed(1)}%`} />
        <Stat label="Cycles"      value={String(total_cycles)} />
        <Stat label="MM Blowups"  value={String(mm_blowups)} />
      </div>

      {/* ── 4. Price chart ──────────────────────────────────────────────────── */}
      {priceHistory.length >= 2 && (
        <div style={s.chartCard}>
          <p style={s.sectionLabel}>Price History</p>
          <div style={s.chartBox}>
            <PriceChart history={priceHistory} />
          </div>
        </div>
      )}

      {/* ── 5. Full leaderboard ─────────────────────────────────────────────── */}
      <div style={s.card}>
        <p style={s.sectionLabel}>Leaderboard</p>
        <table style={s.table}>
          <thead>
            <tr>
              {["#", "Player", "Role", "Net Worth", "PnL", "Return"].map((h) => (
                <th key={h} style={s.th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((p) => {
              const pnl = parseFloat(p.pnl);
              const isMe = p.player_id === myPlayerId;
              return (
                <tr key={p.player_id} style={isMe ? s.myRow : undefined}>
                  <td style={s.td}>{p.rank === 1 ? "🥇" : p.rank === 2 ? "🥈" : p.rank === 3 ? "🥉" : p.rank}</td>
                  <td style={{ ...s.td, fontWeight: isMe ? "700" : "normal" }}>{p.name}</td>
                  <td style={{ ...s.td, color: p.role === "farmer" ? "#1d6b1d" : "#0d5858" }}>{p.role}</td>
                  <td style={s.td}>${fmt(p.net_worth)}</td>
                  <td style={{ ...s.td, color: pnl >= 0 ? "#1d6b1d" : "#7a1a1a" }}>
                    {pnl >= 0 ? "+" : ""}${Math.abs(pnl).toFixed(0)}
                  </td>
                  <td style={{ ...s.td, color: p.return_pct >= 0 ? "#1d6b1d" : "#7a1a1a", fontWeight: 600 }}>
                    {p.return_pct >= 0 ? "+" : ""}{p.return_pct.toFixed(1)}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ── 6. Season headlines ─────────────────────────────────────────────── */}
      {headlines.length > 0 && (
        <div style={s.card}>
          <p style={s.sectionLabel}>Season Headlines</p>
          <div style={s.headlineList}>
            {headlines.map((h, i) => (
              <div key={i} style={s.headlineRow}>
                <span style={s.headlineCycle}>Cycle {h.cycle}</span>
                <span style={s.headlineText}>{h.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── 7. Chronicle ────────────────────────────────────────────────────── */}
      <div style={s.card}>
        <p style={s.sectionLabel}>The Aura Farmers Chronicle</p>
        {debriefNarrative ? (
          <p style={s.summaryText}>{debriefNarrative}</p>
        ) : (
          <p style={s.narrativeLoading}>Correspondent filing story…</p>
        )}
      </div>

      {/* ── 8. Analyst summary (host only) ──────────────────────────────────── */}
      {isHost && adminSummary && (
        <div style={s.card}>
          <p style={s.sectionLabel}>Analyst Summary</p>
          <p style={s.summaryText}>{adminSummary.text}</p>
        </div>
      )}
    </div>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function PodiumCard({ player, first = false, highlight = false }: { player: PlayerSummary; first?: boolean; highlight?: boolean }) {
  const medals = ["🥇", "🥈", "🥉"];
  return (
    <div style={{
      ...s.podiumCard,
      ...(first ? s.podiumFirst : {}),
      ...(highlight ? s.podiumHighlight : {}),
    }}>
      <span style={s.podiumMedal}>{medals[player.rank - 1] ?? `#${player.rank}`}</span>
      <span style={s.podiumName}>{player.name}</span>
      <span style={{ ...s.podiumRole, color: player.role === "farmer" ? "#1d6b1d" : "#0d5858" }}>{player.role}</span>
      <span style={s.podiumWorth}>${fmt(player.net_worth)}</span>
      <ReturnBadge pct={player.return_pct} />
    </div>
  );
}

function ReturnBadge({ pct }: { pct: number }) {
  const positive = pct >= 0;
  return (
    <span style={{
      fontSize: "0.85rem",
      fontWeight: 700,
      color: positive ? "#1d6b1d" : "#7a1a1a",
      background: positive ? "#e8f5e8" : "#fbeaea",
      borderRadius: 4,
      padding: "0.15rem 0.5rem",
    }}>
      {positive ? "+" : ""}{pct.toFixed(1)}%
    </span>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div style={s.statCell}>
      <span style={s.statLabel}>{label}</span>
      <span style={{ ...s.statValue, ...(color ? { color } : {}) }}>{value}</span>
    </div>
  );
}

/** Format a Decimal string as a dollar amount with commas, no cents. */
function fmt(decimal: string): string {
  const n = parseFloat(decimal);
  return isNaN(n) ? "—" : n.toLocaleString("en-AU", { maximumFractionDigits: 0 });
}

// ── Styles ─────────────────────────────────────────────────────────────────────

const s = {
  root: {
    maxWidth: "min(1400px, 96vw)",
    margin: "0 auto",
    padding: "2.5rem 2rem 4rem",
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.5rem",
    minHeight: "100vh",
  },
  loading: {
    color: "#9a9a90",
    padding: "3rem",
    textAlign: "center" as const,
    fontSize: "1.1rem",
  },

  // Header
  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: "wrap" as const,
    gap: "1rem",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "800" as const,
    color: "#18181a",
    margin: 0,
    letterSpacing: "-0.02em",
  },
  reason: {
    color: "#6b6b63",
    margin: "0.25rem 0 0",
    fontSize: "1rem",
  },
  newGameBtn: {
    background: "#1d6b1d",
    color: "#fff",
    border: "none",
    padding: "0.7rem 2rem",
    borderRadius: 8,
    fontSize: "1rem",
    fontWeight: "700" as const,
    cursor: "pointer",
    flexShrink: 0,
  },
  quitBtn: {
    background: "transparent",
    color: "#7a1a1a",
    border: "2px solid #c89090",
    padding: "0.7rem 2rem",
    borderRadius: 8,
    fontSize: "1rem",
    fontWeight: "700" as const,
    cursor: "pointer",
    flexShrink: 0,
  },
  quitBar: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: "wrap" as const,
    gap: "1rem",
  },
  hostBtns: {
    display: "flex",
    gap: "0.75rem",
    alignItems: "center",
    flexShrink: 0,
    flexWrap: "wrap" as const,
  },

  // Aura banner
  auraBanner: {
    borderRadius: 12,
    padding: "2rem 1.5rem",
    textAlign: "center" as const,
    border: "2px solid",
  },
  auraBannerTop: {
    background: "linear-gradient(135deg, #fffde7 0%, #fff9c4 100%)",
    borderColor: "#f0c030",
  },
  auraBannerMid: {
    background: "#f8f7f5",
    borderColor: "#e2ddd6",
  },
  auraBannerBottom: {
    background: "linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%)",
    borderColor: "#e8a0a0",
  },
  auraComment: {
    margin: 0,
    fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
    fontWeight: "800" as const,
    color: "#18181a",
    lineHeight: 1.3,
  },
  auraRank: {
    margin: "0.6rem 0 0",
    fontSize: "1rem",
    color: "#6b6b63",
    fontWeight: 500,
  },

  // Player-only debrief layout
  playerRoot: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "stretch",
    gap: "1rem",
    padding: "1.5rem 1rem 3rem",
    minHeight: "100vh",
    maxWidth: "480px",
    margin: "0 auto",
    width: "100%",
  },
  playerStatsCard: {
    background: "#ffffff",
    border: "1px solid #e2ddd6",
    borderRadius: 10,
    overflow: "hidden",
  },
  playerStatRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.75rem 1.25rem",
    borderBottom: "1px solid #f0ede8",
  },
  playerStatLabel: {
    fontSize: "0.85rem",
    color: "#8a8a80",
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "0.06em",
  },
  playerStatValue: {
    fontSize: "1.1rem",
    fontWeight: "700" as const,
    color: "#18181a",
  },
  playerLeaveBtn: {
    background: "transparent",
    color: "#7a1a1a",
    border: "2px solid #c89090",
    padding: "0.85rem",
    borderRadius: 8,
    fontSize: "1rem",
    fontWeight: "700" as const,
    cursor: "pointer",
    width: "100%",
    marginTop: "0.5rem",
  },

  // Podium
  podiumRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1.15fr 1fr",
    gap: "0.75rem",
    alignItems: "flex-end",
  },
  podiumCard: {
    background: "#ffffff",
    border: "1px solid #e2ddd6",
    borderRadius: 10,
    padding: "1.25rem 1rem",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "0.35rem",
    textAlign: "center" as const,
  },
  podiumFirst: {
    paddingTop: "1.75rem",
    paddingBottom: "1.75rem",
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
  },
  podiumHighlight: {
    border: "2px solid #9ac89a",
    background: "#f4fbf4",
  },
  podiumMedal: { fontSize: "2rem", lineHeight: 1 },
  podiumName: { fontSize: "1.1rem", fontWeight: "700" as const, color: "#18181a" },
  podiumRole: { fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.06em" },
  podiumWorth: { fontSize: "1.2rem", fontWeight: "800" as const, color: "#18181a", marginTop: "0.1rem" },

  // Stats strip
  statsStrip: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: "0.75rem",
  },
  statCell: {
    background: "#ffffff",
    border: "1px solid #e2ddd6",
    borderRadius: 8,
    padding: "0.85rem 0.75rem",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "0.2rem",
    textAlign: "center" as const,
  },
  statLabel: { fontSize: "0.7rem", color: "#9a9a90", textTransform: "uppercase" as const, letterSpacing: "0.08em", fontWeight: 600 },
  statValue: { fontSize: "1.2rem", fontWeight: "800" as const, color: "#18181a" },

  // Chart
  chartCard: {
    background: "#ffffff",
    border: "1px solid #e2ddd6",
    borderRadius: 10,
    padding: "1.25rem",
  },
  chartBox: { height: "clamp(220px, 18vw, 400px)", borderRadius: 6, overflow: "hidden", marginTop: "0.75rem" },

  // Generic card
  card: {
    background: "#ffffff",
    border: "1px solid #e2ddd6",
    borderRadius: 10,
    padding: "1.25rem 1.5rem",
  },
  sectionLabel: {
    margin: "0 0 0.85rem",
    fontSize: "0.75rem",
    color: "#9a9a90",
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    fontWeight: 700,
  },

  // Leaderboard table
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    fontSize: "1rem",
  },
  th: {
    textAlign: "left" as const,
    padding: "0.4rem 0.85rem 0.65rem",
    borderBottom: "1px solid #e2ddd6",
    color: "#9a9a90",
    fontSize: "0.75rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.07em",
    fontWeight: 700,
  },
  td: {
    padding: "0.6rem 0.85rem",
    borderBottom: "1px solid #f0ede8",
    color: "#2a2a26",
    fontSize: "1rem",
  },
  myRow: { background: "#f4fbf4" },

  // Headlines
  headlineList: { display: "flex", flexDirection: "column" as const, gap: "0.6rem" },
  headlineRow: {
    display: "flex",
    gap: "1rem",
    alignItems: "baseline",
    borderLeft: "3px solid #e2ddd6",
    paddingLeft: "0.75rem",
  },
  headlineCycle: { fontSize: "0.75rem", color: "#9a9a90", fontWeight: 600, flexShrink: 0, textTransform: "uppercase" as const, letterSpacing: "0.05em" },
  headlineText: { fontSize: "0.95rem", color: "#3a3a36", lineHeight: 1.5, fontStyle: "italic" as const },

  // Narrative / summary text
  summaryText: { margin: 0, color: "#3a3a36", fontSize: "1rem", lineHeight: 1.8, whiteSpace: "pre-wrap" as const },
  narrativeLoading: { margin: 0, color: "#9a9a90", fontStyle: "italic" as const, fontSize: "0.95rem" },
} as const;
