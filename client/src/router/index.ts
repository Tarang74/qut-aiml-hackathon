import { createContext, useContext, useEffect, useState } from "react";

// ── Route types ───────────────────────────────────────────────────────────────

export type Route =
  | { page: "create" }
  | { page: "host" }   // /host — admin watch view, never joins as player
  | { page: "join" }
  | { page: "code"; code: string } // /{4-digit-code}
  | { page: "home" }; // / (treated same as join)

function parsePath(path: string): Route {
  if (path === "/create") return { page: "create" };
  if (path === "/host") return { page: "host" };
  if (path === "/join") return { page: "join" };
  const m = path.match(/^\/(\d{4})$/);
  if (m) return { page: "code", code: m[1] };
  return { page: "home" };
}

// ── Hook ──────────────────────────────────────────────────────────────────────

export type NavigateFn = (path: string) => void;

export function useRouteState(): [Route, NavigateFn] {
  const [route, setRoute] = useState<Route>(() =>
    parsePath(window.location.pathname),
  );

  useEffect(() => {
    const handler = () => setRoute(parsePath(window.location.pathname));
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  function navigate(path: string) {
    window.history.pushState(null, "", path);
    setRoute(parsePath(path));
  }

  return [route, navigate];
}

// ── Context (so screens can navigate without prop drilling) ───────────────────

export const NavigateContext = createContext<NavigateFn>(() => {});

export function useNavigate() {
  return useContext(NavigateContext);
}
