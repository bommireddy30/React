import "./App.css";
import logo from "../src/Assets/pinterest.png";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="Logo comes here" className="logo" />
        </div>
        <div className="nav-content">
          <div className="nav-list">Features</div>
          <div className="nav-list">Offers</div>
          <div className="nav-list">User&Orders</div>
          <Login />
        </div>
      </nav>
      <p className="desc">
        Here We are to take you on a adventurous journey of your life. Are you
        too busy to plan your vacation?? Are you too confused?? Don't worry we
        are to take care of it..
      </p>
    </div>
  );
}

export default App;
