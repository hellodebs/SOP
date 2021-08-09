import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="App__nav">
      <NavLink className="App__navlink" to="/menu">
        Menu
      </NavLink>
      <NavLink className="App__navlink" to="/order">
        Order
      </NavLink>
      <NavLink className="App__navlink" to="/bill">
        Bill
      </NavLink>
      <NavLink className="App__navlink" to="/service">
        Service
      </NavLink>
    </nav>
  );
}
