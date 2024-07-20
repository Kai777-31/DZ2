import { useState, useCallback } from "react";

const min = 0;
const max = 5;

export function useCount() {
  const [count, setCount] = useState(min);

  const increment = useCallback(() => {
    setCount((prevState) => (prevState + 1 > max ? prevState : prevState + 1));
  }, []);

  const decrement = useCallback(() => {
    setCount((prevState) => (prevState - 1 < min ? prevState : prevState - 1));
  }, []);

  const clear = useCallback(() => {
    setCount(min);
  }, []);

  return {
    count,
    increment,
    decrement,
    clear,
  };
}