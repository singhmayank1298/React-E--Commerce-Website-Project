import "./AddItemButton.css";

const AddItemButton = (props) => {
  return (
    <>
      <div className="df">
        <button>{props.value}</button>
      </div>
    </>
  );
};

export default AddItemButton;
