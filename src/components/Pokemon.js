import React from "react";
import "../stylesheet/Pokemon.scss";

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
      <div className="circle">
        <div className="little-circle"></div>
      </div>
    </li>
  );
}

export default Pokemon;
