import React from "react";
import "../stylesheet/PokeList.scss";

function PokeList(props) {
  return <ul className="content-list">{props.children}</ul>;
}

export default PokeList;
