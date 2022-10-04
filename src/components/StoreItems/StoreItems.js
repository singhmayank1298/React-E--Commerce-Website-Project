import "./StoreItems.css";
import Items from "./Items.js";
import ItemsHeader from "./ItemsHeader";
const ProductsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    id: "1",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    id: "2",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    id: "3",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    id: "4",
  },
  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    id: "5",
  },
];

const StoreItems = () => {
  return (
    <>
      <ItemsHeader></ItemsHeader>
      <div className="aman">
        {ProductsArr.map((x) => {
          return (
            <Items
              title={x.title}
              price={x.price}
              img={x.imageUrl}
              id={x.id}
            ></Items>
          );
        })}
      </div>
    </>
  );
};

export default StoreItems;
