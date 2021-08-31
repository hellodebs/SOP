import "./App.css";
import {
  Route,
  Switch,
  Redirect,
  useHistory,
  useParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { BiUser } from "react-icons/bi";
import usePersistedState from "./hooks/usePersistedState";
import Menu from "./pages/Menu";
import Order from "./pages/Order.js";
import Bill from "./pages/BillPage.js";
import CheckIn from "./components/CheckIn.js";
import ConfirmServiceText from "./pages/ConfirmServiceText.js";
import ConfirmOrderText from "./pages/ConfirmOrderText";
import ConfirmBillText from "./pages/ConfirmBillText";

import Navigation from "./components/Navigation";
import Div100vh from "react-div-100vh";

function App() {
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = usePersistedState("order", []);
  const [table, setTable] = useState([]);

  let history = useHistory();

  useEffect(() => {
    const url = `/api/menu.json/`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMenu(data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function deleteButtonHandler(id) {
    updateQuantity(id, 0);
  }

  function updateQuantity(itemId, quantity) {
    const filteredOrder = order.filter((orderItem) => {
      return itemId === orderItem.id;
    });
    if (filteredOrder.length === 0) {
      //add item, because id doesnt exist
      const updatedOrder = [
        ...order,
        {
          id: itemId,
          quantity: quantity,
        },
      ];

      setOrder(updatedOrder);
    } else {
      //if id already exists...
      if (quantity === 0) {
        //remove item from list with filter()
        const updatedOrder = order.filter((item) => {
          return itemId !== item.id;
        });
        setOrder(updatedOrder);
      } else {
        //...update quantity
        const updatedOrder = order.map((item) => {
          if (itemId === item.id) {
            item.quantity = quantity;
          }
          return item;
        });
        setOrder(updatedOrder);
      }
    }
  }

  function confirmAlert() {
    if (window.confirm("Would you like to speak to one member of our team?")) {
      history.push("/confirm-service-text");
    }
  }

  function orderButtonHandler() {
    if (window.confirm("Would you like to confirm your order?")) {
      history.push("/confirm-order-text");
      setOrder([]);
    }
  }

  function billButtonHandler() {
    if (window.confirm("Would you like to receive the bill?")) {
      history.push("/confirm-bill-text");
    }
  }

  return (
    <Div100vh className="App">
      <header className="App__header">
        <Switch>
          <Route path="/checkin-tableid">
            <h2 className="App__heading">Check-In Table Id</h2>
          </Route>
          <Route path="/menu">
            <h2 className="App__heading">Menu</h2>
          </Route>
          <Route path="/order">
            <h2 className="App__heading">Order</h2>
          </Route>
          <Route path="/bill">
            <h2 className="App__heading">Bill</h2>
          </Route>
          <Route path="/confirm-service-text">
            <h2 className="App__heading">Service</h2>
          </Route>
          <Route path="/confirm-order-text">
            <h2 className="App__heading">Order confirmed</h2>
          </Route>
          <Route path="/confirm-bill-text">
            <h2 className="App__heading">Bill will be prepared</h2>
          </Route>
          <Route path="/">
            <Redirect to="/menu" />
          </Route>
        </Switch>
      </header>
      <main className="App__main">
        <Switch>
          <Route path="/checkin-tableid">
            <CheckIn />
          </Route>
          <Route path="/menu">
            <Menu order={order} menu={menu} onUpdateQuantity={updateQuantity} />
          </Route>
          <Route path="/order">
            <Order
              order={order}
              menu={menu}
              onDeleteButton={deleteButtonHandler}
              onConfirmButton={orderButtonHandler}
            />
          </Route>
          <Route path="/bill">
            <Bill onConfirmButton={billButtonHandler} />
          </Route>
          <Route path="/confirm-service-text">
            <ConfirmServiceText />
          </Route>
          <Route path="/confirm-order-text">
            <ConfirmOrderText />
          </Route>
          <Route path="/confirm-bill-text">
            <ConfirmBillText />
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
