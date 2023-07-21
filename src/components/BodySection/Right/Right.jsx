import React from "react";
import "./Right.css";
import Summary from "./Summary";
import RightData from "./RightData";

const Right = () => {
  return (
    <div className="right-container">
      <RightData />
      <Summary />
    </div>
  );
};

export default Right;
