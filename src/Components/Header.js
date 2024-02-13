import React, { useState, useEffect } from "react";
import "./Header.css";

import Logo from "../Icon/Header logo2 .png";
import { Link } from "react-router-dom";
import { Button, Drawer, Menu, Switch } from "antd";
import {
  MenuOutlined,
  UpOutlined,
  DownOutlined,
} from "@ant-design/icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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
    setOpen(false);
  };

  useEffect(() => {
    localStorage.setItem("selectedTextColors", JSON.stringify(textColors));
  }, [textColors]);

  return (
    <div className="Header-Body">
      <div className="Header-Box1">
        <Link to="/" onClick={() => handleTextClick(0)}>
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

        <Link className="Header-Link" onClick={() => handleTextClick(2)}>
          <p className={`Header-Text ${textColors[2]}`}>About Us</p>
        </Link>

        <Link className="Header-Link" onClick={() => handleTextClick(3)}>
          <p className={`Header-Text ${textColors[3]}`}>Contact</p>
        </Link>

        <div>
        <Switch checkedChildren="ENG" unCheckedChildren="BN" defaultChecked />
        </div>
      </div>

      <div className="Header-Box3">profile</div>
    </div>
  );
}
