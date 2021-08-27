import Bill from "../components/Bill";
import { useEffect, useState } from "react";

export default function BillPage() {
  const [bill, setBill] = useState({});

  const total = bill.items
    ?.reduce(
      (previousValue, currentValue) =>
        previousValue + (currentValue.price / 100) * currentValue.quantity,
      0
    )
    .toFixed(2);

  useEffect(() => {
    const url = "/api/bill.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBill(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const billItems = bill.items?.map((item) => {
    return <Bill key={item.id} item={item} />;
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
          {bill.id}
          {bill.date}
          {bill.time}
        </p>
        {billItems}
        <div className="bill__item--total">
          <h2>{total}</h2>
        </div>
      </section>
      <button type="submit" className="bill__confirm-button">
        I want to pay please
      </button>
    </>
  );
}
