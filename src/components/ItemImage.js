import "./ItemImage.css";

export default function ItemImage({ item }) {
  return (
    <img
      src={`/images/menu/${item.id}.jpg`}
      alt={item.name}
      className="item__image"
    />
  );
}
