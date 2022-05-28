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
  const buttonClickHandler = (e) => {
    console.log(e.target.innerHTML);
  };
  return (
    <div className="App">
      <Wrapper>
        <Screen value={0} />
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
