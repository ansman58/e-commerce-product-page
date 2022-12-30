import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Screen from "./screen";
import Header from "./components/Header";
import { OrdersContext } from "./store/contexts";

function App() {
  const [noOfOrders, setNoOfOrders] = useState(0);

  return (
    <div className="max-w-[70%] min-h-[100vh] mx-auto text-veryDarkBlue ">
      <OrdersContext.Provider value={{ noOfOrders, setNoOfOrders }}>
        <Header />
        <Screen />
      </OrdersContext.Provider>
    </div>
  );
}

export default App;
