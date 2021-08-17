import OrderItem from "../components/OrderItem";

export default function Order({ items, order }) {
  return order.map((orderItem) => {
    const menuItem = items.filter((item) => {
      return item.id === orderItem.id;
    });
    orderItem = { ...orderItem, ...menuItem[0] };
    return <OrderItem orderItem={orderItem} key={orderItem.id} />;
  });
}
