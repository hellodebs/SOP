import MenuItem from "../components/MenuItem";

export default function Menu({
  menu,
  order,
  onUpdateQuantity: updateQuantity,
}) {
  return menu.map((item, index) => {
    const filteredOrderItem = order.filter((orderItem) => {
      return orderItem.id === item.id;
    });
    if (filteredOrderItem.length > 0) {
      item.quantity = filteredOrderItem[0].quantity;
    } else {
      item.quantity = 0;
    }
    let itemTypeHeader = null;
    if (index === 0 || menu[index - 1].type !== item.type) {
      itemTypeHeader = <h3 className="menu__item--type">{item.type}</h3>;
    }
    return (
      <>
        {itemTypeHeader ?? null}
        <MenuItem key={item.id} item={item} onUpdateQuantity={updateQuantity} />
      </>
    );
  });
}
