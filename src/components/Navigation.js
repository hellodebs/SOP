import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="Navigation__nav">
      <NavLink className="Navigation__navlink" to="/menu">
        Menu
      </NavLink>
      <NavLink className="Navigation__navlink" to="/order">
        Order
      </NavLink>
      <NavLink className="Navigation__navlink" to="/bill">
        Bill
      </NavLink>
      <NavLink className="Navigation__navlink" to="/service">
        Service
      </NavLink>
    </nav>
  );
}
