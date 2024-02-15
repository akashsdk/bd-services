import React, { useState, useEffect } from "react";
import "./Header.css";

import Logo from "../Icon/Header logo2 .png";
import PImg from "../Image/Profile.png";
import { Link } from "react-router-dom";
import { Button, Drawer, Menu, Switch } from "antd";
import {
  UpOutlined,
  DownOutlined,
  SettingOutlined,
  PicLeftOutlined,
} from "@ant-design/icons";

export default function Header() {
  // Header Colour

  const storedColors = localStorage.getItem("selectedTextColors");
  const [textColors, setTextColors] = useState(
    storedColors
      ? JSON.parse(storedColors)
      : ["black", "black", "black", "black", "black"]
  );

  const handleTextClick = (index) => {
    const updatedColors = textColors.map((_, i) =>
      i === index ? "red" : "black"
    );
    setTextColors(updatedColors);
    localStorage.setItem("selectedTextColors", JSON.stringify(updatedColors));
  };

  useEffect(() => {
    localStorage.setItem("selectedTextColors", JSON.stringify(textColors));
  }, [textColors]);

  // for Box-3
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="Header-Body">
      {/* Header-Dextop */}
      <div className="Header-Dextop">
        <div className="Header-Box1">
          <Link to="/" onClick={() => handleTextClick(4)}>
            <img className="Header-Logo" src={Logo} alt="" />
          </Link>
        </div>

        <div className="Header-Box2">
          <div className="dropdown">
            <p className={`Header-Text ${textColors[1]}`}>Services</p>
            <DownOutlined className="Header-Icon1" />
            <UpOutlined className="Header-Icon2" />

            <div className="dropdown-content">
              <Link
                onClick={() => handleTextClick(1)}
                to="/"
                className="dropdown-content-Link"
              >
                <p className="dropdown-content-Text">Option 1</p>
              </Link>
              <Link
                onClick={() => handleTextClick(1)}
                to="/"
                className="dropdown-content-Link"
              >
                <p className="dropdown-content-Text">Option 2</p>
              </Link>
              <Link
                onClick={() => handleTextClick(1)}
                to="/"
                className="dropdown-content-Link"
              >
                <p className="dropdown-content-Text">Option 3</p>
              </Link>
              <Link
                onClick={() => handleTextClick(1)}
                to="/"
                className="dropdown-content-Link"
              >
                <p className="dropdown-content-Text">Option 4</p>
              </Link>
            </div>
          </div>

          <Link
            className="Header-Link"
            to="/AboutUs"
            onClick={() => handleTextClick(2)}
          >
            <p className={`Header-Text ${textColors[2]}`}>About Us</p>
          </Link>

          <Link
            className="Header-Link"
            to="/Contact"
            onClick={() => handleTextClick(3)}
          >
            <p className={`Header-Text ${textColors[3]}`}>Contact</p>
          </Link>

          <div style={{ marginLeft: "20px" }}>
            <Switch
              checkedChildren="ENG"
              unCheckedChildren="BN"
              defaultChecked
            />
          </div>
        </div>

        <div className="Header-Box3">
          <Link
            className="Header-Box3-Link"
            to="/Settings"
            onClick={() => handleTextClick(0)}
          >
            <SettingOutlined className={`Header-Box3-Icon ${textColors[0]}`} />
          </Link>

          <Link to="/Profile" onClick={() => handleTextClick(5)}>
            <img className="Header-Box3-Img" alt="" src={PImg} />
          </Link>
        </div>
      </div>

      {/* Header-Mobile */}
      <div className="Header-Mobile">
        <div className="Header-M-Div">
          <PicLeftOutlined onClick={showDrawer} className="Header-M-Icon"/>
        </div>
        <div className="Header-M-Div2">
          <Link to="/" onClick={() => handleTextClick(4)}>
            <img className="Header-Logo" src={Logo} alt="" />
          </Link>
        </div>
      </div>
      <box>
        <Drawer
          placement="left"
          title={<div>n</div>}
          onClose={onClose}
          open={open}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </box>
    </div>
  );
}
