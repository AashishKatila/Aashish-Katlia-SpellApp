import type { ReactNode } from "react";

export type SearchContext = {
  query: string;
  setQuery: (query: string) => void;
  sortOrder: "asc" | "desc" | null;
  setSortOrder: (order: "asc" | "desc" | null) => void;
};

export type SearchProviderProps = {
  children: ReactNode;
};
