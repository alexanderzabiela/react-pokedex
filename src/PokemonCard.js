import React, { Component } from "react";

class PokemonCard extends Component {
  constructor() {
    super();
    this.state = {
      pokemonData: []
    };
  }

  componentDidMount() {
    const pokemonIndex = this.props.url.split("/")[
      this.props.url.split("/").length - 2
    ];

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`)
      .then(response => response.json())
      .then(data => this.setState({ pokemonData: data }));
  }

  render() {
    const pokemonIndex = this.props.url.split("/")[
      this.props.url.split("/").length - 2
    ];
    let hero = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    if (
      this.state.pokemonData.abilities &&
      this.state.pokemonData.abilities.length > 0
    ) {
      this.abilities = this.state.pokemonData.abilities
        .map(ability => {
          return ability.ability.name
            .toLowerCase()
            .split("-")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ");
        })
        .join(", ");
    }

    if (
      this.state.pokemonData.types &&
      this.state.pokemonData.types.length > 0
    ) {
      this.types = this.state.pokemonData.types
        .map(type => {
          return type.type.name
            .toLowerCase()
            .split("-")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ");
        })
        .join(", ");
    }

    return (
      <div className="pokemon-card">
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="info">
          <h1>{this.state.pokemonData.name}</h1>
          <h2>Weight: {this.state.pokemonData.weight}</h2>
          <h2>Height: {this.state.pokemonData.height}</h2>
          <h2>Abilities: {this.abilities}</h2>
          <h2>Types: {this.types}</h2>
        </div>
      </div>
    );
  }
}
export default PokemonCard;
