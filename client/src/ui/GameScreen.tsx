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
import type { PlayerAction } from "../ws/protocol";
import { TICKER_HEIGHT } from "./NewsTicker";

type Tab = "farm" | "market" | "options" | "chaos" | "god";

export default function GameScreen() {
  const state = useGameState();
  const send = useWsSend();
  const dispatch = useGameDispatch();
  const isFarmer = state.myRole === "farmer";

  const [tab, setTab] = useState<Tab>(isFarmer ? "farm" : "market");
  const [countdown, setCountdown] = useState(state.secondsRemaining);
  // pending: action selected but not yet sent; locked: action committed this cycle
  const [pending, setPending] = useState<{ action: PlayerAction; label: string } | null>(null);
  const [locked, setLocked] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    setCountdown(state.secondsRemaining);
  }, [state.phase, state.cycle, state.secondsRemaining]);

  useEffect(() => {
    if (state.phase !== "decision" || state.paused) return;
    const id = setInterval(() => setCountdown((n) => Math.max(0, n - 1)), 1000);
    return () => clearInterval(id);
  }, [state.phase, state.cycle, state.paused]);

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
    } else {
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
  const price = parseFloat(state.price);

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
        <div style={{ minWidth: 0, overflow: "hidden" }}>
          <span style={s.roleTag}>{state.myRole?.toUpperCase()}</span>
          <span style={{ ...s.playerName, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const, maxWidth: "30vw", display: "inline-block", verticalAlign: "middle" }}>{state.myName}</span>
        </div>
        <div style={s.priceBlock}>
          <span style={s.priceLabel}>CornCo</span>
          <span style={s.priceValue}>${price.toFixed(2)}</span>
        </div>
        <div style={{ textAlign: "right" as const, minWidth: 80, flexShrink: 0 }}>
          {state.paused ? (
            <span style={{ ...s.phasePill, background: "#eeeeea", color: "#7a7a70" }}>⏸ Paused</span>
          ) : isDecision ? (
            <span style={{ ...s.phasePill, background: "#e8f5e8", color: "#1d6b1d" }}>
              {countdown}s
            </span>
          ) : (
            <span style={{ ...s.phasePill, background: "#f5f0e3", color: "#7a5010" }}>
              Resolving…
            </span>
          )}
          <div style={s.cycleLabel}>Cycle {state.cycle}</div>
        </div>
        <button style={s.helpBtn} onClick={() => setShowHelp(true)}>?</button>
      </div>

      {/* ── Big countdown — always present, content changes with state ───── */}
      <div style={{
        ...s.countdownBar,
        ...(locked && isDecision ? { background: "#e0f5e0", borderColor: "#9ac89a" } : {}),
        ...(!isDecision ? { background: "#f8f4e0", borderColor: "#c8b060" } : {}),
      }}>
        {isDecision && !locked && (
          <>
            <span style={s.countdownNum}>{countdown}</span>
            <span style={s.countdownLabel}>seconds to lock in</span>
          </>
        )}
        {isDecision && locked && (
          <>
            <span style={{ ...s.countdownNum, color: "#1d6b1d", fontSize: "1.5rem" }}>
              ✓ Locked in{pending ? `: ${pending.label}` : " (no action)"}
            </span>
            <span style={{ ...s.countdownLabel, color: "#9a9a90" }}>waiting for others…</span>
          </>
        )}
        {!isDecision && (
          <span style={{ ...s.countdownNum, color: "#7a5010", fontSize: "1.4rem" }}>
            Resolving cycle {state.cycle}…
          </span>
        )}
      </div>

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
        {tab === "farm" && isFarmer && (
          <FarmTab act={selectAction} canAct={canAct} />
        )}
        {tab === "market" && (
          <MarketTab act={selectAction} canAct={canAct} />
        )}
        {tab === "options" && (
          <OptionsTab act={selectAction} canAct={canAct} />
        )}
        {tab === "chaos" && (
          <ChaosTab act={selectAction} canAct={canAct} />
        )}
        {tab === "god" && (
          <GodTab act={selectAction} canAct={canAct} />
        )}

        {state.myFeedback && (
          <div style={s.feedbackCard}>
            <div style={s.feedbackHeader}>
              <span style={s.feedbackTitle}>Coach</span>
              <button style={s.dismissBtn} onClick={() => dispatch({ type: "clear_feedback" })}>
                ×
              </button>
            </div>
            {state.myFeedback.split(/\n/).filter(Boolean).map((line, i) => (
              <p key={i} style={s.feedbackLine}>{line.trim()}</p>
            ))}
          </div>
        )}

        {state.headlines.length > 0 && (
          <div style={s.headlineCard}>
            <span style={s.headlineLabel}>HEADLINE</span>
            <p style={s.headlineText}>{state.headlines[state.headlines.length - 1].text}</p>
          </div>
        )}

        {/* spacer so content isn't hidden behind sticky bottom bar */}
        <div style={{ height: "5rem" }} />
      </div>

      {/* ── Lock-in bottom bar ───────────────────────────────────────────── */}
      <div style={{ ...s.lockBar, ...(!isDecision ? { opacity: 0.35, pointerEvents: "none" as const } : {}) }}>
        <button
          style={{ ...s.lockBtn, ...s.noActionBtn, opacity: locked ? 0.4 : 1, cursor: locked ? "not-allowed" : "pointer" }}
          disabled={locked || !isDecision}
          onClick={takeNoAction}
        >
          Take No Action
        </button>
        <button
          style={{
            ...s.lockBtn,
            ...s.lockInBtn,
            opacity: locked ? 0.4 : 1,
            cursor: locked ? "not-allowed" : "pointer",
            background: locked ? "#f0eee9" : pending ? "#e8f5e8" : "#e8eff5",
            borderColor: locked ? "#c8c4be" : pending ? "#4a9a4a" : "#5a8ab0",
          }}
          disabled={locked || !isDecision}
          onClick={lockIn}
        >
          {locked ? "✓ Locked In" : pending ? `Lock In: ${pending.label}` : "Lock In (no action)"}
        </button>
      </div>

      {/* ── How to Play modal ────────────────────────────────────────────── */}
      {showHelp && (
        <HowToPlayModal role={state.myRole} onClose={() => setShowHelp(false)} />
      )}
    </div>
  );
}

