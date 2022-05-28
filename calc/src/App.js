import { useEffect, useState } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Buttons from "./components/Buttons";

const btnValues = [
  ["C", "-+", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  const [isPositive, setIsPositive] = useState(false);
  const [prevValue, setPrevValue] = useState("");
  const [curValue, setCurValue] = useState("");
  const [res, setRes] = useState("0");
  const [sign, setSign] = useState(null);

  const signHandler = (hitReceived) => {
    if (curValue) {
      setSign(hitReceived);
    }
  };

  const inputNumberHandler = (valueReceived) => {
    if (!sign) {
      setPrevValue(prevValue + valueReceived);
    } else {
      setCurValue(curValue + valueReceived);
    }
  };

  useEffect(() => {
    if (!sign) {
      setPrevValue(-1 * Number(prevValue));
    } else {
      setCurValue(-1 * Number(curValue));
    }
  }, [isPositive]);

  const equalsHandler = (hitReceived) => {};
  const clearScreenHandler = () => {
    console.log("Hello You are in ClearScreenHandler");
  };

  const buttonClickHandler = (e) => {
    const typed = e.target.innerHTML;
    console.log(typeof typed, isNaN(typed), typed);
    if (!isNaN(typed)) {
      inputNumberHandler(typed);
    } else if (
      typed === "%" ||
      typed === "/" ||
      typed === "X" ||
      typed === "+" ||
      typed === "-"
    ) {
      signHandler(typed);
    } else if (typed === "-+") {
      setIsPositive(!isPositive);
    } else if (typed === "=") {
      equalsHandler(typed);
    } else {
      clearScreenHandler();
    }
  };

  return (
    <div className="App">
      <Wrapper>
        <Screen value={sign ? curValue : prevValue} />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => {
            return (
              <Buttons
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={buttonClickHandler}
              ></Buttons>
            );
          })}
        </ButtonBox>
      </Wrapper>
    </div>
  );
}

export default App;
