import { Fragment, useState } from "react";
import "./App.css";
import Button from "./Components/Buttons";
import Card from "./Components/Card";
import Display from "./Components/Display";

function App() {
  const [value, setValue] = useState(0);
  const [reset, setReset] = useState(true);
  const incrementHandler = () => {
    setValue(value + 1);
    setReset(false);
  };

  const decrementHandler = () => {
    setValue(value - 1);
    setReset(false);
  };

  const resetHandler = () => {
    setValue(0);
    setReset(true);
  };

  return (
    <Fragment>
      <Card>
        <div className="container">
          <Display value={reset ? 0 : value}></Display>
        </div>
        <div className="container">
          <Button
            incrementHandler={incrementHandler}
            decrementHandler={decrementHandler}
            resetHandler={resetHandler}
          ></Button>
        </div>
      </Card>
    </Fragment>
  );
}

export default App;
