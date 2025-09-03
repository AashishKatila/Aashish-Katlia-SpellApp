export type DamageType = {
  index: string;
  name: string;
  url: string;
};

export type Damage = {
  damage_type: DamageType;
  damage_at_slot_level: Record<string, string>;
};

export type NamedReference = {
  index: string;
  name: string;
  url: string;
};

export type Spell = {
  index: string;
  name: string;
  url: string;
  desc: string[];
  higher_level?: string[];
  range: string;
  components: string[];
  material?: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  attack_type?: string;
  damage?: Damage;
  school: NamedReference;
  classes: NamedReference[];
  subclasses: NamedReference[];
  updated_at: string;
};

export type SpellListResponse = {
  count: number;
  results: Spell[];
};
