import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { BiFoodMenu, BiMoney, BiCart } from "react-icons/bi";

export default function Navigation() {
  return (
    <nav className="navigation__nav">
      <NavLink
        className="navigation__navlink"
        activeClassName="navigation__navlink--active"
        to="/menu"
      >
        <BiFoodMenu className="navigation__icon" />
      </NavLink>
      <NavLink
        className="navigation__navlink"
        activeClassName="navigation__navlink--active"
        to="/order"
      >
        <BiCart className="navigation__icon" />
      </NavLink>
      <NavLink
        className="navigation__navlink"
        activeClassName="navigation__navlink--active"
        to="/bill"
      >
        <BiMoney className="navigation__icon" />
      </NavLink>
      <NavLink
        className="navigation__navlink navigation__service"
        activeClassName="navigation__navlink--active"
        to="/service"
      ></NavLink>
    </nav>
  );
}
