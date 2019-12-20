import React from "react";

function Pokemon(props) {
  return (
    <li>
      <img src={props.pokemon.url} />
      <p>{props.pokemon.name}</p>
    </li>
  );
}

export default Pokemon;
