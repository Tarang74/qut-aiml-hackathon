/**
 * WelcomeScreen — /
 *
 * Landing page shown to first-time visitors.
 * Players go to /join; hosts go to /create.
 */
import { useNavigate } from "../router";

export default function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div style={s.root}>
      <div style={s.hero}>
        <div style={s.graphic}>🌽🚜📈🔥💰</div>
        <h1 style={s.title}>🌽 Aura Farmers</h1>
        <p style={s.tagline}>
          Trade corn. Burn farms. Corner the market.<br />
          The ultimate financial chaos simulator.
        </p>
      </div>

      <div style={s.actions}>
        <button style={s.primaryBtn} onClick={() => navigate("/join")}>
          Join a Game
        </button>
        <button style={s.secondaryBtn} onClick={() => navigate("/create")}>
          Host a Game
        </button>
      </div>

      <div style={s.features}>
        <div style={s.feature}>
          <span style={s.featureIcon}>🚜</span>
          <div>
            <p style={s.featureTitle}>Farm or Trade</p>
            <p style={s.featureDesc}>Pick a role and compete for the highest net worth</p>
          </div>
        </div>
        <div style={s.feature}>
          <span style={s.featureIcon}>📊</span>
          <div>
            <p style={s.featureTitle}>Live Markets</p>
            <p style={s.featureDesc}>Real order book, options, and 100 AI market makers</p>
          </div>
        </div>
        <div style={s.feature}>
          <span style={s.featureIcon}>🔥</span>
          <div>
            <p style={s.featureTitle}>Chaos Events</p>
            <p style={s.featureDesc}>Droughts, famines, hitmen, and nuclear fallout</p>
          </div>
        </div>
      </div>
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
    padding: "1.5rem 1.5rem",
    background: "linear-gradient(160deg, #f5f3ef 0%, #e8f5e0 100%)",
    gap: "1.25rem",
  },
  hero: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "0.5rem",
    textAlign: "center" as const,
    maxWidth: 480,
  },
  graphic: {
    fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
    letterSpacing: "0.15em",
  },
  title: {
    fontSize: "clamp(2.4rem, 6vw, 3.6rem)",
    fontWeight: "900" as const,
    letterSpacing: "-0.03em",
    color: "#1a2e1a",
    margin: 0,
  },
  tagline: {
    fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
    color: "#4a6a4a",
    lineHeight: 1.6,
    margin: 0,
  },
  actions: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap" as const,
    justifyContent: "center",
  },
  primaryBtn: {
    background: "#1d6b1d",
    color: "#fff",
    border: "none",
    padding: "0.85rem 2.5rem",
    borderRadius: 10,
    fontFamily: "inherit",
    fontSize: "1.05rem",
    fontWeight: "700" as const,
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(29,107,29,0.25)",
  },
  secondaryBtn: {
    background: "#fff",
    color: "#1d6b1d",
    border: "2px solid #1d6b1d",
    padding: "0.85rem 2rem",
    borderRadius: 10,
    fontFamily: "inherit",
    fontSize: "1.05rem",
    fontWeight: "700" as const,
    cursor: "pointer",
  },
  features: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.9rem",
    width: "100%",
    maxWidth: 400,
  },
  feature: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.9rem",
    background: "rgba(255,255,255,0.7)",
    border: "1px solid #d8eed0",
    borderRadius: 10,
    padding: "0.8rem 1rem",
  },
  featureIcon: { fontSize: "1.5rem", flexShrink: 0, lineHeight: 1 },
  featureTitle: {
    margin: "0 0 0.2rem",
    fontWeight: "700" as const,
    fontSize: "0.9rem",
    color: "#1a2e1a",
  },
  featureDesc: { margin: 0, fontSize: "0.8rem", color: "#5a6a5a", lineHeight: 1.4 },
} as const;
