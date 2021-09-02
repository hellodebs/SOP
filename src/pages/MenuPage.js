import MenuItem from "../components/MenuItem";

export default function Menu({
  menu,
  order,
  onUpdateQuantity: updateQuantity,
}) {
  return menu.map((item) => {
    const filteredOrderItem = order.filter((orderItem) => {
      return orderItem.id === item.id;
    });
    if (filteredOrderItem.length > 0) {
      item.quantity = filteredOrderItem[0].quantity;
    } else {
      item.quantity = 0;
    }

    return (
      <MenuItem key={item.id} item={item} onUpdateQuantity={updateQuantity} />
    );
  });
}
