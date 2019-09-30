import React, { Component } from "react";
import Results from "./Results";

class SearchParams extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: []
    };
  }

  componentDidMount() {
    let initialPokemons = [];
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(response => {
        return response.json();
      })
      .then(data => {
        initialPokemons = data.results.map(pokemon => {
          return pokemon;
        });
        this.setState({
          pokemons: initialPokemons,
          filteredPokemons: []
        });
      });
  }

  findPokemons(name) {
    this.setState({
      filteredPokemons: this.state.pokemons.filter(
        pokemon => pokemon.name == name
      )
    });
  }

  render() {
    let pokemons = this.state.pokemons;
    let optionItems = pokemons.map(pokemon => (
      <option key={pokemon.name}>{pokemon.name}</option>
    ));

    return (
      <div className="search-params">
        <select
          id={this.state.pokemons.name}
          value={this.state.name}
          onChange={e => this.findPokemons(e.target.value)}
          onBlur={e => this.findPokemons(e.target.value)}
        >
          <option>Please Select a Pokemon</option>
          {optionItems}
        </select>
        <Results
          pokemons={this.state.filteredPokemons || this.state.pokemons}
        />
      </div>
    );
  }
}

export default SearchParams;
