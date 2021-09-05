import OrderItem from "../components/OrderItem";
import "../components/OrderItem.css";
import { BiCheck } from "react-icons/bi";

export default function Order({
  menu,
  order,
  onDeleteButton: deleteItem,
  onConfirmButton: confirmOrderButton,
}) {
  let total = 0;
  const orderItems = order.map((orderItem) => {
    const filteredMenuItem = menu.filter((item) => {
      return orderItem.id === item.id;
    });
    orderItem = {
      ...filteredMenuItem[0],
      ...orderItem,
    };
    total = total + orderItem.price * orderItem.quantity;
    return (
      <OrderItem
        onDeleteButton={deleteItem}
        orderItem={orderItem}
        key={orderItem.id}
      />
    );
  });

  return (
    <>
      {orderItems}
      <button
        type="submit"
        className="orderpage__confirm-button"
        onClick={confirmOrderButton}
      >
        Confirm order
        <BiCheck className="orderpage__confirm-check" />
      </button>
      <p className="orderpage__total-amount">
        Current total: {(total / 100).toFixed(2)} €
      </p>
    </>
  );
}
