import React from "react";
import MySlider from "./Slider";
import "./RightData.css";

const RightData = () => {
  return (
    <div className="right-data">
      <h3>Retirement Strategy</h3>
      <div className="right-data-content">
        <h5>Employee Contribution</h5>
        <div className="slider-component">
          <MySlider defaultValue="60" />
          <p>12%</p>
        </div>
      </div>
      <div className="right-data-content">
        <h5>Employee Contribution</h5>
        <div className="slider-component">
          <div>
            <MySlider defaultValue="80" />
          </div>
          <p>65</p>
        </div>
      </div>
      <hr />
      <div className="right-bottom-data">
        <h5>Employer Contribution</h5>
        <p>8.4%</p>
      </div>
      <div className="right-bottom-data">
        <h5>Interest Rate </h5>
        <p>6%</p>
      </div>
      <div className="right-btn">Update</div>
      <p style={{textAlign:"center",fontSize:"12px",color:"blue",fontWeight:"500"}}>View Help Docs &gt;</p>

    </div>
  );
};

export default RightData;
