import { useState, useEffect } from "react";
import classes from "./StarRating.module.css";
function StarRating() {
  const [rating, setRating] = useState(0);
  useEffect(() => {
    console.log(rating);
  }, [rating]);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index = index + 1;
        return (
          <button
            type="button"
            className={index <= rating ? classes.on : classes.off}
            key={index}
            onClick={() => setRating(index)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}

export default StarRating;
