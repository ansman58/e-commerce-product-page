import { useState } from "react";
import Screen from "./screen";
import Header from "./components/Header";
import { OrdersContext } from "./store/contexts";
import styles from "./App.module.scss";
import clsx from "clsx";
function App() {
  const PRODUCT_PRICE = 125;
  const PRODUCT_NAME = "Fall Limited Edition Sneakers";

  return (
    <div
      className={clsx(
        styles.app,
        "max-w-[70%] min-h-[100vh] mx-auto text-veryDarkBlue"
      )}
    >
      <OrdersContext.Provider
        value={{
          name: PRODUCT_NAME,
          price: PRODUCT_PRICE,
        }}
      >
        <Header />
        <Screen />
      </OrdersContext.Provider>
    </div>
  );
}

export default App;
