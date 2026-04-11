/**
 * PriceChart — Three.js line chart for the price history.
 * Fills its container; call from a div with explicit height.
 */
import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Props {
  history: string[];
}

export default function PriceChart({ history }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const lineRef = useRef<THREE.Line | null>(null);
  const glowLineRef = useRef<THREE.Line | null>(null);

  // Initialise Three.js once.
  useEffect(() => {
    const container = containerRef.current;
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
    for (let i = 0; i <= 4; i++) {
      const y = (i / 4) * 2 - 1;
      const pts = [new THREE.Vector3(-1, y, 0), new THREE.Vector3(1, y, 0)];
      scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), gridMat));
    }
    for (let i = 0; i <= 6; i++) {
      const x = (i / 6) * 2 - 1;
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
    const PAD = 0.1; // vertical padding

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

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}
