import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { BiFoodMenu, BiMoney, BiCart } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";

export default function Navigation() {
  return (
    <nav className="Navigation__nav">
      <NavLink
        className="Navigation__navlink"
        activeClassName="Navigation__navlink--active"
        to="/menu"
      >
        <BiFoodMenu className="Navigation__icon" />
      </NavLink>
      <NavLink
        className="Navigation__navlink"
        activeClassName="Navigation__navlink--active"
        to="/order"
      >
        <BiCart className="Navigation__icon" />
      </NavLink>
      <NavLink className="Navigation__navlink" to="/bill">
        <BiMoney className="Navigation__icon" />
      </NavLink>
      <NavLink className="Navigation__navlink" to="/service">
        <IoHelpBuoyOutline className="Navigation__icon" />
      </NavLink>
    </nav>
  );
}