// ── How to Play modal ──────────────────────────────────────────────────────────

function HowToPlayModal({ role, onClose }: { role: string | null; onClose: () => void }) {
  const isFarmer = role === "farmer";
  return (
    <div style={s.overlay} onClick={onClose}>
      <div style={s.modal} onClick={(e) => e.stopPropagation()}>
        <div style={s.modalHeader}>
          <span style={s.modalTitle}>How to Play</span>
          <button style={s.modalClose} onClick={onClose}>×</button>
        </div>
        <div style={s.modalBody}>
          <div style={s.modalSection}>
            <p style={s.modalSectionTitle}>🏆 Goal</p>
            <p style={s.modalText}>Finish with the highest net worth. Net worth = cash + share value + farm equity + options P&L.</p>
          </div>
          {isFarmer ? (
            <div style={s.modalSection}>
              <p style={s.modalSectionTitle}>🌽 You are a Farmer</p>
              <p style={s.modalText}>Plant fields → harvest corn → sell through mills. Hire workers to boost output. Acquire more farms to scale up. Use options to hedge your harvest price against market moves.</p>
            </div>
          ) : (
            <div style={s.modalSection}>
              <p style={s.modalSectionTitle}>📈 You are a Trader</p>
              <p style={s.modalText}>Buy and sell CornCo stock. Go long when supply looks tight, short when there's a glut. Write options to collect premium. Corner the market or dump shares to move the price.</p>
            </div>
          )}
          <div style={s.modalSection}>
            <p style={s.modalSectionTitle}>🔥 Chaos Actions</p>
            <p style={s.modalText}>Burn farms &amp; mills, send hitmen, spread rumors. Each costs Aura. Use chaos to destabilise rivals or manipulate the market.</p>
          </div>
          <div style={s.modalSection}>
            <p style={s.modalSectionTitle}>✨ Aura &amp; God Powers</p>
            <p style={s.modalText}>Aura accumulates +10 each cycle automatically. Save it for god-tier events: Drought (80), Market Panic (100), Famine (150), or Nuclear Fallout (300) to end the game in chaos.</p>
          </div>
          <div style={s.modalSection}>
            <p style={s.modalSectionTitle}>🔒 Lock In</p>
            <p style={s.modalText}>Select any action on a tab, then press Lock In. The cycle resolves immediately once everyone locks in. Press Take No Action to pass and preserve your Aura.</p>
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
}: {
  act: (a: PlayerAction, label: string) => void;
  canAct: boolean;
}) {
  const state = useGameState();
  const farm = state.farms.find((f) => f.owner === state.myPlayerId);
  const cash = parseFloat(state.myCash);

  if (!farm) {
    return <div style={s.card}><p style={s.empty}>No farm assigned.</p></div>;
  }

  const unplanted = farm.fields - farm.planted_fields;
  const canHarvest = farm.planted_fields > 0 && farm.state === "healthy";
  const canSell = farm.stored_corn > 0;

  return (
    <>
      <div style={s.card}>
        <div style={s.statGrid}>
          <Stat label="Planted" value={`${farm.planted_fields}/${farm.fields}`} />
          <Stat label="Stored corn" value={String(farm.stored_corn)} />
          <Stat label="Workers" value={String(farm.workers)} />
          <Stat label="Farm state" value={farm.state} color={farm.state === "burning" ? "#7a1a1a" : farm.state === "idle" ? "#9a9a90" : "#1d6b1d"} />
          <Stat label="Cash" value={`$${cash.toFixed(0)}`} />
          <Stat label="Net worth" value={`$${parseFloat(state.myNetWorth).toFixed(0)}`} />
        </div>
      </div>
      <div style={s.card}>
        <p style={s.cardTitle}>Select action (confirm with Lock In)</p>
        <div style={s.btnGrid}>
          <ActionBtn label="Plant Fields" sub={`${unplanted} available`}
            disabled={!canAct || unplanted === 0}
            onClick={() => act({ kind: "plant_fields", farm_id: farm.id, count: unplanted }, "Plant Fields")} />
          <ActionBtn label="Harvest Corn" sub={canHarvest ? `${farm.planted_fields} fields` : "nothing ready"}
            disabled={!canAct || !canHarvest}
            onClick={() => act({ kind: "harvest_corn", farm_id: farm.id }, "Harvest Corn")} />
          <ActionBtn label="Sell Corn" sub={canSell ? `${farm.stored_corn} bushels` : "barn empty"}
            disabled={!canAct || !canSell}
            onClick={() => act({ kind: "sell_corn", farm_id: farm.id }, "Sell Corn")} />
          <ActionBtn label="Hire Worker" sub={cash >= 500 ? "costs $500" : "need $500"}
            disabled={!canAct || cash < 500}
            onClick={() => act({ kind: "hire_worker", farm_id: farm.id }, "Hire Worker")} />
          <ActionBtn label="Fire Worker" sub={farm.workers > 0 ? `${farm.workers} workers` : "no workers"}
            disabled={!canAct || farm.workers === 0}
            color="#f5e8e8" borderColor="#aa5a5a"
            onClick={() => act({ kind: "fire_worker", farm_id: farm.id }, "Fire Worker")} />
        </div>
      </div>
    </>
  );
}

