import "./Items.css";
import AddItemButton from "./AddItemButton.js";

const Items = (props) => {
  return (
    <div className="lkl">
      <div className="opo">
        <div>
          <div>
            <h2>{props.title}</h2>
            <img src={props.img} alt="not found"></img>
            <p>$ {props.price}</p>
            <AddItemButton
              title={props.title}
              price={props.price}
              img={props.img}
              id={props.id}
              value={"Add Item"}
            ></AddItemButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
