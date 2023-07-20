import React, { useEffect, useState, useRef } from 'react';
import './Slider.css'; 

const MySlider = ({ defaultValue }) => {
  const [sliderValue, setSliderValue] = useState(defaultValue || 50); 
  const sliderRef = useRef(null);

  const handleChange = (event) => {
    const value = event.target.value;
    setSliderValue(value);
    updateSliderThumbColor(value);
  };

  const updateSliderThumbColor = (value) => {
    const slider = sliderRef.current;
    const percentage = ((value - slider.min) / (slider.max - slider.min)) * 100;
    const bgColor = `linear-gradient(90deg, #0000FF ${percentage}%, #D3D3D3 ${percentage}%)`;
    slider.style.background = bgColor;
  };

  useEffect(() => {
    updateSliderThumbColor(sliderValue);
  }, [sliderValue]); 

  return (
    <div className='slider-container'>
      <input
        type='range'
        className='slider'
        value={sliderValue}
        min='0'
        max='100'
        onChange={handleChange}
        ref={sliderRef} 
      />
    </div>
  );
};

export default MySlider;
