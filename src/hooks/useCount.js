import { useState } from "react";

export default function useCount(itemId, updateItemQuantity) {
  const [count, setCount] = useState(0);

  function increment() {
    if (count < 15) {
      setCount(count + 1);
      updateItemQuantity(itemId, count + 1);
    }
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
      updateItemQuantity(itemId, count - 1);
    }
  }
  return [count, increment, decrement];
}
