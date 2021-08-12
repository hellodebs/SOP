import "./MenuItem.css";
import useCount from "../hooks/useCount";

export default function MenuItem({ item }) {
  const [count, increment, decrement] = useCount();
  return (
    <div className="menu__item">
      <p>{item.type}</p>
      <p>{item.name}</p>
      <p>{item.description}</p>
      <p>{item.price / 100}</p>
      <div className="menu__counter">
        <button className="menu__counter--buttons" onClick={increment}>
          +
        </button>
        <span className="menu__counter--number">{count}</span>
        <button className="menu__counter--buttons" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
}
