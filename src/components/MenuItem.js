import "./MenuItem.css";
import useCount from "../hooks/useCount";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useState } from "react";

export default function MenuItem({ item }) {
  const [count, increment, decrement] = useCount();
  const [orderItem, setOrderItem] = useState();
  return (
    <div className="menu__item">
      <p>{item.type}</p>
      <p>{item.name}</p>
      <p>{item.description}</p>
      <p>{item.price / 100}</p>
      <div className="menu__counter">
        <BiPlus
          className="menu__counter--button"
          onClick={increment}
          onSubmit={handleSubmit}
        />
        <span className="menu__counter--number">{count}</span>
        <BiMinus className="menu__counter--button" onClick={decrement} />
      </div>
    </div>
  );
  function handleSubmit() {
    setOrderItem(orderItem);
  }
}
