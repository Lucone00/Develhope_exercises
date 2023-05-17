import React, {useState} from "react";

const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(0);

  const handleCounterIncrement = () => {
    setCounter((c) => c + 1);
  };
  const handleCounterDecrement = () => {
    setCounter((c) => c - 1);
  };

  const handleCounterReset = () => {
    setCounter(initialValue);
  };

  return {
    counter: counter,
    onIncrement: handleCounterIncrement,
    onDecrement: handleCounterDecrement,
    onReset: handleCounterReset,
  };
}

export default useCounter;
