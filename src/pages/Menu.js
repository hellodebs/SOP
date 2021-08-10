import { useEffect } from "react";

export default function Menu() {
  useEffect(() => {
    const url = "/api/menu.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });
  return <></>;
}
