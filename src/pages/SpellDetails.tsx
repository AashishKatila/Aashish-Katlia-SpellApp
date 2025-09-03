import { useParams } from "react-router-dom";
import { ENDPOINTS } from "../utils/endpoints";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
import type { Spell } from "../types/spells";

const SpellDetails = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: spell,
    loading,
    error,
  } = useFetch<Spell>(`${ENDPOINTS.SPELLS}/${id}`);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (!spell)
    return (
      <p className="text-center text-gray-600 mt-6 font-semibold">
        Spell not found
      </p>
    );

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{spell.name}</h1>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Description
        </h3>
        {spell.desc.map((line, idx) => (
          <p key={idx} className="text-gray-600 mb-1">
            {line}
          </p>
        ))}
      </section>

      {spell.higher_level && (
        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">
            At Higher Levels
          </h3>
          {spell.higher_level.map((line, idx) => (
            <p key={idx} className="text-gray-600 mb-1">
              {line}
            </p>
          ))}
        </section>
      )}

      <section className="mb-6 bg-gray-50 p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Spell Details
        </h3>
        <p>
          <strong>Level:</strong> {spell.level}
        </p>
        <p>
          <strong>Range:</strong> {spell.range}
        </p>
        <p>
          <strong>Components:</strong> {spell.components.join(", ")}
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
        <section className="mb-6 bg-gray-50 p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Damage</h3>
          <p>
            <strong>Type:</strong> {spell.damage.damage_type.name}
          </p>
          <ul className="list-disc list-inside text-gray-600">
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

      <section className="mb-6 bg-gray-50 p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Additional Info
        </h3>
        <p>
          <strong>School:</strong> {spell.school.name}
        </p>
        <p>
          <strong>Classes:</strong>{" "}
          {spell.classes.map((c) => c.name).join(", ")}
        </p>
        <p>
          <strong>Subclasses:</strong>{" "}
          {spell.subclasses.map((sc) => sc.name).join(", ")}
        </p>
        <p>
          <strong>Updated At:</strong>{" "}
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
