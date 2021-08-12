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

      <button className="menu__buttons" onClick={increment}>
        +
      </button>
      {count}
      <button className="menu__buttons" onClick={decrement}>
        -
      </button>
    </div>
  );
}
