import SpellCard from "../components/SpellCard";
import { useFetch } from "../hooks/useFetch";
import { SearchFilter } from "../components/SearchFilter";
import { useSearch } from "../context/search-context";
import { ENDPOINTS } from "../utils/endpoints";
import { useEffect, useState } from "react";
import { Pagination } from "../components/Pagination";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
import type { SpellListResponse } from "../types/spells";

const SpellList = () => {
  const { query, sortOrder } = useSearch();
  const { data, loading, error } = useFetch<SpellListResponse>(
    ENDPOINTS.SPELLS
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 21;

  // Reset to page 1 when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [query, sortOrder]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

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

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mt-4">
      <SearchFilter />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
        {paginated.map((spell) => (
          <SpellCard key={spell.index} spell={spell} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default SpellList;
