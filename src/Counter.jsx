import React from "react";
import { count } from "./c";

const Counter = () => {
  return (
    <div>
      <button onClick={() => (count.value += 1)}>+</button>
      <button onClick={() => (count.value -= 1)}>-</button>
    </div>
  );
};

export default Counter;
