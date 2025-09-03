import SpellCard from "../components/SpellCard";
import { useFetch } from "../hooks/useFetch";
import type { SpellListResponse } from "../types/spells";
import { ENDPOINTS } from "../utils/endpoints";

const SpellList = () => {
  const { data, loading, error } = useFetch<SpellListResponse>(
    ENDPOINTS.SPELLS
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data?.results?.map((spell) => (
        <SpellCard key={spell.index} spell={spell} />
      ))}
    </div>
  );
};

export default SpellList;
