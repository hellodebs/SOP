import "./Order.css";
import { BiX } from "react-icons/bi";

export default function Order() {
  return (
    <div className="order__item">
      <p>
        I want dish 1 <BiX />
      </p>

      <p>
        I want dish 2 <BiX />
      </p>

      <p>
        I want dish 3 <BiX />
      </p>

      <p>
        I want dish 4 <BiX />
      </p>

      <p>
        I want dish 5 <BiX />
      </p>

      <p>
        I want dish 6 <BiX />
      </p>

      <p>
        I want dish 7 <BiX />
      </p>

      <p>
        I want dish 8 <BiX />
      </p>

      <p>
        I want dish 9 <BiX />
      </p>

      <button type="submit" className="order__item--button">
        Confirm Order
      </button>
    </div>
  );
}
