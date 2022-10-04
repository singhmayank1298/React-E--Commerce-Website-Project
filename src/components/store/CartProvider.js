import { useState } from "react";
import CartContext from "./cart-container";

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

const CartProvider = (props) => {
  const [Products, setProducts] = useState(CartElements);
  const [TotalAmount, setTotalAmount] = useState(false);

  const AddHandeler = (obj) => {
    for (let i = 0; i < Products.length; i++) {
      if (Products[i].id === obj.id) {
        Products[i].quantity++;
        console.log(Products);
        setTotalAmount(!TotalAmount); // it is called toggleing
        return;
      }
    }

    setProducts((OldArray) => {
      return [...OldArray, obj];
    });
  };

  const AllProps = {
    itemsArray: Products,
    Add: AddHandeler,
  };
  console.log(AllProps);
  return (
    <CartContext.Provider value={AllProps}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
