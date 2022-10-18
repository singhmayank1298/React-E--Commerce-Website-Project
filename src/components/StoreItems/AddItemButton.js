import { useContext } from "react";
import "./AddItemButton.css";
import CartContext from "../store/cart-container";

const AddItemButton = (props) => {
  const ctx = useContext(CartContext);

  const AddItemsHandeler = () => {
    const obj = {
      title: props.title,
      price: props.price,
      imageUrl: props.img,
      quantity: Number(1),
      id: props.id,
    };
    ctx.Add(obj);
    console.log(obj);
  };

  return (
    <>
      <div className="df">
        <button onClick={AddItemsHandeler}>{props.value}</button>
      </div>
    </>
  );
};

export default AddItemButton;
