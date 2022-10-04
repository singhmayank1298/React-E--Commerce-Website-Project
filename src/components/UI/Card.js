import "./Card.css";

const Card = (props) => {
  const classes = "cards " + props.className; // this line is importent space aafter card
  return <div className={classes}>{props.children}</div>;
};

export default Card;
