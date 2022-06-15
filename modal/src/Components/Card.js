import classes from "../Components/Styles/Card.module.css";
function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
