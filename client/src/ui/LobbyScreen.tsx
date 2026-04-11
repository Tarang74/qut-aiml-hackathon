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

        {/* Role tip card */}
        {form.role === "trader" ? (
          <div style={styles.roleCard}>
            <p style={styles.roleCardTitle}>📈 Trader</p>
            <p style={styles.roleCardText}>
              You start with <strong>$15,000 cash</strong> and no farm. Your edge is the market: buy &amp; sell CornCo shares, write options to collect premium, and use power moves like <em>Corner Market</em> or <em>Dump All</em> to swing the price. Watch bid/ask depth and ride the momentum.
            </p>
            <p style={styles.roleCardHint}>Best for: market-savvy players who like reading charts and timing trades.</p>
          </div>
        ) : (
          <div style={styles.roleCard}>
            <p style={styles.roleCardTitle}>🚜 Farmer</p>
            <p style={styles.roleCardText}>
              You start with <strong>$10,000 cash</strong> plus a farm. Each cycle: <em>Plant → Harvest → Sell</em> corn through mills. Hire workers to boost yield. Buy options to hedge your harvest price against a market crash.
            </p>
            <p style={styles.roleCardHint}>Best for: players who like building an empire and controlling supply.</p>
          </div>
        )}

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
    padding: "1.5rem 1rem",
    background: "#f5f3ef",
  },
  codeBadge: {
    fontSize: "0.75rem",
    color: "#8a8a80",
    background: "#ffffff",
    border: "1px solid #e2ddd6",
    borderRadius: 20,
    padding: "0.3rem 0.9rem",
    letterSpacing: "0.05em",
    fontWeight: "500" as const,
  },
  codeValue: { color: "#1d6b1d", fontWeight: "700" as const, letterSpacing: "0.2em" },
  title: { fontSize: "2.2rem", fontWeight: "800" as const, letterSpacing: "-0.02em" },
  notice: { color: "#8a8a80", fontSize: "0.85rem" },
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
    gap: "0.3rem",
    fontSize: "0.8rem",
    color: "#6b6b63",
    fontWeight: "500" as const,
    letterSpacing: "0.03em",
  },
  input: {
    background: "#ffffff",
    border: "1.5px solid #d1cbc3",
    color: "#18181a",
    padding: "0.6rem 0.85rem",
    borderRadius: 8,
    fontFamily: "inherit",
    fontSize: "1rem",
    width: "100%",
  },
  btn: {
    background: "#1d6b1d",
    color: "#fff",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: 8,
    fontFamily: "inherit",
    fontSize: "0.95rem",
    fontWeight: "600" as const,
    cursor: "pointer",
    marginTop: "0.25rem",
  },
  backLink: { textAlign: "center" as const, fontSize: "0.8rem" },
  link: { color: "#8a8a80", cursor: "pointer", textDecoration: "underline" },
  roleCard: {
    background: "#fffbea",
    border: "1px solid #e8d878",
    borderRadius: 8,
    padding: "0.75rem 0.9rem",
  },
  roleCardTitle: { margin: "0 0 0.35rem", fontSize: "0.875rem", fontWeight: "700" as const, color: "#3a3010" },
  roleCardText: { margin: "0 0 0.35rem", fontSize: "0.8rem", color: "#5a4a10", lineHeight: 1.6 },
  roleCardHint: { margin: 0, fontSize: "0.72rem", color: "#8a7a40", fontStyle: "italic" as const },
} as const;
