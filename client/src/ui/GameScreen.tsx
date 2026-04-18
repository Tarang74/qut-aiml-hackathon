/**
 * GameScreen — shown to players during decision / resolving phases.
 *
 * Tabs: Farm (Farmer only) | Market | Options | Chaos | God
 *
 * Lock-in flow: action buttons queue a pending action locally (no WS send).
 * "Lock In" sends ONE action message. "Take No Action" sends no_op.
 * All action buttons are disabled once locked in, until the next decision cycle.
 */
import { useEffect, useState } from "react";
import { useGameDispatch, useGameState, useWsSend } from "../state/store";
import { useNavigate } from "../router";
import type { PlayerAction } from "../ws/protocol";

type Tab = "farm" | "market" | "options" | "chaos" | "god";

function formatCompactNumber(value: number): string {
  const abs = Math.abs(value);
  const sign = value < 0 ? "-" : "";
  if (abs >= 1_000_000) {
    const scaled = abs / 1_000_000;
    return `${sign}${scaled >= 10 ? scaled.toFixed(0) : scaled.toFixed(1)}M`;
  }
  if (abs >= 1_000) {
    const scaled = abs / 1_000;
    return `${sign}${scaled >= 10 ? scaled.toFixed(0) : scaled.toFixed(1)}k`;
  }
  return `${sign}${abs.toFixed(0)}`;
}

function formatCompactMoney(value: number): string {
  return `$${formatCompactNumber(value)}`;
}

function normalCdf(x: number): number {
  // Abramowitz-Stegun approximation (accurate enough for UI quotes).
  const sign = x < 0 ? -1 : 1;
  const z = Math.abs(x) / Math.sqrt(2);
  const t = 1 / (1 + 0.3275911 * z);
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const erf =
    1 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-z * z);
  return 0.5 * (1 + sign * erf);
}

function bsPrice(
  optionType: "call" | "put",
  spot: number,
  strike: number,
  yearsToExpiry: number,
  riskFreeRate: number,
  sigma: number,
): number {
  if (spot <= 0 || strike <= 0 || yearsToExpiry <= 0 || sigma <= 0) {
    return Math.max(0, optionType === "call" ? spot - strike : strike - spot);
  }

  const sqrtT = Math.sqrt(yearsToExpiry);
  const d1 =
    (Math.log(spot / strike) +
      (riskFreeRate + 0.5 * sigma * sigma) * yearsToExpiry) /
    (sigma * sqrtT);
  const d2 = d1 - sigma * sqrtT;

  if (optionType === "call") {
    return (
      spot * normalCdf(d1) -
      strike * Math.exp(-riskFreeRate * yearsToExpiry) * normalCdf(d2)
    );
  }
  return (
    strike * Math.exp(-riskFreeRate * yearsToExpiry) * normalCdf(-d2) -
    spot * normalCdf(-d1)
  );
}

