import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import HowitWorks from "./components/howitworks";
import Properties from "./components/properties";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowitWorks />
      <section id="properties">
        <div class="container">
          <h2>Properties</h2>
          <div id="properties-slider" class="slick">
            <Properties
              imgsrc="https://onclickwebdesign.com/wp-content/uploads/property_1.jpg"
              alt="Property 1"
              price="340000"
              numofbeds="6 beds"
              numofbaths="4 baths"
              size="4,250 sqft"
              address="480 12th, Unit 14, San Francisco, CA"
            />
            <Properties
              imgsrc="https://onclickwebdesign.com/wp-content/uploads/property_2.jpg"
              alt="Property 2"
              price="$ 4,200,000"
              numofbeds="6 beds"
              numofbaths="4 baths"
              size="5000 sqft"
              address="480 12th, Unit 19,Los Angeles, CA"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
