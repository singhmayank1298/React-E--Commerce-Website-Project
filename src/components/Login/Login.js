import { useRef } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import CartContext from "../store/cart-container";
import classes from "./Login.module.css";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const ctx = useContext(CartContext);

  const history = useHistory();

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAZWnWVqZsnQYcTMGxbHuzjB87AyJACNb4",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok === false) {
        const data = await response.json();
        throw new Error(data.error.message);
      }

      if (response.ok === true) {
        const data = await response.json();
        history.replace("/store");
        ctx.login(data.idToken, data.email);

        console.log(data);
      }
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };
  return (
    <div className={classes.bkijuno}>
      <div>
        <form onSubmit={loginSubmitHandler} className={classes.dsniu}>
          <div className={classes.control}>
            <label>Email</label>
            <input ref={emailRef}></input>
          </div>
          <div className={classes.control}>
            <label>Password</label>
            <input type="number" ref={passwordRef}></input>
          </div>
          <button className={classes.bu} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