export default function GameScreen() {
  const state = useGameState();
  const send = useWsSend();
  const dispatch = useGameDispatch();
  const navigate = useNavigate();
  const isFarmer = state.myRole === "farmer";

  const [tab, setTab] = useState<Tab>(isFarmer ? "farm" : "market");
  // pending: action selected but not yet sent; locked: action committed this cycle
  const [pending, setPending] = useState<{
    action: PlayerAction;
    label: string;
  } | null>(null);
  const [lastCommitted, setLastCommitted] = useState<{
    action: PlayerAction;
    label: string;
  } | null>(null);
  const [locked, setLocked] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  function closeHelp() {
    sessionStorage.setItem("aura_help_seen", "1");
    setShowHelp(false);
  }

  function leaveGame() {
    // Tell server to remove us from the game and invalidate our session.
    send({ type: "leave" });
    // Clear session cookie so reconnect doesn't auto-rejoin.
    document.cookie = "aura_session=; Max-Age=0; Path=/";
    dispatch({ type: "leave_game" });
    navigate("/join");
  }

  // Reset lock state at the start of each decision window.
  useEffect(() => {
    if (state.phase === "decision") {
      setPending(null);
      setLocked(false);
    }
  }, [state.phase, state.cycle]);

  // Select an action locally — no WS send yet.
  function selectAction(action: PlayerAction, label: string) {
    if (locked) return;
    setPending({ action, label });
  }

  function lockIn() {
    if (locked) return;
    if (pending) {
      send({ type: "action", action: pending.action });
      setLastCommitted(pending);
    } else {
      send({ type: "action", action: { kind: "no_op" } });
    }
    setLocked(true);
  }

  function repeatLastAction() {
    if (locked || !isDecision || !lastCommitted) return;
    const canRepeat = isActionRepeatable(lastCommitted.action, state);
    if (canRepeat) {
      send({ type: "action", action: lastCommitted.action });
      setPending(lastCommitted);
    } else {
      setPending(null);
      send({ type: "action", action: { kind: "no_op" } });
    }
    setLocked(true);
  }

  function takeNoAction() {
    if (locked) return;
    setPending(null);
    setLocked(true);
    send({ type: "action", action: { kind: "no_op" } });
  }

  const isDecision = state.phase === "decision";
  const canAct = isDecision && !locked;
  const cashNum = parseFloat(state.myCash);
  const netWorthNum = parseFloat(state.myNetWorth);

  // Mobile safety net: if time is about to expire, commit the selected action.
  useEffect(() => {
    if (!isDecision || locked || state.paused || !pending) return;
    if (state.secondsRemaining > 1) return;
    send({ type: "action", action: pending.action });
    setLastCommitted(pending);
    setLocked(true);
  }, [isDecision, locked, pending, send, state.paused, state.secondsRemaining]);

  const tabs: Array<{ id: Tab; label: string }> = [
    ...(isFarmer ? [{ id: "farm" as Tab, label: "Farm" }] : []),
    { id: "market", label: "Market" },
    { id: "options", label: "Options" },
    { id: "chaos", label: "Chaos" },
    { id: "god", label: "God" },
  ];

  return (
    <div style={s.root}>
      {/* ── Top bar ──────────────────────────────────────────────────────── */}
      <div style={s.topBar}>
        <div style={s.topBarLeft}>
          <span style={s.priceLabel}>Aura</span>
          <span style={{ ...s.priceValue, color: "#7a5010" }}>
            {state.myAura.toFixed(0)}
          </span>
        </div>
        <div style={s.topBarCenter}>
          <div style={s.topBarMidStats}>
            <div style={s.topBarMidStat}>
              <span style={s.priceLabel}>Cash</span>
              <span style={s.topBarMidValue}>
                {formatCompactMoney(cashNum)}
              </span>
            </div>
            <span style={s.topBarMidDivider} />
            <div style={s.topBarMidStat}>
              <span style={s.priceLabel}>Net Worth</span>
              <span style={s.topBarMidValue}>
                {formatCompactMoney(netWorthNum)}
              </span>
            </div>
          </div>
        </div>
        <div style={s.topBarRight}>
          <button style={s.helpBtn} onClick={() => setShowHelp(true)}>
            ?
          </button>
          <button style={s.leaveBtn} onClick={leaveGame} title="Leave game">
            ✕
          </button>
        </div>
      </div>

      {/* ── Queued action banner — only shown when there's something to say ── */}
      {!state.paused && (locked || !isDecision) && (
        <div
          style={{
            ...s.countdownBar,
            ...(locked
              ? { background: "#e0f5e0", borderColor: "#9ac89a" }
              : { background: "#f8f4e0", borderColor: "#c8b060" }),
          }}
        >
          {isDecision && locked && (
            <>
              <span
                style={{
                  ...s.countdownNum,
                  color: "#1d6b1d",
                  fontSize: "1.3rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap" as const,
                  maxWidth: "70%",
                  minWidth: 0,
                }}
              >
                ✓ {pending ? pending.label : "No action"}
              </span>
              <span
                style={{ ...s.countdownLabel, color: "#9a9a90", flexShrink: 0 }}
              >
                waiting…
              </span>
            </>
          )}
          {!isDecision && (
            <span
              style={{
                ...s.countdownNum,
                color: "#7a5010",
                fontSize: "1.4rem",
              }}
            >
              Resolving cycle {state.cycle}…
            </span>
          )}
        </div>
      )}

      {/* ── Tab bar ──────────────────────────────────────────────────────── */}
      <div style={s.tabBar}>
        {tabs.map((t) => (
          <button
            key={t.id}
            style={{ ...s.tabBtn, ...(tab === t.id ? s.tabBtnActive : {}) }}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Tab content ──────────────────────────────────────────────────── */}
      <div style={s.content}>
        <TabTip tab={tab} isFarmer={isFarmer} />
        {tab === "farm" && isFarmer && (
          <FarmTab
            act={selectAction}
            canAct={canAct}
            pendingLabel={pending?.label ?? null}
          />
        )}
        {tab === "market" && (
          <MarketTab
            act={selectAction}
            canAct={canAct}
            pendingLabel={pending?.label ?? null}
          />
        )}
        {tab === "options" && (
          <OptionsTab
            act={selectAction}
            canAct={canAct}
            pendingLabel={pending?.label ?? null}
          />
        )}
        {tab === "chaos" && (
          <ChaosTab
            act={selectAction}
            canAct={canAct}
            pendingLabel={pending?.label ?? null}
          />
        )}
        {tab === "god" && (
          <GodTab
            act={selectAction}
            canAct={canAct}
            pendingLabel={pending?.label ?? null}
          />
        )}

        {state.myFeedback && (
          <div style={s.feedbackCard}>
            <div style={s.feedbackHeader}>
              <span style={s.feedbackTitle}>Coach</span>
              <button
                style={s.dismissBtn}
                onClick={() => dispatch({ type: "clear_feedback" })}
              >
                ×
              </button>
            </div>
            {state.myFeedback
              .split(/\n/)
              .filter(Boolean)
              .map((line, i) => (
                <p key={i} style={s.feedbackLine}>
                  {line.trim()}
                </p>
              ))}
          </div>
        )}

        {state.headlines.length > 0 && (
          <div style={s.headlineCard}>
            <span style={s.headlineLabel}>HEADLINE</span>
            <p style={s.headlineText}>
              {state.headlines[state.headlines.length - 1].text}
            </p>
          </div>
        )}
      </div>

      {/* ── Lock-in bottom bar ───────────────────────────────────────────── */}
      <style>{`
        @keyframes lock-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(29,107,29,0.45); }
          55%       { box-shadow: 0 0 0 7px rgba(29,107,29,0); }
        }
      `}</style>
      <div
        style={{
          ...s.lockBar,
          ...(!isDecision
            ? { opacity: 0.35, pointerEvents: "none" as const }
            : {}),
        }}
      >
        <button
          style={{
            ...s.lockBtn,
            ...s.noActionBtn,
            opacity: locked ? 0.4 : 1,
            cursor: locked ? "not-allowed" : "pointer",
          }}
          disabled={locked || !isDecision}
          onClick={takeNoAction}
        >
          Skip
        </button>
        <button
          style={{
            ...s.lockBtn,
            ...s.repeatBtn,
            opacity: locked || !lastCommitted ? 0.45 : 1,
            cursor: locked || !lastCommitted ? "not-allowed" : "pointer",
          }}
          disabled={locked || !isDecision || !lastCommitted}
          onClick={repeatLastAction}
          title={
            lastCommitted
              ? `Repeat: ${lastCommitted.label}`
              : "No previous action"
          }
        >
          Repeat Last
        </button>
        <button
          style={{
            ...s.lockBtn,
            opacity: locked ? 0.5 : 1,
            cursor: locked ? "not-allowed" : "pointer",
            background: locked ? "#e8e4df" : pending ? "#1d6b1d" : "#e8eff5",
            borderColor: locked ? "#c8c4be" : pending ? "#155215" : "#5a8ab0",
            color:
              pending && !locked ? "#ffffff" : locked ? "#8a8a80" : "#18181a",
            animation:
              pending && !locked
                ? "lock-pulse 1.5s ease-in-out infinite"
                : "none",
          }}
          disabled={locked || !isDecision}
          onClick={lockIn}
        >
          {locked
            ? "✓ Locked In"
            : pending
              ? `✓ Lock In: ${pending.label}`
              : "Lock In"}
        </button>
      </div>

      {/* ── How to Play modal ────────────────────────────────────────────── */}
      {showHelp && <HowToPlayModal role={state.myRole} onClose={closeHelp} />}
    </div>
  );
}

function isActionRepeatable(
  action: PlayerAction,
  state: ReturnType<typeof useGameState>,
): boolean {
  const cash = parseFloat(state.myCash);
  const aura = state.myAura;
  const price = parseFloat(state.price);
  const me = state.myPlayerId;
  const myFarm = state.farms.find((f) => f.owner === me);

  switch (action.kind) {
    case "place_order":
      return action.side === "bid"
        ? cash >= price * action.quantity
        : state.myShares >= action.quantity;
    case "cancel_order":
      return true;
    case "plant_fields":
      return Boolean(
        myFarm &&
        myFarm.id === action.farm_id &&
        myFarm.fields > myFarm.planted_fields,
      );
    case "harvest_corn":
      return Boolean(
        myFarm &&
        myFarm.id === action.farm_id &&
        myFarm.planted_fields > 0 &&
        myFarm.state === "healthy",
      );
    case "hire_worker":
      return Boolean(myFarm && myFarm.id === action.farm_id && cash >= 500);
    case "fire_worker":
      return Boolean(
        myFarm && myFarm.id === action.farm_id && myFarm.workers > 0,
      );
    case "sell_corn":
      return Boolean(
        myFarm && myFarm.id === action.farm_id && myFarm.stored_corn > 0,
      );
    case "operate_mill":
      return state.mills.some(
        (m) =>
          m.id === action.mill_id && m.owner === me && m.state !== "burning",
      );
    case "buy_option":
      return cash > 0;
    case "write_option":
      return true;
    case "burn_farm":
      return (
        aura >= 200 &&
        state.farms.some((f) => f.id === action.target_farm && f.owner !== me)
      );
    case "burn_mill":
      return (
        aura >= 250 && state.mills.some((m) => m.id === action.target_mill)
      );
    case "hitman_worker":
      return (
        aura >= 500 &&
        state.farms.some((f) => f.id === action.target_farm && f.owner !== me)
      );
    case "hitman_owner":
      return (
        aura >= 750 &&
        state.npcOwners.some((n) => n.id === action.target_npc && n.alive)
      );
    case "spread_rumor":
      return aura >= 5 && action.text.trim().length > 0;
    case "drought":
      return aura >= 100;
    case "famine":
      return aura >= 500;
    case "bumper_harvest":
      return aura >= 50;
    case "market_panic":
      return aura >= 250;
    case "nuclear_fallout":
      return aura >= 1000;
    case "acquire_farm":
      return (
        cash >= price * 15 &&
        state.farms.some((f) => f.id === action.target_farm && f.owner !== me)
      );
    case "acquire_mill":
      return (
        cash >= price * 20 &&
        state.mills.some((m) => m.id === action.target_mill)
      );
    case "dump_shares":
      return state.myShares > 0;
    case "corner_market":
      return cash >= price * 10;
    case "no_op":
      return true;
  }
}

// ── Per-tab contextual tip ────────────────────────────────────────────────────

const TAB_TIPS: Record<string, { icon: string; text: string }> = {
  farm: {
    icon: "🌽",
    text: "Each cycle: Plant → Harvest → Sell. Hire workers to boost yield. Lock in before time runs out!",
  },
  market: {
    icon: "📈",
    text: "Buy low, sell high. Negative shares = short position. Watch Bid/Ask depth to sense price direction.",
  },
  options: {
    icon: "📊",
    text: "Buy a Call to profit if price rises. Buy a Put to profit if price falls. Writing an option earns cash upfront — but you owe the buyer if price moves against you.",
  },
  chaos: {
    icon: "🔥",
    text: "Burn rivals' farms & mills to gut their income. Aura refills +10 every cycle — spend it wisely.",
  },
  god: {
    icon: "⚡",
    text: "Save aura for game-changers. Nuclear Fallout ends the game immediately — coordinate for maximum impact.",
  },
};

function TabTip({ tab, isFarmer }: { tab: Tab; isFarmer: boolean }) {
  const storageKey = `aura_tip_dismissed_${tab}`;
  const [dismissed, setDismissed] = useState(
    () => sessionStorage.getItem(storageKey) === "1",
  );

  useEffect(() => {
    setDismissed(sessionStorage.getItem(storageKey) === "1");
  }, [storageKey]);

  if (dismissed) return null;
  // farm tab tip only shown to farmers
  if (tab === "farm" && !isFarmer) return null;
  const tip = TAB_TIPS[tab];
  if (!tip) return null;

  function dismissTip() {
    sessionStorage.setItem(storageKey, "1");
    setDismissed(true);
  }

  return (
    <div style={s.tipCard}>
      <span style={s.tipIcon}>{tip.icon}</span>
      <span style={s.tipText}>{tip.text}</span>
      <button style={s.tipDismiss} onClick={dismissTip}>
        ×
      </button>
    </div>
  );
}

// ── How to Play modal ──────────────────────────────────────────────────────────

function HowToPlayModal({
  role,
  onClose,
}: {
  role: string | null;
  onClose: () => void;
}) {
  const isFarmer = role === "farmer";
  return (
    <div style={s.overlay} onClick={onClose}>
      <div style={s.modal} onClick={(e) => e.stopPropagation()}>
        <div style={s.modalHeader}>
          <span style={s.modalTitle}>How to Play</span>
          <button style={s.modalClose} onClick={onClose}>
            ×
          </button>
        </div>
        <div style={s.modalBody}>
          <div style={s.modalSection}>
            <p style={s.modalSectionTitle}>🏆 Goal</p>
            <p style={s.modalText}>
              Finish with the highest net worth. Net worth = cash + share value
              + farm equity + options P&L.
            </p>
          </div>
          {isFarmer ? (
            <div style={s.modalSection}>
              <p style={s.modalSectionTitle}>🌽 You are a Farmer</p>
              <p style={s.modalText}>
                Plant fields → harvest corn → sell through mills. Hire workers
                to boost output. Acquire more farms to scale up. Use options to
                hedge your harvest price against market moves.
              </p>
            </div>
          ) : (
            <div style={s.modalSection}>
              <p style={s.modalSectionTitle}>📈 You are a Trader</p>
              <p style={s.modalText}>
                Buy and sell CornCo stock. Go long when supply looks tight,
                short when there's a glut. Sell options to collect premium.
                Corner the market or dump shares to move the price.
              </p>
            </div>
          )}
          <div style={s.modalSection}>
            <p style={s.modalSectionTitle}>🔥 Chaos Actions</p>
            <p style={s.modalText}>
              Burn farms &amp; mills, send hitmen, spread rumors. Each costs
              Aura. Use chaos to destabilise rivals or manipulate the market.
            </p>
          </div>
          <div style={s.modalSection}>
            <p style={s.modalSectionTitle}>✨ Aura &amp; God Powers</p>
            <p style={s.modalText}>
              Aura accumulates +10 each cycle. Every 5 cycles, leaderboard
              bonuses apply: top 1-5 earn +50, +40, +30, +25, +20 aura. Save it
              for god-tier events: Drought (100), Market Panic (250), Famine
              (500), or Nuclear Fallout (1000) to end the game in chaos.
            </p>
          </div>
          <div style={s.modalSection}>
            <p style={s.modalSectionTitle}>🔒 Lock In</p>
            <p style={s.modalText}>
              Select any action on a tab, then press Lock In. The cycle resolves
              immediately once everyone locks in. Press Take No Action to pass
              and preserve your Aura.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Farm tab ──────────────────────────────────────────────────────────────────

function FarmTab({
  act,
  canAct,
  pendingLabel,
}: {
  act: (a: PlayerAction, label: string) => void;
  canAct: boolean;
  pendingLabel: string | null;
}) {
  const state = useGameState();
  const farm = state.farms.find((f) => f.owner === state.myPlayerId);
  const cash = parseFloat(state.myCash);

  if (!farm) {
    return (
      <div style={s.card}>
        <p style={s.empty}>No farm assigned.</p>
      </div>
    );
  }

  const unplanted = farm.fields - farm.planted_fields;
  const canHarvest = farm.planted_fields > 0 && farm.state === "healthy";
  const canSell = farm.stored_corn > 0;

  return (
    <>
      <div style={s.card}>
        <div style={s.statGrid}>
          <Stat
            label="Planted"
            value={`${farm.planted_fields}/${farm.fields}`}
          />
          <Stat label="Stored corn" value={String(farm.stored_corn)} />
          <Stat label="Workers" value={String(farm.workers)} />
          <Stat
            label="Farm state"
            value={farm.state}
            color={
              farm.state === "burning"
                ? "#7a1a1a"
                : farm.state === "idle"
                  ? "#9a9a90"
                  : "#1d6b1d"
            }
          />
          <Stat label="Cash" value={`$${cash.toFixed(0)}`} />
          <Stat
            label="Net worth"
            value={`$${parseFloat(state.myNetWorth).toFixed(0)}`}
          />
        </div>
      </div>
      <div style={s.card}>
        <p style={s.cardTitle}>Select action (confirm with Lock In)</p>
        <div style={s.btnGrid}>
          <ActionBtn
            label="Plant Fields"
            sub={`${unplanted} available`}
            disabled={!canAct || unplanted === 0}
            selected={pendingLabel === "Plant Fields"}
            onClick={() =>
              act(
                { kind: "plant_fields", farm_id: farm.id, count: unplanted },
                "Plant Fields",
              )
            }
          />
          <ActionBtn
            label="Harvest Corn"
            sub={canHarvest ? `${farm.planted_fields} fields` : "nothing ready"}
            disabled={!canAct || !canHarvest}
            selected={pendingLabel === "Harvest Corn"}
            onClick={() =>
              act({ kind: "harvest_corn", farm_id: farm.id }, "Harvest Corn")
            }
          />
          <ActionBtn
            label="Sell Corn"
            sub={canSell ? `${farm.stored_corn} bushels` : "barn empty"}
            disabled={!canAct || !canSell}
            selected={pendingLabel === "Sell Corn"}
            onClick={() =>
              act({ kind: "sell_corn", farm_id: farm.id }, "Sell Corn")
            }
          />
          <ActionBtn
            label="Hire Worker"
            sub={cash >= 500 ? "costs $500" : "need $500"}
            disabled={!canAct || cash < 500}
            selected={pendingLabel === "Hire Worker"}
            onClick={() =>
              act({ kind: "hire_worker", farm_id: farm.id }, "Hire Worker")
            }
          />
          <ActionBtn
            label="Fire Worker"
            sub={farm.workers > 0 ? `${farm.workers} workers` : "no workers"}
            disabled={!canAct || farm.workers === 0}
            selected={pendingLabel === "Fire Worker"}
            color="#f5e8e8"
            borderColor="#aa5a5a"
            onClick={() =>
              act({ kind: "fire_worker", farm_id: farm.id }, "Fire Worker")
            }
          />
        </div>
      </div>
    </>
  );
}

// ── Market tab ────────────────────────────────────────────────────────────────

function MarketTab({
  act,
  canAct,
  pendingLabel,
}: {
  act: (a: PlayerAction, label: string) => void;
  canAct: boolean;
  pendingLabel: string | null;
}) {
  const state = useGameState();
  const [qty, setQty] = useState(1);
  const cash = parseFloat(state.myCash);
  const price = parseFloat(state.price);
  const history = state.priceHistory
    .map(parseFloat)
    .filter((n) => Number.isFinite(n));
  const prev1 = history.length >= 2 ? history[history.length - 2] : price;
  const prev5 =
    history.length >= 6 ? history[history.length - 6] : (history[0] ?? price);
  const move1Pct = prev1 !== 0 ? ((price - prev1) / prev1) * 100 : 0;
  const move5Pct = prev5 !== 0 ? ((price - prev5) / prev5) * 100 : 0;
  const positionValue = state.myShares * price;
  const exposure =
    state.myShares === 0 ? "Flat" : state.myShares > 0 ? "Long" : "Short";
  const isFarmer = state.myRole === "farmer";

  const canBuy = cash >= price * qty;
  const canSell = state.myShares >= qty;
  const canDump = state.myShares > 0;

  return (
    <>
      <div style={s.card}>
        <div style={s.statGrid}>
          <Stat
            label="Shares"
            value={String(state.myShares)}
            color={state.myShares < 0 ? "#7a1a1a" : undefined}
          />
          <Stat
            label="Position"
            value={formatCompactMoney(positionValue)}
            color={positionValue < 0 ? "#7a1a1a" : undefined}
          />
          <Stat
            label="Exposure"
            value={exposure}
            color={
              exposure === "Short"
                ? "#7a1a1a"
                : exposure === "Long"
                  ? "#1d6b1d"
                  : "#6b6b63"
            }
          />
          <Stat label="Volume this cycle" value={String(state.cycleVolume)} />
          <Stat
            label="% move over 1 cycle"
            value={`${move1Pct >= 0 ? "+" : ""}${move1Pct.toFixed(1)}%`}
            color={move1Pct < 0 ? "#7a1a1a" : "#1d6b1d"}
          />
          <Stat
            label="% move over 5 cycles"
            value={`${move5Pct >= 0 ? "+" : ""}${move5Pct.toFixed(1)}%`}
            color={move5Pct < 0 ? "#7a1a1a" : "#1d6b1d"}
          />
        </div>
      </div>
      <div style={s.card}>
        <p style={s.cardTitle}>
          Quantity — <strong>{qty}</strong>
        </p>
        <input
          type="range"
          min={1}
          max={20}
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          style={s.qtySlider}
        />
      </div>
      <div style={s.card}>
        <p style={s.cardTitle}>Orders</p>
        <div style={s.btnGrid}>
          <ActionBtn
            label={`Buy ${qty}`}
            sub={canBuy ? `~$${(price * qty).toFixed(0)}` : "not enough cash"}
            disabled={!canAct || !canBuy}
            color="#e8f5e8"
            borderColor="#5aaa5a"
            selected={pendingLabel === `Buy ${qty} shares`}
            onClick={() =>
              act(
                { kind: "place_order", side: "bid", quantity: qty },
                `Buy ${qty} shares`,
              )
            }
          />
          <ActionBtn
            label={`Sell ${qty}`}
            sub={canSell ? `${state.myShares} held` : "not enough shares"}
            disabled={!canAct || !canSell}
            color="#f5e8e8"
            borderColor="#aa5a5a"
            selected={pendingLabel === `Sell ${qty} shares`}
            onClick={() =>
              act(
                { kind: "place_order", side: "ask", quantity: qty },
                `Sell ${qty} shares`,
              )
            }
          />
        </div>
      </div>
      {!isFarmer && (
        <div style={s.card}>
          <p style={s.cardTitle}>Power Moves</p>
          <div style={s.btnGrid}>
            <ActionBtn
              label="Corner Market"
              sub="buy 200 shares"
              disabled={!canAct || cash < price * 10}
              color="#eeeef8"
              borderColor="#5a5aaa"
              selected={pendingLabel === "Corner Market"}
              onClick={() => act({ kind: "corner_market" }, "Corner Market")}
            />
            <ActionBtn
              label="Dump All"
              sub={
                canDump ? `sell ${state.myShares} @ market` : "no shares held"
              }
              disabled={!canAct || !canDump}
              color="#f5e8e8"
              borderColor="#aa5a5a"
              selected={pendingLabel === "Dump All Shares"}
              onClick={() => act({ kind: "dump_shares" }, "Dump All Shares")}
            />
          </div>
        </div>
      )}
    </>
  );
}

// ── Options tab ───────────────────────────────────────────────────────────────

// Fixed expiry — long enough to be useful, short enough to matter.
const OPT_EXPIRY = 3;

function OptionsTab({
  act,
  canAct,
  pendingLabel,
}: {
  act: (a: PlayerAction, label: string) => void;
  canAct: boolean;
  pendingLabel: string | null;
}) {
  const state = useGameState();
  const price = parseFloat(state.price);
  const [strikeOffset, setStrikeOffset] = useState(0);
  const strike = (price * (1 + strikeOffset / 100)).toFixed(2);
  const strikeNum = Number.parseFloat(strike);
  const series = state.priceHistory
    .map(parseFloat)
    .filter((n) => Number.isFinite(n));
  const returns = series.slice(1).map((p, i) => {
    const prior = series[i];
    return prior !== 0 ? (p - prior) / prior : 0;
  });
  const mean = returns.length
    ? returns.reduce((sum, value) => sum + value, 0) / returns.length
    : 0;
  const variance = returns.length
    ? returns.reduce((sum, value) => sum + (value - mean) ** 2, 0) /
      returns.length
    : 0;
  // Match server behavior by enforcing a floor so quotes aren't unrealistically cheap.
  const sigma = Math.max(Math.sqrt(variance), 0.1);
  const yearsToExpiry = OPT_EXPIRY / 10;
  const estCallPremium = bsPrice(
    "call",
    price,
    Number.isFinite(strikeNum) ? strikeNum : price,
    yearsToExpiry,
    0.05,
    sigma,
  );
  const estPutPremium = bsPrice(
    "put",
    price,
    Number.isFinite(strikeNum) ? strikeNum : price,
    yearsToExpiry,
    0.05,
    sigma,
  );
  const strikeLabels: Record<number, string> = {
    [-10]: "−10% below",
    0: "At price",
    10: "+10% above",
  };

  function optStyle(baseStyle: object, actLabel: string) {
    const isSelected = pendingLabel === actLabel;
    const isDisabled = !canAct;
    return {
      ...s.optBtn,
      ...(isDisabled ? s.optBtnDisabled : baseStyle),
      ...(isSelected
        ? {
            borderColor: "#1d6b1d",
            borderWidth: "2.5px",
            boxShadow: "0 0 0 3px rgba(29,107,29,0.12)",
          }
        : {}),
    };
  }

  return (
    <>
      <div style={s.card}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "0.75rem",
            marginBottom: "0.6rem",
          }}
        >
          <div style={{ textAlign: "left" as const }}>
            <div style={s.statLabel}>Strike price</div>
            <div style={{ ...s.statValue, color: "#6b6b63" }}>${strike}</div>
          </div>
          <div style={{ textAlign: "right" as const, marginLeft: "auto" }}>
            <div style={s.statLabel}>Expires in</div>
            <div style={{ ...s.statValue, color: "#6b6b63" }}>
              {OPT_EXPIRY} cycles
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.4rem" }}>
          {[-10, 0, 10].map((o) => (
            <button
              key={o}
              style={{
                ...s.qtyBtn,
                flex: 1,
                ...(strikeOffset === o ? s.qtyBtnActive : {}),
                fontSize: "0.78rem",
              }}
              onClick={() => setStrikeOffset(o)}
            >
              {strikeLabels[o]}
            </button>
          ))}
        </div>
      </div>

      <div style={s.card}>
        <p style={s.cardTitle}>
          Buy options (pay premium):
          <br />
          Call -${estCallPremium.toFixed(2)} | Put -${estPutPremium.toFixed(2)}
        </p>
        <div style={s.btnGrid}>
          {(["call", "put"] as const).map((type) => {
            const actLabel =
              type === "call" ? "Open Call Contract" : "Open Put Contract";
            const isSelected = pendingLabel === actLabel;
            return (
              <button
                key={type}
                style={optStyle(
                  type === "call" ? s.optBtnCall : s.optBtnPut,
                  actLabel,
                )}
                disabled={!canAct}
                onClick={() =>
                  act(
                    {
                      kind: "buy_option",
                      option_type: type,
                      strike,
                      expiry_cycles: OPT_EXPIRY,
                      quantity: 1,
                    },
                    actLabel,
                  )
                }
              >
                <span style={s.optEmoji}>
                  {isSelected ? "✓" : type === "call" ? "📈" : "📉"}
                </span>
                <span
                  style={{
                    ...s.optLabel,
                    color: isSelected ? "#155215" : "#18181a",
                  }}
                >
                  {type === "call" ? "Open Call Contract" : "Open Put Contract"}
                </span>
                <span style={s.optDesc}>
                  {type === "call" ? (
                    <>Right to buy at strike if price rises above strike</>
                  ) : (
                    <>Right to sell at strike if price falls below strike</>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div style={s.card}>
        <p style={s.cardTitle}>
          Sell options (receive premium):
          <br />
          Call +${estCallPremium.toFixed(2)} | Put +${estPutPremium.toFixed(2)}
        </p>
        <div style={s.btnGrid}>
          {(["call", "put"] as const).map((type) => {
            const actLabel =
              type === "call" ? "Write Call Contract" : "Write Put Contract";
            const isSelected = pendingLabel === actLabel;
            return (
              <button
                key={type}
                style={optStyle(
                  type === "call" ? s.optBtnWriteCall : s.optBtnWritePut,
                  actLabel,
                )}
                disabled={!canAct}
                onClick={() =>
                  act(
                    {
                      kind: "write_option",
                      option_type: type,
                      strike,
                      expiry_cycles: OPT_EXPIRY,
                      quantity: 1,
                    },
                    actLabel,
                  )
                }
              >
                <span style={s.optEmoji}>{isSelected ? "✓" : "💰"}</span>
                <span
                  style={{
                    ...s.optLabel,
                    color: isSelected ? "#155215" : "#18181a",
                  }}
                >
                  {type === "call"
                    ? "Write Call Contract"
                    : "Write Put Contract"}
                </span>
                <span style={s.optDesc}>
                  {type === "call" ? (
                    <>
                      Obligation to sell at strike if price rises above strike
                    </>
                  ) : (
                    <>Obligation to buy at strike if price falls below strike</>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

// ── Chaos tab ─────────────────────────────────────────────────────────────────

function ChaosTab({
  act,
  canAct,
  pendingLabel,
}: {
  act: (a: PlayerAction, label: string) => void;
  canAct: boolean;
  pendingLabel: string | null;
}) {
  const state = useGameState();
  const aura = state.myAura;
  const price = parseFloat(state.price);

  // Targets: all farms/mills/npcs except the current player's own farm
  const otherFarms = state.farms.filter((f) => f.owner !== state.myPlayerId);
  const aliveMills = state.mills;
  const aliveNpcs = state.npcOwners.filter((n) => n.alive);

  // Selections — useState is only used for explicit user picks; we derive a
  // "valid" value on every render so new farms/players appear automatically.
  const [targetFarm, setTargetFarm] = useState<number | null>(null);
  const [hitmanFarm, setHitmanFarm] = useState<number | null>(null);
  const [targetMill, setTargetMill] = useState<number | null>(null);
  const [targetNpc, setTargetNpc] = useState<number | null>(null);
  const [acqFarm, setAcqFarm] = useState<number | null>(null);
  const [acqMill, setAcqMill] = useState<number | null>(null);

  // Fallback to first available if the stored selection is gone / never set.
  const vTargetFarm = otherFarms.find((f) => f.id === targetFarm)
    ? targetFarm
    : (otherFarms[0]?.id ?? null);
  const vHitmanFarm = otherFarms.find((f) => f.id === hitmanFarm)
    ? hitmanFarm
    : (otherFarms[0]?.id ?? null);
  const vTargetMill = aliveMills.find((m) => m.id === targetMill)
    ? targetMill
    : (aliveMills[0]?.id ?? null);
  const vTargetNpc = aliveNpcs.find((n) => n.id === targetNpc)
    ? targetNpc
    : (aliveNpcs[0]?.id ?? null);
  const vAcqFarm = otherFarms.find((f) => f.id === acqFarm)
    ? acqFarm
    : (otherFarms[0]?.id ?? null);
  const vAcqMill = aliveMills.find((m) => m.id === acqMill)
    ? acqMill
    : (aliveMills[0]?.id ?? null);

  const cash = parseFloat(state.myCash);
  const farmCost = price * 15;
  const millCost = price * 20;

  // Resolve display name for a farm owner: check players first, then NPCs.
  function ownerLabel(ownerId: number): string {
    const player = state.knownPlayers.find((p) => p.id === ownerId);
    if (player) return `${player.name}`;
    const npc = state.npcOwners.find((n) => n.id === ownerId);
    if (npc) return npc.name;
    return `#${ownerId}`;
  }

  function ChaosRow({
    title,
    value,
    onChange,
    options,
    emoji,
    costLabel,
    disabled,
    selected,
    onAction,
  }: {
    title: string;
    value: number | null;
    onChange: (id: number | null) => void;
    options: Array<{ id: number; text: string }>;
    emoji: string;
    costLabel: string;
    disabled: boolean;
    selected: boolean;
    onAction: () => void;
  }) {
    return (
      <div style={s.card}>
        <p style={s.cardTitle}>{title}</p>
        <div style={s.chaosRow}>
          <select
            style={s.chaosSelect}
            value={value ?? ""}
            onChange={(e) =>
              onChange(e.target.value === "" ? null : Number(e.target.value))
            }
          >
            {options.length === 0 && <option value="">No targets</option>}
            {options.map((o) => (
              <option key={o.id} value={o.id}>
                {o.text}
              </option>
            ))}
          </select>
          <button
            style={{
              ...s.chaosActBtn,
              ...(selected ? s.chaosActBtnSelected : {}),
            }}
            disabled={disabled}
            onClick={onAction}
          >
            <span style={s.chaosActEmoji}>{emoji}</span>
            <span style={s.chaosActCost}>{costLabel}</span>
          </button>
        </div>
      </div>
    );
  }

  const farmOptions = otherFarms.map((f) => ({
    id: f.id,
    text: `Farm #${f.id} - ${ownerLabel(f.owner)} (${f.state})`,
  }));
  const workerOptions = otherFarms.map((f) => ({
    id: f.id,
    text: `Farm #${f.id} - ${ownerLabel(f.owner)} (${f.workers} workers)`,
  }));
  const millOptions = aliveMills.map((m) => ({
    id: m.id,
    text: `Mill #${m.id} (${m.state})`,
  }));
  const npcOptions = aliveNpcs.map((n) => ({
    id: n.id,
    text: n.name,
  }));

  return (
    <>
      <ChaosRow
        title="Burn Farm"
        value={vTargetFarm}
        onChange={setTargetFarm}
        options={farmOptions}
        emoji="🔥"
        costLabel="200 aura"
        disabled={
          !canAct ||
          aura < 200 ||
          vTargetFarm === null ||
          farmOptions.length === 0
        }
        selected={pendingLabel === `Burn Farm #${vTargetFarm}`}
        onAction={() =>
          act(
            { kind: "burn_farm", target_farm: vTargetFarm! },
            `Burn Farm #${vTargetFarm}`,
          )
        }
      />

      <ChaosRow
        title="Burn Mill"
        value={vTargetMill}
        onChange={setTargetMill}
        options={millOptions}
        emoji="🏭🔥"
        costLabel="250 aura"
        disabled={
          !canAct ||
          aura < 250 ||
          vTargetMill === null ||
          millOptions.length === 0
        }
        selected={pendingLabel === `Burn Mill #${vTargetMill}`}
        onAction={() =>
          act(
            { kind: "burn_mill", target_mill: vTargetMill! },
            `Burn Mill #${vTargetMill}`,
          )
        }
      />

      <ChaosRow
        title="Hire Hitman On Worker"
        value={vHitmanFarm}
        onChange={setHitmanFarm}
        options={workerOptions}
        emoji="🔪"
        costLabel="500 aura"
        disabled={
          !canAct ||
          aura < 500 ||
          vHitmanFarm === null ||
          workerOptions.length === 0
        }
        selected={pendingLabel === `Hitman Worker on Farm #${vHitmanFarm}`}
        onAction={() =>
          act(
            { kind: "hitman_worker", target_farm: vHitmanFarm! },
            `Hitman Worker on Farm #${vHitmanFarm}`,
          )
        }
      />

      <ChaosRow
        title="Hire Hitman On Farm Owner"
        value={vTargetNpc}
        onChange={setTargetNpc}
        options={npcOptions}
        emoji="☠️"
        costLabel="750 aura"
        disabled={
          !canAct ||
          aura < 750 ||
          vTargetNpc === null ||
          npcOptions.length === 0
        }
        selected={pendingLabel?.startsWith("Hitman on ") ?? false}
        onAction={() =>
          act(
            { kind: "hitman_owner", target_npc: vTargetNpc! },
            `Hitman on ${aliveNpcs.find((n) => n.id === vTargetNpc)?.name ?? "NPC"}`,
          )
        }
      />

      <ChaosRow
        title="Acquire Farm"
        value={vAcqFarm}
        onChange={setAcqFarm}
        options={farmOptions}
        emoji="🌾"
        costLabel={`$${farmCost.toFixed(0)}`}
        disabled={
          !canAct ||
          cash < farmCost ||
          vAcqFarm === null ||
          farmOptions.length === 0
        }
        selected={pendingLabel === `Acquire Farm #${vAcqFarm}`}
        onAction={() =>
          act(
            { kind: "acquire_farm", target_farm: vAcqFarm! },
            `Acquire Farm #${vAcqFarm}`,
          )
        }
      />

      <ChaosRow
        title="Acquire Mill"
        value={vAcqMill}
        onChange={setAcqMill}
        options={millOptions}
        emoji="🏭"
        costLabel={`$${millCost.toFixed(0)}`}
        disabled={
          !canAct ||
          cash < millCost ||
          vAcqMill === null ||
          millOptions.length === 0
        }
        selected={pendingLabel === `Acquire Mill #${vAcqMill}`}
        onAction={() =>
          act(
            { kind: "acquire_mill", target_mill: vAcqMill! },
            `Acquire Mill #${vAcqMill}`,
          )
        }
      />
    </>
  );
}

// ── God tab ───────────────────────────────────────────────────────────────────

function GodTab({
  act,
  canAct,
  pendingLabel,
}: {
  act: (a: PlayerAction, label: string) => void;
  canAct: boolean;
  pendingLabel: string | null;
}) {
  const { myAura: aura } = useGameState();

  const powers: Array<{
    label: string;
    sub: string;
    cost: number;
    action: PlayerAction;
    color?: string;
    borderColor?: string;
  }> = [
    {
      label: "Great Harvest",
      sub: "bumper = unusually big harvest",
      cost: 50,
      action: { kind: "bumper_harvest" },
      color: "#e8f5e8",
      borderColor: "#4a9a4a",
    },
    {
      label: "Drought",
      sub: "stunt crops for 4 cycles",
      cost: 100,
      action: { kind: "drought" },
      color: "#f5f2e0",
      borderColor: "#9a8040",
    },
    {
      label: "Market Panic",
      sub: "market-wide panic selling",
      cost: 250,
      action: { kind: "market_panic" },
      color: "#f5e8e8",
      borderColor: "#aa5a5a",
    },
    {
      label: "Famine",
      sub: "halve all farm output",
      cost: 500,
      action: { kind: "famine" },
      color: "#f5e8e8",
      borderColor: "#bb3a3a",
    },
    {
      label: "Nuclear Fallout",
      sub: "destroy all farms, end game",
      cost: 1000,
      action: { kind: "nuclear_fallout" },
      color: "#f8e8e8",
      borderColor: "#cc1010",
    },
  ];

  return (
    <>
      <div style={s.card}>
        <p style={s.cardTitle}>Powers</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column" as const,
            gap: "0.5rem",
          }}
        >
          {powers.map((p) => {
            const isSelected = pendingLabel === p.label;
            const isLocked = !canAct || aura < p.cost;
            return (
              <button
                key={p.label}
                style={{
                  ...s.actionBtn,
                  background: isLocked
                    ? "#f5f3ef"
                    : isSelected
                      ? "#e6f5e6"
                      : (p.color ?? "#e8eff5"),
                  borderColor: isLocked
                    ? "#e2ddd6"
                    : isSelected
                      ? "#1d6b1d"
                      : (p.borderColor ?? "#5a8ab0"),
                  borderWidth: isSelected ? "2.5px" : "1.5px",
                  boxShadow: isSelected
                    ? "0 0 0 3px rgba(29,107,29,0.12)"
                    : "none",
                  opacity: aura < p.cost ? 0.4 : 1,
                  cursor: isLocked ? "not-allowed" : "pointer",
                  flexDirection: "row" as const,
                  justifyContent: "space-between",
                  padding: "0.75rem 1rem",
                }}
                disabled={isLocked}
                onClick={() => act(p.action, p.label)}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      ...s.actionBtnLabel,
                      color: isSelected ? "#155215" : "#18181a",
                    }}
                  >
                    {isSelected ? "✓ " : ""}
                    {p.label}
                  </span>
                  <span style={s.actionBtnSub}>{p.sub}</span>
                </div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: aura >= p.cost ? "#7a5010" : "#9a9a90",
                  }}
                >
                  {p.cost} aura
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

// ── Shared small components ───────────────────────────────────────────────────

function Stat({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <div style={s.stat}>
      <span style={s.statLabel}>{label}</span>
      <span style={{ ...s.statValue, color: color ?? "#18181a" }}>{value}</span>
    </div>
  );
}

function ActionBtn({
  label,
  sub,
  disabled,
  onClick,
  color = "#e8eff5",
  borderColor = "#5a8ab0",
  selected = false,
}: {
  label: string;
  sub: string;
  disabled: boolean;
  onClick: () => void;
  color?: string;
  borderColor?: string;
  selected?: boolean;
}) {
  return (
    <button
      style={{
        ...s.actionBtn,
        background: disabled ? "#f5f3ef" : selected ? "#e6f5e6" : color,
        borderColor: disabled ? "#e2ddd6" : selected ? "#1d6b1d" : borderColor,
        borderWidth: selected ? "2.5px" : "1.5px",
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        boxShadow: selected ? "0 0 0 3px rgba(29,107,29,0.12)" : "none",
      }}
      disabled={disabled}
      onClick={onClick}
    >
      <span
        style={{ ...s.actionBtnLabel, color: selected ? "#155215" : "#18181a" }}
      >
        {selected ? "✓ " : ""}
        {label}
      </span>
      <span style={s.actionBtnSub}>{sub}</span>
    </button>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────

const s = {
  root: {
    display: "flex",
    flexDirection: "column" as const,
    minHeight: "100dvh",
    height: "100dvh",
    maxHeight: "100dvh",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    overscrollBehavior: "none" as const,
    background: "#f5f3ef",
    fontFamily: "inherit",
  },
  topBar: {
    display: "flex",
    alignItems: "center",
    padding: "calc(0.35rem + env(safe-area-inset-top)) 1rem 0.45rem",
    background: "#ffffff",
    borderBottom: "1px solid #e2ddd6",
    position: "sticky" as const,
    top: 0,
    zIndex: 30,
    width: "100%",
  },
  topBarLeft: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start",
    minWidth: 0,
  },
  topBarCenter: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    minWidth: 0,
  },
  topBarRight: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "0.4rem",
    minWidth: 0,
  },
  topBarMidStats: {
    display: "flex",
    gap: "0",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "8rem",
    width: "100%",
  },
  topBarMidDivider: {
    width: 1,
    height: "1.6rem",
    background: "#e0dbd2",
    flexShrink: 0,
  },
  topBarMidStat: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    minWidth: "7.2rem",
    flex: 1,
  },
  topBarMidValue: {
    fontSize: "1.05rem",
    fontWeight: "800" as const,
    color: "#1d6b1d",
    letterSpacing: "-0.01em",
    lineHeight: 1.1,
  },
  priceLabel: {
    display: "block",
    fontSize: "0.62rem",
    color: "#6f6f66",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    fontWeight: "700" as const,
  },
  priceValue: {
    fontSize: "1.35rem",
    fontWeight: "800" as const,
    color: "#1d6b1d",
    letterSpacing: "-0.01em",
  },
  helpBtn: {
    flexShrink: 0,
    width: 26,
    height: 26,
    borderRadius: "50%",
    background: "#f0eee9",
    border: "1px solid #e2ddd6",
    color: "#6b6b63",
    fontSize: "0.8rem",
    fontWeight: "700" as const,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "inherit",
    padding: 0,
  },
  leaveBtn: {
    flexShrink: 0,
    width: 26,
    height: 26,
    borderRadius: "50%",
    background: "#fdeaea",
    border: "1px solid #e8b0b0",
    color: "#c05050",
    fontSize: "0.75rem",
    fontWeight: "700" as const,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "inherit",
    padding: 0,
  },
  countdownBar: {
    display: "flex",
    flexDirection: "row" as const,
    alignItems: "center",
    justifyContent: "center",
    padding: "0.4rem 1rem",
    minHeight: 54,
    background: "#f0f8f0",
    borderBottom: "1px solid #c8e4c8",
    gap: "0.5rem",
    width: "100%",
    minWidth: 0,
  },
  countdownNum: {
    fontSize: "1.8rem",
    fontWeight: "800" as const,
    color: "#1d6b1d",
    lineHeight: 1,
    letterSpacing: "-0.02em",
  },
  countdownLabel: {
    fontSize: "0.6rem",
    color: "#5a9a5a",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    marginTop: "0.1rem",
    fontWeight: "600" as const,
  },
  lockBar: {
    position: "fixed" as const,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    gap: "0.5rem",
    padding: "0.4rem 0.9rem calc(0.4rem + env(safe-area-inset-bottom))",
    background: "#ffffff",
    borderTop: "1px solid #e2ddd6",
    zIndex: 20,
  },
  lockBtn: {
    flex: 1,
    padding: "0.55rem 0.5rem",
    minHeight: 40,
    border: "1.5px solid",
    borderRadius: 8,
    fontFamily: "inherit",
    fontSize: "0.82rem",
    fontWeight: "700" as const,
    color: "#18181a",
    cursor: "pointer",
  },
  noActionBtn: { background: "#f5f3ef", borderColor: "#d1cbc3" },
  repeatBtn: { background: "#eef2f9", borderColor: "#8a9fc0" },
  lockInBtn: { background: "#e8f5e8", borderColor: "#4a9a4a" },
  tabBar: {
    display: "flex",
    background: "#ffffff",
    borderBottom: "1px solid #e2ddd6",
    width: "100%",
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem",
    position: "sticky" as const,
    top: 0,
    zIndex: 25,
  },
  tabBtn: {
    flex: 1,
    padding: "0.6rem 0.2rem",
    minHeight: 40,
    background: "transparent",
    border: "none",
    borderBottom: "2.5px solid transparent",
    color: "#9a9a90",
    fontSize: "0.65rem",
    fontFamily: "inherit",
    cursor: "pointer",
    letterSpacing: "0.04em",
    textTransform: "uppercase" as const,
    overflow: "hidden",
    textOverflow: "ellipsis" as const,
    whiteSpace: "nowrap" as const,
    minWidth: 0,
    fontWeight: "600" as const,
  },
  tabBtnActive: { color: "#1d6b1d", borderBottomColor: "#1d6b1d" },
  content: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.5rem",
    padding: "0.5rem 1rem calc(6.2rem + env(safe-area-inset-bottom))",
    flex: 1,
    minWidth: 0,
    width: "100%",
    overflowY: "auto" as const,
    WebkitOverflowScrolling: "touch" as const,
    overscrollBehavior: "contain" as const,
  },
  card: {
    background: "#ffffff",
    border: "1px solid #e2ddd6",
    borderRadius: 10,
    padding: "0.75rem 0.875rem",
    minWidth: 0,
  },
  cardTitle: {
    margin: "0 0 0.5rem",
    fontSize: "0.72rem",
    color: "#6f6f66",
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    fontWeight: "700" as const,
  },
  statGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
    gap: "0.5rem 0.75rem",
    minWidth: 0,
  },
  stat: { display: "flex", flexDirection: "column" as const, minWidth: 0 },
  statLabel: {
    fontSize: "0.66rem",
    color: "#6f6f66",
    textTransform: "uppercase" as const,
    letterSpacing: "0.06em",
    fontWeight: "700" as const,
  },
  statValue: {
    fontSize: "0.95rem",
    fontWeight: "600" as const,
    marginTop: "0.1rem",
    color: "#18181a",
    overflow: "hidden" as const,
    textOverflow: "ellipsis" as const,
    whiteSpace: "nowrap" as const,
  },
  btnGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
    gap: "0.4rem",
    minWidth: 0,
  },
  actionBtn: {
    border: "1.5px solid",
    borderRadius: 8,
    padding: "0.56rem 0.5rem",
    minHeight: 52,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center" as const,
    gap: "0.05rem",
    fontFamily: "inherit",
  },
  actionBtnLabel: {
    fontSize: "0.875rem",
    fontWeight: "700" as const,
    color: "#18181a",
  },
  actionBtnSub: { fontSize: "0.78rem", color: "#4f4f49", lineHeight: 1.08 },
  qtyRow: { display: "flex", gap: "0.4rem" },
  qtyBtn: {
    flex: 1,
    padding: "0.55rem 0",
    background: "#f5f3ef",
    border: "1.5px solid #e2ddd6",
    borderRadius: 6,
    color: "#6b6b63",
    fontSize: "0.95rem",
    fontFamily: "inherit",
    cursor: "pointer",
    fontWeight: "500" as const,
  },
  qtyBtnActive: {
    background: "#e8f5f5",
    borderColor: "#5a9a9a",
    color: "#0d5858",
    fontWeight: "700" as const,
  },
  targetRow: {
    display: "flex",
    gap: "0.4rem",
    alignItems: "stretch",
    minWidth: 0,
  },
  chaosRow: {
    display: "flex",
    gap: "0.45rem",
    alignItems: "stretch",
    minWidth: 0,
  },
  chaosSelect: {
    flex: 1,
    width: "100%",
    minWidth: 0,
    maxWidth: "100%",
    background: "#f5f3ef",
    border: "1.5px solid #e2ddd6",
    color: "#18181a",
    padding: "0.62rem 0.5rem",
    borderRadius: 8,
    fontFamily: "inherit",
    fontSize: "0.82rem",
    whiteSpace: "nowrap" as const,
    overflow: "hidden",
    textOverflow: "ellipsis",
    appearance: "auto" as const,
  },
  chaosActBtn: {
    width: "4.2rem",
    minWidth: "4.2rem",
    border: "1.5px solid #d5cec3",
    background: "#fffdf9",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center" as const,
    gap: "0.15rem",
    fontFamily: "inherit",
    cursor: "pointer",
    color: "#3a3a36",
    padding: "0.35rem 0.25rem",
  },
  chaosActBtnSelected: {
    borderColor: "#1d6b1d",
    boxShadow: "0 0 0 3px rgba(29,107,29,0.12)",
  },
  chaosActEmoji: {
    fontSize: "1.1rem",
    lineHeight: 1,
  },
  chaosActCost: {
    fontSize: "0.7rem",
    fontWeight: "700" as const,
    color: "#5b5b54",
    lineHeight: 1,
    textAlign: "center" as const,
  },
  select: {
    flex: 1,
    minWidth: 0,
    background: "#f5f3ef",
    border: "1.5px solid #e2ddd6",
    color: "#18181a",
    padding: "0.5rem 0.5rem",
    borderRadius: 6,
    fontFamily: "inherit",
    fontSize: "0.82rem",
    appearance: "auto" as const,
  },
  qtySlider: {
    width: "100%",
    marginTop: "0.5rem",
    accentColor: "#1d6b1d",
    cursor: "pointer",
  },
  optNote: {
    margin: "0 0 0.5rem",
    fontSize: "0.72rem",
    color: "#9a9a90",
    fontStyle: "italic" as const,
  },
  // Option buttons — large, scannable, emoji-led
  optBtn: {
    border: "1.5px solid",
    borderRadius: 10,
    padding: "0.66rem 0.5rem",
    minHeight: 82,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center" as const,
    gap: "0.04rem",
    fontFamily: "inherit",
    cursor: "pointer",
    transition: "opacity 0.1s",
  },
  optBtnCall: { background: "#e8f5e8", borderColor: "#4a9a4a" },
  optBtnPut: { background: "#fdeaea", borderColor: "#c05050" },
  optBtnWriteCall: { background: "#f0f5f0", borderColor: "#8ab08a" },
  optBtnWritePut: { background: "#f5f0f0", borderColor: "#b08a8a" },
  optBtnDisabled: {
    background: "#f5f3ef",
    borderColor: "#e2ddd6",
    opacity: 0.45,
    cursor: "not-allowed" as const,
  },
  optEmoji: { fontSize: "1.4rem", lineHeight: 1 },
  optLabel: {
    fontSize: "0.9rem",
    fontWeight: "700" as const,
    color: "#18181a",
  },
  optDesc: {
    fontSize: "0.82rem",
    color: "#3f3f39",
    textAlign: "center" as const,
    lineHeight: 1.08,
  },
  optMeta: { fontSize: "0.72rem", color: "#5f5f57", marginTop: "0rem" },
  empty: {
    color: "#8a8a80",
    textAlign: "center" as const,
    margin: 0,
    fontSize: "0.875rem",
  },
  feedbackCard: {
    background: "#edf8ed",
    border: "1px solid #9ac89a",
    borderRadius: 10,
    padding: "0.75rem 0.875rem",
  },
  feedbackHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "0.4rem",
  },
  feedbackTitle: {
    fontSize: "0.65rem",
    color: "#1d6b1d",
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    fontWeight: "700" as const,
  },
  feedbackLine: {
    fontSize: "0.82rem",
    color: "#1a4a1a",
    lineHeight: 1.55,
    margin: "0.15rem 0",
  },
  dismissBtn: {
    background: "transparent",
    border: "none",
    color: "#9a9a90",
    cursor: "pointer",
    fontSize: "1.1rem",
    lineHeight: 1,
    padding: 0,
  },
  headlineCard: {
    background: "#fffef5",
    border: "1px solid #e8e0c0",
    borderRadius: 10,
    padding: "0.7rem 0.875rem",
  },
  headlineLabel: {
    fontSize: "0.66rem",
    color: "#7a5f1a",
    letterSpacing: "0.08em",
    display: "block",
    marginBottom: "0.25rem",
    fontWeight: "700" as const,
    textTransform: "uppercase" as const,
  },
  headlineText: {
    fontSize: "0.83rem",
    color: "#3a3020",
    fontStyle: "italic" as const,
    margin: 0,
    lineHeight: 1.5,
  },
  // Tab tip
  tipCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.5rem",
    background: "#fffbea",
    border: "1px solid #e8d878",
    borderRadius: 8,
    padding: "0.55rem 0.75rem",
    fontSize: "0.78rem",
    color: "#5a4a10",
  },
  tipIcon: { flexShrink: 0, fontSize: "1rem", lineHeight: 1.3 },
  tipText: { flex: 1, lineHeight: 1.55 },
  tipDismiss: {
    background: "transparent",
    border: "none",
    color: "#b0a060",
    cursor: "pointer",
    fontSize: "1rem",
    lineHeight: 1,
    padding: 0,
    flexShrink: 0,
  },
  // Modal
  overlay: {
    position: "fixed" as const,
    inset: 0,
    zIndex: 500,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "flex-end",
  },
  modal: {
    background: "#ffffff",
    width: "100%",
    maxHeight: "85vh",
    borderRadius: "14px 14px 0 0",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column" as const,
    boxShadow: "0 -4px 32px rgba(0,0,0,0.15)",
  },
  modalHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.9rem 1.1rem",
    borderBottom: "1px solid #e8e4df",
    flexShrink: 0,
  },
  modalTitle: {
    fontSize: "1rem",
    fontWeight: "800" as const,
    color: "#18181a",
  },
  modalClose: {
    background: "transparent",
    border: "none",
    color: "#9a9a90",
    fontSize: "1.5rem",
    cursor: "pointer",
    padding: 0,
    lineHeight: 1,
  },
  modalBody: {
    overflowY: "auto" as const,
    padding: "0.9rem 1.1rem",
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.875rem",
  },
  modalSection: { borderLeft: "3px solid #e2ddd6", paddingLeft: "0.75rem" },
  modalSectionTitle: {
    fontSize: "0.8rem",
    fontWeight: "700" as const,
    color: "#18181a",
    margin: "0 0 0.3rem",
  },
  modalText: {
    fontSize: "0.82rem",
    color: "#5a5a54",
    lineHeight: 1.6,
    margin: 0,
  },
  queuedBanner: {
    background: "#edf8ed",
    border: "1px solid #9ac89a",
    borderRadius: 8,
    padding: "0.6rem 0.875rem",
    fontSize: "0.82rem",
    color: "#1d6b1d",
  },
  queuedNote: { color: "#9a9a90", fontSize: "0.72rem" },
} as const;
