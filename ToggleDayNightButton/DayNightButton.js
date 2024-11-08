import React, { useState } from 'react';
import './daynight-button.css';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleButton = () => {
    setIsOn((prev) => !prev);
  };

  return (
    // Page background and text for testing purposes
    <div className={`page-background ${isOn ? 'night' : 'day'}`}>
      <h1 className={`page-text ${isOn ? 'night' : 'day'}`}>Night and Day Button</h1>

      <button className="daynight-button-container" onClick={toggleButton}>
        <div className="daynight-button-background">
          <div className={`daynight-color daynight-color-1 ${isOn ? 'night' : 'day'}`}></div>
          <div className={`daynight-color daynight-color-2 ${isOn ? 'night' : 'day'}`}></div>
          <div className={`daynight-color daynight-color-3 ${isOn ? 'night' : 'day'}`}></div>
          <div className={`daynight-color daynight-color-4 ${isOn ? 'night' : 'day'}`}></div>
          <div className={`daynight-button-knob ${isOn ? 'night' : 'day'}`}></div>
        </div>
      </button>
    </div>
  );
};

export default DayNightButton;
