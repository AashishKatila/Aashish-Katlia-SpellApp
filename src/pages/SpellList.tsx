import { SearchFilter } from "../components/SearchFilter";
import SpellCard from "../components/SpellCard";
import { useSearch } from "../context/search-context";
import { useFetch } from "../hooks/useFetch";
import type { SpellListResponse } from "../types/spells";
import { ENDPOINTS } from "../utils/endpoints";

const SpellList = () => {
  const { query, sortOrder } = useSearch();

  const { data, loading, error } = useFetch<SpellListResponse>(
    ENDPOINTS.SPELLS
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  let filtered =
    data?.results.filter((s) => {
      return s.name.toLowerCase().includes(query.toLowerCase());
    }) || [];

  if (sortOrder) {
    filtered = [...filtered].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.level - b.level;
      } else {
        return b.level - a.level;
      }
    });
  }

  return (
    <div className="max-w-7xl mx-auto">
      <SearchFilter />
      <div className="grid grid-cols-3 gap-4 p-4">
        {filtered?.map((spell) => (
          <SpellCard key={spell.index} spell={spell} />
        ))}
      </div>
    </div>
  );
};

export default SpellList;
