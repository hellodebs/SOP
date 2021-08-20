import MenuItem from "../components/MenuItem";

export default function Menu({ menuItems, onUpdateQuantity: updateQuantity }) {
  return menuItems.map((item) => {
    return (
      <MenuItem key={item.id} item={item} onUpdateQuantity={updateQuantity} />
    );
  });
}
