/**
 * DebriefScreen — shown when phase === "game_over".
 *
 * Layout:
 *  1. Header — reason + New Game button (host only)
 *  2. Podium — top 3 players
 *  3. My result card (players only, not host)
 *  4. Market stats strip
 *  5. Price history chart
 *  6. Full leaderboard table
 *  7. Season headlines
 *  8. Analyst summary (host only)
 */
import { useGameDispatch, useGameState } from "../state/store";
import { useNavigate } from "../router/index";
import PriceChart from "./PriceChart";
import type { PlayerSummary } from "../ws/protocol";

const SS_HOST = "aura_is_host";

export default function DebriefScreen() {
  const { debrief, headlines, priceHistory, myPlayerId, isHost, adminSummary } = useGameState();
  const dispatch = useGameDispatch();
  const navigate = useNavigate();

  function endHostSession() {
    sessionStorage.removeItem(SS_HOST);
    dispatch({ type: "clear_host" });
    navigate("/create");
  }

  if (!debrief) {
    return (
      <div style={s.root}>
        <p style={s.loading}>Calculating results…</p>
      </div>
    );
  }

  const { leaderboard, final_price, price_high, price_low, price_vol_pct, mm_blowups, total_cycles, game_over_reason } = debrief;

  const winner = leaderboard[0] ?? null;
  const top3 = leaderboard.slice(0, 3);
  const myRow = leaderboard.find((p) => p.player_id === myPlayerId) ?? null;

  return (
    <div style={s.root}>

      {/* ── 1. Header ────────────────────────────────────────────────────────── */}
      <div style={s.header}>
        <div>
          <h1 style={s.title}>Game Over</h1>
          <p style={s.reason}>{game_over_reason}</p>
        </div>
        {isHost && (
          <button style={s.newGameBtn} onClick={endHostSession}>
            New Game
          </button>
        )}
      </div>

      {/* ── 2. Podium ────────────────────────────────────────────────────────── */}
      {leaderboard.length > 0 && (
        <div style={s.podiumRow}>
          {/* 2nd place — left */}
          {top3[1] ? (
            <PodiumCard player={top3[1]} highlight={top3[1].player_id === myPlayerId} />
          ) : <div />}

          {/* 1st place — centre, taller */}
          {winner && (
            <PodiumCard player={winner} first highlight={winner.player_id === myPlayerId} />
          )}

          {/* 3rd place — right */}
          {top3[2] ? (
            <PodiumCard player={top3[2]} highlight={top3[2].player_id === myPlayerId} />
          ) : <div />}
        </div>
      )}

      {/* ── 3. My result (non-host players not already in podium) ─────────────── */}
      {myRow && !isHost && myRow.rank > 3 && (
        <div style={s.myResult}>
          <span style={s.myRank}>#{myRow.rank}</span>
          <div style={s.myResultBody}>
            <span style={s.myResultName}>{myRow.name}</span>
            <span style={s.myResultRole}>{myRow.role}</span>
          </div>
          <div style={s.myResultStats}>
            <span style={s.myNetWorth}>${fmt(myRow.net_worth)}</span>
            <ReturnBadge pct={myRow.return_pct} />
          </div>
        </div>
      )}

      {/* ── 4. Market stats ──────────────────────────────────────────────────── */}
      <div style={s.statsStrip}>
        <Stat label="Final Price" value={`$${final_price.toFixed(2)}`} />
        <Stat label="Season High" value={`$${price_high.toFixed(2)}`} color="#1d6b1d" />
        <Stat label="Season Low"  value={`$${price_low.toFixed(2)}`}  color="#7a1a1a" />
        <Stat label="Volatility"  value={`${price_vol_pct.toFixed(1)}%`} />
        <Stat label="Cycles"      value={String(total_cycles)} />
        <Stat label="MM Blowups"  value={String(mm_blowups)} />
      </div>

      {/* ── 5. Price chart ───────────────────────────────────────────────────── */}
      {priceHistory.length >= 2 && (
        <div style={s.chartCard}>
          <p style={s.sectionLabel}>Price History</p>
          <div style={s.chartBox}>
            <PriceChart history={priceHistory} />
          </div>
        </div>
      )}

      {/* ── 6. Full leaderboard ──────────────────────────────────────────────── */}
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

      {/* ── 7. Season headlines ──────────────────────────────────────────────── */}
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

      {/* ── 8. Analyst summary (host only) ───────────────────────────────────── */}
      {isHost && adminSummary && (
        <div style={s.card}>
          <p style={s.sectionLabel}>Analyst Summary</p>
          <p style={s.summaryText}>{adminSummary}</p>
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
    alignSelf: "center" as const,
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

  // My result (non-podium)
  myResult: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    background: "#f4fbf4",
    border: "2px solid #9ac89a",
    borderRadius: 10,
    padding: "1rem 1.25rem",
    flexWrap: "wrap" as const,
  },
  myRank: { fontSize: "1.8rem", fontWeight: "800" as const, color: "#1d6b1d", minWidth: 48 },
  myResultBody: { display: "flex", flexDirection: "column" as const, flex: 1, minWidth: 0 },
  myResultName: { fontSize: "1.15rem", fontWeight: "700" as const, color: "#18181a" },
  myResultRole: { fontSize: "0.8rem", color: "#8a8a80", textTransform: "uppercase" as const, letterSpacing: "0.06em" },
  myResultStats: { display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 },
  myNetWorth: { fontSize: "1.2rem", fontWeight: "700" as const, color: "#18181a" },

  // Stats strip
  statsStrip: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: "0.75rem",
  },
  // (responsive override applied inline where needed)
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

  // Admin summary
  summaryText: { margin: 0, color: "#3a3a36", fontSize: "1rem", lineHeight: 1.8, whiteSpace: "pre-wrap" as const },
} as const;