// ── Market tab ────────────────────────────────────────────────────────────────

function MarketTab({
  act,
  canAct,
}: {
  act: (a: PlayerAction, label: string) => void;
  canAct: boolean;
}) {
  const state = useGameState();
  const [qty, setQty] = useState(1);
  const cash = parseFloat(state.myCash);
  const price = parseFloat(state.price);
  const isFarmer = state.myRole === "farmer";

  const canBuy = cash >= price * qty;
  const canSell = state.myShares >= qty;
  const canDump = state.myShares > 0;

  return (
    <>
      <div style={s.card}>
        <div style={s.statGrid}>
          <Stat label="Cash" value={`$${cash.toFixed(0)}`} />
          <Stat label="Shares" value={String(state.myShares)} color={state.myShares < 0 ? "#7a1a1a" : undefined} />
          <Stat label="Net worth" value={`$${parseFloat(state.myNetWorth).toFixed(0)}`} />
          <Stat label="Aura" value={state.myAura.toFixed(0)} color="#7a5010" />
          <Stat label="Bid depth" value={String(state.bidDepth)} />
          <Stat label="Ask depth" value={String(state.askDepth)} />
          <Stat label="Vol (cycle)" value={String(state.cycleVolume)} />
          <Stat label="Price" value={`$${price.toFixed(2)}`} color="#1d6b1d" />
        </div>
      </div>
      <div style={s.card}>
        <p style={s.cardTitle}>Quantity</p>
        <div style={s.qtyRow}>
          {[1, 2, 5, 10].map((n) => (
            <button key={n}
              style={{ ...s.qtyBtn, ...(qty === n ? s.qtyBtnActive : {}) }}
              onClick={() => setQty(n)}
            >{n}</button>
          ))}
        </div>
      </div>
      <div style={s.card}>
        <p style={s.cardTitle}>Orders</p>
        <div style={s.btnGrid}>
          <ActionBtn label={`Buy ${qty}`} sub={canBuy ? `~$${(price * qty).toFixed(0)}` : "not enough cash"}
            disabled={!canAct || !canBuy} color="#e8f5e8" borderColor="#5aaa5a"
            onClick={() => act({ kind: "place_order", side: "bid", quantity: qty }, `Buy ${qty} shares`)} />
          <ActionBtn label={`Sell ${qty}`} sub={canSell ? `${state.myShares} held` : "not enough shares"}
            disabled={!canAct || !canSell} color="#f5e8e8" borderColor="#aa5a5a"
            onClick={() => act({ kind: "place_order", side: "ask", quantity: qty }, `Sell ${qty} shares`)} />
        </div>
      </div>
      {!isFarmer && (
        <div style={s.card}>
          <p style={s.cardTitle}>Power Moves</p>
          <div style={s.btnGrid}>
            <ActionBtn label="Dump All" sub={canDump ? `sell ${state.myShares} @ market` : "no shares held"}
              disabled={!canAct || !canDump} color="#f5e8e8" borderColor="#aa5a5a"
              onClick={() => act({ kind: "dump_shares" }, "Dump All Shares")} />
            <ActionBtn label="Corner Market" sub="buy 200 shares @ market"
              disabled={!canAct || cash < price * 10} color="#eeeef8" borderColor="#5a5aaa"
              onClick={() => act({ kind: "corner_market" }, "Corner Market")} />
          </div>
        </div>
      )}
    </>
  );
}

// ── Options tab ───────────────────────────────────────────────────────────────

