import { Link } from "react-router-dom";
import { useSearch } from "../context/search-context";
import { SearchFilter } from "../components/SearchFilter";
import { Pagination } from "../components/Pagination";
import { useState, useEffect } from "react";
import { IoMdHeart } from "react-icons/io";
import type { Spell } from "../types/spells";

const Favourites = () => {
  const stored = localStorage.getItem("favorites");
  const initialFavorites: Spell[] = stored ? JSON.parse(stored) : [];
  const [favorites, setFavorites] = useState<Spell[]>(initialFavorites);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 21;

  const { query, sortOrder } = useSearch();

  // Reset page when search or sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [query, sortOrder]);

  const handleRemove = (spellIndex: string) => {
    const updated = favorites.filter((s) => s.index !== spellIndex);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  // Filter favorites
  let filtered =
    favorites.filter((s) =>
      s.name.toLowerCase().includes(query.toLowerCase())
    ) || [];

  // Sort favorites
  if (sortOrder) {
    filtered = [...filtered].sort((a, b) =>
      sortOrder === "asc" ? a.level - b.level : b.level - a.level
    );
  }

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (favorites.length === 0)
    return (
      <p className="text-center text-gray-600 mt-6 font-semibold">
        No favorites yet.
      </p>
    );

  return (
    <div className="app-container mt-4">
      <SearchFilter />

      {paginated.length === 0 ? (
        <p className="text-center text-gray-600 mt-6 font-semibold">
          No spells found.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {paginated.map((spell) => (
            <Link
              key={spell.index}
              to={`/spell/${spell.index}`}
              className=" hover:bg-gray-100 transition p-4 border rounded shadow "
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">
                  {spell.name}
                </span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleRemove(spell.index);
                  }}
                  className=" text-xl cursor-pointer"
                >
                  <IoMdHeart />
                </button>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-4 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Favourites;
