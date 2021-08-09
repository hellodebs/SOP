import "./App.css";
import { Route, NavLink, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import Order from "./components/Order.js";
import Bill from "./components/Bill.js";
import Service from "./components/Service.js";

function App() {
  return (
    <div className="App">
      <header className="app__header">
        <Switch>
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
        </Switch>
      </header>
      <main className="app__main">
        <p>blabla</p>
      </main>
      <footer className="app__footer">
        <nav className="app__nav">
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
