import "./App.css";
import { Route, NavLink } from "react-router-dom";
import Menu from "./components/Menu";
import Order from "./components/Order.js";
import Bill from "./components/Bill.js";
import Service from "./components/Service.js";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/bill">
          <Bill />
        </Route>
        <Route path="/service">
          <Service />
        </Route>
      </header>
      <main className="main">
        <p>blabla</p>
      </main>
      <footer className="footer">
        <nav className="nav">
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/order">Order</NavLink>
          <NavLink to="/bill">Bill</NavLink>
          <NavLink to="/service">Service</NavLink>
        </nav>
      </footer>
    </div>
  );
}

export default App;
