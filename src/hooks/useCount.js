import { useState } from "react";

export default function useCount() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
    if (count === 0) {
      setCount(0);
    }
  }
  return [count, increment, decrement];
}
