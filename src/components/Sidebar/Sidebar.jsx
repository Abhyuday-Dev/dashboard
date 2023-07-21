import React from "react";
import "./Sidebar.css";
import {
  BiSearchAlt2,
  BiHomeAlt,
  BiUser,
  BiCreditCardFront,
} from "react-icons/bi";
import { BsCardList } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="top-menu">
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/42/42329.png"
            alt=""
          />
          <BiSearchAlt2 />
        </div>
        <div className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <BiHomeAlt />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <BiCreditCardFront />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <BsCardList />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <BiUser />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="botton-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FiBell />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <HiOutlineLogout />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
