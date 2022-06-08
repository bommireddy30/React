import "./Button.css";
function Button(props) {
  return (
    <button onClick={props.onClickHandler} className="btn">
      Login
    </button>
  );
}

export default Button;
