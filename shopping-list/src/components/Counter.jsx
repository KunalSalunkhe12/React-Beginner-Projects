import React, { useState } from "react";
import './Counter.css'

function Counter() {
  const [counterVal, setCounterVal] = useState(1);

  function handleIncrement() {
      let newCounterVal = counterVal + 1;
      setCounterVal(newCounterVal);
  }

  function handleDecrement() {
      let newCounterVal = Math.max(1, counterVal - 1);
      setCounterVal(newCounterVal);
  }

  return (
    <div className="counter">
      <i onClick={handleDecrement} className="fa-solid fa-less-than icon"></i>
      <input className="counter-value" type="text" value={counterVal} readOnly/>
      <i onClick={handleIncrement} className="fa-solid fa-greater-than icon"></i>
    </div>
  );
}

export default Counter;
