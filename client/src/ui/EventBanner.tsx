/**
 * EventBanner — stacked toast announcements for dramatic game events.
 *
 * Watches cycleEvents in state. When a new batch arrives, converts
 * newsworthy events into timed banners shown at the top of the screen
 * (below the news ticker). Each banner auto-dismisses after a few seconds.
 *
 * Particle effects for the same events are handled separately by EmojiConfetti.
 */
import { useEffect, useRef, useState } from "react";
import { useGameState } from "../state/store";
import type { GameEvent } from "../ws/protocol";
import { TICKER_HEIGHT } from "./NewsTicker";

// ── Severity levels ────────────────────────────────────────────────────────────

type Severity = "positive" | "info" | "warning" | "danger" | "catastrophe";

interface Banner {
  id: number;
  icon: string;
  headline: string;
  sub?: string;
  severity: Severity;
  durationMs: number;
}

let nextId = 1;

// ── Event → banner mapping ─────────────────────────────────────────────────────

function bannersForEvent(ev: GameEvent): Omit<Banner, "id"> | null {
  switch (ev.kind) {
    case "farm_burned":
      return {
        icon: "🔥",
        headline: `FARM #${ev.farm_id} IS ON FIRE`,
        sub: ev.arsonist !== undefined ? "Arson suspected" : undefined,
        severity: "danger",
        durationMs: 5000,
      };
    case "farm_healed":
      return {
        icon: "🌱",
        headline: `FARM #${ev.farm_id} HAS RECOVERED`,
        severity: "positive",
        durationMs: 3500,
      };
    case "mill_burned":
      return {
        icon: "🏭",
        headline: `MILL #${ev.mill_id} BURNED DOWN`,
        severity: "danger",
        durationMs: 5000,
      };
    case "worker_killed":
      return {
        icon: "☠️",
        headline: "WORKER ELIMINATED",
        sub: `Farm #${ev.farm_id} lost a worker`,
        severity: "warning",
        durationMs: 4000,
      };
    case "npc_killed":
      return {
        icon: "☠️",
        headline: `${ev.npc_name.toUpperCase()} ELIMINATED`,
        sub: "An NPC owner has been taken out",
        severity: "warning",
        durationMs: 4500,
      };
    case "npc_farm_auctioned":
      return {
        icon: "🔨",
        headline: `FARM #${ev.farm_id} AUCTIONED`,
        sub: `Sold for $${parseFloat(ev.price).toFixed(0)}`,
        severity: "info",
        durationMs: 4000,
      };
    case "drought":
      return {
        icon: "☀️",
        headline: "DROUGHT DECLARED",
        sub: `${ev.cycles} cycles of poor weather ahead`,
        severity: "warning",
        durationMs: 5000,
      };
    case "famine":
      return {
        icon: "💀",
        headline: "FAMINE — SUPPLY COLLAPSE",
        severity: "danger",
        durationMs: 6000,
      };
    case "bumper_harvest":
      return {
        icon: "🌽",
        headline: "BUMPER HARVEST!",
        sub: "Exceptional yields this cycle",
        severity: "positive",
        durationMs: 5000,
      };
    case "market_panic":
      return {
        icon: "📉",
        headline: "MARKET PANIC",
        sub: "Prices have crashed",
        severity: "danger",
        durationMs: 5500,
      };
    case "nuclear_fallout":
      return {
        icon: "☢️",
        headline: "NUCLEAR FALLOUT",
        sub: "All farms destroyed — game ending",
        severity: "catastrophe",
        durationMs: 8000,
      };
    case "rumor":
      return {
        icon: "📢",
        headline: "RUMOR SPREADING",
        sub: `"${ev.text.slice(0, 80)}${ev.text.length > 80 ? "…" : ""}"`,
        severity: "info",
        durationMs: 5000,
      };
    default:
      return null;
  }
}

// ── Severity → visual style ────────────────────────────────────────────────────

