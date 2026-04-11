/**
 * NewsTicker — fixed top-of-screen news crawl.
 *
 * Feeds from state.headlines (AI narrator) and any "rumor" events in
 * state.cycleEvents (player-spread rumours). Hidden until there's content.
 */
import { useGameState } from "../state/store";

export const TICKER_HEIGHT = 38; // px — keep in sync with s.bar height

export default function NewsTicker() {
  const { headlines, cycleEvents } = useGameState();

  const rumors = cycleEvents
    .filter((ev): ev is Extract<typeof ev, { kind: "rumor" }> => ev.kind === "rumor")
    .map((ev) => `🚨 RUMOUR: "${ev.text}"`);

  const headlineTexts = headlines.map((h) => `📰 ${h.text}`);

  const items = [...rumors, ...headlineTexts];

  // Always render the bar so the host layout reserves the right space.
  // When empty show a static placeholder; once headlines arrive, start the crawl.
  if (items.length === 0) {
    return (
      <div style={s.bar}>
        <span style={s.badge}>LIVE</span>
        <div style={s.track}>
          <span style={{ ...s.text, color: "#c8a070" }}>
            Waiting for first cycle to complete…
          </span>
        </div>
      </div>
    );
  }

  // Repeat content so the crawl loops without a visible gap.
  const content = [...items, ...items].join("     ·     ");
  const durationSecs = Math.max(30, items.length * 12);

  return (
    <>
      <style>{`
        @keyframes ticker-crawl {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div style={s.bar}>
        <span style={s.badge}>LIVE</span>
        <div style={s.track}>
          <span
            style={{
              ...s.text,
              animation: `ticker-crawl ${durationSecs}s linear infinite`,
            }}
          >
            {content}
          </span>
        </div>
      </div>
    </>
  );
}

const s = {
  bar: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    height: TICKER_HEIGHT,
    gap: "0.5rem",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    background: "#fef9e8",
    borderBottom: "1px solid #c8a830",
    overflow: "hidden",
  },
  badge: {
    flexShrink: 0,
    background: "#c8a830",
    color: "#ffffff",
    fontSize: "0.7rem",
    fontWeight: "700" as const,
    letterSpacing: "0.12em",
    padding: "0.2rem 0.6rem",
    marginLeft: "0.6rem",
    borderRadius: 3,
  },
  track: {
    flex: 1,
    overflow: "hidden",
    marginLeft: "0.6rem",
  },
  text: {
    display: "inline-block",
    whiteSpace: "nowrap" as const,
    fontSize: "0.85rem",
    color: "#7a5010",
    letterSpacing: "0.02em",
  },
} as const;
