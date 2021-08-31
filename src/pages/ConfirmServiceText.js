import "./base.css";
import { BiUserCheck } from "react-icons/bi";

export default function ConfirmServiceText() {
  return (
    <div className="base__text">
      <p>
        Thank you!
        <br />
        We have received your request.
      </p>

      <p>One member of our Team will be with you shortly!</p>
      <BiUserCheck className="base__icon" />
    </div>
  );
}
