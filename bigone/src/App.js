import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import LoginModal from "./Components/LoginModal";

function App() {
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const loginHandler = () => {
    setIsLoginClicked(true);
  };
  const overlayClickHanler = () => {
    setIsLoginClicked(false);
  };
  return (
    <div className="App">
      <nav className="nav">
        <div className="navItem">Explore</div>
        <div className="navItem">Learning Paths</div>
        <div className="navItem">Contact</div>
        <Button loginBtnHandler={loginHandler} />
      </nav>

      {isLoginClicked ? (
        <LoginModal overlayClickHanler={overlayClickHanler} />
      ) : null}
    </div>
  );
}

export default App;
