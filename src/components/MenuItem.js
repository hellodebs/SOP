import "./MenuItem.css";
import useCount from "../hooks/useCount";
import { BiMinus, BiPlus } from "react-icons/bi";
import ItemImage from "./ItemImage";

export default function MenuItem({ item, updateItemQuantity }) {
  const [count, increment, decrement] = useCount(item.id, updateItemQuantity);

  return (
    <section className="menu__item">
      <div className="menu__item--content">
        <ItemImage item={item} />
        <div>
          <h3 className="menu__item--type">{item.type}</h3>
          <h2>{item.name}</h2>
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
