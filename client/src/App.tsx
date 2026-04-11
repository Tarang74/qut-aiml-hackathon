/**
 * App — root component.
 *
 * Routing (pre-join):
 *   /         → JoinScreen   (enter code)
 *   /join     → JoinScreen
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
import NewsTicker from "./ui/NewsTicker";
import EmojiConfetti from "./ui/EmojiConfetti";
import EventBanner from "./ui/EventBanner";

// isHost uses sessionStorage (per-tab) so two tabs on the same machine can have
// one as host and one as player without colliding.
// gameCode uses localStorage (cross-tab) so players see the active game on JoinScreen.
const SS_HOST = "aura_is_host";
const LS_CODE = "aura_game_code";

export default function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE, (init) => ({
    ...init,
    isHost: sessionStorage.getItem(SS_HOST) === "1",
    gameCode: localStorage.getItem(LS_CODE) ?? null,
  }));
  const [route, navigate] = useRouteState();

  // isHost: per-tab (sessionStorage) so a second tab on the same machine can join as player.
  useEffect(() => {
    sessionStorage.setItem(SS_HOST, state.isHost ? "1" : "0");
  }, [state.isHost]);

  // When game_reset fires while this tab is the host, clear the stale session and
  // return to /create so the host must start a fresh game.
  const lastResetCount = useRef(state.resetCount);
  useEffect(() => {
    if (state.resetCount > lastResetCount.current && state.isHost) {
      sessionStorage.removeItem(SS_HOST);
      dispatch({ type: "clear_host" });
      navigate("/create");
    }
    lastResetCount.current = state.resetCount;
  }, [state.resetCount]);

  // gameCode: shared across tabs (localStorage) so JoinScreen can show the active game.
  useEffect(() => {
    if (state.gameCode) localStorage.setItem(LS_CODE, state.gameCode);
  }, [state.gameCode]);

  const onMessage = useCallback(
    (msg: ServerMsg) => dispatch({ type: "server_msg", msg }),
    [],
  );
  const onConnect = useCallback(() => dispatch({ type: "ws_connected" }), []);
  const onDisconnect = useCallback(() => dispatch({ type: "ws_disconnected" }), []);
  const send = useWs(onMessage, onConnect, onDisconnect);

  // If the player hits / or /join and there's an active game code, skip the
  // code-entry step and land directly on the join form.
  useEffect(() => {
    if (
      (route.page === "home" || route.page === "join") &&
      !state.isHost &&
      state.myPlayerId === null &&
      state.gameCode
    ) {
      navigate(`/${state.gameCode}`);
    }
  }, [route.page, state.gameCode, state.isHost, state.myPlayerId]);

  // ── Screen selection ──────────────────────────────────────────────────────

  let screen: React.ReactNode;

  if (state.isHost) {
    // Host/spectator view — only reachable by clicking "Watch as Host →" in CreateScreen.
    // sessionStorage ensures this persists across reloads but not into new tabs.
    // After game ends, show the shared debrief screen so host can review results then quit.
    if (state.phase === "game_over") {
      screen = <DebriefScreen />;
    } else {
      screen = <HostScreen />;
    }
  } else if (state.myPlayerId !== null) {
    // Already joined as a player — ignore the URL.
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
    // Pre-join: route by URL.
    switch (route.page) {
      case "create":
        screen = <CreateScreen />;
        break;
      case "host":
        // /host typed directly without going through /create — send to CreateScreen.
        screen = <CreateScreen />;
        break;
      case "code":
        screen = <LobbyScreen code={route.code} />;
        break;
      case "join":
      case "home":
      default:
        screen = <JoinScreen />;
        break;
    }
  }

  return (
    <GameStateContext.Provider value={state}>
      <GameDispatchContext.Provider value={dispatch}>
        <WsSendContext.Provider value={send}>
          <NavigateContext.Provider value={navigate}>
            <NewsTicker />
            <EventBanner />
            <EmojiConfetti />
            {screen}
          </NavigateContext.Provider>
        </WsSendContext.Provider>
      </GameDispatchContext.Provider>
    </GameStateContext.Provider>
  );
}
