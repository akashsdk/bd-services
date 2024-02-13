import React from "react";
import "./Header.css";

import Logo from "../Icon/Header logo2 .png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header-Body">
      <div className="Header-Box1">
        <Link to="/">
          <img className="Header-Icon" src={Logo} alt="" />
        </Link>
      </div>
      <div className="Header-Box2">
        <Link className="Header-Link">
          <p className="Header-Text">Services</p>
          
        </Link>

        <Link className="Header-Link">
          <p className="Header-Text">About Us</p>
        </Link>

        <Link className="Header-Link">
          <p className="Header-Text">Contact</p>
        </Link>

        <div>Lungue</div>
      </div>
      <div className="Header-Box3">profile</div>
    </div>
  );
}
