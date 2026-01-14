"use client";

import { useState } from "react";

// Type colors for gradient backgrounds
const typeColors = {
  fire: "#F56565",
  water: "#63B3ED",
  grass: "#48BB78",
  electric: "#F6E05E",
  ice: "#81E6D9",
  fighting: "#DD6B20",
  poison: "#9F7AEA",
  ground: "#D69E2E",
  flying: "#90CDF4",
  psychic: "#ED64A6",
  bug: "#A3E635",
  rock: "#A0AEC0",
  ghost: "#4A5568",
  dragon: "#6B46C1",
  dark: "#1A202C",
  steel: "#718096",
  fairy: "#FBB6CE",
  normal: "#A0AEC0",
};

export default function PokemonCard({ pokemon }) {
  const [showStats, setShowStats] = useState(false);

  // Get Pokémon types
  const types = pokemon.types.map((t) => t.type.name);

  // Gradient for dual types, solid for single type
  const bgStyle =
    types.length === 2
      ? `linear-gradient(135deg, ${typeColors[types[0]]}, ${typeColors[types[1]]})`
      : `linear-gradient(135deg, ${typeColors[types[0]]}, ${typeColors[types[0]]})`;

  // Determine animation class based on main type
  let animClass = "default-animate";
  if (types[0] === "fire") animClass = "fire-animate";
  else if (types[0] === "water") animClass = "water-animate";
  else if (types[0] === "grass") animClass = "grass-animate";
  else if (types[0] === "electric") animClass = "electric-animate";
  else if (types[0] === "ice") animClass = "ice-animate";

  return (
    <div
      className={`rounded-xl shadow-lg p-4 hover:scale-105 transition transform duration-300 relative overflow-hidden ${animClass}`}
      style={{ background: bgStyle }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/20 rounded-xl"></div>

      <div className="relative z-10">
        {/* Pokémon image */}
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="h-28 w-28 mx-auto"
        />

        {/* Pokémon name */}
        <h3 className="text-lg font-bold capitalize text-center mt-2 text-white">
          {pokemon.name}
        </h3>

        {/* Type badges */}
        <div className="flex justify-center gap-2 mt-2 flex-wrap">
          {types.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full bg-white/30 text-white font-semibold backdrop-blur-sm capitalize"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Show stats button */}
        <button
          onClick={() => setShowStats(!showStats)}
          className="mt-3 w-full px-3 py-1 bg-white/30 text-white rounded hover:bg-white/50 transition backdrop-blur-sm"
        >
          {showStats ? "Hide Stats" : "Show Stats"}
        </button>

        {/* Stats list */}
        {showStats && (
          <ul className="mt-3 text-sm space-y-1 text-white">
            {pokemon.stats.map((s) => (
              <li key={s.stat.name} className="flex justify-between capitalize">
                <span>{s.stat.name}</span>
                <span className="font-semibold">{s.base_stat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
