import { Link } from "react-router-dom";
import type { Spell } from "../types/spells";

const SpellCard = ({ spell }: { spell: Spell }) => {
  return (
    <div className="p-4 border rounded shadow hover:bg-gray-100">
      <Link
        to={`/spell/${spell.index}`}
        className="text-gray-600 font-semibold"
      >
        {spell.name}
      </Link>
    </div>
  );
};

export default SpellCard;
