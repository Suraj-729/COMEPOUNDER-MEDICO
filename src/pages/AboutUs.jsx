import React from "react";
import "../assets/css/compeounder.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CoreValue from "../components/CoreValue";
import About from "../components/About";
import Mission from "../components/Mission";
import "../assets/css/innerstyle.css"; // Assuming you have a CSS file for styling
import Commitment from "../components/commitment";
import AboutLastSection from "../components/AboutLastSection";
const AboutUs = () => {
  return (
    <>
      <Header />
      
         
        <About />
        <Mission />
        <CoreValue />
        <Commitment />
        <AboutLastSection />
      
      <Footer />
    </>
  );
};

export default AboutUs;