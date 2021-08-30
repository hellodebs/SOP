import "./base.css";
import { BiUserCheck } from "react-icons/bi";

export default function ConfirmOrderText() {
  return (
    <div className="base__text">
      <p>
        Thank you for your order!
        <br />
        Your food will be served in the next 20 minutes.
      </p>

      <BiUserCheck className="base__icon" />
      <p>You can always look into your interim bill in our bill section.</p>
    </div>
  );
}
