import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import LoginModal from "./Components/LoginModal";

function App() {
  const [login, setLogin] = useState(false);

  const loginHandler = () => {
    setLogin(true);
  };
  console.log(login);

  const classes = login ? "modal" : "App";

  return (
    <div className={classes}>
      {!login ? (
        <nav className="nav">
          <div className="navItem">Explore</div>
          <div className="navItem">Learning Paths</div>
          <Button onClickHandler={loginHandler} />
        </nav>
      ) : null}
      {login ? <LoginModal /> : null}
    </div>
  );
}

export default App;
