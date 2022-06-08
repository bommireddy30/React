import Card from "./Card";
import "./LoginModal.css";
import ReactDom from "react-dom";

function LoginModal() {
  return ReactDom.createPortal(
    <Card>
      <form className="loginForm">
        <label>Email</label>
        <input type="email"></input>
        <label>PassWord</label>
        <input type="password"></input>
        <div>Forgot PassWord??</div>
        <button>Login</button>
      </form>
    </Card>,
    document.getElementById("modal")
  );
}

export default LoginModal;
