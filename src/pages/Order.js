import { useState } from "react";
import OrderItem from "../components/OrderItem";

export default function Order({ items }) {
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

  return order.map((orderItem) => {
    const menuItem = items.filter((item) => {
      return item.id === orderItem.id;
    });
    orderItem = { ...orderItem, ...menuItem[0] };
    return <OrderItem orderItem={orderItem} key={orderItem.id} />;
  });
}
