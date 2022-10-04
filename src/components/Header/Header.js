import { useContext } from "react";
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
            <span>Home</span>
            <span>Store</span>
            <span>About</span>
          </ul>
          <Button onClick={props.onClick} value={TotalQuantitys}></Button>
        </div>
      </div>
    </>
  );
};

export default Header;
