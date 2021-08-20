import OrderItem from "../components/OrderItem";
import "./Order.css";

export default function Order({ items, onDeleteButton: deleteItem }) {
  let total = 0;
  let orderItems = items.filter((item) => {
    return item.quantity > 0;
  });
  orderItems = orderItems.map((orderItem) => {
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
      <button type="submit" className="order__confirm-button">
        Confirm order (Total: {total / 100} €)
      </button>
    </>
  );
}
