/**
 * EmojiConfetti — full-screen canvas overlay that bursts emoji particles when
 * notable game events arrive (farm_burned → 🔥, bumper_harvest → 🌽🎉, etc.).
 *
 * Pointer-events are disabled so it never blocks clicks underneath.
 * Driven purely by cycleEvents from global state.
 */

import { useEffect, useRef } from "react";
import { useGameState } from "../state/store";
import type { GameEvent } from "../ws/protocol";

// ── Event → emoji mapping ──────────────────────────────────────────────────

interface BurstSpec {
  emojis: string[];
  count: number;
  /** "fall" = gravity from top, "rise" = float upward, "burst" = explode from centre */
  style: "fall" | "rise" | "burst";
}

function burstForEvent(ev: GameEvent): BurstSpec | null {
  switch (ev.kind) {
    case "farm_burned":
      return { emojis: ["🔥", "🔥", "🔥", "💨", "🌋"], count: 20, style: "burst" };
    case "mill_burned":
      return { emojis: ["🔥", "🔥", "💥", "🏭", "💨"], count: 18, style: "burst" };
    case "drought":
      return { emojis: ["☀️", "☀️", "🌵", "🏜️", "💧"], count: 16, style: "fall" };
    case "famine":
      return { emojis: ["💀", "🌾", "😫", "💀", "🥀"], count: 20, style: "fall" };
    case "bumper_harvest":
      return { emojis: ["🌽", "🌽", "🎉", "🎊", "✨", "🥳", "🌾"], count: 30, style: "rise" };
    case "market_panic":
      return { emojis: ["📉", "😱", "💸", "🔴", "😰"], count: 22, style: "fall" };
    case "nuclear_fallout":
      return { emojis: ["☢️", "💥", "☠️", "🌡️", "☣️"], count: 25, style: "burst" };
    case "worker_killed":
      return { emojis: ["💀", "🔪", "😱"], count: 10, style: "burst" };
    case "npc_killed":
      return { emojis: ["💀", "👤", "🔪"], count: 12, style: "burst" };
    case "corn_harvested":
      return { emojis: ["🌽", "🌾", "✨"], count: 12, style: "rise" };
    case "corn_sold":
      return { emojis: ["💰", "💵", "💸"], count: 10, style: "rise" };
    case "order_filled":
      return { emojis: ["💸", "📊", "✅"], count: 8, style: "rise" };
    case "npc_farm_auctioned":
      return { emojis: ["🏚️", "🔨", "💰"], count: 10, style: "fall" };
    default:
      return null;
  }
}

// ── Particle type ──────────────────────────────────────────────────────────

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  emoji: string;
  size: number;
  opacity: number;
  rotation: number;
  rotSpeed: number;
  life: number;    // 0–1, decreasing
  decay: number;   // how fast life falls per frame
}

function makeParticles(spec: BurstSpec, canvasW: number, canvasH: number): Particle[] {
  const particles: Particle[] = [];
  for (let i = 0; i < spec.count; i++) {
    const emoji = spec.emojis[Math.floor(Math.random() * spec.emojis.length)];
    const size = 22 + Math.random() * 20;

    let x: number, y: number, vx: number, vy: number;

    if (spec.style === "fall") {
      // Spawn across top, fall downward
      x = Math.random() * canvasW;
      y = -size;
      vx = (Math.random() - 0.5) * 3;
      vy = 1.5 + Math.random() * 3;
    } else if (spec.style === "rise") {
      // Spawn across bottom, float upward
      x = Math.random() * canvasW;
      y = canvasH + size;
      vx = (Math.random() - 0.5) * 2.5;
      vy = -(2 + Math.random() * 3.5);
    } else {
      // Burst from a random point near the centre
      x = canvasW * (0.2 + Math.random() * 0.6);
      y = canvasH * (0.2 + Math.random() * 0.6);
      const angle = Math.random() * Math.PI * 2;
      const speed = 2.5 + Math.random() * 5;
      vx = Math.cos(angle) * speed;
      vy = Math.sin(angle) * speed;
    }

    particles.push({
      x, y, vx, vy, emoji, size,
      opacity: 1,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.12,
      life: 1,
      decay: 0.008 + Math.random() * 0.007,
    });
  }
  return particles;
}

// ── Component ──────────────────────────────────────────────────────────────

export default function EmojiConfetti() {
  const state = useGameState();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const prevEventsRef = useRef<GameEvent[]>([]);

  // Detect new cycle events arriving and spawn particles.
  useEffect(() => {
    // Never fire confetti on the debrief screen — snapshot replays would trigger
    // it spuriously for any player who joins or reconnects after game-over.
    if (state.phase === "game_over") return;
    const prev = prevEventsRef.current;
    const curr = state.cycleEvents;
    if (curr === prev || curr.length === 0) return;
    prevEventsRef.current = curr;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const w = canvas.width;
    const h = canvas.height;

    for (const ev of curr) {
      const spec = burstForEvent(ev);
      if (spec) {
        particlesRef.current.push(...makeParticles(spec, w, h));
      }
    }
  }, [state.cycleEvents, state.phase]);

  // Resize canvas to match viewport.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Animation loop.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    function loop() {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);

      const alive: Particle[] = [];
      for (const p of particlesRef.current) {
        // Gravity: pull burst/fall particles down, dampen rise
        if (p.vy > 0) {
          p.vy += 0.06; // gravity for falling
        } else {
          p.vy += 0.03; // mild drag for rising
        }
        p.vx *= 0.99;

        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        p.life -= p.decay;
        p.opacity = Math.max(0, p.life);

        if (p.life <= 0) continue;
        alive.push(p);

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = `${p.size}px serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(p.emoji, 0, 0);
        ctx.restore();
      }
      particlesRef.current = alive;

      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
