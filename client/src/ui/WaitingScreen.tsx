/**
 * WaitingScreen — shown to players who have joined but the host hasn't started yet.
 */
import { useGameState } from "../state/store";

export default function WaitingScreen() {
  const state = useGameState();

  return (
    <div style={s.root}>
      <div style={s.card}>
        <p style={s.label}>AURA FARMERS</p>
        <h1 style={s.heading}>Waiting for host to start…</h1>
        <p style={s.sub}>
          You've joined as <strong style={s.name}>{state.myName}</strong> —{" "}
          <span style={{ color: state.myRole === "farmer" ? "#7ec87e" : "#7ec8c8" }}>
            {state.myRole}
          </span>
        </p>
        <div style={s.dots}>
          <span style={s.dot} />
          <span style={{ ...s.dot, animationDelay: "0.3s" }} />
          <span style={{ ...s.dot, animationDelay: "0.6s" }} />
        </div>
      </div>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:.2} 50%{opacity:1} }
      `}</style>
    </div>
  );
}

const s = {
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "#f5f3ef",
    fontFamily: "inherit",
    padding: "1.5rem 1rem",
  },
  card: {
    textAlign: "center" as const,
    padding: "2.5rem 2rem",
    background: "#ffffff",
    border: "1px solid #e2ddd6",
    borderRadius: 12,
    maxWidth: 400,
    width: "100%",
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
  },
  label: {
    margin: "0 0 0.5rem",
    fontSize: "0.65rem",
    color: "#9a9a90",
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    fontWeight: "600" as const,
  },
  heading: {
    margin: "0 0 0.75rem",
    fontSize: "1.3rem",
    color: "#18181a",
    fontWeight: "700" as const,
    lineHeight: 1.3,
  },
  sub: {
    margin: "0 0 1.5rem",
    fontSize: "0.9rem",
    color: "#6b6b63",
  },
  name: { color: "#1d6b1d", fontWeight: "700" as const },
  dots: { display: "flex", justifyContent: "center", gap: "0.5rem" },
  dot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#c8c4be",
    display: "inline-block",
    animation: "pulse 1.2s ease-in-out infinite",
  },
} as const;
