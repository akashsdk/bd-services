import React, { useState, useRef, useEffect } from "react";
import "./HomeHeader.css";
import { Progress } from 'antd';
import icon from "../Icon/999.png";

export default function HomeHeader() {
  const [isActive, setIsActive] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const actionInterval = useRef();

  const startAction = () => {
    // Set an interval to increase progress every 100 milliseconds
    actionInterval.current = setInterval(increaseProgress, 100);
    setIsActive(true);
  };

  const resetButton = () => {
    // Clear the interval to stop increasing progress
    clearInterval(actionInterval.current);

    // Reset the progress value and button state
    setProgressValue(0);
    setIsActive(false);

    // Check if progress is complete and trigger the call
    if (progressValue === 100) {
      makeCall();
    }
  };

  const increaseProgress = () => {
    // Increase the progress value by 2.5 (adjust as needed)
    setProgressValue((prevValue) => (prevValue < 100 ? prevValue + 2.5 : 100));
  };

  const makeCall = () => {
    // Simulate opening the default phone application with the specified number
    const phoneNumber = "tel:+8801321100152";
      window.location.href = phoneNumber;
  };

  useEffect(() => {
    // Cleanup the interval when the component is unmounted
    return () => clearInterval(actionInterval.current);
  }, []);

  const twoColors = {
    '0%': '#f42a41',
    '100%': '#006a4e',
  };

  return (
    <div className="HomeHeader-Cart-Body">
      <img className="HomeHeader-Cart-Icon" src={icon} alt="" />
      <p className="HomeHeader-Cart-Text1">Emergency</p>
      <p className="HomeHeader-Cart-Text2">
        Bangladesh Emergency 999 service provides swift assistance to customers
        in crisis, ensuring rapid response and support during emergencies,
        fostering a safer and secure environment.
      </p>

      <button
        // className={`action-button ${isActive ? "active" : ""}`}
        className="HomeHeader-Cart-Button"
        onMouseDown={startAction}
        onMouseUp={resetButton}
        onMouseOut={resetButton}
      >
        <Progress type="circle" percent={progressValue} strokeColor={twoColors} />
      </button>
      <p>ppp{progressValue}</p>
    </div>
  );
}
