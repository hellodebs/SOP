export default function OrderItem({ orderItem }) {
  return (
    <div className="order__item">
      <p>Id: {orderItem.id}</p>
      <p>Quantity: {orderItem.quantity}</p>
    </div>
  );
}
