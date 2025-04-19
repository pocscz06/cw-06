// I'm just gonna use modern React as that's what I'm most familiar with
import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleCounter} className="counterButton">
        +1
      </button>
    </div>
  );
};

export default Counter;
