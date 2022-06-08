import "./App.css";
import Button from "./Components/Button";
import LoginModal from "./Components/LoginModal";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="navItem">Explore</div>
        <div className="navItem">Learning Paths</div>
        <Button />
      </nav>
      <LoginModal />
    </div>
  );
}

export default App;
