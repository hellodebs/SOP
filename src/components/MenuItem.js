import "./MenuItem.css";
import useCount from "../hooks/useCount";
import { BiMinus, BiPlus } from "react-icons/bi";

export default function MenuItem({ item }) {
  const [count, increment, decrement] = useCount();
  return (
    <div className="menu__item">
      <p>{item.type}</p>
      <p>{item.name}</p>
      <p>{item.description}</p>
      <p>{item.price / 100}</p>
      <div className="menu__counter">
        <BiPlus className="menu__counter--buttons" onClick={increment} />
        <span className="menu__counter--number">{count}</span>
        <BiMinus className="menu__counter--buttons" onClick={decrement} />
      </div>
    </div>
  );
}
