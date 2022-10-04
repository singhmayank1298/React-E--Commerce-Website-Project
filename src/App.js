import { useState } from "react";
import Header from "./components/Header/Header";
import Summary from "./components/UI/Summary";
import "./App.css";
import ReactDOM from "react-dom";
import StoreItems from "./components/StoreItems/StoreItems";
import FooterItems from "./components/Footer/FooterItems";
import CartBox from "./components/CartBox/CartBox";

function App() {
  const [CartVisible, setCartVisible] = useState(false);

  const CartVisibleHandeler = () => {
    setCartVisible(() => {
      return true;
    });
  };

  return (
    <div className="body">
      <Header onClick={CartVisibleHandeler}></Header>
      <Summary></Summary>
      <StoreItems></StoreItems>
      <FooterItems></FooterItems>
      {CartVisible === true
        ? ReactDOM.createPortal(
            <CartBox></CartBox>,
            document.getElementById("Cart")
          )
        : ""}
    </div>
  );
}

export default App;
