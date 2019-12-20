import React from "react";
import "../stylesheet/Pokemon.css";

function Pokemon(props) {
  const types = props.pokemon.types;
  return (
    <li className="list-item">
      <img src={props.pokemon.url} alt={props.pokemon.name} className="item-img" />
      <p className="item-name">{props.pokemon.name}</p>
      <ul className="list-types">
        {types.map(function(type, index) {
          return (
            <li key={index} className="type">
              {type}
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default Pokemon;
