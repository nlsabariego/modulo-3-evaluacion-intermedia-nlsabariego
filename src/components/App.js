import React from "react";
import "../stylesheet/App.css";
import apiData from "../api/data.json";
import PokeList from "./PokeList";
import Pokemon from "./Pokemon";

class App extends React.Component {
  constructor() {
    super();
    this.state = { pokemons: apiData };
  }

  render() {
    return (
      <div>
        <h1>Mi lista de Pokemons</h1>
        <PokeList>
          {this.state.pokemons.map(function(pokemon) {
            return <Pokemon pokemon={pokemon} key={pokemon.id} />;
          })}
        </PokeList>
      </div>
    );
  }
}

export default App;
