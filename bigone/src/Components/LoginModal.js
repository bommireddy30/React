import Card from "./Card";
import "./LoginModal.css";
import ReactDom from "react-dom";

function LoginModal() {
  return ReactDom.createPortal(
    <Card>
      <form className="loginForm">
        <label className="label">Email</label>
        <input type="email" className="loginForm"></input>
        <label className="label">PassWord</label>
        <input type="password" className="loginForm"></input>
        <a href="#" className="forgot loginForm">
          Forgot PassWord??
        </a>
        <button className="btn--modal">Login</button>
      </form>
    </Card>,
    document.getElementById("modal")
  );
}

export default LoginModal;
