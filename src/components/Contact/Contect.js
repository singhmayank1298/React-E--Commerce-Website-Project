import { useContext } from "react";
import CartContext from "../store/cart-container";
import "./Contact.css";
import ContactInput from "./ContactInput";

const Contact = (props) => {
  const ctx = useContext(CartContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const UserDetail = {
      Name: e.target[0].value,
      Email: e.target[1].value,
      Phone: e.target[2].value,
    };
    ctx.Contact(UserDetail);
    console.log(e);
  };

  return (
    <form onSubmit={submitHandler} className="dcdsmk">
      <ContactInput
        Name={"Name"}
        Phone={"Phone Number"}
        Email={"Email id"}
        input1={{ id: "1", type: "text" }}
        input2={{ id: "1", type: "email" }}
        input3={{ id: "1", type: "number" }}
      ></ContactInput>
    </form>
  );
};

export default Contact;
