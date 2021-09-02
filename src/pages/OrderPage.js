import OrderItem from "../components/OrderItem";

import "../components/OrderItem.css";

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

      {/* After clicking confirm, I want the Order page to be empty but the billPage to be updated. A confirmatino text should also appear.  */}

      <button
        type="submit"
        className="order__confirm-button"
        onClick={confirmOrderButton}
      >
        Confirm order (Total: {(total / 100).toFixed(2)} €)
      </button>
    </>
  );
}
