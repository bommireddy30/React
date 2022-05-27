import { Textfit } from "react-textfit";

import classes from "./Screen.module.css";

function Screen(props) {
  return (
    <Textfit className={classes.screen} mode="single" max={70}>
      {props.value}
    </Textfit>
  );
}

export default Screen;
