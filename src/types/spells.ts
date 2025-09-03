export type Spell = {
  index: string;
  name: string;
  url: string;
};

export type SpellListResponse = {
  count: number;
  results: Spell[];
};
