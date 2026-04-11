/**
 * PriceChart — 2D canvas price history chart.
 *
 * Switched from Three.js to 2D canvas because Three.js LineBasicMaterial
 * linewidth is ignored on WebGL2 (always 1px). Canvas gives real lineWidth,
 * native gradients, and crisp text at any DPI.
 */
import { useEffect, useRef } from "react";

interface Props {
  history: string[];
}

// Inner chart padding in logical pixels (before devicePixelRatio scaling).
const PAD = { top: 14, right: 18, bottom: 32, left: 60 };
// Number of horizontal grid bands (= gridlines - 1).
const H_BANDS = 4;

function draw(canvas: HTMLCanvasElement, prices: number[]) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const W = canvas.width;
  const H = canvas.height;
  const dpr = window.devicePixelRatio || 1;

  // Scale all drawing to match devicePixelRatio.
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const cssW = W / dpr;
  const cssH = H / dpr;
  const cW = cssW - PAD.left - PAD.right;   // chart inner width
  const cH = cssH - PAD.top - PAD.bottom;   // chart inner height

  // ── Clear ──────────────────────────────────────────────────────────────────
  ctx.clearRect(0, 0, cssW, cssH);

  // ── Background ─────────────────────────────────────────────────────────────
  ctx.fillStyle = "#faf8f4";
  ctx.fillRect(0, 0, cssW, cssH);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(PAD.left, PAD.top, cW, cH);

  const hasData = prices.length >= 2;
  const minP = hasData ? Math.min(...prices) : 0;
  const maxP = hasData ? Math.max(...prices) : 1;
  const range = maxP - minP || 1;

  // Price → Y pixel (with 5% vertical padding so extremes don't clip).
  const pToY = (p: number) =>
    PAD.top + cH - ((p - minP) / range) * cH * 0.9 - cH * 0.05;
  // Index → X pixel.
  const iToX = (i: number) =>
    PAD.left + (prices.length > 1 ? (i / (prices.length - 1)) * cW : 0);

  // ── Grid lines ─────────────────────────────────────────────────────────────
  ctx.strokeStyle = "#ccc8c0";
  ctx.lineWidth = 1;
  for (let i = 0; i <= H_BANDS; i++) {
    const y = PAD.top + (i / H_BANDS) * cH;
    ctx.beginPath();
    ctx.moveTo(PAD.left, y);
    ctx.lineTo(PAD.left + cW, y);
    ctx.stroke();
  }

  // ── Y-axis labels ──────────────────────────────────────────────────────────
  // Drawn in the left padding band — can never overlap the chart line.
  ctx.font = `600 13px 'DM Sans', system-ui, sans-serif`;
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#5a5a54";
  for (let i = 0; i <= H_BANDS; i++) {
    const y = PAD.top + (i / H_BANDS) * cH;
    const price = maxP - (i / H_BANDS) * range;
    ctx.fillText(`$${price.toFixed(0)}`, PAD.left - 8, y);
  }

  if (!hasData) return;

  // ── Area fill ──────────────────────────────────────────────────────────────
  ctx.beginPath();
  ctx.moveTo(iToX(0), pToY(prices[0]));
  for (let i = 1; i < prices.length; i++) ctx.lineTo(iToX(i), pToY(prices[i]));
  ctx.lineTo(iToX(prices.length - 1), PAD.top + cH);
  ctx.lineTo(iToX(0), PAD.top + cH);
  ctx.closePath();
  const grad = ctx.createLinearGradient(0, PAD.top, 0, PAD.top + cH);
  grad.addColorStop(0, "rgba(29,107,29,0.18)");
  grad.addColorStop(1, "rgba(29,107,29,0)");
  ctx.fillStyle = grad;
  ctx.fill();

  // ── Glow pass (wide, soft) ─────────────────────────────────────────────────
  ctx.beginPath();
  ctx.moveTo(iToX(0), pToY(prices[0]));
  for (let i = 1; i < prices.length; i++) ctx.lineTo(iToX(i), pToY(prices[i]));
  ctx.strokeStyle = "rgba(29,107,29,0.22)";
  ctx.lineWidth = 7;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.stroke();

  // ── Main line ──────────────────────────────────────────────────────────────
  ctx.beginPath();
  ctx.moveTo(iToX(0), pToY(prices[0]));
  for (let i = 1; i < prices.length; i++) ctx.lineTo(iToX(i), pToY(prices[i]));
  ctx.strokeStyle = "#1d6b1d";
  ctx.lineWidth = 2.5;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.stroke();

  // ── Current price dot ──────────────────────────────────────────────────────
  const lx = iToX(prices.length - 1);
  const ly = pToY(prices[prices.length - 1]);
  // Outer pulse ring
  ctx.beginPath();
  ctx.arc(lx, ly, 7, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(29,107,29,0.25)";
  ctx.lineWidth = 2;
  ctx.stroke();
  // Solid dot
  ctx.beginPath();
  ctx.arc(lx, ly, 4, 0, Math.PI * 2);
  ctx.fillStyle = "#1d6b1d";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(lx, ly, 2.5, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.fill();

  // ── X-axis labels ──────────────────────────────────────────────────────────
  // Only show 3–4 ticks so they can't crowd together.
  const n = prices.length;
  const xTicks: Array<{ idx: number; label: string; align: CanvasTextAlign }> = [
    { idx: 0,                        label: "start",         align: "left"   as CanvasTextAlign },
    { idx: Math.round(n * 0.33),     label: `${Math.round(n * 0.33)}`,  align: "center" as CanvasTextAlign },
    { idx: Math.round(n * 0.67),     label: `${Math.round(n * 0.67)}`,  align: "center" as CanvasTextAlign },
    { idx: n - 1,                    label: "now",           align: "right"  as CanvasTextAlign },
  ]
    // Deduplicate adjacent same-index ticks when history is very short.
    .filter((t, i, arr) => i === 0 || t.idx !== arr[i - 1].idx);

  ctx.font = `500 12px 'DM Sans', system-ui, sans-serif`;
  ctx.textBaseline = "bottom";
  ctx.fillStyle = "#9a9a90";
  for (const { idx, label, align } of xTicks) {
    ctx.textAlign = align;
    const x = Math.min(Math.max(iToX(idx), PAD.left + 2), PAD.left + cW - 2);
    ctx.fillText(label, x, cssH - 6);
  }
}

export default function PriceChart({ history }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prices = history.map(parseFloat).filter(isFinite);

  // Initial setup + ResizeObserver.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const container = canvas.parentElement!;
    const dpr = window.devicePixelRatio || 1;

    function resize() {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w <= 0 || h <= 0) return;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
    }

    const ro = new ResizeObserver(() => {
      resize();
      // Re-read prices from the ref after resize.
      const latestPrices = Array.from(
        canvas!.dataset.prices ? JSON.parse(canvas!.dataset.prices) as number[] : []
      );
      draw(canvas!, latestPrices);
    });
    ro.observe(container);
    resize();

    return () => ro.disconnect();
  }, []);

  // Redraw whenever history changes.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Stash prices on the element so the ResizeObserver can redraw with latest data.
    canvas.dataset.prices = JSON.stringify(prices);
    draw(canvas, prices);
  }, [history]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}
