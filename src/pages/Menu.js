// import { useEffect, useState } from "react";
import MenuItem from "../components/MenuItem";

export default function Menu({ items, addItems }) {
  return items.map((item) => {
    return <MenuItem key={item.id} item={item} />;
  });
}
