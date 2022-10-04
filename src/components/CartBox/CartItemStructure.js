import "./CartItemStructure.css";

const CartItemStructure = (props) => {
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
        <button>Remove</button>
      </div>
    </div>
  );
};

export default CartItemStructure;