function OptionsTab({
  act,
  canAct,
}: {
  act: (a: PlayerAction, label: string) => void;
  canAct: boolean;
}) {
  const state = useGameState();
  const price = parseFloat(state.price);
  const [strikeOffset, setStrikeOffset] = useState(0); // percentage offset
  const [expiry, setExpiry] = useState(3);
  const [qty, setQty] = useState(1);

  const strikeOffsets = [-20, -10, 0, 10, 20];
  const strike = (price * (1 + strikeOffset / 100)).toFixed(2);

  return (
    <>
      <div style={s.card}>
        <div style={s.statGrid}>
          <Stat label="Spot price" value={`$${price.toFixed(2)}`} color="#1d6b1d" />
          <Stat label="Selected strike" value={`$${strike}`} />
          <Stat label="Expiry" value={`${expiry} cycle${expiry > 1 ? "s" : ""}`} />
          <Stat label="Qty" value={String(qty)} />
        </div>
      </div>
      <div style={s.card}>
        <p style={s.cardTitle}>Strike (% from spot)</p>
        <div style={s.qtyRow}>
          {strikeOffsets.map((o) => (
            <button key={o}
              style={{ ...s.qtyBtn, ...(strikeOffset === o ? s.qtyBtnActive : {}), fontSize: "0.75rem" }}
              onClick={() => setStrikeOffset(o)}
            >{o >= 0 ? `+${o}%` : `${o}%`}</button>
          ))}
        </div>
      </div>
      <div style={s.card}>
        <p style={s.cardTitle}>Expiry (cycles)</p>
        <div style={s.qtyRow}>
          {[1, 3, 5].map((e) => (
            <button key={e}
              style={{ ...s.qtyBtn, ...(expiry === e ? s.qtyBtnActive : {}) }}
              onClick={() => setExpiry(e)}
            >{e}</button>
          ))}
        </div>
      </div>
      <div style={s.card}>
        <p style={s.cardTitle}>Quantity</p>
        <div style={s.qtyRow}>
          {[1, 2, 5, 10].map((n) => (
            <button key={n}
              style={{ ...s.qtyBtn, ...(qty === n ? s.qtyBtnActive : {}) }}
              onClick={() => setQty(n)}
            >{n}</button>
          ))}
        </div>
      </div>
      <div style={s.card}>
        <p style={s.cardTitle}>Buy (pay premium)</p>
        <p style={s.optNote}>Premium is computed via Black-Scholes at cycle resolution.</p>
        <div style={s.btnGrid}>
          <ActionBtn label="Buy Call" sub={`strike $${strike}, +${expiry}cy`}
            disabled={!canAct} color="#e8f5e8" borderColor="#5aaa5a"
            onClick={() => act({ kind: "buy_option", option_type: "call", strike, expiry_cycles: expiry, quantity: qty }, `Buy Call @ $${strike}`)} />
          <ActionBtn label="Buy Put" sub={`strike $${strike}, +${expiry}cy`}
            disabled={!canAct} color="#f5e8e8" borderColor="#aa5a5a"
            onClick={() => act({ kind: "buy_option", option_type: "put", strike, expiry_cycles: expiry, quantity: qty }, `Buy Put @ $${strike}`)} />
        </div>
      </div>
      <div style={s.card}>
        <p style={s.cardTitle}>Write (collect premium, risk exposure)</p>
        <div style={s.btnGrid}>
          <ActionBtn label="Write Call" sub={`strike $${strike}, +${expiry}cy`}
            disabled={!canAct} color="#edf5ed" borderColor="#7a9a7a"
            onClick={() => act({ kind: "write_option", option_type: "call", strike, expiry_cycles: expiry, quantity: qty }, `Write Call @ $${strike}`)} />
          <ActionBtn label="Write Put" sub={`strike $${strike}, +${expiry}cy`}
            disabled={!canAct} color="#f5eded" borderColor="#9a7a7a"
            onClick={() => act({ kind: "write_option", option_type: "put", strike, expiry_cycles: expiry, quantity: qty }, `Write Put @ $${strike}`)} />
        </div>
      </div>
      {state.myNetWorth && parseFloat(state.myNetWorth) > 0 && (
        <div style={s.card}>
          <p style={s.cardTitle}>Open Positions ({(state as any).options?.length ?? 0})</p>
          <p style={s.optNote}>Position details visible after cycle resolution.</p>
        </div>
      )}
    </>
  );
}

// ── Chaos tab ─────────────────────────────────────────────────────────────────

