import React from "react";
import "./Summary.css";

const Summary = () => {
  return (
    <div className="summary">
      <h4 style={{ fontSize: "14px", color: "#c0c0c0",fontWeight:"500" }}>
        Are you Considering a <br />
        <span style={{ fontSize: "17px", color: "black",fontWeight:"700"  }}>
          Housing Advance?
        </span>
      </h4>
      <p style={{ fontSize: "13px", color: "#c0c0c0" }}>
        Limited Time Reduced Interest
      </p>
      <p style={{ fontSize: "12px", color: "blue", fontWeight: "500" }}>
        Learn More &gt;
      </p>
    </div>
  );
};

export default Summary;
