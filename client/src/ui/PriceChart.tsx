/**
 * PriceChart — Three.js line chart for the price history.
 * Fills its container; call from a div with explicit height.
 * HTML overlay renders Y-axis price labels and X-axis index labels.
 */
import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Props {
  history: string[];
}

// Vertical padding fraction used when mapping prices → NDC y.
const PAD = 0.1;

// How many horizontal grid bands (grid lines = BANDS + 1).
const H_BANDS = 4;
// How many vertical grid bands (grid lines = V_BANDS + 1).
const V_BANDS = 6;

export default function PriceChart({ history }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const lineRef = useRef<THREE.Line | null>(null);
  const glowLineRef = useRef<THREE.Line | null>(null);

  // Initialise Three.js once.
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfaf8f4);
    sceneRef.current = scene;

    const W = container.clientWidth || 600;
    const H = container.clientHeight || 300;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Orthographic camera: coordinates go -1..1 in both axes.
    const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    cam.position.z = 1;
    cameraRef.current = cam;

    // Faint grid lines.
    const gridMat = new THREE.LineBasicMaterial({ color: 0xe0ddd8 });
    for (let i = 0; i <= H_BANDS; i++) {
      const y = (i / H_BANDS) * 2 - 1;
      const pts = [new THREE.Vector3(-1, y, 0), new THREE.Vector3(1, y, 0)];
      scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), gridMat));
    }
    for (let i = 0; i <= V_BANDS; i++) {
      const x = (i / V_BANDS) * 2 - 1;
      const pts = [new THREE.Vector3(x, -1, 0), new THREE.Vector3(x, 1, 0)];
      scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), gridMat));
    }

    // Glow line (slightly wider, dimmer green underneath for depth).
    const glowGeo = new THREE.BufferGeometry();
    const glowMat = new THREE.LineBasicMaterial({ color: 0xa8d4a8, linewidth: 4 });
    const glowLine = new THREE.Line(glowGeo, glowMat);
    scene.add(glowLine);
    glowLineRef.current = glowLine;

    // Main price line.
    const lineGeo = new THREE.BufferGeometry();
    const lineMat = new THREE.LineBasicMaterial({ color: 0x1d6b1d, linewidth: 2 });
    const line = new THREE.Line(lineGeo, lineMat);
    scene.add(line);
    lineRef.current = line;

    // Resize observer.
    const ro = new ResizeObserver(() => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w > 0 && h > 0) {
        renderer.setSize(w, h);
        renderer.render(scene, cam);
      }
    });
    ro.observe(container);

    renderer.render(scene, cam);

    return () => {
      ro.disconnect();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Redraw whenever history changes.
  useEffect(() => {
    const line = lineRef.current;
    const glowLine = glowLineRef.current;
    const renderer = rendererRef.current;
    const scene = sceneRef.current;
    const cam = cameraRef.current;
    if (!line || !glowLine || !renderer || !scene || !cam) return;

    const prices = history.map(parseFloat).filter(isFinite);
    if (prices.length < 2) return;

    const minP = Math.min(...prices);
    const maxP = Math.max(...prices);
    const range = maxP - minP || 1;

    const positions = new Float32Array(prices.length * 3);
    for (let i = 0; i < prices.length; i++) {
      positions[i * 3]     = (i / (prices.length - 1)) * 2 - 1;
      positions[i * 3 + 1] = ((prices[i] - minP) / range) * (2 - PAD * 2) - (1 - PAD);
      positions[i * 3 + 2] = 0;
    }

    const attr = new THREE.BufferAttribute(positions, 3);
    line.geometry.setAttribute("position", attr);
    line.geometry.computeBoundingSphere();
    glowLine.geometry.setAttribute("position", attr.clone());
    glowLine.geometry.computeBoundingSphere();

    renderer.render(scene, cam);
  }, [history]);

  // --- Label computation (pure, from history prop) ---
  const prices = history.map(parseFloat).filter(isFinite);
  const hasData = prices.length >= 2;
  const minP = hasData ? Math.min(...prices) : 0;
  const maxP = hasData ? Math.max(...prices) : 1;
  const range = maxP - minP || 1;

  // Y-axis: one label per horizontal grid line.
  // NDC y values: from -1 (bottom) to +1 (top) in H_BANDS+1 steps.
  // NDC y → % from top: (1 - ndc_y) / 2 * 100
  // NDC y → price: (ndc_y + (1-PAD)) / (2 - 2*PAD) * range + minP
  const yLabels = hasData
    ? Array.from({ length: H_BANDS + 1 }, (_, i) => {
        const ndc = (i / H_BANDS) * 2 - 1; // -1 .. +1
        const topPct = ((1 - ndc) / 2) * 100;
        const price = ((ndc + (1 - PAD)) / (2 - 2 * PAD)) * range + minP;
        // Clamp translateY so labels at the very edge stay visible.
        const ty = topPct <= 5 ? 0 : topPct >= 95 ? -100 : -50;
        return { topPct, price, ty };
      })
    : [];

  // X-axis: labels at each vertical grid line.
  // NDC x → history index: (ndc_x + 1) / 2 * (len - 1)
  const xLabels = hasData
    ? Array.from({ length: V_BANDS + 1 }, (_, i) => {
        const frac = i / V_BANDS; // 0 .. 1
        const idx = Math.round(frac * (prices.length - 1));
        // Clamp translateX so edge labels don't overflow.
        const tx = i === 0 ? 0 : i === V_BANDS ? -100 : -50;
        return { leftPct: frac * 100, idx, tx };
      })
    : [];

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Three.js canvas mount */}
      <div ref={mountRef} style={{ width: "100%", height: "100%" }} />

      {/* Y-axis price labels (left edge) */}
      {yLabels.map(({ topPct, price, ty }, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: 6,
            top: `${topPct}%`,
            transform: `translateY(${ty}%)`,
            fontSize: 11,
            fontFamily: "monospace",
            color: "#5a5a54",
            background: "rgba(250,248,244,0.82)",
            borderRadius: 2,
            padding: "0 3px",
            lineHeight: 1.4,
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          ${price.toFixed(2)}
        </span>
      ))}

      {/* X-axis index labels (bottom edge) */}
      {xLabels.map(({ leftPct, idx, tx }, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            bottom: 4,
            left: `${leftPct}%`,
            transform: `translateX(${tx}%)`,
            fontSize: 10,
            fontFamily: "monospace",
            color: "#8a8a80",
            pointerEvents: "none",
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          {idx === 0 ? "start" : idx === prices.length - 1 ? "now" : `t${idx}`}
        </span>
      ))}

      {/* Axis labels */}
      <span style={{
        position: "absolute",
        left: 6,
        top: "50%",
        transform: "translateY(-50%) rotate(-90deg) translateX(50%)",
        transformOrigin: "left center",
        fontSize: 10,
        color: "#aaa8a0",
        pointerEvents: "none",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
      }}>
        Price
      </span>
    </div>
  );
}
