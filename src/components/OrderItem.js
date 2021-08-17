import "./OrderItem.css";
import { BiX } from "react-icons/bi";

export default function OrderItem({ orderItem, deleteButtonHandler }) {
  return (
    <section className="order__item">
      <div className="order__item--content">
        <img
          src={`/images/menu/${orderItem.id}.jpg`}
          alt={orderItem.name}
          className="order__item--image"
        />
        <div>
          <p>Id: {orderItem.id}</p>
          <p>Name: {orderItem.name}</p>
          <p>Quantity: {orderItem.quantity}</p>
        </div>
        <p
          onClick={() => deleteButtonHandler(orderItem.id)}
          className="order__item--delete"
        >
          <BiX />
        </p>
      </div>
    </section>
  );
}
