import { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const onClickHandler = (e) => {
    setOpenModal(true);
  };

  const divClickHandler = (e) => {
    e.stopPropagation();
    setOpenModal(false);
  };

  return (
    <div className="App">
      <button className="btn" onClick={(event) => onClickHandler()}>
        Click Me
      </button>
      {openModal ? <Modal onClickHandler={divClickHandler} /> : null}
    </div>
  );
}

export default App;
