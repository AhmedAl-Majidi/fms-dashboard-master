// Counter.jsx
import React from "react";
import { signal } from "@preact/signals";

export const count = signal(0);

const Counter = () => {
  return (
    <div>
      <h1>Counter: {count.value}</h1>
      <button onClick={() => (count.value += 1)}>+</button>
      <button onClick={() => (count.value -= 1)}>-</button>
    </div>
  );
};

export default Counter;
