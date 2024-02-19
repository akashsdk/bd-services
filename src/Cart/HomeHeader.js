import React, { useState, useRef, useEffect } from "react";
import "./HomeHeader.css";
import { Progress } from "antd";

import { PhoneOutlined } from "@ant-design/icons";

export default function HomeHeader({ phoneNum, icon, topText, bodyText }) {
  const [progressValue, setProgressValue] = useState(0);
  const actionInterval = useRef();

  const startAction = () => {
    actionInterval.current = setInterval(increaseProgress, 100);
  };

  const resetButton = () => {
    clearInterval(actionInterval.current);

    setProgressValue(0);

    if (progressValue === 100) {
      makeCall();
    }
  };

  const increaseProgress = () => {
    setProgressValue((prevValue) => (prevValue < 100 ? prevValue + 2 : 100));
  };

  const makeCall = () => {
    const phoneNumber = `tel:${phoneNum}`;
    window.location.href = phoneNumber;
  };

  useEffect(() => {
    return () => clearInterval(actionInterval.current);
  }, []);

  const twoColors = {
    "0%": "#006a4e",
    "100%": "#f42a41",
  };
  const makeCall2 = () => {
    const confirmed = window.confirm("Are you sure you want to make a call?");

    if (confirmed) {
      const phoneNumber = `tel:${phoneNum}`;
      window.location.href = phoneNumber;
    }
  };
  return (
    <div className="HomeHeader-Cart-Body">
      <div className="HomeHeader-Cart-Div2">
        <div className="HomeHeader-Cart-Div3">
          <img className="HomeHeader-Cart-Icon" src={icon} alt="" />
          <PhoneOutlined className="HomeHeader-Cart-Icon3" onClick={makeCall2} />
          <p className="HomeHeader-Cart-Text1">{topText}</p>
          
        </div>

        <p className="HomeHeader-Cart-Text2">{bodyText}</p>

        <button
          className="HomeHeader-Cart-Button"
          onMouseDown={startAction}
          onMouseUp={resetButton}
          onMouseOut={resetButton}
        >
          <Progress
            className="HomeHeader-Cart-Progress"
            type="circle"
            percent={progressValue}
            strokeColor={twoColors}
          />
          <p className="HomeHeader-Cart-Text3">
            Tap <br /> Hold
          </p>
        </button>

        
      </div>
      <div className="HomeHeader-Cart-Div">
        <p className="HomeHeader-Cart-Text4">Note:</p>
        <PhoneOutlined className="HomeHeader-Cart-Icon2" />
        <p className="HomeHeader-Cart-Text5">
          Only For Emergency Calls Tap and Hold for a few seconds.
        </p>
        <p className="HomeHeader-Cart-Text6">
          Only For Emergency Calls.
        </p>
      </div>
    </div>
  );
}
