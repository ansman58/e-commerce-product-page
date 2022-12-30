import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Screen from "./screen";
import Header from "./components/Header";
import { OrdersContext } from "./store/contexts";

function App() {
  const [noOfOrders, setNoOfOrders] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const PRODUCT_PRICE = 125;
  const PRODUCT_NAME = "Fall Limited Edition Sneakers";

  const onAddToCart = () => {
    setTotalPrice(PRODUCT_PRICE * noOfOrders);
  };

  return (
    <div className="max-w-[70%] min-h-[100vh] mx-auto text-veryDarkBlue ">
      <OrdersContext.Provider
        value={{
          noOfOrders,
          setNoOfOrders,
          totalPrice,
          name: PRODUCT_NAME,
          price: PRODUCT_PRICE,
        }}
      >
        <Header />
        <Screen setTotalPrice={setTotalPrice} onAddToCart={onAddToCart} />
      </OrdersContext.Provider>
    </div>
  );
}

export default App;
