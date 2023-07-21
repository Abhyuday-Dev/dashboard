import React from "react";
import "./Middle.css";
import Card from "./Card";
import Charts from "./Charts";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";
import RadialBarChart from "./RadialBarChart";
import { AiFillCaretDown } from "react-icons/ai";

const Middle = () => {
  return (
    <div className="middle-container">
      <div className="middle-heading">
        <p>Retirement Income</p>
        <h3>Starting Year 2056</h3>
      </div>

      <div className="info-box">
        <Card heading="$300,000" subheading="My Goal" isFirstCard={true} />
        <Card heading="59%" subheading="Goal Achieved" />
        <Card heading="$300" subheading="Monthly Income" />
      </div>
      <div className="chart-section">
        <Charts />
        <Chart2 />
        <Chart3 />
      </div>
      <div className="middle-bottom">
        <h3 style={{ marginBottom: "5px" }} className="bottom-h3">
          How do I compare to my peers?
        </h3>
        <p className="bottom-sub">
          These numbers represent current goal achievemnet
        </p>
        <div className="bottom-content">
          <div className="data-bottom">
            <div className="data">
              <p style={{ fontWeight: "700", color: "black" }}>Age:</p>
              <p>Under 30</p>
              <AiFillCaretDown />
            </div>
            <hr />
            <div className="data">
              <p style={{ fontWeight: "700", color: "black" }}>Gender:</p>
              <p style={{ fontWeight: "600" }}>K 20-K 30</p>
              <AiFillCaretDown />
            </div>
            <hr />
            <div className="data">
              <p style={{ fontWeight: "700", color: "black" }}>Salary:</p>
              <p>Male</p>
              <AiFillCaretDown />
            </div>
          </div>
          <div className="radial-chart">
            <div className="bar">
              <RadialBarChart percentage="78" />
              <p style={{ fontSize: "12px", fontWeight: "500" }}>Average</p>
            </div>
            <div className="bar">
              <RadialBarChart percentage="90" />
              <p style={{ fontSize: "12px", fontWeight: "500" }}>Top</p>
            </div>
            <div className="bar">
              <RadialBarChart percentage="59" />
              <p style={{ fontSize: "12px", fontWeight: "500" }}>Me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
