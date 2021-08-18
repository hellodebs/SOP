import OrderItem from "../components/OrderItem";
import "./Order.css";

export default function Order({ items, order, deleteButtonHandler }) {
  let total = 0;
  const orderItems = order.map((orderItem) => {
    const menuItem = items.filter((item) => {
      return item.id === orderItem.id;
    });
    orderItem = { ...orderItem, ...menuItem[0] };
    total = total + orderItem.price * orderItem.quantity;
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
        Confirm order ({total / 100} €)
      </button>
    </>
  );
}
