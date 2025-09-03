import { Link } from "react-router-dom";
import type { Spell } from "../types/spells";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useEffect, useState } from "react";

const SpellCard = ({ spell }: { spell: Spell }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    const favorites: Spell[] = stored ? JSON.parse(stored) : [];
    setIsFav(favorites.some((s) => s.index === spell.index));
  }, [spell.index]);

  const handleFav = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const stored = localStorage.getItem("favorites");
    const favorites: Spell[] = stored ? JSON.parse(stored) : [];

    let updated;
    if (isFav) {
      updated = favorites.filter((s) => s.index !== spell.index);
    } else {
      updated = [...favorites, spell];
    }

    localStorage.setItem("favorites", JSON.stringify(updated));
    setIsFav(!isFav);
  };

  return (
    <Link
      to={`/spell/${spell.index}`}
      className="hover:bg-gray-100 transition border rounded shadow p-4"
    >
      <div className="flex justify-between items-center">
        <span className="font-semibold text-gray-700">{spell.name}</span>
        <button onClick={handleFav} className="text-xl cursor-pointer">
          {isFav ? <IoMdHeart /> : <IoMdHeartEmpty />}
        </button>
      </div>
    </Link>
  );
};

export default SpellCard;
