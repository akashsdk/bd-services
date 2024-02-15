import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Screen/Home";
import ErrorPage from "./Components/ErrorPage";
import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutUs from './Screen/AboutUs';
import Contacts from './Screen/Contacts';
import Services from './Screen/Services';
import Profile from "./Components/Profile";
import Settings from './Components/Settings';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <div className="App">
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contacts />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
