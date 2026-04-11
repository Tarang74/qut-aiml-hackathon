/**
 * LobbyScreen — /{code}
 *
 * Shown when a player has a valid room code (either from URL or entered on
 * JoinScreen). They pick a name + role and click Join.
 *
 * ── For teammates ────────────────────────────────────────────────────────────
 * Replace the layout below with real design.
 * Required behaviour: call `send({ type: "join", name, role })` on submit.
 *
 * Available hooks:
 *   const state = useGameState();  // read-only
 *   const send  = useWsSend();     // send a ClientMsg
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { useReducer } from "react";
import { useGameState, useGameDispatch, useWsSend } from "../state/store";
import { useNavigate } from "../router";
import type { Role } from "../ws/protocol";

interface Props {
  code: string;
}

interface LocalState {
  name: string;
  role: Role;
}

type LocalAction =
  | { type: "set_name"; value: string }
  | { type: "set_role"; value: Role };

function localReducer(state: LocalState, action: LocalAction): LocalState {
  switch (action.type) {
    case "set_name":
      return { ...state, name: action.value };
    case "set_role":
      return { ...state, role: action.value };
  }
}

export default function LobbyScreen({ code }: Props) {
  const { connected, error } = useGameState();
  const globalDispatch = useGameDispatch();
  const send = useWsSend();
  const navigate = useNavigate();

  const [form, dispatch] = useReducer(localReducer, {
    name: "",
    role: "trader",
  });

  function handleJoin() {
    const name = form.name.trim();
    if (!name || !connected) return;
    const nonce = Math.random().toString(36).slice(2, 10);
    globalDispatch({ type: "set_join_nonce", nonce });
    send({ type: "join", name, role: form.role, client_nonce: nonce });
  }

  // ── Render ────────────────────────────────────────────────────────────────
  // TODO: replace with real design / Three.js lobby scene
  return (
    <div style={styles.root}>
      {/* Room code badge */}
      <div style={styles.codeBadge}>
        Room <span style={styles.codeValue}>{code}</span>
      </div>

      <h1 style={styles.title}>🌽 Aura Farmers</h1>

      {!connected && (
        <p style={styles.notice}>Connecting to server…</p>
      )}
      {error && <p style={{ ...styles.notice, color: "#ff6b6b" }}>{error}</p>}

      <div style={styles.form}>
        <label style={styles.label}>
          Name
          <input
            style={styles.input}
            value={form.name}
            maxLength={24}
            placeholder="e.g. Corn Baron"
            disabled={!connected}
            onChange={(e) =>
              dispatch({ type: "set_name", value: e.target.value })
            }
            onKeyDown={(e) => e.key === "Enter" && handleJoin()}
            autoFocus
          />
        </label>

        <label style={styles.label}>
          Role
          <select
            style={styles.input}
            value={form.role}
            disabled={!connected}
            onChange={(e) =>
              dispatch({ type: "set_role", value: e.target.value as Role })
            }
          >
            <option value="trader">📈 Trader — $15k, pure market play</option>
            <option value="farmer">🚜 Farmer — $10k, starts with a farm</option>
          </select>
        </label>

        <button
          style={{
            ...styles.btn,
            opacity: connected && form.name.trim() ? 1 : 0.4,
          }}
          disabled={!connected || !form.name.trim()}
          onClick={handleJoin}
        >
          Join Game
        </button>

        <p style={styles.backLink}>
          <span style={styles.link} onClick={() => navigate("/join")}>
            ← Wrong code?
          </span>
        </p>
      </div>
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
    gap: "1rem",
    padding: "2rem",
  },
  codeBadge: {
    fontSize: "0.8rem",
    color: "#555",
    background: "#111",
    border: "1px solid #2a2a2a",
    borderRadius: 20,
    padding: "0.3rem 0.9rem",
    letterSpacing: "0.05em",
  },
  codeValue: { color: "#7ec87e", fontWeight: "bold" as const, letterSpacing: "0.2em" },
  title: { fontSize: "2rem" },
  notice: { color: "#aaa", fontSize: "0.85rem" },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.75rem",
    width: "100%",
    maxWidth: 360,
  },
  label: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.25rem",
    fontSize: "0.85rem",
    color: "#aaa",
  },
  input: {
    background: "#1a1a1a",
    border: "1px solid #333",
    color: "#e0e0e0",
    padding: "0.5rem 0.75rem",
    borderRadius: 4,
    fontFamily: "inherit",
    fontSize: "1rem",
  },
  btn: {
    background: "#2a7a2a",
    color: "#fff",
    border: "none",
    padding: "0.6rem 1.5rem",
    borderRadius: 4,
    fontFamily: "inherit",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "0.25rem",
  },
  backLink: { textAlign: "center" as const, fontSize: "0.8rem" },
  link: { color: "#555", cursor: "pointer", textDecoration: "underline" },
} as const;
