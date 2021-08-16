import "./Order.css";
import { useState } from "react";
import OrderItem from "../components/OrderItem";
// import { BiX } from "react-icons/bi";

export default function Order() {
  const [order, setOrder] = useState([
    {
      id: 5,
      quantity: 3,
    },
    {
      id: 9,
      quantity: 3,
    },
    {
      id: 11,
      quantity: 1,
    },
  ]);

  return order
    .map((orderItem) => {
      return <OrderItem orderItem={orderItem} key={orderItem.id} />;
    })
    .filter((nameById) => {
      console.log(nameById);
      return nameById;
    });

  // /* <p>
  //   I want dish 1 <BiX className="order__item--delete" />
  // </p>

  // <button type="submit" className="order__item--button">
  //   Confirm Order
  // </button>
}
