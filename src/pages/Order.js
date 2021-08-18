import OrderItem from "../components/OrderItem";
import "./Order.css";

export default function Order({ items, order, deleteButtonHandler }) {
  const orderItems = order.map((orderItem) => {
    const menuItem = items.filter((item) => {
      return item.id === orderItem.id;
    });
    orderItem = { ...orderItem, ...menuItem[0] };
    return (
      <OrderItem
        deleteButtonHandler={deleteButtonHandler}
        orderItem={orderItem}
        key={orderItem.id}
      />
    );
  });
  return (
    <>
      {orderItems}
      <button type="submit" className="order__confirm-button">
        Confirm order
      </button>
    </>
  );
}
