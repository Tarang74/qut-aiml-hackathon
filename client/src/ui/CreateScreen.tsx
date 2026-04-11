/**
 * CreateScreen — /create
 *
 * Admin-only page. Generates a random 4-digit room code and shows the
 * shareable join link. No backend involvement — the code is purely a
 * URL-based invite. Anyone with the link can join the one running game.
 */
import { useReducer } from "react";
import { useNavigate } from "../router";
import { useGameDispatch, useGameState } from "../state/store";

interface LocalState {
  code: string | null;
  copied: boolean;
}

type LocalAction =
  | { type: "generate_with_code"; code: string }
  | { type: "set_copied"; value: boolean };

function localReducer(state: LocalState, action: LocalAction): LocalState {
  switch (action.type) {
    case "generate_with_code":
      return { ...state, code: action.code, copied: false };
    case "set_copied":
      return { ...state, copied: action.value };
  }
}

export default function CreateScreen() {
  const navigate = useNavigate();
  const gameDispatch = useGameDispatch();
  const { gameCode, knownPlayers } = useGameState();
  const [local, dispatch] = useReducer(localReducer, { code: gameCode, copied: false });

  const joinUrl = local.code
    ? `${window.location.origin}/${local.code}`
    : null;

  async function handleCopy() {
    if (!joinUrl) return;
    await navigator.clipboard.writeText(joinUrl);
    dispatch({ type: "set_copied", value: true });
    setTimeout(() => dispatch({ type: "set_copied", value: false }), 2000);
  }

  return (
    <div style={styles.root}>
      <h1 style={styles.title}>Aura Farmers</h1>

      {!local.code ? (
        <button
          style={styles.btn}
          onClick={() => {
            const code = String(Math.floor(1000 + Math.random() * 9000));
            gameDispatch({ type: "set_game_code", code });
            dispatch({ type: "generate_with_code", code });
          }}
        >
          Generate Room Code
        </button>
      ) : (
        <div style={styles.codeBlock}>
          <div style={styles.code}>{local.code}</div>

          <div style={styles.urlRow}>
            <span style={styles.url}>{joinUrl}</span>
            <button style={styles.copyBtn} onClick={handleCopy}>
              {local.copied ? "✓ Copied" : "Copy"}
            </button>
          </div>

          {/* ── Waiting players ──────────────────────────────────────────── */}
          <div style={styles.roster}>
            <p style={styles.rosterTitle}>
              Players waiting ({knownPlayers.length})
            </p>
            {knownPlayers.length === 0 ? (
              <p style={styles.rosterEmpty}>No one has joined yet.</p>
            ) : (
              <div style={styles.rosterList}>
                {knownPlayers.map((p, i) => (
                  <div key={p.id} style={styles.rosterRow}>
                    <span style={styles.rosterNum}>{i + 1}</span>
                    <span style={styles.rosterName}>{p.name}</span>
                    <span
                      style={{
                        ...styles.rosterRole,
                        color: p.role === "farmer" ? "#1d6b1d" : "#0d5858",
                      }}
                    >
                      {p.role}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={styles.actions}>
            <button
              style={styles.btn}
              onClick={() => {
                gameDispatch({ type: "set_host" });
                navigate("/host");
              }}
            >
              Watch as Host →
            </button>
            <button
              style={{ ...styles.btn, background: "#f5f3ef", color: "#6b6b63", border: "1.5px solid #e2ddd6" }}
              onClick={() => {
                const code = String(Math.floor(1000 + Math.random() * 9000));
                gameDispatch({ type: "set_game_code", code });
                dispatch({ type: "generate_with_code", code });
              }}
            >
              New Code
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  root: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    gap: "1.25rem",
    padding: "1.5rem 1rem",
    background: "#f5f3ef",
  },
  title: { fontSize: "2.2rem", margin: 0, color: "#18181a", fontWeight: "800" as const, letterSpacing: "-0.02em" },
  sub: { color: "#8a8a80", textAlign: "center" as const, maxWidth: 360, margin: 0, fontSize: "0.9rem" },
  btn: {
    background: "#1d6b1d",
    color: "#fff",
    border: "none",
    padding: "0.7rem 1.5rem",
    borderRadius: 8,
    fontFamily: "inherit",
    fontSize: "0.95rem",
    cursor: "pointer",
    fontWeight: "700" as const,
  },
  codeBlock: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "0.75rem",
    background: "#ffffff",
    border: "1px solid #e2ddd6",
    borderRadius: 12,
    padding: "1.5rem 1.25rem",
    width: "100%",
    maxWidth: 420,
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
  },
  code: {
    fontSize: "3.5rem",
    fontWeight: "800" as const,
    letterSpacing: "0.25em",
    color: "#1d6b1d",
  },
  hint: { color: "#8a8a80", fontSize: "0.8rem", margin: 0 },
  urlRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    background: "#f5f3ef",
    border: "1px solid #ddd9d2",
    borderRadius: 4,
    padding: "0.4rem 0.75rem",
    width: "100%",
  },
  url: {
    flex: 1,
    fontSize: "0.85rem",
    color: "#5a5a54",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap" as const,
  },
  copyBtn: {
    background: "transparent",
    border: "1px solid #c8c4be",
    color: "#5a5a54",
    padding: "0.2rem 0.6rem",
    borderRadius: 3,
    fontFamily: "inherit",
    fontSize: "0.8rem",
    cursor: "pointer",
    flexShrink: 0,
  },
  roster: {
    alignSelf: "stretch" as const,
    borderTop: "1px solid #e8e4df",
    paddingTop: "0.75rem",
    marginTop: "0.25rem",
  },
  rosterTitle: {
    margin: "0 0 0.5rem",
    fontSize: "0.75rem",
    color: "#8a8a80",
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
  },
  rosterEmpty: { margin: 0, fontSize: "0.85rem", color: "#b0aea8" },
  rosterList: { display: "flex", flexDirection: "column" as const, gap: "0.35rem" },
  rosterRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    fontSize: "0.9rem",
  },
  rosterNum: { color: "#b0aea8", fontSize: "0.75rem", width: 16 },
  rosterName: { flex: 1, color: "#3a3a36" },
  rosterRole: { fontSize: "0.75rem" },
  actions: { display: "flex", gap: "0.75rem", marginTop: "0.5rem" },
} as const;