function ChaosTab({
  act,
  canAct,
}: {
  act: (a: PlayerAction, label: string) => void;
  canAct: boolean;
}) {
  const state = useGameState();
  const aura = state.myAura;
  const price = parseFloat(state.price);

  const otherFarms = state.farms.filter((f) => f.owner !== state.myPlayerId);
  const aliveFarms = state.farms;
  const aliveMills = state.mills;
  const aliveNpcs = state.npcOwners.filter((n) => n.alive);

  const [targetFarm, setTargetFarm] = useState<number | null>(
    otherFarms[0]?.id ?? null
  );
  const [hitmanFarm, setHitmanFarm] = useState<number | null>(
    aliveFarms[0]?.id ?? null
  );
  const [targetMill, setTargetMill] = useState<number | null>(
    aliveMills[0]?.id ?? null
  );
  const [targetNpc, setTargetNpc] = useState<number | null>(
    aliveNpcs[0]?.id ?? null
  );
  const [rumor, setRumor] = useState("");
  const [acqFarm, setAcqFarm] = useState<number | null>(otherFarms[0]?.id ?? null);
  const [acqMill, setAcqMill] = useState<number | null>(aliveMills[0]?.id ?? null);

  const cash = parseFloat(state.myCash);
  const farmCost = price * 15;
  const millCost = price * 20;

  return (
    <>
      <div style={s.card}>
        <div style={s.statGrid}>
          <Stat label="Aura" value={aura.toFixed(0)} color="#7a5010" />
          <Stat label="Cash" value={`$${cash.toFixed(0)}`} />
        </div>
      </div>

      {/* Burn Farm */}
      <div style={s.card}>
        <p style={s.cardTitle}>Burn Farm — 20 aura</p>
        <div style={s.targetRow}>
          <select style={s.select} value={targetFarm ?? ""} onChange={(e) => setTargetFarm(Number(e.target.value))}>
            {otherFarms.length === 0 && <option value="">No targets</option>}
            {otherFarms.map((f) => (
              <option key={f.id} value={f.id}>Farm #{f.id} ({f.state}, {f.fields} fields)</option>
            ))}
          </select>
          <ActionBtn label="Burn" sub={aura >= 20 ? "🔥" : "need 20 aura"}
            disabled={!canAct || aura < 20 || targetFarm === null || otherFarms.length === 0}
            color="#f5e8e8" borderColor="#aa5a5a"
            onClick={() => act({ kind: "burn_farm", target_farm: targetFarm! }, `Burn Farm #${targetFarm}`)} />
        </div>
      </div>

      {/* Burn Mill */}
      <div style={s.card}>
        <p style={s.cardTitle}>Burn Mill — 25 aura</p>
        <div style={s.targetRow}>
          <select style={s.select} value={targetMill ?? ""} onChange={(e) => setTargetMill(Number(e.target.value))}>
            {aliveMills.length === 0 && <option value="">No mills</option>}
            {aliveMills.map((m) => (
              <option key={m.id} value={m.id}>Mill #{m.id} ({m.state})</option>
            ))}
          </select>
          <ActionBtn label="Burn" sub={aura >= 25 ? "🔥" : "need 25 aura"}
            disabled={!canAct || aura < 25 || targetMill === null || aliveMills.length === 0}
            color="#f5e8e8" borderColor="#aa5a5a"
            onClick={() => act({ kind: "burn_mill", target_mill: targetMill! }, `Burn Mill #${targetMill}`)} />
        </div>
      </div>

      {/* Hitman Worker */}
      <div style={s.card}>
        <p style={s.cardTitle}>Hitman Worker — 15 aura</p>
        <div style={s.targetRow}>
          <select style={s.select} value={hitmanFarm ?? ""} onChange={(e) => setHitmanFarm(Number(e.target.value))}>
            {aliveFarms.length === 0 && <option value="">No targets</option>}
            {aliveFarms.map((f) => (
              <option key={f.id} value={f.id}>Farm #{f.id} ({f.workers} workers)</option>
            ))}
          </select>
          <ActionBtn label="Send" sub={aura >= 15 ? "👤" : "need 15 aura"}
            disabled={!canAct || aura < 15 || hitmanFarm === null}
            color="#f0e8f5" borderColor="#9a5aaa"
            onClick={() => act({ kind: "hitman_worker", target_farm: hitmanFarm! }, `Hitman Worker on Farm #${hitmanFarm}`)} />
        </div>
      </div>

      {/* Hitman Owner */}
      <div style={s.card}>
        <p style={s.cardTitle}>Hitman NPC Owner — 50 aura</p>
        <div style={s.targetRow}>
          <select style={s.select} value={targetNpc ?? ""} onChange={(e) => setTargetNpc(Number(e.target.value))}>
            {aliveNpcs.length === 0 && <option value="">No targets</option>}
            {aliveNpcs.map((n) => (
              <option key={n.id} value={n.id}>{n.name}</option>
            ))}
          </select>
          <ActionBtn label="Send" sub={aura >= 50 ? "☠️" : "need 50 aura"}
            disabled={!canAct || aura < 50 || targetNpc === null || aliveNpcs.length === 0}
            color="#f0e8f5" borderColor="#9a5aaa"
            onClick={() => act({ kind: "hitman_owner", target_npc: targetNpc! }, `Hitman on ${aliveNpcs.find((n) => n.id === targetNpc)?.name ?? "NPC"}`)} />
        </div>
      </div>

      {/* Spread Rumor */}
      <div style={s.card}>
        <p style={s.cardTitle}>Spread Rumor — 5 aura</p>
        <input
          style={{ ...s.select, marginBottom: "0.5rem" }}
          placeholder="Type your rumor…"
          value={rumor}
          maxLength={120}
          onChange={(e) => setRumor(e.target.value)}
        />
        <ActionBtn label="Spread" sub={aura >= 5 ? `"${rumor.slice(0, 20)}…"` : "need 5 aura"}
          disabled={!canAct || aura < 5 || rumor.trim().length === 0}
          color="#f5f2e0" borderColor="#9a8a40"
          onClick={() => { act({ kind: "spread_rumor", text: rumor.trim() }, "Spread Rumor"); setRumor(""); }} />
      </div>

      {/* Acquire Farm */}
      <div style={s.card}>
        <p style={s.cardTitle}>Acquire Farm — ~${farmCost.toFixed(0)}</p>
        <div style={s.targetRow}>
          <select style={s.select} value={acqFarm ?? ""} onChange={(e) => setAcqFarm(Number(e.target.value))}>
            {otherFarms.length === 0 && <option value="">No farms available</option>}
            {otherFarms.map((f) => (
              <option key={f.id} value={f.id}>Farm #{f.id} ({f.fields} fields)</option>
            ))}
          </select>
          <ActionBtn label="Buy" sub={cash >= farmCost ? `$${farmCost.toFixed(0)}` : "not enough cash"}
            disabled={!canAct || cash < farmCost || acqFarm === null || otherFarms.length === 0}
            color="#e8f2f5" borderColor="#5a8aa0"
            onClick={() => act({ kind: "acquire_farm", target_farm: acqFarm! }, `Acquire Farm #${acqFarm}`)} />
        </div>
      </div>

      {/* Acquire Mill */}
      <div style={s.card}>
        <p style={s.cardTitle}>Acquire Mill — ~${millCost.toFixed(0)}</p>
        <div style={s.targetRow}>
          <select style={s.select} value={acqMill ?? ""} onChange={(e) => setAcqMill(Number(e.target.value))}>
            {aliveMills.length === 0 && <option value="">No mills available</option>}
            {aliveMills.map((m) => (
              <option key={m.id} value={m.id}>Mill #{m.id} ({m.state})</option>
            ))}
          </select>
          <ActionBtn label="Buy" sub={cash >= millCost ? `$${millCost.toFixed(0)}` : "not enough cash"}
            disabled={!canAct || cash < millCost || acqMill === null || aliveMills.length === 0}
            color="#e8f2f5" borderColor="#5a8aa0"
            onClick={() => act({ kind: "acquire_mill", target_mill: acqMill! }, `Acquire Mill #${acqMill}`)} />
        </div>
      </div>
    </>
  );
}

