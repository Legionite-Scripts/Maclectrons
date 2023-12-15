import React from "react";
import { Navigationbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { Slider } from "./Components/Slider";
import { Deals } from "./Components/Deals";
import { Kids } from "./Components/Kids";
import { PopularViews } from "./Components/PopularViews";
import { Subscribe } from "./Components/Subscribe";
import { Footer } from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Home />
      <Slider />
      <Deals />
      <Kids />
      <PopularViews />
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
