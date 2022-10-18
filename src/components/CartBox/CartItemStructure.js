import { useContext } from "react";
import CartContext from "../store/cart-container";
import "./CartItemStructure.css";

const CartItemStructure = (props) => {
  const ctx = useContext(CartContext);

  const itemRemoveFromCartHandler = async () => {
    const response = await fetch(`${ctx.url}/${ctx.email}/${props._id}`, {
      method: "DELETE",
    });

    for (let i = 0; i < ctx.itemsArray.length; i++) {
      if (ctx.itemsArray[i]._id === props._id) {
        const index = ctx.itemsArray.indexOf(ctx.itemsArray[i]);
        ctx.itemsArray.splice(index, 1);
      }
    }

    //ctx.fetchOnLoading();
    ctx.totalAmount();
    console.log(props._id);
  };

  return (
    <div className="sdf">
      <div className="erted">
        <img src={props.img} alt="not fount"></img>
        <span> {props.item}</span>
      </div>
      <div className="jhy">
        <span>{props.price}</span>
      </div>
      <div className="obh">
        <span>{props.quantity}</span>
        <button onClick={itemRemoveFromCartHandler}>Remove</button>
      </div>
    </div>
  );
};

export default CartItemStructure;
