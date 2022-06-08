import "./Button.css";
function Button(props) {
  return (
    <button onClick={props.loginBtnHandler} className="btn">
      Login
    </button>
  );
}

export default Button;
