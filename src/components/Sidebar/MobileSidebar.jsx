import React from 'react';
import {BiSearchAlt2,BiHomeAlt,BiUser,BiCreditCardFront} from "react-icons/bi";
import {BsCardList} from "react-icons/bs";
import "./MobileSidebar.css"

const MobileSidebar = () => {
  return (
   <div className="m-c">
    <div className="mobile-nav-menu">
    <ul className='mobile-nav-list'>
      <li className='m-nav-item'><a href="#" className='m-nav-link'><BiHomeAlt /></a></li>
      <li className='m-nav-item'><a href="#" className='m-nav-link'><BiCreditCardFront /></a></li>
      <li className='m-nav-item'><a href="#" className='m-nav-link'><BsCardList /></a></li>
      <li className='m-nav-item'><a href="#" className='m-nav-link'><BiUser /></a></li>
    </ul>
  </div>
   </div>
  )
}

export default MobileSidebar