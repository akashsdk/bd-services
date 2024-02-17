import React, { useState, useEffect } from "react";
import "./Home.css";

import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { Button, Flex, Tooltip } from "antd";

export default function Home() {
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

  return (
    <div className="home-body">
      {/* Box-1 */}
      <div className="home-Box1">
        <div className="home-Box1-Left">bb</div>
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
    </div>
  );
}
