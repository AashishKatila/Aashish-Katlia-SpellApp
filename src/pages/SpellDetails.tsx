import { useParams } from "react-router-dom";
import { ENDPOINTS } from "../utils/endpoints";
import { useFetch } from "../hooks/useFetch";
import type { Spell } from "../types/spells";

const SpellDetails = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: spell,
    loading,
    error,
  } = useFetch<Spell>(`${ENDPOINTS.SPELLS}/${id}`);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!spell) return <p>Spell not found</p>;

  console.log("Spell -", spell);
  return (
    <div className="max-w-3xl mx-auto py-20">
      <h1>
        <strong>{spell.name}</strong>
      </h1>

      <section>
        <h3>
          <strong>Description</strong>
        </h3>
        {spell.desc.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </section>

      {spell.higher_level && (
        <section>
          <h3>At Higher Levels</h3>
          {spell.higher_level.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </section>
      )}

      <section>
        <p>
          <strong>Level:</strong> {spell.level}
        </p>
        <p>
          <strong>Range:</strong> {spell.range}
        </p>
        <p>
          {spell.components.length > 0 && <strong>Components:</strong>}{" "}
          {spell.components.join(", ")}
        </p>
        {spell.material && (
          <p>
            <strong>Material:</strong> {spell.material}
          </p>
        )}
        <p>
          <strong>Ritual:</strong> {spell.ritual ? "Yes" : "No"}
        </p>
        <p>
          <strong>Concentration:</strong> {spell.concentration ? "Yes" : "No"}
        </p>
        <p>
          <strong>Casting Time:</strong> {spell.casting_time}
        </p>
        {spell.attack_type && (
          <p>
            <strong>Attack Type:</strong> {spell.attack_type}
          </p>
        )}
      </section>

      {spell.damage?.damage_at_slot_level && (
        <section>
          <h3>Damage</h3>
          <p>
            <strong>Type:</strong> {spell.damage.damage_type.name}
          </p>
          <ul>
            {Object.entries(spell.damage.damage_at_slot_level).map(
              ([level, dmg]) => (
                <li key={level}>
                  Slot Level {level}: {dmg}
                </li>
              )
            )}
          </ul>
        </section>
      )}

      <section>
        <p>
          <strong>School:</strong> {spell.school.name}
        </p>
        <p>
          <strong>Classes:</strong>
          {spell.classes.map((c) => c.name).join(", ")}
        </p>
        <p>
          {spell.subclasses.length > 0 && <strong>Subclasses:</strong>}
          {spell.subclasses.map((sc) => sc.name).join(", ")}
        </p>
        <p>
          <strong>Updated At:</strong>
          {new Date(spell.updated_at).toLocaleString()}
        </p>
        <p>
          <strong>URL:</strong> {spell.url}
        </p>
      </section>
    </div>
  );
};

export default SpellDetails;
