import "../pages/Menu.css";

export default function MenuItem({ item }) {
  return (
    <div className="menu__item">
      <p>{item.type}</p>
      <p>{item.name}</p>
      <p>{item.description}</p>
      <p>{item.price / 100}</p>
    </div>
  );
}
