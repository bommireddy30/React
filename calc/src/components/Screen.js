// import { Textfit } from "react-textfit";

import classes from "./Screen.module.css";

function Screen(props) {
  return (
    <div className={classes.screen} mode="single" max={70}>
      {props.value}
    </div>
  );
}

export default Screen;
