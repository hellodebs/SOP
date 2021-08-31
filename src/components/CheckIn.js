import { useParams, useHistory } from "react-router";
import { useEffect } from "react";

export default function CheckIn({ updateTableId }) {
  let history = useHistory();
  const { tableId } = useParams();
  useEffect(() => {
    updateTableId(tableId);
    history.push("/menu");
    console.log("Was geht");
  });
  return <p></p>;
}
