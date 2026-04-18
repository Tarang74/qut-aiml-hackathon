import { useCallback, useEffect, useRef } from "react";
import type { ClientMsg, ServerMsg } from "./protocol";

// Vite proxy rewrites /ws → ws://localhost:8080/ws during dev.
// In production VITE_WS_URL is set to wss://farm.tarangjanawalkar.com/ws.
const WS_URL = (import.meta.env.VITE_WS_URL as string | undefined) ?? "/ws";
const PING_INTERVAL_MS = 30_000; // keep Cloudflare (100s timeout) happy
// Set VITE_OFFLINE=true at build time to skip the WS connection entirely
// (static portfolio deploy with no backend).
const IS_OFFLINE = import.meta.env.VITE_OFFLINE === "true";

/**
 * Manages one WebSocket connection for the lifetime of the component.
 * No auto-reconnect: if the connection drops the player is removed.
 * Set VITE_OFFLINE=true to skip the connection entirely.
 *
 * @param onMessage - called with every parsed ServerMsg from the server
 * @returns send    - call this to send a ClientMsg; silently drops if disconnected
 */
export function useWs(
  onMessage: (msg: ServerMsg) => void,
  onConnect?: () => void,
  onDisconnect?: () => void,
) {
  const wsRef = useRef<WebSocket | null>(null);
  const onMessageRef = useRef(onMessage);
  onMessageRef.current = onMessage;
  const onConnectRef = useRef(onConnect);
  onConnectRef.current = onConnect;
  const onDisconnectRef = useRef(onDisconnect);
  onDisconnectRef.current = onDisconnect;

  const send = useCallback((msg: ClientMsg) => {
    const ws = wsRef.current;
    if (ws?.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(msg));
    }
  }, []);

  useEffect(() => {
    if (IS_OFFLINE) return;

    let pingTimer: ReturnType<typeof setInterval> | undefined;

    const ws = new WebSocket(WS_URL);
    wsRef.current = ws;

    ws.onopen = () => {
      onConnectRef.current?.();
      // Client-side heartbeat so Cloudflare doesn't close an idle connection.
      pingTimer = setInterval(() => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({ type: "ping" } satisfies ClientMsg));
        }
      }, PING_INTERVAL_MS);
    };

    ws.onmessage = (e: MessageEvent<string>) => {
      try {
        const msg = JSON.parse(e.data) as ServerMsg;
        onMessageRef.current(msg);
      } catch {
        console.warn("[ws] unparseable message", e.data);
      }
    };

    ws.onerror = (e) => {
      console.warn("[ws] error", e);
    };

    ws.onclose = () => {
      clearInterval(pingTimer);
      onDisconnectRef.current?.();
    };

    return () => {
      clearInterval(pingTimer);
      ws.close();
    };
  }, []); // connect once on mount

  return send;
}
