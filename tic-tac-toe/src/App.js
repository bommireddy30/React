import "./App.css";
import Board from "./Components/Board";
import Square from "./Components/Square";

const defaultArray = new Array(9).fill("");

function App() {
  var x = 5;
  var x;

  console.log(x);

  const onClickHandler = (e) => {};
  return (
    <div className="main">
      <Board>
        {defaultArray.map((square, index) => (
          <Square key={index} onClick={onClickHandler} value={index}></Square>
        ))}
      </Board>
    </div>
  );
}

export default App;
