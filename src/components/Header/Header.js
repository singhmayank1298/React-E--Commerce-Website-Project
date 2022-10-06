import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../store/cart-container";
import Button from "./Button";
import "./Header.css";

const Header = (props) => {
  const ctx = useContext(CartContext);
  const TotalItemsArray = ctx.itemsArray;

  let TotalQuantitys = 0;
  for (let i = 0; i < TotalItemsArray.length; i++) {
    TotalQuantitys = TotalQuantitys + Number(TotalItemsArray[i].quantity);
  }

  return (
    <>
      <div className="rrr">
        <div>
          <ul className="vv">
            <NavLink activeClassName="active" to="/home">
              Home
            </NavLink>
            <NavLink activeClassName="active" to="/store">
              Store
            </NavLink>
            <NavLink activeClassName="active" to="/about">
              About
            </NavLink>
          </ul>
          <Button onClick={props.onClick} value={TotalQuantitys}></Button>
        </div>
      </div>
    </>
  );
};

export default Header;
