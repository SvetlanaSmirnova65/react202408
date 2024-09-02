import { useState } from "react";

export const useCount = () => {
  const [value, setValue] = useState(0);

  const increment = () => setValue(Math.min(value + 1, 5));
  const decrement = () => setValue(Math.max(value - 1, 0));

  return {
    value,
    increment,
    decrement,
  };
};
