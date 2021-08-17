import OrderItem from "../components/OrderItem";

export default function Order({ items, order, deleteButtonHandler }) {
  return order.map((orderItem) => {
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
}
