import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import "../assets/css/compeounder.css"; // Adjust the path as needed
import "../assets/css/innerstyle.css"; // Adjust the path if necessary
import Header from "../components/Header"; // Adjust the path if necessary
import Footer from "../components/Footer";
import BannerPage from "../components/banner";
import HomeSecTwo from "../components/homeSecTwo";
import HomeSecThree from "../components/homeSecThree"; // Adjust the path if necessary
import HomeSecFour from "../components/homeSecFour";
import HomeSecFive from "../components/homeSectionFive";
import HomeSecSix from "../components/homeSecSix";
import HomeSecSev from "../components/homeSecSev";
import Solution from "../components/Solution";
const Comepounder = () => {
  return (
    <div>
     
       <Header /> {/* Use the Header component here */}

       <BannerPage /> {/* Use the Banner component here */}
     <HomeSecTwo /> {/* Use the HomeSecTwo component here */}
      <HomeSecThree /> {/* Use the HomeSecThree component here */}
    
      <HomeSecFour /> {/* Use the HomeSecFour component here */}
      
      <HomeSecFive />
      <Solution />
      <HomeSecSix />
      

      <HomeSecSev />
    
      {/* Additional sections go here */}

    
       <Footer /> {/* Use the Footer component here */}

    </div>
  );
};

export default Comepounder;
