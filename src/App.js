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
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const url = "/api/menu.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data.items))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function deleteButtonHandler(id) {
    const deletedItems = order.filter((deletedItem) => {
      return id !== deletedItem.id;
    });
    setOrder(deletedItems);
  }

  function updateItemQuantity(itemId, quantity) {
    const filteredOrder = order.filter((orderItem) => {
      return itemId === orderItem.id;
    });
    if (filteredOrder.length === 0) {
      //add item, because Id doesnt exist in order
      const updatedOrder = order;
      updatedOrder.push({
        id: itemId,
        quantity: quantity,
      });
      setOrder(updatedOrder);
    } else {
      //itemId exists in order already, so quantity can be updated
      const updatedOrder = order.map((orderItem) => {
        if (itemId === orderItem.id) {
          orderItem.quantity = quantity;
        }
        return orderItem;
      });
      //remove item from order page if quantity was set to 0
      if (quantity === 0) {
      }
      setOrder(updatedOrder);
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
            <Menu items={items} updateItemQuantity={updateItemQuantity} />
          </Route>
          <Route path="/order">
            <Order
              items={items}
              deleteButtonHandler={deleteButtonHandler}
              order={order}
            />
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
