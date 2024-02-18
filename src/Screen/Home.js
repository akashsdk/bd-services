import React, { useState, useEffect } from "react";
import "./Home.css";

import { RightOutlined, LeftOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Flex, Tooltip } from "antd";

import Photo1 from "../Image/sheikh-mujibur-rahman.jpeg";

import Icon1 from "../Icon/999.png";
import Icon2 from "../Icon/fire-extinguisher.png";
import Icon3 from "../Icon/police (1).png";
import Icon5 from "../Icon/policeman.png";
import Icon4 from "../Icon/policeman (1).png";
import Icon6 from "../Icon/ambulance.png";
import Icon7 from "../Icon/women.png";
import Icon8 from "../Icon/investigation.png";
import HomeHeader from "../Cart/HomeHeader";

export default function Home() {
  // Box-1
  const images = [
    "https://us.123rf.com/450wm/stockee/stockee2308/stockee230803936/210015018-a-stunning-denali-landscape-at-night-featuring-majestic-pine-trees-a-serene-lake-and-a-tranquil.jpg?ver=6",
    "https://images.unsplash.com/photo-1671358492127-b5131df9aaae?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/1272511865/photo/above-the-fog.webp?b=1&s=170667a&w=0&k=20&c=IiTSLMb6icU6EGZQ5dkJ3WKZfJIkO5pYH9MIOytCqwc=",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Automatically slide every 4 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => {
      clearInterval(intervalId); // Cleanup interval on component unmount
    };
  }, [currentIndex, images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  // Box-2
  const makeCall = () => {
    const confirmed = window.confirm("Are you sure you want to make a call?");

    if (confirmed) {
      const phoneNumber = "tel:+8801321100152";
      window.location.href = phoneNumber;
    }
  };
  return (
    <div className="home-body">
      {/* Box-0 (Header) */}
      <div className="home-Header-body">
        <button className="home-Header-Button">
          <img src={Icon1} className="home-Header-Icon" alt="" />
          <p className="home-Header-Text">Emergency</p>
        </button>

        <button className="home-Header-Button">
          <img src={Icon2} className="home-Header-Icon" alt="" />
          <p className="home-Header-Text">Fire Service</p>
        </button>

        <button className="home-Header-Button">
          <img src={Icon3} className="home-Header-Icon" alt="" />
          <p className="home-Header-Text">Police</p>
        </button>

        <button className="home-Header-Button">
          <img src={Icon4} className="home-Header-Icon" alt="" />
          <p className="home-Header-Text">RAB</p>
        </button>

        <button className="home-Header-Button">
          <img src={Icon5} className="home-Header-Icon" alt="" />
          <p className="home-Header-Text">CID</p>
        </button>

        <button className="home-Header-Button">
          <img src={Icon6} className="home-Header-Icon" alt="" />
          <p className="home-Header-Text">Ambulance</p>
        </button>

        <button className="home-Header-Button">
          <img src={Icon7} className="home-Header-Icon" alt="" />
          <p className="home-Header-Text">Women & Children</p>
        </button>

        <button className="home-Header-Button">
          <img src={Icon8} className="home-Header-Icon" alt="" />
          <p className="home-Header-Text">দুদক</p>
        </button>
      </div>

      {/* Box-1 */}
      <div className="home-Box1">
        <div className="home-Box1-Left">
          <img className="home-Box1-LeftImg" src={Photo1} alt="" />
          <p className="home-Box1-Text">
            বঙ্গবন্ধুর দেশে <br /> বাংলাদেশে
          </p>
        </div>
        <div className="home-Box1-Right">
          <Button
            shape="circle"
            size="large"
            className="home-Box1-Button"
            icon={<LeftOutlined className="home-Box1-Icon" />}
            onClick={handlePrev}
          />
          <img
            className="home-Box1-Img"
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          />
          <Button
            shape="circle"
            size="large"
            className="home-Box1-Button"
            icon={<RightOutlined className="home-Box1-Icon" />}
            onClick={handleNext}
          />
        </div>
      </div>

      {/* Box-2 */}
      <div className="home-Box2">
        <p className="home-Box2-Text1">Hot Line Number</p>
        <div className="home-Box2-Div">
          <div className="home-Box2-Box1">
            <p className="home-Box2-Text2">SI</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box2">
            <p className="home-Box2-Text2">Title</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box3">
            <p className="home-Box2-Text2">Number</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box4">
            <p className="home-Box2-Text2">Call Now</p>
          </div>
        </div>

        <div className="home-Box2-Div">
          <div className="home-Box2-Box1">
            <p className="home-Box2-Text3">1.</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box2">
            <p className="home-Box2-Text3">জরুরী সেবা</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box3">
            <p className="home-Box2-Text3">৯৯৯</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box4">
            <PhoneOutlined className="home-Box2-Icon" onClick={makeCall} />
          </div>
        </div>

        <div className="home-Box2-Div">
          <div className="home-Box2-Box1">
            <p className="home-Box2-Text3">2.</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box2">
            <p className="home-Box2-Text3">শিশু সহায়তা</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box3">
            <p className="home-Box2-Text3">১০৯৮</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box4">
            <PhoneOutlined className="home-Box2-Icon" onClick={makeCall} />
          </div>
        </div>

        <div className="home-Box2-Div">
          <div className="home-Box2-Box1">
            <p className="home-Box2-Text3">3.</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box2">
            <p className="home-Box2-Text3">নারী ও শিশু নির্যাতন</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box3">
            <p className="home-Box2-Text3">১০৯/১০৯২১</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box4">
            <PhoneOutlined className="home-Box2-Icon" onClick={makeCall} />
          </div>
        </div>

        <div className="home-Box2-Div">
          <div className="home-Box2-Box1">
            <p className="home-Box2-Text3">4.</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box2">
            <p className="home-Box2-Text3">জাতীয় পরিচয়পত্র</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box3">
            <p className="home-Box2-Text3"> ১০৫</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box4">
            <PhoneOutlined className="home-Box2-Icon" onClick={makeCall} />
          </div>
        </div>

        <div className="home-Box2-Div">
          <div className="home-Box2-Box1">
            <p className="home-Box2-Text3">5.</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box2">
            <p className="home-Box2-Text3">সরকারী আইন সেবা</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box3">
            <p className="home-Box2-Text3"> ১৬৪৩০</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box4">
            <PhoneOutlined className="home-Box2-Icon" onClick={makeCall} />
          </div>
        </div>

        <div className="home-Box2-Div">
          <div className="home-Box2-Box1">
            <p className="home-Box2-Text3">6.</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box2">
            <p className="home-Box2-Text3">দুর্যোগের আগাম বার্তা</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box3">
            <p className="home-Box2-Text3"> ১০৯৪১</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box4">
            <PhoneOutlined className="home-Box2-Icon" onClick={makeCall} />
          </div>
        </div>

        <div className="home-Box2-Div">
          <div className="home-Box2-Box1">
            <p className="home-Box2-Text3">7.</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box2">
            <p className="home-Box2-Text3">দুদক হটলাইন</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box3">
            <p className="home-Box2-Text3"> ১০৬</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box4">
            <PhoneOutlined className="home-Box2-Icon" onClick={makeCall} />
          </div>
        </div>

        <div className="home-Box2-Div">
          <div className="home-Box2-Box1">
            <p className="home-Box2-Text3">8.</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box2">
            <p className="home-Box2-Text3">তথ্য সেবা</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box3">
            <p className="home-Box2-Text3"> ৩৩৩</p>
          </div>
          <div className="home-Box2-Line" />
          <div className="home-Box2-Box4">
            <PhoneOutlined className="home-Box2-Icon" onClick={makeCall} />
          </div>
        </div>

        <p className="home-Box2-Text4">
          Note: Please do not waste valuable time with unnecessary calls.
        </p>
      </div>

      {/* Box-3 */}
      <div>
        <p>Box-3</p>
      </div>

      {/* Box-4 */}
      <div style={{width:'100%'}}>
        <p>Box-4</p>
        <HomeHeader/>
      </div>
    </div>
  );
}
