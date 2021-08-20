import "./App.css";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { BiUser } from "react-icons/bi";
import Menu from "./pages/Menu";
import Order from "./pages/Order.js";
import Bill from "./pages/Bill.js";
import Service from "./pages/Service.js";
import Navigation from "./components/Navigation";
import Div100vh from "react-div-100vh";

function App() {
  const [menuItems, setMenuItems] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const url = "/api/menu.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.items = data.items.map((item) => {
          item.quantity = 0;
          return item;
        });
        setMenuItems(data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function deleteButtonHandler(id) {
    updateQuantity(id, 0);
  }

  function updateQuantity(itemId, quantity) {
    const updatedItems = menuItems.map((item) => {
      if (itemId === item.id) {
        item.quantity = quantity;
      }
      return item;
    });
    setMenuItems(updatedItems);
  }

  function confirmAlert() {
    if (window.confirm("Would you like to speak to one member of our team?")) {
      history.push("/service");
    }
  }

  return (
    <Div100vh className="App">
      <header className="App__header">
        <Switch>
          <Route path="/menu">
            <h2 className="App__heading">Menu</h2>
          </Route>
          <Route path="/order">
            <h2 className="App__heading">Order</h2>
          </Route>
          <Route path="/bill">
            <h2 className="App__heading">Bill</h2>
          </Route>
          <Route path="/service">
            <h2 className="App__heading">Service</h2>
          </Route>
          <Route path="/">
            <Redirect to="/menu" />
          </Route>
        </Switch>
      </header>
      <main className="App__main">
        <Switch>
          <Route path="/menu">
            <Menu menuItems={menuItems} onUpdateQuantity={updateQuantity} />
          </Route>
          <Route path="/order">
            <Order menuItems={menuItems} onDeleteButton={deleteButtonHandler} />
          </Route>
          <Route path="/bill">
            <Bill />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
        </Switch>
        <button onClick={confirmAlert} className="navigation__button">
          <BiUser className="App__service--icon" />
        </button>
      </main>
      <footer className="App__footer">
        <Navigation />
      </footer>
    </Div100vh>
  );
}

export default App;
