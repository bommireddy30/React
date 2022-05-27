import classes from "./ButtonBox.module.css";
function ButtonBox({ children }) {
  return <div className={classes.buttonBox}>{children}</div>;
}

export default ButtonBox;
