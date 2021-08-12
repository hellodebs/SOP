import { useState } from "react";

export default function useCount() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return [count, increment, decrement];
}
