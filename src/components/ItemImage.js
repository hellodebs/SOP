import "./ItemImage.css";

export default function ItemImage({ item }) {
  const imageStyle = {
    backgroundImage: `url(/images/menu/${item.id}.jpg)`,
  };
  return <div className="item__image" style={imageStyle}></div>;
}
