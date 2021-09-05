import "./App.css";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { BiUser } from "react-icons/bi";
import usePersistedState from "./hooks/usePersistedState";
import MenuPage from "./pages/MenuPage";
import OrderPage from "./pages/OrderPage.js";
import BillPage from "./pages/BillPage.js";
import CheckIn from "./components/CheckIn.js";
import ConfirmServiceText from "./pages/ConfirmServiceText.js";
import ConfirmOrderText from "./pages/ConfirmOrderText";
import ConfirmBillText from "./pages/ConfirmBillText";
import Navigation from "./components/Navigation";
import Div100vh from "react-div-100vh";

function App() {
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = usePersistedState("order", []);
  const [tableId, setTableId] = usePersistedState("table", 0);
  const [bill, setBill] = useState({
    items: [],
  });

  let history = useHistory();

  useEffect(() => {
    const url = `/api/menu.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMenu(data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const url = "/api/bill.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBill(data);
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

  function updateTableId(id) {
    setTableId(id);
  }

  function confirmAlert() {
    if (window.confirm("Would you like to speak to one member of our team?")) {
      history.push("/confirm-service-text");
    }
  }

  function orderButtonHandler() {
    if (window.confirm("Would you like to confirm your order?")) {
      history.push("/confirm-order-text");
      let updatedBill = bill;
      //Receive order
      //I look at each order item
      order.forEach((orderItem) => {
        //check on my bill, whether item already exists or not with filter method.
        const billItemIndex = bill.items.findIndex((billItem) => {
          return orderItem.id === billItem.id;
        });

        if (billItemIndex > -1) {
          //If item exsists already, I update the quantity
          updatedBill.items[billItemIndex].quantity =
            updatedBill.items[billItemIndex].quantity + orderItem.quantity;
        } else {
          const filteredMenuItem = menu.filter((item) => {
            return orderItem.id === item.id;
          });
          orderItem = {
            ...filteredMenuItem[0],
            ...orderItem,
          };
          //if item doesnt exsist yet, I add the new orderitem.
          updatedBill.items = [
            ...updatedBill.items,
            {
              id: orderItem.id,
              quantity: orderItem.quantity,
              name: orderItem.name,
              price: orderItem.price,
            },
          ];
        }
      });
      setBill(updatedBill);
      setOrder([]);
    }
  }

  function billButtonHandler() {
    if (window.confirm("Would you like to receive the bill?")) {
      history.push("/confirm-bill-text");
      let updatedBill = bill;
      updatedBill.items = [];
      setBill(updatedBill);
    }
  }

  return (
    <Div100vh className="App">
      <header className="App__header">
        <Switch>
          <Route path="/checkin/:tableId">
            <h2 className="App__heading">Check In</h2>
          </Route>
          <Route path="/menu">
            <h2 className="App__heading">Menu</h2>
          </Route>
          <Route path="/order">
            <h2 className="App__heading">Order from table {tableId}</h2>
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
          <Route path="/checkin/:tableId">
            <CheckIn updateTableId={updateTableId} />
          </Route>
          <Route path="/menu">
            <MenuPage
              order={order}
              menu={menu}
              onUpdateQuantity={updateQuantity}
            />
          </Route>
          <Route path="/order">
            <OrderPage
              order={order}
              menu={menu}
              onDeleteButton={deleteButtonHandler}
              onConfirmButton={orderButtonHandler}
            />
          </Route>
          <Route path="/bill">
            <BillPage
              onConfirmButton={billButtonHandler}
              bill={bill}
              tableId={tableId}
            />
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
