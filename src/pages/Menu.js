import { useEffect, useState } from "react";
import MenuItem from "../components/MenuItem";

export default function Menu() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = "/api/menu.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      {items.map((item) => {
        return <MenuItem key={item.id} item={item} />;
      })}
    </>
  );
}
