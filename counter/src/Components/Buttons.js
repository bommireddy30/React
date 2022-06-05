import "./Button.css";
function Button(props) {
  return (
    <div>
      <button className="button" onClick={props.incrementHandler}>
        ++
      </button>
      <button className="button" onClick={props.resetHandler}>
        Reset
      </button>
      <button className="button" onClick={props.decrementHandler}>
        --
      </button>
    </div>
  );
}

export default Button;
