import { useState } from "react";
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
  const [calc, setCalc] = useState({ sign: "", num: 0, res: 0 });
  return (
    <div className="App">
      <Wrapper>
        <Screen value="0" value={calc.num ? calc.num : calc.res} />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => {
            return (
              <Buttons
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={() => {
                  console.log(`${btn} clicked!!`);
                }}
              ></Buttons>
            );
          })}
        </ButtonBox>
      </Wrapper>
    </div>
  );
}

export default App;
