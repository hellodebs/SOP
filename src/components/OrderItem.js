import "./OrderItem.css";
import { BiX } from "react-icons/bi";

export default function OrderItem({ orderItem }) {
  return (
    <div className="order__item">
      <p>Id: {orderItem.id}</p>
      <p>Name: {orderItem.name}</p>
      <p>Quantity: {orderItem.quantity}</p>
      <BiX className="order__item--delete" />
    </div>
  );
}

// <button type="submit" className="order__item--button">
//   Confirm Order
// </button>
