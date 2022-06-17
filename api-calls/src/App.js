import { useEffect, useState } from "react";
import "./App.css";
import ImageContainer from "./Components/ImageContainer";

function App() {
  const [dogImgSrc, setDogImgSrc] = useState("");
  const [memeImgSrc, setMemeSrc] = useState("");
  const [memeNumber, setMemeNumber] = useState(null);

  useEffect(() => {
    console.log("Hey there");
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemeSrc(data.data.memes[memeNumber].url));
  }, [memeNumber]);

  const dogClickHandler = () => {
    fetch("https://dog.ceo/api/breeds/image/random/json")
      .then((res) => res.json())
      .then((data) => setDogImgSrc(data.message));
  };

  const memeClickHandler = () => {
    setMemeNumber(Math.floor(Math.random() * 100 + 1));
  };

  return (
    <div className="App">
      <ImageContainer clickHandler={dogClickHandler} imgSrc={dogImgSrc} />
      <ImageContainer clickHandler={memeClickHandler} imgSrc={memeImgSrc} />
    </div>
  );
}

export default App;
