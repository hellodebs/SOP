import { useState } from "react";

export default function useCount(item, updateItemQuantity) {
  function increment() {
    if (item.quantity < 15) {
      updateItemQuantity(item.id, item.quantity + 1);
    }
  }

  function decrement() {
    if (item.quantity > 0) {
      updateItemQuantity(item.id, item.quantity - 1);
    }
  }
  return [increment, decrement];
}
