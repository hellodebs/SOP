import "./base.css";
import { BiUserCheck } from "react-icons/bi";

export default function ConfirmBillText() {
  return (
    <div className="base__text">
      <p>
        Thank you, we have received your request! We hope you enjoyed your visit
        with us.
        <br />
        Our team will prepare your bill right away.
      </p>
      <BiUserCheck className="base__icon" />
      <p>We are looking forward to welcoming you soon again!</p>
    </div>
  );
}
