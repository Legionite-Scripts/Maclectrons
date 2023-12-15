import React from "react";
import {
  Navigationbar,
  Home,
  Kids,
  Slider,
  Deals,
  Footer,
  PopularViews,
  Subscribe,
} from "./Components";

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Home />
      <Slider />
      <Deals />
      <Kids />
      <PopularViews />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
