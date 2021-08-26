import Bill from "../components/Bill";
import { useEffect, useState } from "react";

export default function BillPage() {
  const [bill, setBill] = useState({});

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
        <h3>Name of Restaurant</h3>
        <h4>Nameofstr. 1</h4>
        <h4>12345 City</h4>
        <p>#receiptnumber 01.01.2022 21:53h</p>
        {billItems}
        <div className="bill__item--total">
          <h2>TOTAL: 102.80 € </h2>
        </div>
      </section>
      <button type="submit" className="bill__confirm-button">
        I want to pay please
      </button>
      ;
    </>
  );
}
