import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import HowitWorks from "./components/howitworks";
import Properties from "./components/properties";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import Contact from "./components/contactus";
import Footer from "./components/footer";

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
            <Properties
              imgsrc="https://onclickwebdesign.com/wp-content/uploads/property_3.jpg"
              alt="Property 3"
              price="$ 3,200,000"
              numofbeds="6 beds"
              numofbaths="4 baths"
              size="5000 sqft"
              address="480 12th, Unit 19,Los Angeles, CA"
            />
            <Properties
              imgsrc="https://onclickwebdesign.com/wp-content/uploads/property_4.jpg"
              alt="Property 4"
              price="$ 1,200,000"
              numofbeds="4 beds"
              numofbaths="2 baths"
              size="5000 sqft"
              address="480 12th, Unit 19,Los Angeles, CA"
            />
            <Properties
              imgsrc="https://ap.rdcpix.com/6f1c843c98226cc401270e6645a84e10l-m1138805177od-w1024_h768.jpg"
              alt="Property 5"
              price="$ 4,200,000"
              numofbeds="6 beds"
              numofbaths="4 baths"
              size="5000 sqft"
              address="480 12th, Unit 19,Los Angeles, CA"
            />
          </div>
        </div>
      </section>
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
