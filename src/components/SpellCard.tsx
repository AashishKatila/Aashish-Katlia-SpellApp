import { Link } from "react-router-dom";
import type { Spell } from "../types/spells";

const SpellCard = ({ spell }: { spell: Spell }) => {
  const handleFav = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const stored = localStorage.getItem("favorites");
    const favorites: Spell[] = stored ? JSON.parse(stored) : [];

    //Logic to either add or remove spell
    const updated = favorites.some((s) => s.index === spell.index)
      ? favorites.filter((s) => s.index !== spell.index)
      : [...favorites, spell];

    localStorage.setItem("favorites", JSON.stringify(updated));
    alert(
      updated.some((s) => s.index === spell.index)
        ? "Added to favorites"
        : "Removed from favorites"
    );
  };

  return (
    <Link
      to={`/spell/${spell.index}`}
      className="text-gray-600 font-semibold p-4 border rounded shadow hover:bg-gray-100"
    >
      <div className="flex justify-between ">
        {spell.name}
        <button onClick={handleFav}>Fav</button>
      </div>
    </Link>
  );
};

export default SpellCard;
