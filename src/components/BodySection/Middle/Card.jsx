import React from "react";
import "./Card.css";

const Card = ({ heading, subheading, isFirstCard }) => {
  return (
    <div className={`box-container${isFirstCard ? " first-card" : ""}`}>
      <h2>{heading}</h2>
      <p>{subheading}</p>
      <hr />
    </div>
  );
};

export default Card;
