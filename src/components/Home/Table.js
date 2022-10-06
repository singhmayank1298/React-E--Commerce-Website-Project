import "./Table.css";
const Table = (props) => {
  return (
    <>
      <div className="nkfdmvi">
        <div>{props.date}</div>
        <div>{props.location}</div>
        <div>{props.area}</div>
        <button>{props.buttonText}</button>
      </div>
    </>
  );
};

export default Table;
