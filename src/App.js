import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { FloatButton } from "antd";

import Home from "./Screen/Home";
import ErrorPage from "./Components/ErrorPage";
import Header from "./Components/Header";
import AboutUs from "./Screen/AboutUs";
import Contacts from "./Screen/Contacts";
import Services from "./Screen/Services";
import Profile from "./Screen/Profile";
import Settings from "./Components/Settings";
import PersonalInfo from "./Components/PersonalInfo";
import LogIn from "./Components/LogIn";

function App() {
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
    <BrowserRouter>
      <Header />
      <div className="App" id="scrollable-box">

        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contacts />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Personal-Info" element={<PersonalInfo />} />
          <Route path="/Log-In" element={<LogIn />} />
        </Routes>

        <FloatButton.BackTop onClick={scrollToTop} visibilityHeight={0} />
      </div>
    </BrowserRouter>
  );
}

export default App;
