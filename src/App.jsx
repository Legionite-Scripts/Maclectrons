import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigationbar } from "./Components/Navbar";
import { Home } from "./Components/Home"; // Import your Home component
import { Slider } from "./Components/Slider";
import { Deals } from "./Components/Deals";

import "./CSS/navbar.css";
import "./CSS/home.css";
import "./CSS/slider.css";
import "./CSS/deals.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Slider />} />
          <Route path="/" element={<Deals />} />
        </Routes>
        <Slider />
        <Deals />
      </div>
    </Router>
  );
}

export default App;