// ── God tab ───────────────────────────────────────────────────────────────────

function GodTab({
  act,
  canAct,
}: {
  act: (a: PlayerAction, label: string) => void;
  canAct: boolean;
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
    { label: "Bumper Harvest", sub: "double yield this cycle", cost: 60, action: { kind: "bumper_harvest" }, color: "#e8f5e8", borderColor: "#4a9a4a" },
    { label: "Drought", sub: "stunt crops for 4 cycles", cost: 80, action: { kind: "drought" }, color: "#f5f2e0", borderColor: "#9a8040" },
    { label: "Market Panic", sub: "crash prices", cost: 100, action: { kind: "market_panic" }, color: "#f5e8e8", borderColor: "#aa5a5a" },
    { label: "Famine", sub: "halve all farm output", cost: 150, action: { kind: "famine" }, color: "#f5e8e8", borderColor: "#bb3a3a" },
    { label: "Nuclear Fallout", sub: "destroy all farms, end game", cost: 300, action: { kind: "nuclear_fallout" }, color: "#f8e8e8", borderColor: "#cc1010" },
  ];

  return (
    <>
      <div style={s.card}>
        <div style={s.statGrid}>
          <Stat label="Aura" value={aura.toFixed(0)} color="#7a5010" />
          <Stat label="Next power" value={aura < 60 ? `${(60 - aura).toFixed(0)} needed` : "unlocked"} color={aura >= 60 ? "#1d6b1d" : "#9a9a90"} />
        </div>
      </div>
      <div style={s.card}>
        <p style={s.cardTitle}>Powers (aura accumulates +10/cycle)</p>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.5rem" }}>
          {powers.map((p) => (
            <button
              key={p.label}
              style={{
                ...s.actionBtn,
                background: !canAct || aura < p.cost ? "#f8f8f4" : p.color ?? "#e8eff5",
                borderColor: !canAct || aura < p.cost ? "#ddd9d2" : p.borderColor ?? "#5a8ab0",
                opacity: aura < p.cost ? 0.4 : 1,
                cursor: !canAct || aura < p.cost ? "not-allowed" : "pointer",
                flexDirection: "row" as const,
                justifyContent: "space-between",
                padding: "0.75rem 1rem",
              }}
              disabled={!canAct || aura < p.cost}
              onClick={() => act(p.action, p.label)}
            >
              <div>
                <span style={s.actionBtnLabel}>{p.label}</span>
                <br />
                <span style={s.actionBtnSub}>{p.sub}</span>
              </div>
              <span style={{ fontSize: "0.75rem", color: aura >= p.cost ? "#7a5010" : "#9a9a90" }}>
                {p.cost} aura
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

// ── Shared small components ───────────────────────────────────────────────────

function Stat({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div style={s.stat}>
      <span style={s.statLabel}>{label}</span>
      <span style={{ ...s.statValue, color: color ?? "#18181a" }}>{value}</span>
    </div>
  );
}

function ActionBtn({
  label, sub, disabled, onClick, color = "#e8eff5", borderColor = "#5a8ab0",
}: {
  label: string; sub: string; disabled: boolean; onClick: () => void;
  color?: string; borderColor?: string;
}) {
  return (
    <button
      style={{
        ...s.actionBtn,
        background: disabled ? "#f8f8f4" : color,
        borderColor: disabled ? "#ddd9d2" : borderColor,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      disabled={disabled}
      onClick={onClick}
    >
      <span style={s.actionBtnLabel}>{label}</span>
      <span style={s.actionBtnSub}>{sub}</span>
    </button>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────

const s = {
  root: { display: "flex", flexDirection: "column" as const, minHeight: "100vh", width: "100%", maxWidth: "100%", overflow: "hidden", background: "#f5f3ef", fontFamily: "inherit", paddingTop: TICKER_HEIGHT },
  topBar: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "0.6rem 0.75rem", background: "#ffffff", borderBottom: "1px solid #e2ddd6",
    position: "sticky" as const, top: TICKER_HEIGHT, zIndex: 10, minWidth: 0, width: "100%",
    gap: "0.5rem",
  },
  roleTag: { fontSize: "0.6rem", background: "#e8f5f5", color: "#0d5858", padding: "0.15rem 0.4rem", borderRadius: 3, letterSpacing: "0.06em", marginRight: "0.35rem", fontWeight: "600" as const, flexShrink: 0 },
  playerName: { fontSize: "0.82rem", color: "#3a3a36", fontWeight: "500" as const },
  priceBlock: { textAlign: "center" as const, flexShrink: 0 },
  priceLabel: { display: "block", fontSize: "0.55rem", color: "#9a9a90", letterSpacing: "0.1em", textTransform: "uppercase" as const, fontWeight: "600" as const },
  priceValue: { fontSize: "1.35rem", fontWeight: "800" as const, color: "#1d6b1d", letterSpacing: "-0.01em" },
  phasePill: { fontSize: "0.75rem", fontWeight: "700" as const, padding: "0.2rem 0.45rem", borderRadius: 4, letterSpacing: "0.02em" },
  cycleLabel: { fontSize: "0.6rem", color: "#9a9a90", marginTop: "0.1rem", textAlign: "right" as const },
  helpBtn: {
    flexShrink: 0, width: 26, height: 26, borderRadius: "50%",
    background: "#f0eee9", border: "1px solid #e2ddd6",
    color: "#6b6b63", fontSize: "0.8rem", fontWeight: "700" as const,
    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
    fontFamily: "inherit", padding: 0,
  },
  countdownBar: {
    display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center",
    padding: "0.4rem 1rem", minHeight: 54, background: "#f0f8f0", borderBottom: "1px solid #c8e4c8",
  },
  countdownNum: { fontSize: "1.8rem", fontWeight: "800" as const, color: "#1d6b1d", lineHeight: 1, letterSpacing: "-0.02em" },
  countdownLabel: { fontSize: "0.6rem", color: "#5a9a5a", letterSpacing: "0.08em", textTransform: "uppercase" as const, marginTop: "0.1rem", fontWeight: "600" as const },
  lockBar: {
    position: "sticky" as const, bottom: 0, display: "flex", gap: "0.5rem",
    padding: "0.6rem 0.75rem", background: "#ffffff", borderTop: "1px solid #e2ddd6", zIndex: 10,
  },
  lockBtn: {
    flex: 1, padding: "0.8rem 0.5rem", minHeight: 48, border: "1.5px solid", borderRadius: 8,
    fontFamily: "inherit", fontSize: "0.85rem", fontWeight: "700" as const,
    color: "#18181a", cursor: "pointer",
  },
  noActionBtn: { background: "#f5f3ef", borderColor: "#d1cbc3" },
  lockInBtn: { background: "#e8f5e8", borderColor: "#4a9a4a" },
  tabBar: {
    display: "flex", background: "#ffffff", borderBottom: "1px solid #e2ddd6", width: "100%",
  },
  tabBtn: {
    flex: 1, padding: "0.6rem 0.2rem", minHeight: 40, background: "transparent",
    border: "none", borderBottom: "2.5px solid transparent", color: "#9a9a90",
    fontSize: "0.65rem", fontFamily: "inherit", cursor: "pointer", letterSpacing: "0.04em",
    textTransform: "uppercase" as const, overflow: "hidden", textOverflow: "ellipsis" as const,
    whiteSpace: "nowrap" as const, minWidth: 0, fontWeight: "600" as const,
  },
  tabBtnActive: { color: "#1d6b1d", borderBottomColor: "#1d6b1d" },
  content: { display: "flex", flexDirection: "column" as const, gap: "0.5rem", padding: "0.5rem", flex: 1, minWidth: 0, width: "100%" },
  card: { background: "#ffffff", border: "1px solid #e2ddd6", borderRadius: 10, padding: "0.75rem 0.875rem", minWidth: 0 },
  cardTitle: { margin: "0 0 0.5rem", fontSize: "0.65rem", color: "#9a9a90", textTransform: "uppercase" as const, letterSpacing: "0.08em", fontWeight: "700" as const },
  statGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem 0.75rem" },
  stat: { display: "flex", flexDirection: "column" as const },
  statLabel: { fontSize: "0.6rem", color: "#9a9a90", textTransform: "uppercase" as const, letterSpacing: "0.06em", fontWeight: "600" as const },
  statValue: { fontSize: "0.95rem", fontWeight: "600" as const, marginTop: "0.1rem", color: "#18181a" },
  btnGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.4rem" },
  actionBtn: {
    border: "1.5px solid", borderRadius: 8, padding: "0.75rem 0.5rem", minHeight: 58,
    display: "flex", flexDirection: "column" as const, alignItems: "center",
    justifyContent: "center" as const, gap: "0.2rem", fontFamily: "inherit",
  },
  actionBtnLabel: { fontSize: "0.875rem", fontWeight: "700" as const, color: "#18181a" },
  actionBtnSub: { fontSize: "0.62rem", color: "#7a7a70" },
  qtyRow: { display: "flex", gap: "0.4rem" },
  qtyBtn: {
    flex: 1, padding: "0.55rem 0", background: "#f5f3ef", border: "1.5px solid #e2ddd6",
    borderRadius: 6, color: "#6b6b63", fontSize: "0.95rem", fontFamily: "inherit", cursor: "pointer", fontWeight: "500" as const,
  },
  qtyBtnActive: { background: "#e8f5f5", borderColor: "#5a9a9a", color: "#0d5858", fontWeight: "700" as const },
  targetRow: { display: "flex", gap: "0.4rem", alignItems: "stretch", minWidth: 0 },
  select: {
    flex: 1, minWidth: 0, background: "#f5f3ef", border: "1.5px solid #e2ddd6", color: "#18181a",
    padding: "0.5rem 0.5rem", borderRadius: 6, fontFamily: "inherit", fontSize: "0.82rem",
    appearance: "auto" as const,
  },
  optNote: { margin: "0 0 0.5rem", fontSize: "0.72rem", color: "#9a9a90", fontStyle: "italic" as const },
  empty: { color: "#8a8a80", textAlign: "center" as const, margin: 0, fontSize: "0.875rem" },
  feedbackCard: { background: "#edf8ed", border: "1px solid #9ac89a", borderRadius: 10, padding: "0.75rem 0.875rem" },
  feedbackHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" },
  feedbackTitle: { fontSize: "0.65rem", color: "#1d6b1d", textTransform: "uppercase" as const, letterSpacing: "0.08em", fontWeight: "700" as const },
  feedbackLine: { fontSize: "0.82rem", color: "#1a4a1a", lineHeight: 1.55, margin: "0.15rem 0" },
  dismissBtn: { background: "transparent", border: "none", color: "#9a9a90", cursor: "pointer", fontSize: "1.1rem", lineHeight: 1, padding: 0 },
  headlineCard: { background: "#fffef5", border: "1px solid #e8e0c0", borderRadius: 10, padding: "0.7rem 0.875rem" },
  headlineLabel: { fontSize: "0.6rem", color: "#9a8040", letterSpacing: "0.1em", display: "block", marginBottom: "0.25rem", fontWeight: "700" as const, textTransform: "uppercase" as const },
  headlineText: { fontSize: "0.83rem", color: "#3a3020", fontStyle: "italic" as const, margin: 0, lineHeight: 1.5 },
  // Modal
  overlay: {
    position: "fixed" as const, inset: 0, zIndex: 500,
    background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "flex-end",
  },
  modal: {
    background: "#ffffff", width: "100%", maxHeight: "85vh",
    borderRadius: "14px 14px 0 0", overflow: "hidden",
    display: "flex", flexDirection: "column" as const,
    boxShadow: "0 -4px 32px rgba(0,0,0,0.15)",
  },
  modalHeader: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "0.9rem 1.1rem", borderBottom: "1px solid #e8e4df", flexShrink: 0,
  },
  modalTitle: { fontSize: "1rem", fontWeight: "800" as const, color: "#18181a" },
  modalClose: {
    background: "transparent", border: "none", color: "#9a9a90",
    fontSize: "1.5rem", cursor: "pointer", padding: 0, lineHeight: 1,
  },
  modalBody: { overflowY: "auto" as const, padding: "0.9rem 1.1rem", display: "flex", flexDirection: "column" as const, gap: "0.875rem" },
  modalSection: { borderLeft: "3px solid #e2ddd6", paddingLeft: "0.75rem" },
  modalSectionTitle: { fontSize: "0.8rem", fontWeight: "700" as const, color: "#18181a", margin: "0 0 0.3rem" },
  modalText: { fontSize: "0.82rem", color: "#5a5a54", lineHeight: 1.6, margin: 0 },
  queuedBanner: { background: "#edf8ed", border: "1px solid #9ac89a", borderRadius: 8, padding: "0.6rem 0.875rem", fontSize: "0.82rem", color: "#1d6b1d" },
  queuedNote: { color: "#9a9a90", fontSize: "0.72rem" },
} as const;
