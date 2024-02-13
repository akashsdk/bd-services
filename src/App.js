import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Screen/Home";
import ErrorPage from "./Components/ErrorPage";
import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutUs from './Screen/AboutUs';
import Contacts from './Screen/Contacts';
import Services from './Screen/Services';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
