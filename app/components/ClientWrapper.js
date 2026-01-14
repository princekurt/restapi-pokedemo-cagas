"use client";

import { useState } from "react";
import Search from "./Search";
import PokemonCard from "./PokemonCard";
import StatsChart from "./StatsChart";

export default function ClientWrapper({ data }) {
  const [query, setQuery] = useState("");

  // Filter Pokémon by search query
  const filtered = data.filter((p) => p.name.toLowerCase().includes(query));

  return (
    <div className="space-y-6">
      {/* Search bar */}
      <Search onSearch={setQuery} />

      {/* Pokémon cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </div>

      {/* Stats chart shows only if 1 Pokémon is selected */}
      {filtered.length === 1 && (
        <div>
          <h3 className="text-2xl font-bold mt-6 mb-2">Stats Chart</h3>
          <StatsChart pokemon={filtered[0]} />
        </div>
      )}
    </div>
  );
}
