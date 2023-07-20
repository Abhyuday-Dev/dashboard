import React from 'react';
import "./Left.css";
import TodaySection from './TodaySection';
import Transactions from './Transactions';


const Left = () => {
  return (
    <div className='left-container'>
      <div className="profile-section">
        <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000" alt="" />
        <div className="profile-content">
          <h2 className="name">Hi Mike,
          </h2>
          <p>welcome back.</p>
        </div>
      </div>
      <TodaySection />
      <Transactions />
    </div>
  )
}

export default Left