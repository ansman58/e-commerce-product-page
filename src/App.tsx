import Screen from "./screen";
import Header from "./components/Header";
import styles from "./App.module.scss";
import clsx from "clsx";

function App() {
  return (
    <div
      className={clsx(
        styles.app,
        "max-w-[70%] min-h-[100vh] mx-auto text-veryDarkBlue"
      )}
    >
      <Header />
      <Screen />
    </div>
  );
}

export default App;
