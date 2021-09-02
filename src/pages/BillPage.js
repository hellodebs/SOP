import BillItem from "../components/BillItem.js";

export default function BillPage({
  bill,
  onConfirmButton: confirmBillButton,
  tableId,
}) {
  const total = bill.items
    ?.reduce(
      (previousValue, currentValue) =>
        previousValue + (currentValue.price / 100) * currentValue.quantity,
      0
    )
    .toFixed(2);

  const billItems = bill.items?.map((item) => {
    return <BillItem key={item.id} item={item} />;
  });

  return (
    <>
      <section className="bill__item">
        <h3>{bill.name}</h3>
        <h4>
          {bill.streetname}
          <br />
          {bill.postalcode}
        </h4>
        <p>
          Table {tableId}
          <br />
          Receipt{bill.id}
          <br />
          Date: {bill.date} Time: {bill.time}
        </p>
        {billItems}

        <div className="bill__item--total">
          <h2>Total: {total}</h2>
        </div>
      </section>
      <button
        onClick={confirmBillButton}
        type="submit"
        className="bill__confirm-button"
      >
        I want to pay please
      </button>
    </>
  );
}
