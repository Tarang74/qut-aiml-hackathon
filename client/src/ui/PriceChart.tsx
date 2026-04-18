/**
 * PriceChart — 2D canvas price history chart with "mountain" fill and
 * lower volume-like activity bars.
 *
 * Switched from Three.js to 2D canvas because Three.js LineBasicMaterial
 * linewidth is ignored on WebGL2 (always 1px). Canvas gives real lineWidth,
 * native gradients, and crisp text at any DPI.
 */
import { useEffect, useRef } from "react";

interface Props {
  history: string[];
  volumeHistory?: number[];
}

// Inner chart padding in logical pixels (before devicePixelRatio scaling).
const PAD = { top: 10, right: 58, bottom: 28, left: 14 };
// Number of horizontal grid bands (= gridlines - 1).
const H_BANDS = 4;

function draw(canvas: HTMLCanvasElement, prices: number[], volumes: number[]) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const W = canvas.width;
  const H = canvas.height;
  const dpr = window.devicePixelRatio || 1;

  // Scale all drawing to match devicePixelRatio.
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const cssW = W / dpr;
  const cssH = H / dpr;
  const cW = cssW - PAD.left - PAD.right; // chart inner width
  const cH = cssH - PAD.top - PAD.bottom; // chart inner height

  // ── Clear ──────────────────────────────────────────────────────────────────
  ctx.clearRect(0, 0, cssW, cssH);

  // Keep the chart background transparent so it sits directly on the parent card.

  const hasData = prices.length >= 2;
  const minP = hasData ? Math.min(...prices) : 0;
  const maxP = hasData ? Math.max(...prices) : 1;
  const range = maxP - minP || 1;

  const volumePaneH = Math.max(28, cH * 0.2);
  const pricePaneH = cH - volumePaneH - 6;

  // Price → Y pixel (with 5% vertical padding so extremes don't clip).
  const pToY = (p: number) =>
    PAD.top +
    pricePaneH -
    ((p - minP) / range) * pricePaneH * 0.9 -
    pricePaneH * 0.05;
  // Index → X pixel.
  const iToX = (i: number) =>
    PAD.left + (prices.length > 1 ? (i / (prices.length - 1)) * cW : 0);

  // ── Grid lines ─────────────────────────────────────────────────────────────
  ctx.strokeStyle = "#d9d3c8";
  ctx.lineWidth = 1;
  ctx.setLineDash([3, 4]);
  for (let i = 0; i <= H_BANDS; i++) {
    const y = PAD.top + (i / H_BANDS) * pricePaneH;
    ctx.beginPath();
    ctx.moveTo(PAD.left, y);
    ctx.lineTo(PAD.left + cW, y);
    ctx.stroke();
  }
  ctx.setLineDash([]);

  if (!hasData) return;

  // ── Volume bars (lower pane) ──────────────────────────────────────────────
  const vols =
    volumes.length === prices.length
      ? volumes
      : prices.map((_, i) =>
          i === 0 ? 0 : Math.abs(prices[i] - prices[i - 1]),
        );
  const maxVol = Math.max(...vols, 1e-6);
  const barBaseY = PAD.top + pricePaneH + 6 + volumePaneH;
  const stepX = prices.length > 1 ? cW / (prices.length - 1) : cW;
  const barW = Math.max(1, Math.min(10, stepX * 0.65));
  for (let i = 0; i < prices.length; i++) {
    const volNorm = vols[i] / maxVol;
    const h = Math.max(1, volNorm * volumePaneH);
    const x = iToX(i) - barW / 2;
    const y = barBaseY - h;
    const up = i === 0 || prices[i] >= prices[i - 1];
    ctx.fillStyle = up ? "rgba(29,107,29,0.28)" : "rgba(160,51,51,0.28)";
    ctx.fillRect(x, y, barW, h);
  }

  // ── Area fill ──────────────────────────────────────────────────────────────
  ctx.beginPath();
  ctx.moveTo(iToX(0), pToY(prices[0]));
  for (let i = 1; i < prices.length; i++) ctx.lineTo(iToX(i), pToY(prices[i]));
  ctx.lineTo(iToX(prices.length - 1), PAD.top + cH);
  ctx.lineTo(iToX(0), PAD.top + cH);
  ctx.closePath();
  const grad = ctx.createLinearGradient(0, PAD.top, 0, PAD.top + cH);
  const trendRefIdx = Math.max(0, prices.length - 1 - 5);
  const trendUp = prices[prices.length - 1] >= prices[trendRefIdx];
  const lineColor = trendUp ? "#1d6b1d" : "#a03333";
  const lineAccent = trendUp ? "#3b8c2f" : "#c05555";
  grad.addColorStop(
    0,
    trendUp ? "rgba(29,107,29,0.22)" : "rgba(160,51,51,0.22)",
  );
  grad.addColorStop(1, trendUp ? "rgba(29,107,29,0)" : "rgba(160,51,51,0)");
  ctx.fillStyle = grad;
  ctx.fill();

  // ── Main line ──────────────────────────────────────────────────────────────
  ctx.beginPath();
  ctx.moveTo(iToX(0), pToY(prices[0]));
  for (let i = 1; i < prices.length; i++) ctx.lineTo(iToX(i), pToY(prices[i]));
  const lineGrad = ctx.createLinearGradient(
    PAD.left,
    PAD.top,
    PAD.left + cW,
    PAD.top + pricePaneH,
  );
  lineGrad.addColorStop(0, lineColor);
  lineGrad.addColorStop(1, lineAccent);
  ctx.strokeStyle = lineGrad;
  ctx.shadowColor = trendUp
    ? "rgba(92, 121, 58, 0.22)"
    : "rgba(145, 68, 68, 0.22)";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 2;
  ctx.lineWidth = 3;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;

  // ── Current price dot ──────────────────────────────────────────────────────
  const lx = iToX(prices.length - 1);
  const ly = pToY(prices[prices.length - 1]);
  // Simple endpoint dot.
  ctx.beginPath();
  ctx.arc(lx, ly, 3, 0, Math.PI * 2);
  ctx.fillStyle = lineColor;
  ctx.fill();

  // ── Right-side numeric axis (adaptive precision, no currency symbol) ─────
  const yTicks = 4;
  const fmtAxis = (v: number) => {
    const absRange = Math.abs(range);
    if (absRange < 0.2) return v.toFixed(4);
    if (absRange < 2) return v.toFixed(3);
    if (absRange < 40) return v.toFixed(2);
    if (absRange < 400) return v.toFixed(1);
    return v.toFixed(0);
  };
  ctx.font = `600 11px 'DM Sans', system-ui, sans-serif`;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#7d786f";
  const xAxisText = PAD.left + cW + 6;
  for (let i = 0; i <= yTicks; i++) {
    const y = PAD.top + (i / yTicks) * pricePaneH;
    const v = maxP - (i / yTicks) * range;
    ctx.fillText(fmtAxis(v), xAxisText, y);
  }

  // ── X-axis labels ──────────────────────────────────────────────────────────
  // Numeric cycle index ticks only (no text prefixes).
  const n = prices.length;
  const xTicks: Array<{ idx: number; label: string; align: CanvasTextAlign }> =
    [
      { idx: 0, label: "0", align: "left" as CanvasTextAlign },
      {
        idx: Math.round(n * 0.33),
        label: `${Math.round(n * 0.33)}`,
        align: "center" as CanvasTextAlign,
      },
      {
        idx: Math.round(n * 0.67),
        label: `${Math.round(n * 0.67)}`,
        align: "center" as CanvasTextAlign,
      },
      { idx: n - 1, label: `${n - 1}`, align: "right" as CanvasTextAlign },
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

export default function PriceChart({ history, volumeHistory }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prices = history.map(parseFloat).filter(isFinite);
  const volumes = (volumeHistory ?? []).filter((v) => Number.isFinite(v));

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
        canvas!.dataset.prices
          ? (JSON.parse(canvas!.dataset.prices) as number[])
          : [],
      );
      const latestVolumes = Array.from(
        canvas!.dataset.volumes
          ? (JSON.parse(canvas!.dataset.volumes) as number[])
          : [],
      );
      draw(canvas!, latestPrices, latestVolumes);
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
    canvas.dataset.volumes = JSON.stringify(volumes);
    draw(canvas, prices, volumes);
  }, [history, volumeHistory]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}
