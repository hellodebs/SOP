import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import Menu from "./pages/Menu";
import Order from "./pages/Order.js";
import Bill from "./pages/Bill.js";
import Service from "./pages/Service.js";
import Navigation from "./components/Navigation";
import Div100vh from "react-div-100vh";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = "/api/menu.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.items = data.items.map((item) => {
          item.quantity = 0;
          return item;
        });
        setItems(data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function deleteButtonHandler(id) {
    updateItemQuantity(id, 0);
  }

  function updateItemQuantity(itemId, quantity) {
    const updatedItems = items.map((item) => {
      if (itemId === item.id) {
        item.quantity = quantity;
      }
      return item;
    });
    setItems(updatedItems);
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
            <Menu items={items} updateItemQuantity={updateItemQuantity} />
          </Route>
          <Route path="/order">
            <Order items={items} deleteButtonHandler={deleteButtonHandler} />
          </Route>
          <Route path="/bill">
            <Bill />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
        </Switch>
      </main>
      <footer className="App__footer">
        <Navigation />
      </footer>
    </Div100vh>
  );
}

export default App;
