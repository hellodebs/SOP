import "./MenuItem.css";
import useCount from "../hooks/useCount";
import { BiMinus, BiPlus } from "react-icons/bi";

export default function MenuItem({ item }) {
  const [count, increment, decrement] = useCount();
  const image = (
    <img
      src={`/images/menu/${item.id}.jpg`}
      alt={item.name}
      className="menu__item--image"
    />
  );
  return (
    <section className="menu__item">
      <div className="menu__item--content">
        {image}
        <div>
          <p className="menu__item--type">{item.type}</p>
          <p>{item.name}</p>
          <p>{item.description}</p>
        </div>
        <p className="menu__item--price">{item.price / 100}</p>
      </div>
      <div className="menu__counter">
        <BiPlus className="menu__counter--button" onClick={increment} />
        <span className="menu__counter--number">{count}</span>
        <BiMinus className="menu__counter--button" onClick={decrement} />
      </div>
    </section>
  );
}
