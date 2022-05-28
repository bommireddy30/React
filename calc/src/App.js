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
  const [prevValue, setPrevValue] = useState("");
  const [curValue, setCurValue] = useState("");
  const [sign, setSign] = useState(null);
  const [res, setRes] = useState("");
  const [isEqualsActive, setIsEqualsActive] = useState(false);

  useEffect(() => {
    if (res || res === 0) {
      if (isEqualsActive) {
        setSign(null);
        setIsEqualsActive(false);
      }
      setPrevValue(res);
      setCurValue("");
      setRes("");
    }
  }, [res]);

  const inputNumHandler = (input) => {
    if (!sign) {
      setPrevValue(prevValue + input);
    } else {
      setCurValue(curValue + input);
    }
  };
  const signHandler = (input) => {
    if ((!sign && !curValue && prevValue) || prevValue === 0) {
      setSign(input);
    } else if (sign && curValue) {
      if (sign === "+") {
        setRes(Number(prevValue) + Number(curValue));
        setSign(input);
      } else if (sign === "-") {
        setRes(Number(prevValue) - Number(curValue));
        setSign(input);
      } else if (sign === "X") {
        setRes(Number(prevValue) * Number(curValue));
        setSign(input);
      } else if (sign === "/") {
        setRes(Number(prevValue) / Number(curValue));
        setSign(input);
      } else if (sign === "%") {
        setRes(Number(prevValue) % Number(curValue));
        setSign(input);
      }
    } else {
      return;
    }
  };

  const equalsHandler = (input) => {
    setIsEqualsActive(true);
    if ((prevValue && curValue) || (prevValue === 0 && curValue)) {
      if (sign === "+") {
        setRes(Number(prevValue) + Number(curValue));
        setSign(input);
      } else if (sign === "-") {
        setRes(Number(prevValue) - Number(curValue));
        setSign(input);
      } else if (sign === "X") {
        setRes(Number(prevValue) * Number(curValue));
        setSign(input);
      } else if (sign === "/") {
        setRes(Number(prevValue) / Number(curValue));
        setSign(input);
      } else if (sign === "%") {
        setRes(Number(prevValue) % Number(curValue));
        setSign(input);
      }
    } else {
      return;
    }
  };
  const buttonClickHandler = (e) => {
    const typed = e.target.innerHTML;
    if (!isNaN(typed)) {
      inputNumHandler(typed);
    } else if (
      typed === "+" ||
      typed === "-" ||
      typed === "X" ||
      typed === "/" ||
      typed === "%"
    ) {
      signHandler(typed);
    } else if (typed === "=") {
      equalsHandler(typed);
    } else if (typed === "-+") {
      if (!sign) {
        setPrevValue(-1 * Number(prevValue));
      } else {
        setCurValue(-1 * Number(curValue));
      }
    } else if (typed === ".") {
      inputNumHandler(typed);
    } else {
      setPrevValue("");
      setCurValue("");
      setSign(null);
      setRes("");
      setIsEqualsActive(false);
    }
  };
  return (
    <div className="App">
      <Wrapper>
        <Screen value={res || curValue || prevValue} />
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
