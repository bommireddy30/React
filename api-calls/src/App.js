import { useState } from "react";
import "./App.css";

function App() {
  const [dogImgSrc, setDogImgSrc] = useState("");
  const [catImgSrc, setCatImgSrc] = useState("");
  const [memeNumber, setMemeNumber] = useState(0);
  const [srcActive, setSrcActive] = useState(false);

  const dogClickHandler = () => {
    fetch("https://dog.ceo/api/breeds/image/random/json")
      .then((res) => res.json())
      .then((data) => setDogImgSrc(data.message));
  };

  const memeClickHandler = () => {
    if (memeNumber >= 100) {
      setMemeNumber(0);
    } else {
      setMemeNumber(memeNumber + 1);
    }
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setCatImgSrc(data.data.memes[memeNumber].url));
  };

  return (
    <div className="App">
      <div className="container">
        <button onClick={dogClickHandler} className="btn">
          Click Here to see a new dog
        </button>
        {dogImgSrc ? <img src={dogImgSrc} alt="Dog" className="image" /> : null}
      </div>
      <div className="container">
        <button onClick={memeClickHandler} className="btn">
          Click Here to see a new meme
        </button>
        {catImgSrc ? (
          <img src={catImgSrc} alt="meme" className="image" />
        ) : null}
      </div>
    </div>
  );
}

export default App;
