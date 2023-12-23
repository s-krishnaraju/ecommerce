import React from "react";

function Rating({ value, text, color }) {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i}>
        <i
          style={{ color }}
          className={
            value - i >= 1
              ? "fas fa-star"
              : value - i >= 0.5
              ? "fa fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
    );
  }
  return (
    <div className="rating">
      {stars}
      <span className="ms-2">{text}</span>
    </div>
  );
}

export default Rating;