const SEVERITY_STYLES: Record<Severity, { bg: string; border: string; icon: string; text: string; sub: string }> = {
  positive:     { bg: "#e8f5e8", border: "#4a9a4a", icon: "#1d6b1d", text: "#0a3a0a", sub: "#2a6a2a" },
  info:         { bg: "#e8eef8", border: "#5a7ab0", icon: "#1a3a7a", text: "#0a2060", sub: "#3a5a9a" },
  warning:      { bg: "#fff8e0", border: "#c8a030", icon: "#7a5010", text: "#4a2a00", sub: "#8a6020" },
  danger:       { bg: "#fde8e8", border: "#c83030", icon: "#8a1010", text: "#5a0000", sub: "#9a3030" },
  catastrophe:  { bg: "#1a0000", border: "#ff2020", icon: "#ff6060", text: "#ffffff", sub: "#ffaaaa" },
};

// ── Component ──────────────────────────────────────────────────────────────────

export default function EventBanner() {
  const { cycleEvents } = useGameState();
  const [banners, setBanners] = useState<Banner[]>([]);
  const prevEventsRef = useRef<GameEvent[]>([]);

  // Detect new cycle_events batch and queue banners.
  useEffect(() => {
    if (cycleEvents === prevEventsRef.current || cycleEvents.length === 0) return;
    prevEventsRef.current = cycleEvents;

    const newBanners: Banner[] = [];
    for (const ev of cycleEvents) {
      const spec = bannersForEvent(ev);
      if (spec) newBanners.push({ ...spec, id: nextId++ });
    }
    if (newBanners.length === 0) return;

    // Stagger each banner by 400 ms so they don't all slam on at once.
    newBanners.forEach((b, i) => {
      setTimeout(() => {
        setBanners((prev) => [...prev, b]);
        // Auto-dismiss after durationMs.
        setTimeout(() => {
          setBanners((prev) => prev.filter((x) => x.id !== b.id));
        }, b.durationMs);
      }, i * 400);
    });
  }, [cycleEvents]);

  // Cap visible banners at 4 (oldest drop off).
  const visible = banners.slice(-4);

  if (visible.length === 0) return null;

  return (
    <>
      <style>{`
        @keyframes banner-in {
          from { opacity: 0; transform: translateY(-12px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)     scale(1);    }
        }
      `}</style>
      <div style={{ ...s.container, top: TICKER_HEIGHT + 8 }}>
        {visible.map((b) => {
          const col = SEVERITY_STYLES[b.severity];
          return (
            <div
              key={b.id}
              style={{
                ...s.banner,
                background: col.bg,
                borderColor: col.border,
                boxShadow: `0 2px 16px ${col.border}44`,
              }}
            >
              <span style={{ ...s.bannerIcon, color: col.icon }}>{b.icon}</span>
              <div style={s.bannerBody}>
                <span style={{ ...s.bannerHeadline, color: col.text }}>{b.headline}</span>
                {b.sub && <span style={{ ...s.bannerSub, color: col.sub }}>{b.sub}</span>}
              </div>
              <button
                style={{ ...s.bannerClose, color: col.sub }}
                onClick={() => setBanners((prev) => prev.filter((x) => x.id !== b.id))}
              >
                ×
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

// ── Styles ─────────────────────────────────────────────────────────────────────

const s = {
  container: {
    position: "fixed" as const,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 800,
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.4rem",
    alignItems: "center",
    pointerEvents: "none" as const,
    width: "min(420px, 92vw)",
  },
  banner: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    border: "1.5px solid",
    borderRadius: 10,
    padding: "0.6rem 0.75rem",
    width: "100%",
    pointerEvents: "auto" as const,
    animation: "banner-in 0.25s ease-out both",
    boxSizing: "border-box" as const,
  },
  bannerIcon: { fontSize: "1.5rem", lineHeight: 1, flexShrink: 0 },
  bannerBody: { flex: 1, display: "flex", flexDirection: "column" as const, gap: "0.1rem", minWidth: 0 },
  bannerHeadline: {
    fontSize: "0.8rem",
    fontWeight: "800" as const,
    letterSpacing: "0.05em",
    lineHeight: 1.2,
  },
  bannerSub: {
    fontSize: "0.7rem",
    fontWeight: "500" as const,
    lineHeight: 1.3,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap" as const,
  },
  bannerClose: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "1.1rem",
    lineHeight: 1,
    padding: "0 0.1rem",
    flexShrink: 0,
    opacity: 0.6,
  },
} as const;
