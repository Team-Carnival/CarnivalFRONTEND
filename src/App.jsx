// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HeroSection from "./components/HeroSection.jsx";
import WeatherPredictor from "./components/Predictor/WeatherPredictor.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import DataSources from "./components/DataSources.jsx";
import Contact from "./components/ContactUs/Contact.jsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/predictor" element={<WeatherPredictor />} />
          <Route path="/datasources" element={<DataSources />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
