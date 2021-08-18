import MenuItem from "../components/MenuItem";

export default function Menu({ items, updateItemQuantity }) {
  return items.map((item) => {
    return (
      <MenuItem
        key={item.id}
        item={item}
        updateItemQuantity={updateItemQuantity}
      />
    );
  });
}
