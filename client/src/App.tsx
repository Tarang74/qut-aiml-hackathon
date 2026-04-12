/**
 * App — root component.
 *
 * Routing (pre-join):
 *   /         → WelcomeScreen
 *   /join     → JoinScreen   (enter code + lobby list)
 *   /create   → CreateScreen (admin: generate code)
 *   /{4 digits} → LobbyScreen (name + role, then join WS)
 *
 * Routing (post-join, once server sends "welcome"):
 *   decision | resolving → GameScreen
 *   game_over            → DebriefScreen
 */
import { useCallback, useEffect, useReducer, useRef } from "react";
import {
  GameDispatchContext,
  GameStateContext,
  INITIAL_STATE,
  reducer,
  WsSendContext,
} from "./state/store";
import { NavigateContext, useRouteState } from "./router";
import { useWs } from "./ws/useWs";
import type { ServerMsg } from "./ws/protocol";

import CreateScreen from "./ui/CreateScreen";
import HostScreen from "./ui/HostScreen";
import JoinScreen from "./ui/JoinScreen";
import LobbyScreen from "./ui/LobbyScreen";
import GameScreen from "./ui/GameScreen";
import WaitingScreen from "./ui/WaitingScreen";
import SummaryScreen from "./ui/SummaryScreen";
import DebriefScreen from "./ui/DebriefScreen";
import WelcomeScreen from "./ui/WelcomeScreen";
import EmojiConfetti from "./ui/EmojiConfetti";
import EventBanner from "./ui/EventBanner";

// isHost uses sessionStorage (per-tab) so two tabs on the same machine can have
// one as host and one as player without colliding.
const SS_HOST = "aura_is_host";


export default function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE, (init) => ({
    ...init,
    isHost: sessionStorage.getItem(SS_HOST) === "1",
  }));
  const [route, navigate] = useRouteState();

  // ── One-time migration: remove old localStorage key that caused auto-redirects ─
  useEffect(() => {
    localStorage.removeItem("aura_game_code");
  }, []);

  // ── Session restoration on mount ─────────────────────────────────────────
  // Read the server session so host tabs survive reload and players reconnect.
  useEffect(() => {
    fetch("/api/session")
      .then((r) => r.json())
      .then((data: { type: string; game_code?: string; session_id?: string }) => {
        if (data.type === "host") {
          dispatch({ type: "set_host" });
          if (data.game_code) {
            dispatch({ type: "set_game_code", code: data.game_code });
          }
        } else if (data.type === "player" && data.session_id) {
          // Set nonce = session_id so the auto-sent Welcome can be claimed.
          dispatch({ type: "set_join_nonce", nonce: data.session_id });
        } else {
          // No valid server session: clear any stale local identity.
          sessionStorage.removeItem(SS_HOST);
          dispatch({ type: "clear_host" });
          dispatch({ type: "leave_game" });
        }
      })
      .catch(() => {
        // Server unreachable — ignore.
      });
  }, []);

  // isHost: per-tab (sessionStorage).
  useEffect(() => {
    sessionStorage.setItem(SS_HOST, state.isHost ? "1" : "0");
  }, [state.isHost]);

  // When game_reset fires while this tab is the host, clear session and go to /create.
  const lastResetCount = useRef(state.resetCount);
  useEffect(() => {
    if (state.resetCount > lastResetCount.current && state.isHost) {
      sessionStorage.removeItem(SS_HOST);
      dispatch({ type: "clear_host" });
      navigate("/create");
    }
    lastResetCount.current = state.resetCount;
  }, [state.resetCount]);

  // Keep navigate stable inside callbacks without re-creating them on every render
  const navigateRef = useRef(navigate);
  useEffect(() => { navigateRef.current = navigate; }, [navigate]);

  const onMessage = useCallback((msg: ServerMsg) => {
    // Drop the session cookie on reset or game-over so stale identity doesn't
    // auto-rejoin this client into the next game on reconnect.
    if (msg.type === "game_reset" || msg.type === "game_over") {
      document.cookie = "aura_session=; Max-Age=0; Path=/";
      document.cookie = "aura_server=; Max-Age=0; Path=/";
    }
    dispatch({ type: "server_msg", msg });
  }, []);
  const onConnect = useCallback(() => dispatch({ type: "ws_connected" }), []);
  const onDisconnect = useCallback(() => {
    // Keep session + identity on transient disconnect so auto-reconnect can
    // reclaim the same player/host session after refresh or short outages.
    dispatch({ type: "ws_disconnected" });
  }, []);
  const send = useWs(onMessage, onConnect, onDisconnect);

  // ── Screen selection ───────────────────────────────────────────────────────

  let screen: React.ReactNode;

  if (state.isHost && route.page === "host") {
    screen = state.phase === "game_over" ? <DebriefScreen /> : <HostScreen />;
  } else if (state.myPlayerId !== null) {
    if (state.phase === "game_over") {
      screen = <DebriefScreen />;
    } else if (state.phase === "lobby") {
      screen = <WaitingScreen />;
    } else if (state.phase === "summary") {
      screen = <SummaryScreen />;
    } else {
      screen = <GameScreen />;
    }
  } else {
    switch (route.page) {
      case "create":
        screen = <CreateScreen />;
        break;
      case "host":
        screen = state.isHost
          ? (state.phase === "game_over" ? <DebriefScreen /> : <HostScreen />)
          : <CreateScreen />;
        break;
      case "code":
        screen = <LobbyScreen code={route.code} />;
        break;
      case "join":
        screen = <JoinScreen />;
        break;
      case "welcome":
      case "home":
      default:
        screen = <WelcomeScreen />;
        break;
    }
  }

  return (
    <GameStateContext.Provider value={state}>
      <GameDispatchContext.Provider value={dispatch}>
        <WsSendContext.Provider value={send}>
          <NavigateContext.Provider value={navigate}>
            <EventBanner />
            <EmojiConfetti />
            {screen}
          </NavigateContext.Provider>
        </WsSendContext.Provider>
      </GameDispatchContext.Provider>
    </GameStateContext.Provider>
  );
}
