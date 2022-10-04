import { useContext } from "react";
import CartContext from "../store/cart-container";
import "./CartBox.css";
import CartItemStructure from "./CartItemStructure";
import Card from "../UI/Card";

const CartBox = () => {
  const ctx = useContext(CartContext);
  console.log(ctx);
  return (
    <>
      <Card className="Cart">
        <button className="sdnjsdn">X</button>
        <div>
          <div className="fnidi">
            <h2>Cart</h2>
          </div>

          <div className="dnidf">
            <span className="dnidr">Item</span>
            <span className="dnidr"> Price</span>
            <span className="dnidr">Quantity</span>
          </div>
          {ctx.itemsArray.map((x) => {
            return (
              <CartItemStructure
                item={x.title}
                price={x.price}
                img={x.imageUrl}
                quantity={x.quantity}
              ></CartItemStructure>
            );
          })}
        </div>
        <div className="vnfdf">Total $ 12</div>
        <button className="ndndijdf">Purchase</button>
      </Card>
    </>
  );
};

export default CartBox;
