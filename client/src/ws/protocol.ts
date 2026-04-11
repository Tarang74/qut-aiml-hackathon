// Mirror of server/src/net/protocol.rs + supporting types.
// Keep in sync by hand when the Rust types change.

// ── Primitive IDs (newtype wrappers serialise as their inner value) ───────────

export type PlayerId = number;   // u64 (note: JS safe up to 2^53)
export type FarmId = number;
export type MillId = number;
export type NpcId = number;

// ── Enums ─────────────────────────────────────────────────────────────────────

export type Side = "bid" | "ask";

export type Role = "farmer" | "trader";

export type FarmState = "healthy" | "burning" | "idle";

export type MillState = "operating" | "burning";

export type OptionType = "call" | "put";

export type OptionRequest = "call" | "put";

// ── Physical entities ─────────────────────────────────────────────────────────

export interface Farm {
  id: FarmId;
  owner: PlayerId;
  fields: number;
  workers: number;
  state: FarmState;
  planted_fields: number;
  stored_corn: number;
  burn_remaining: number;
}

export interface Mill {
  id: MillId;
  owner: PlayerId;
  throughput: number;
  state: MillState;
  burn_remaining: number;
}

export interface NpcOwner {
  id: NpcId;
  player_id: PlayerId;
  name: string;
  cash: string; // Decimal serialises as string
  shares: number;
  farm_id: FarmId | null;
  mill_id: MillId | null;
  alive: boolean;
}

// ── Options ───────────────────────────────────────────────────────────────────

export interface OptionPosition {
  id: number;
  option_type: OptionType;
  strike: string; // Decimal
  expiry_cycle: number;
  quantity: number;
  long: boolean;
  premium: string; // Decimal
  counter_party: PlayerId | null;
}

// ── Game events (tagged with `kind`) ──────────────────────────────────────────

export type GameEvent =
  | { kind: "order_filled"; player_id: PlayerId; side: string; price: string; quantity: number }
  | { kind: "farm_burned"; farm_id: FarmId; arsonist?: PlayerId }
  | { kind: "farm_healed"; farm_id: FarmId }
  | { kind: "mill_burned"; mill_id: MillId }
  | { kind: "worker_killed"; farm_id: FarmId }
  | { kind: "npc_killed"; npc_id: NpcId; npc_name: string }
  | { kind: "npc_farm_auctioned"; farm_id: FarmId; buyer: PlayerId; price: string }
  | { kind: "rumor"; text: string }
  | { kind: "drought"; cycles: number }
  | { kind: "famine" }
  | { kind: "bumper_harvest" }
  | { kind: "market_panic" }
  | { kind: "nuclear_fallout" }
  | { kind: "fields_planted"; farm_id: FarmId; count: number }
  | { kind: "corn_harvested"; farm_id: FarmId; bushels: number }
  | { kind: "corn_sold"; player_id: PlayerId; bushels: number; revenue: string }
  | { kind: "option_expired"; player_id: PlayerId; pnl: string }
  | { kind: "player_joined"; player_id: PlayerId; name: string }
  | { kind: "cycle_start"; cycle: number }
  | { kind: "game_over"; reason: string }
  | { kind: "headline"; text: string };

// ── Debrief stats (structured, no LLM) ───────────────────────────────────────

export interface PlayerSummary {
  player_id: PlayerId;
  name: string;
  role: string;
  net_worth: string; // Decimal
  pnl: string;       // Decimal, net_worth - starting_cash
  return_pct: number;
  rank: number;      // 1 = best
}

export interface DebriefStats {
  total_cycles: number;
  final_price: number;
  price_high: number;
  price_low: number;
  /** Cycle-to-cycle std dev of returns, as a % */
  price_vol_pct: number;
  mm_blowups: number;
  game_over_reason: string;
  /** Sorted best-first */
  leaderboard: PlayerSummary[];
}

// ── Server → Client messages (tagged with `type`) ─────────────────────────────

export type ServerMsg =
  | { type: "welcome"; player_id: PlayerId; name: string; role: string; client_nonce: string }
  | { type: "price_update"; price: string; history: string[]; bid_depth: number; ask_depth: number; cycle_volume: number }
  | { type: "player_roster"; players: Array<{ player_id: PlayerId; name: string; role: string }> }
  | { type: "cycle_phase"; phase: string; cycle: number; seconds_remaining: number }
  | { type: "world_snapshot"; farms: Farm[]; mills: Mill[]; npc_owners: NpcOwner[] }
  | { type: "cycle_events"; cycle: number; events: GameEvent[] }
  | {
      type: "player_state";
      player_id: PlayerId;
      name: string;
      cash: string;
      shares: number;
      aura: number;
      net_worth: string;
      options: OptionPosition[];
    }
  | { type: "player_feedback"; player_id: PlayerId; tips: string }
  | { type: "headline"; text: string; cycle: number }
  | { type: "admin_summary"; text: string; cycle: number }
  | { type: "debrief"; stats: DebriefStats }
  | { type: "player_left"; player_id: PlayerId }
  | { type: "kicked"; player_id: PlayerId; reason: string }
  | { type: "game_over"; reason: string }
  | { type: "game_reset" }
  | { type: "game_paused" }
  | { type: "game_resumed"; seconds_remaining: number }
  | { type: "error"; message: string };

// ── Client → Server messages (tagged with `type`) ─────────────────────────────

export type PlayerAction =
  | { kind: "place_order"; side: Side; price?: string; quantity: number }
  | { kind: "cancel_order"; order_id: number }
  | { kind: "plant_fields"; farm_id: FarmId; count: number }
  | { kind: "harvest_corn"; farm_id: FarmId }
  | { kind: "hire_worker"; farm_id: FarmId }
  | { kind: "fire_worker"; farm_id: FarmId }
  | { kind: "sell_corn"; farm_id: FarmId }
  | { kind: "operate_mill"; mill_id: MillId }
  | { kind: "buy_option"; option_type: OptionRequest; strike: string; expiry_cycles: number; quantity: number }
  | { kind: "write_option"; option_type: OptionRequest; strike: string; expiry_cycles: number; quantity: number }
  | { kind: "burn_farm"; target_farm: FarmId }
  | { kind: "burn_mill"; target_mill: MillId }
  | { kind: "hitman_worker"; target_farm: FarmId }
  | { kind: "hitman_owner"; target_npc: NpcId }
  | { kind: "spread_rumor"; text: string }
  | { kind: "drought" }
  | { kind: "famine" }
  | { kind: "bumper_harvest" }
  | { kind: "market_panic" }
  | { kind: "nuclear_fallout" }
  | { kind: "acquire_farm"; target_farm: FarmId }
  | { kind: "acquire_mill"; target_mill: MillId }
  | { kind: "dump_shares" }
  | { kind: "corner_market" }
  | { kind: "no_op" };

export type AdminCommand =
  | { cmd: "end_game" }
  | { cmd: "pause_game" }
  | { cmd: "resume_game" }
  | { cmd: "set_cycle_secs"; secs: number }
  | { cmd: "set_seed"; seed: number }
  | { cmd: "kick_player"; player_id: number }
  | { cmd: "reset_game" }
  | { cmd: "start_game" }
  | { cmd: "continue_game" };

export type ClientMsg =
  | { type: "join"; name: string; role: Role; client_nonce: string }
  | { type: "action"; action: PlayerAction }
  | { type: "admin"; command: AdminCommand }
  | { type: "ping" }
  | { type: "leave" };
