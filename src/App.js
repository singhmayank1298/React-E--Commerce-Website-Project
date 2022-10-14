import React, { useContext, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Summary from "./components/UI/Summary";
import "./App.css";
import ReactDOM from "react-dom";
import StoreItems from "./components/StoreItems/StoreItems";
import FooterItems from "./components/Footer/FooterItems";
import CartBox from "./components/CartBox/CartBox";
import CartProvider from "./components/store/CartProvider";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contect";
import ProductDetailPage from "./components/ProductDetailPage/ProductDetailPage";
import Login from "./components/Login/Login";
import CartContext from "./components/store/cart-container";

function App() {
  const [CartVisible, setCartVisible] = useState(false);
  const ctx = useContext(CartContext);

  const CartVisibleHandeler = () => {
    setCartVisible(() => {
      return true;
    });
  };

  return (
    <div className="body">
      <Header onClick={CartVisibleHandeler}></Header>
      <Summary></Summary>
      <Switch>
        <Route path="/about">
          <About></About>
        </Route>

        <Route path="/home">
          <Home></Home>
        </Route>

        {ctx.userIsLogin && (
          <Route path="/store" exact>
            <StoreItems></StoreItems>
          </Route>
        )}

        <Route path="/contact">
          <Contact></Contact>
        </Route>

        <Route path="/product">
          <ProductDetailPage></ProductDetailPage>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/*">
          <Redirect to="login"></Redirect>
        </Route>
      </Switch>

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
