import Card from "./Card";
import classes from "../Components/Styles/Modal.module.css";
import ReactDOM from "react-dom";

function Modal(props) {
  return ReactDOM.createPortal(
    <div className={classes.modal} onClick={props.onClickHandler}>
      <Card>
        <h1 className={classes.content}>This is a Modal</h1>
        <p className={classes.content}>We are here creating a Modal</p>
      </Card>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
