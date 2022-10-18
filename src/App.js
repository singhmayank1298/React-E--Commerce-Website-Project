import React, { Suspense, useContext, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Summary from "./components/UI/Summary";
import "./App.css";
import ReactDOM from "react-dom";
//import StoreItems from "./components/StoreItems/StoreItems";
import FooterItems from "./components/Footer/FooterItems";
import CartContext from "./components/store/cart-container";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const CartBox = React.lazy(() => import("./components/CartBox/CartBox"));
const About = React.lazy(() => import("./components/About/About"));
const Home = React.lazy(() => import("./components/Home/Home"));
const StoreItems = React.lazy(() =>
  import("./components/StoreItems/StoreItems")
);
const Contact = React.lazy(() => import("./components/Contact/Contect"));
const ProductDetailPage = React.lazy(() =>
  import("./components/ProductDetailPage/ProductDetailPage")
);
const Login = React.lazy(() => import("./components/Login/Login"));

function App() {
  const [CartVisible, setCartVisible] = useState(false);
  const ctx = useContext(CartContext);

  const CartVisibleHandeler = () => {
    setCartVisible(!CartVisible);
  };
  console.log(ctx.itemsArray);
  return (
    <div className="body">
      <Header onClick={CartVisibleHandeler}></Header>
      <Summary></Summary>
      <Suspense
        fallback={
          <div className="centereds">
            <LoadingSpinner></LoadingSpinner>
          </div>
        }
      >
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
              <CartBox closeCart={CartVisibleHandeler}></CartBox>,
              document.getElementById("Cart")
            )
          : ""}
      </Suspense>
    </div>
  );
}

export default App;
