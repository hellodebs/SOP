import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Menu from "./pages/Menu";
import Order from "./pages/Order.js";
import Bill from "./pages/Bill.js";
import Service from "./pages/Service.js";
import Navigation from "./components/Navigation";

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
        <Navigation />
      </footer>
    </div>
  );
}

export default App;
