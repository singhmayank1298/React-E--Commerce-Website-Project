import "./Button.css";
import CartIcon from "./CartIcon";

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick} className="ttt">
        <CartIcon></CartIcon>
        {props.value}
      </button>
    </>
  );
};

export default Button;
