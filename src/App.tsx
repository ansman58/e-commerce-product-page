import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Screen from "./screen";
import Header from "./components/Header";

function App() {
  return (
    <div className="max-w-[70%] min-h-[100vh] mx-auto text-veryDarkBlue ">
      <Header />
      <Screen />
    </div>
  );
}

export default App;
