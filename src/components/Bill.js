import "./Bill.css";

export default function Bill({ item }) {
  const totalPrice = ((item.quantity * item.price) / 100).toFixed(2);
  const singlePrice = (item.price / 100).toFixed(2);
  return (
    <div className="bill__item--container">
      <h5>{item.name}</h5>
      <span className="bill__item--price">{totalPrice} €</span>
      <span className="bill__item--singleprice">
        {item.quantity} x {singlePrice} €
      </span>
    </div>
  );
}
