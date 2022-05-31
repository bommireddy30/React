import "./Square.css";
function Square(props) {
  return (
    <div onClick={props.onClick} className="square">
      {props.value + 1}
    </div>
  );
}

export default Square;
