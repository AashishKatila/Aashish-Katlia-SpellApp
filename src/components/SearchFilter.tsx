import { useSearch } from "../context/search-context";

export const SearchFilter = ({
  placeholder = "Search spells...",
}: {
  placeholder?: string;
}) => {
  const { query, setQuery, sortOrder, setSortOrder } = useSearch();

  return (
    <div className="flex gap-2 p-2">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 p-2 border rounded"
      />
      <select
        value={sortOrder || ""}
        onChange={(e) =>
          setSortOrder((e.target.value as "asc" | "desc" | null) || null)
        }
        className="p-2 border rounded"
      >
        <option value="">No Sort</option>
        <option value="asc">Level: Low to High</option>
        <option value="desc">Level: High to Low</option>
      </select>
    </div>
  );
};
