function ImageContainer(props) {
  return (
    <div className="container">
      <button onClick={props.clickHandler} className="btn">
        Click Here to see a new {props.name}
      </button>
      {props.imgSrc ? (
        <img src={props.imgSrc} alt="Dog" className="image" />
      ) : (
        <p>Click on button to see a dog</p>
      )}
    </div>
  );
}

export default ImageContainer;
