import React, { useState, useEffect } from "react";
import './AboutUs.css';

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const box = document.getElementById("scrollable-box");
      if (box) {
        setIsVisible(box.scrollTop > 200);
      }
    };

    const box = document.getElementById("scrollable-box");
    if (box) {
      box.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (box) {
        box.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    const box = document.getElementById("scrollable-box");
    if (box) {
      box.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className='About-Body'> 
    
    <div id="scrollable-box" className="scrollable-box">
      <div style={{ height: "2000px", padding: "20px" }}>
        Content inside the scrollable box
      </div>

      {/* Scroll to Top button */}
      <button
        className={`scroll-button ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        Scroll to Top
      </button>
    </div>

    </div>
  )
}
