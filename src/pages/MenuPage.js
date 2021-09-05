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
      itemTypeHeader = (
        <div className="menupage__item-type">
          <h2>{item.type}</h2>
        </div>
      );
    }
    return (
      <div key={item.id}>
        {itemTypeHeader ?? null}
        <MenuItem item={item} onUpdateQuantity={updateQuantity} />
      </div>
    );
  });
}
