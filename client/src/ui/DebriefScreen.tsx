/**
 * DebriefScreen — shown when phase === "game_over".
 *
 * Displays computed end-of-game statistics: leaderboard, PnL, price stats.
 * No LLM — all numbers are calculated server-side from world state.
 *
 * ── For teammates ────────────────────────────────────────────────────────────
 * Replace the placeholder layout with your real end-screen design.
 * All the data you need lives in `state.debrief` (DebriefStats) and the
 * usual state fields (priceHistory, headlines, myName, etc.).
 *
 * state.debrief:
 *   .leaderboard[]   — sorted best-first, each has .name .rank .net_worth
 *                      .pnl .return_pct .role
 *   .final_price     — final CornCo price
 *   .price_high / .price_low
 *   .price_vol_pct   — cycle-to-cycle volatility %
 *   .mm_blowups      — how many market makers blew up
 *   .game_over_reason
 *   .total_cycles
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { useGameDispatch, useGameState } from "../state/store";
import { useNavigate } from "../router/index";

const SS_HOST = "aura_is_host";

export default function DebriefScreen() {
  const { debrief, headlines, myName, myPlayerId, isHost } = useGameState();
  const dispatch = useGameDispatch();
  const navigate = useNavigate();

  function endHostSession() {
    sessionStorage.removeItem(SS_HOST);
    dispatch({ type: "clear_host" });
    navigate("/create");
  }

  if (!debrief) {
    return (
      <div style={styles.root}>
        <h1 style={styles.title}>Game Over</h1>
        <p style={{ color: "#9a9a90" }}>Calculating results…</p>
      </div>
    );
  }

  const myRow = debrief.leaderboard.find((p) => p.player_id === myPlayerId);

  // ── Render ────────────────────────────────────────────────────────────────
  // TODO: replace with real end-screen design / Three.js animation
  return (
    <div style={styles.root}>
      <h1 style={styles.title}>Game Over</h1>
      <p style={styles.sub}>{debrief.game_over_reason}</p>

      {/* ── My result ─────────────────────────────────────────────────────── */}
      {myRow && (
        <div style={styles.myResult}>
          <span style={styles.rank}>#{myRow.rank}</span>
          <div>
            <strong>{myName}</strong> — {myRow.role}
            <br />
            <span style={styles.stat}>
              Net worth: ${parseFloat(myRow.net_worth).toFixed(0)} ·{" "}
            </span>
            <span
              style={{
                ...styles.stat,
                color: parseFloat(myRow.pnl) >= 0 ? "#1d6b1d" : "#7a1a1a",
              }}
            >
              {myRow.return_pct >= 0 ? "+" : ""}
              {myRow.return_pct.toFixed(1)}% return
            </span>
          </div>
        </div>
      )}

      {/* ── Market stats ──────────────────────────────────────────────────── */}
      <section style={styles.statsGrid}>
        <Stat label="Final Price" value={`$${debrief.final_price.toFixed(2)}`} />
        <Stat label="High" value={`$${debrief.price_high.toFixed(2)}`} />
        <Stat label="Low" value={`$${debrief.price_low.toFixed(2)}`} />
        <Stat label="Volatility" value={`${debrief.price_vol_pct.toFixed(2)}%`} />
        <Stat label="Cycles" value={debrief.total_cycles.toString()} />
        <Stat label="MM Blowups" value={debrief.mm_blowups.toString()} />
      </section>

      {/* ── Leaderboard ───────────────────────────────────────────────────── */}
      <section>
        <h2 style={styles.sectionTitle}>Leaderboard</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              {["#", "Player", "Role", "Net Worth", "PnL", "Return"].map((h) => (
                <th key={h} style={styles.th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {debrief.leaderboard.map((p) => {
              const pnl = parseFloat(p.pnl);
              const isMe = p.player_id === myPlayerId;
              return (
                <tr key={p.player_id} style={isMe ? styles.myRow : undefined}>
                  <td style={styles.td}>{p.rank}</td>
                  <td style={{ ...styles.td, fontWeight: isMe ? "bold" : "normal" }}>{p.name}</td>
                  <td style={styles.td}>{p.role}</td>
                  <td style={styles.td}>${parseFloat(p.net_worth).toFixed(0)}</td>
                  <td style={{ ...styles.td, color: pnl >= 0 ? "#1d6b1d" : "#7a1a1a" }}>
                    {pnl >= 0 ? "+" : ""}${pnl.toFixed(0)}
                  </td>
                  <td style={{ ...styles.td, color: p.return_pct >= 0 ? "#1d6b1d" : "#7a1a1a" }}>
                    {p.return_pct >= 0 ? "+" : ""}
                    {p.return_pct.toFixed(1)}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      {/* ── Season headlines ──────────────────────────────────────────────── */}
      {headlines.length > 0 && (
        <section>
          <h2 style={styles.sectionTitle}>Season Headlines</h2>
          {headlines.map((h, i) => (
            <p key={i} style={styles.headline}>
              <span style={{ color: "#9a9a90" }}>Cycle {h.cycle}:</span> {h.text}
            </p>
          ))}
        </section>
      )}

      {/* ── Host action ───────────────────────────────────────────────────── */}
      {isHost && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button style={styles.newGameBtn} onClick={endHostSession}>
            New Game
          </button>
        </div>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div style={styles.statCard}>
      <div style={styles.statLabel}>{label}</div>
      <div style={styles.statValue}>{value}</div>
    </div>
  );
}

const styles = {
  root: {
    maxWidth: 860,
    margin: "0 auto",
    padding: "3rem 2rem",
    display: "flex",
    flexDirection: "column" as const,
    gap: "2rem",
    background: "#f5f3ef",
    minHeight: "100vh",
  },
  title: { fontSize: "2rem", color: "#18181a" },
  sub: { color: "#7a7a70" },
  myResult: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    background: "#ffffff",
    border: "1px solid #9ac89a",
    borderRadius: 6,
    padding: "1rem 1.25rem",
  },
  rank: { fontSize: "2rem", color: "#1d6b1d", fontWeight: "bold" as const, minWidth: 48 },
  stat: { fontSize: "0.9rem", color: "#7a7a70" },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "0.75rem",
  },
  statCard: {
    background: "#ffffff",
    border: "1px solid #ddd9d2",
    borderRadius: 4,
    padding: "0.75rem 1rem",
  },
  statLabel: { fontSize: "0.7rem", color: "#9a9a90", textTransform: "uppercase" as const, letterSpacing: "0.08em" },
  statValue: { fontSize: "1.2rem", fontWeight: "bold" as const, marginTop: "0.2rem", color: "#18181a" },
  sectionTitle: {
    fontSize: "0.75rem",
    color: "#9a9a90",
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    marginBottom: "0.75rem",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    fontSize: "0.9rem",
    background: "#ffffff",
    borderRadius: 6,
    overflow: "hidden",
  },
  th: {
    textAlign: "left" as const,
    padding: "0.4rem 0.75rem",
    borderBottom: "1px solid #ddd9d2",
    color: "#9a9a90",
    fontSize: "0.75rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.06em",
    background: "#f8f6f2",
  },
  td: {
    padding: "0.45rem 0.75rem",
    borderBottom: "1px solid #e8e4df",
    color: "#3a3a36",
  },
  myRow: { background: "#edf8ed" },
  headline: {
    fontSize: "0.85rem",
    color: "#4a4a44",
    borderLeft: "2px solid #ddd9d2",
    paddingLeft: "0.75rem",
    marginBottom: "0.4rem",
  },
  newGameBtn: {
    background: "#e8f5e8",
    border: "1px solid #4a9a4a",
    color: "#1d6b1d",
    fontSize: "1rem",
    fontWeight: "bold" as const,
    padding: "0.7rem 2.5rem",
    borderRadius: 6,
    cursor: "pointer",
    fontFamily: "inherit",
  },
} as const;
