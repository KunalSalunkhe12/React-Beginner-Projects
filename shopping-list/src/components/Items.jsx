import React, { useState } from "react";
import Counter from "./Counter";
import "./Items.css";

function Items(props) {
  const [check, setCheck] = useState(false);

  function handleClick(e) {
      setCheck(!check);
  }


  // check ? 

  return (
    <div className="item">
      <input
      style={check ? {textDecoration: 'line-through'} : null}
        onClick= {handleClick}
        className="item-value"
        type="text"
        value={props.value}
        readOnly
      />
      <Counter />
    </div>
  );
}

export default Items;
