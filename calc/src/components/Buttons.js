import classes from "./Buttons.module.css";

function Buttons(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Buttons;
