import "./App.css";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Menu from "./components/Menu";
import Order from "./components/Order.js";
import Bill from "./components/Bill.js";
import Service from "./components/Service.js";

function App() {
  return (
    <div className="App">
      <header className="App__header">
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
          <Route path="/">
            <Redirect to="/menu" />
          </Route>
        </Switch>
      </header>
      <main className="App__main">
        <p>Content example 1</p>
        <p>Content example 2</p>
        <p>Content example 3</p>
        <p>Content example 4</p>
        <p>Content example 5</p>
        <p>Content example 6</p>
      </main>
      <footer className="App__footer">
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
      </footer>
    </div>
  );
}

export default App;
