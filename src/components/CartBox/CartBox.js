import "./CartBox.css";
import CartItemStructure from "./CartItemStructure";
import Card from "../UI/Card";

const CartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const CartBox = () => {
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
          {CartElements.map((x) => {
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
