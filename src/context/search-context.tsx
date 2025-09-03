import React, { createContext, useContext, useState } from "react";
import type {
  SearchContext,
  SearchProviderProps,
} from "../types/search-context";

const SearchContext = createContext<SearchContext | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context)
    throw new Error("useSearch must be used within a SearchProvider");
  return context;
};

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  return (
    <SearchContext.Provider
      value={{ query, setQuery, sortOrder, setSortOrder }}
    >
      {children}
    </SearchContext.Provider>
  );
};
