import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigationbar } from "./Components/Navbar";
import { Home } from "./Components/Home"; // Import your Home component
import { Slider } from "./Components/Slider";
import { Deals } from "./Components/Deals";
import { Kids } from "./Components/Kids";
import { PopularViews } from "./Components/PopularViews";
import { Subscribe } from "./Components/Subscribe";
import { Footer } from "./Components/Footer";

// CSS imports
import "./CSS/navbar.css";
import "./CSS/home.css";
import "./CSS/slider.css";
import "./CSS/deals.css";
import "./CSS/kids.css";
import "./CSS/popularViews.css";
import "./CSS/subscribe.css";
import "./CSS/footer.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Slider />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/" element={<Kids />} />
          <Route path="/popular" element={<PopularViews />} />
          <Route path="/" element={<Subscribe />} />
          <Route path="/" element={<Footer />} />
        </Routes>
        <Slider />
        <Deals />
        <Kids />
        <PopularViews />
        <Subscribe />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
