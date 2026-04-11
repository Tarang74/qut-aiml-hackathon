/**
 * JoinScreen — / and /join
 *
 * Shows active game if one exists (gameCode in state), otherwise shows a code
 * entry form so players can paste the link or type the code manually.
 */
import { useReducer } from "react";
import { useNavigate } from "../router";
import { useGameState } from "../state/store";

interface LocalState {
  value: string;
  error: string | null;
  showManual: boolean;
}

type LocalAction =
  | { type: "set_value"; value: string }
  | { type: "set_error"; msg: string }
  | { type: "show_manual" };

function localReducer(state: LocalState, action: LocalAction): LocalState {
  switch (action.type) {
    case "set_value":
      return { ...state, value: action.value.replace(/\D/g, "").slice(0, 4), error: null };
    case "set_error":
      return { ...state, error: action.msg };
    case "show_manual":
      return { ...state, showManual: true };
  }
}

export default function JoinScreen() {
  const navigate = useNavigate();
  const { gameCode, phase, cycle, knownPlayers } = useGameState();
  const [local, dispatch] = useReducer(localReducer, { value: "", error: null, showManual: false });

  const hasActiveGame = gameCode !== null;
  const gameIsLive = phase === "decision" || phase === "resolving";

  function handleSubmit() {
    if (local.value.length !== 4) {
      dispatch({ type: "set_error", msg: "Enter the 4-digit code from your host." });
      return;
    }
    navigate(`/${local.value}`);
  }

  return (
    <div style={s.root}>
      <h1 style={s.title}>🌽 Aura Farmers</h1>

      {/* ── Active game card ──────────────────────────────────────────────── */}
      {hasActiveGame && (
        <div style={s.gameCard}>
          <div style={s.gameCardTop}>
            <span style={{ ...s.dot, background: gameIsLive ? "#7ec87e" : "#e0b84b" }} />
            <span style={s.gameStatus}>
              {gameIsLive ? `Game in progress — Cycle ${cycle}` : "Game lobby open"}
            </span>
          </div>
          {knownPlayers.length > 0 && (
            <p style={s.playerCount}>{knownPlayers.length} player{knownPlayers.length !== 1 ? "s" : ""} in game</p>
          )}
          <button style={s.joinBtn} onClick={() => navigate(`/${gameCode}`)}>
            Join Game →
          </button>
        </div>
      )}

      {/* ── Manual code entry ─────────────────────────────────────────────── */}
      {(!hasActiveGame || local.showManual) ? (
        <div style={s.form}>
          {hasActiveGame && <p style={s.orDivider}>— or enter a different code —</p>}
          {!hasActiveGame && <p style={s.sub}>Enter your room code to join a game.</p>}
          <input
            style={s.codeInput}
            value={local.value}
            inputMode="numeric"
            placeholder="0000"
            maxLength={4}
            onChange={(e) => dispatch({ type: "set_value", value: e.target.value })}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            autoFocus={!hasActiveGame}
          />
          {local.error && <p style={s.error}>{local.error}</p>}
          <button
            style={{ ...s.manualBtn, opacity: local.value.length === 4 ? 1 : 0.4 }}
            onClick={handleSubmit}
          >
            Join →
          </button>
        </div>
      ) : (
        <p style={s.manualLink} onClick={() => dispatch({ type: "show_manual" })}>
          Have a different code?
        </p>
      )}

      <p style={s.adminLink}>
        Hosting?{" "}
        <span style={s.link} onClick={() => navigate("/create")}>
          Create a game
        </span>
      </p>
    </div>
  );
}

const s = {
  root: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    gap: "1rem",
    padding: "1.5rem 1rem",
  },
  title: { fontSize: "2.2rem", fontWeight: "800" as const, letterSpacing: "-0.02em", marginBottom: "0.25rem" },
  gameCard: {
    background: "#ffffff",
    border: "1px solid #e2ddd6",
    borderRadius: 12,
    padding: "1.1rem 1.25rem",
    width: "100%",
    maxWidth: 320,
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.6rem",
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
  },
  gameCardTop: { display: "flex", alignItems: "center", gap: "0.5rem" },
  dot: { width: 8, height: 8, borderRadius: "50%", flexShrink: 0 },
  gameStatus: { fontSize: "0.9rem", color: "#18181a", fontWeight: "600" as const },
  playerCount: { fontSize: "0.75rem", color: "#8a8a80", margin: 0 },
  joinBtn: {
    background: "#1d6b1d",
    color: "#fff",
    border: "none",
    padding: "0.7rem",
    borderRadius: 8,
    fontFamily: "inherit",
    fontSize: "0.95rem",
    fontWeight: "600" as const,
    cursor: "pointer",
    marginTop: "0.25rem",
  },
  sub: { color: "#8a8a80", margin: 0, fontSize: "0.875rem" },
  orDivider: { color: "#9a9a90", fontSize: "0.75rem", margin: "0.25rem 0", textAlign: "center" as const },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "0.6rem",
    width: "100%",
    maxWidth: 260,
  },
  codeInput: {
    background: "#ffffff",
    border: "1.5px solid #d1cbc3",
    color: "#18181a",
    padding: "0.75rem",
    borderRadius: 8,
    fontFamily: "inherit",
    fontSize: "2rem",
    fontWeight: "700" as const,
    letterSpacing: "0.4em",
    textAlign: "center" as const,
    width: "100%",
  },
  error: { color: "#b94040", fontSize: "0.8rem", margin: 0, textAlign: "center" as const },
  manualBtn: {
    background: "#1d6b1d",
    color: "#fff",
    border: "none",
    padding: "0.7rem 2rem",
    borderRadius: 8,
    fontFamily: "inherit",
    fontSize: "0.95rem",
    fontWeight: "600" as const,
    cursor: "pointer",
    width: "100%",
  },
  manualLink: { color: "#8a8a80", fontSize: "0.8rem", cursor: "pointer", textDecoration: "underline" as const },
  adminLink: { color: "#8a8a80", fontSize: "0.8rem", marginTop: "0.5rem" },
  link: { color: "#1d6b1d", cursor: "pointer", textDecoration: "underline" as const, fontWeight: "500" as const },
} as const;
