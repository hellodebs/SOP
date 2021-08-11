import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { BiFoodMenu, BiMoney, BiCart } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";

export default function Navigation() {
  return (
    <nav className="Navigation__nav">
      <NavLink className="Navigation__navlink" to="/menu">
        <BiFoodMenu />
      </NavLink>
      <NavLink className="Navigation__navlink" to="/order">
        <BiCart />
      </NavLink>
      <NavLink className="Navigation__navlink" to="/bill">
        <BiMoney />
      </NavLink>
      <NavLink className="Navigation__navlink" to="/service">
        <IoHelpBuoyOutline />
      </NavLink>
    </nav>
  );
}
