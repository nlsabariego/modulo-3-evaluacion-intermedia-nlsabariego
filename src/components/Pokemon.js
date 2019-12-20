import React from "react";

function Pokemon(props) {
  const types = props.pokemon.types;
  return (
    <li className="list-item">
      <img src={props.pokemon.url} alt={props.pokemon.name} />
      <p>{props.pokemon.name}</p>
      <ul>
        {types.map(function(type, index) {
          return <li key={index}>{type}</li>;
        })}
      </ul>
    </li>
  );
}

export default Pokemon;
