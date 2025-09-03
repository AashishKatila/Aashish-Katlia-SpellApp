import { Link } from "react-router-dom";
import type { Spell } from "../types/spells";
import { useSearch } from "../context/search-context";
import { SearchFilter } from "../components/SearchFilter";

const Favourites = () => {
  const stored = localStorage.getItem("favorites");
  const favorites: Spell[] = stored ? JSON.parse(stored) : [];

  const { query, sortOrder } = useSearch();

  let filtered =
    favorites.filter((s) => {
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

  if (favorites.length === 0) return <p>No favorites yet.</p>;

  return (
    <>
      <SearchFilter />
      <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((spell) => (
          <Link
            key={spell.index}
            to={`/spell/${spell.index}`}
            className="p-4 border rounded shadow hover:bg-gray-100"
          >
            <h3 className="font-semibold">{spell.name}</h3>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Favourites;
