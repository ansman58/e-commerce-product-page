import { useState } from "react";
import Screen from "./screen";
import Header from "./components/Header";
import { OrdersContext } from "./store/contexts";
import styles from "./App.module.scss";
import clsx from "clsx";
function App() {
  const [noOfOrders, setNoOfOrders] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [ordersInCart, setOrdersInCart] = useState(0);
  const [cartIsEmpty, setCartIsEmpty] = useState(true);
  const PRODUCT_PRICE = 125;
  const PRODUCT_NAME = "Fall Limited Edition Sneakers";

  const onAddToCart = () => {
    setOrdersInCart(noOfOrders);
    setTotalPrice(PRODUCT_PRICE * noOfOrders);
    if (noOfOrders > 0) {
      setCartIsEmpty(false);
    }
  };

  return (
    <div
      className={clsx(
        styles.app,
        "max-w-[70%] min-h-[100vh] mx-auto text-veryDarkBlue"
      )}
    >
      <OrdersContext.Provider
        value={{
          noOfOrders,
          setNoOfOrders,
          totalPrice,
          name: PRODUCT_NAME,
          price: PRODUCT_PRICE,
          cartIsEmpty,
          setCartIsEmpty,
          ordersInCart,
          setOrdersInCart,
        }}
      >
        <Header />
        <Screen setTotalPrice={setTotalPrice} onAddToCart={onAddToCart} />
      </OrdersContext.Provider>
    </div>
  );
}

export default App;
