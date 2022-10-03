import "./Button.css";
import CartIcon from "./CartIcon";

const Button = (props) => {
  return (
    <>
      <button className="ttt">
        <CartIcon></CartIcon>
        {props.value}
      </button>
    </>
  );
};

export default Button;
