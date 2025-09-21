import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Counter() {
  const context = useContext(AppContext);

  if (!context) {
    return <div>Context not found</div>;
  }

  const { counter, SetCounter } = context;

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button
        onClick={() => {
          SetCounter(counter + 1);
        }}
      >
        Add 1
      </button>
    </div>
  );
}

export default Counter;
