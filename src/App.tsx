import React from "react";
import clsx from "clsx";
import Screen from "./screen";
import Header from "./components/Header";
import styles from "./App.module.scss";
import { NUM_OF_ORDERS, TOTAL_PRICE } from "./constants";

function App() {
  const initialNumOfItems = Number(localStorage.getItem(NUM_OF_ORDERS));

  const initialTotalAmount = Number(localStorage.getItem(TOTAL_PRICE));

  const [noOfOrders, setNoOfOrders] = React.useState(initialNumOfItems);
  const [totalPrice, setTotalPrice] = React.useState(initialTotalAmount);
  return (
    <div
      className={clsx(
        styles.app,
        "max-w-[70%] min-h-[100vh] mx-auto text-veryDarkBlue"
      )}
    >
      <Header noOfOrders={noOfOrders} totalPrice={totalPrice} />
      <Screen
        noOfOrders={noOfOrders}
        setNoOfOrders={setNoOfOrders}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />
    </div>
  );
}

export default App;
