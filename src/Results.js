import React from "react";
import PokemonCard from "./PokemonCard";

const Results = ({ pokemons }) => {
  return (
    <div className="search">
      {pokemons.length === 0 ? (
        <h1>No Pokemon Selected</h1>
      ) : (
        pokemons.map(pokemon => (
          <PokemonCard
            key={pokemon.name}
            id={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
            height={pokemon.height}
            weight={pokemon.weight}
          />
        ))
      )}
    </div>
  );
};

export default Results;
