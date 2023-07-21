import React from "react";
import "./Today.css";
import { AiFillCaretDown } from "react-icons/ai";

const TodaySection = () => {
  return (
    <div className="today-container">
      <h1 className="heading">Today</h1>
      <div className="today-section">
        <div className="today-content">
          <h1>$1,91,825</h1>
          <p>Account Balance</p>
        </div>
        <div className="today-content">
          <h4>$4000</h4>
          <p>Year-to-Date Contribution</p>
        </div>
        <div className="today-content">
          <h4>$2000</h4>
          <p>Total Interest</p>
        </div>
      </div>
      <div className="button">
        <p> I want to</p>
        <div className="icon">
          <AiFillCaretDown />
        </div>
      </div>
    </div>
  );
};

export default TodaySection;
