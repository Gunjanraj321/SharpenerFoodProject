import Header from "./components/Layout/Header.js";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart.js";
import { useState } from "react";

function App() {
  const [cartIsShown, SetCartIsShown] = useState(false);

  const ShowCartHandler = () => {
    SetCartIsShown(true);
  }

  const HideCartHandler = () => {
    SetCartIsShown(false);
  }

  return (
    <>
      {cartIsShown && <Cart onClose={HideCartHandler} />}
      <Header onShowCart={ShowCartHandler} />
      <main>
      <Meals />
      </main>
      
    </>
  );
}

export default App;
