import React from "react";
import PokemonCard from "./PokemonCard";

const Results = ({ pokemons }) => {
  return (
    <div className="search">
      {pokemons.length === 0 ? (
        <h1>No Pokemon Selected</h1>
      ) : (
        pokemons.map(pokemon => (
          <PokemonCard key={pokemon.name} url={pokemon.url} />
        ))
      )}
    </div>
  );
};

export default Results;
