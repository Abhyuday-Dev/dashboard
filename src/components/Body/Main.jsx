import React from 'react';
import "./Main.css";
import Left from '../BodySection/Left/Left';
import Right from '../BodySection/Right/Right';
import Middle from '../BodySection/Middle/Middle';

const Main = () => {
  return (
    <div className='main-container'>
        <Left />
        <Middle />
        <Right />
    </div>
  )
}

export default Main