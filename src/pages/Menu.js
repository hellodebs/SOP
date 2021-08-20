import MenuItem from "../components/MenuItem";

export default function Menu({ items, onUpdateQuantity: updateQuantity }) {
  return items.map((item) => {
    return (
      <MenuItem key={item.id} item={item} onUpdateQuantity={updateQuantity} />
    );
  });
}
