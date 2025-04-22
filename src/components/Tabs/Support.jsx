import React from "react";

import "../../assets/css/compeounder.css";
import "../../assets/css/innerstyle.css";
import "../../assets/css/bootstrap/dist/css/bootstrap.min.css"; 

const SupportPage = () => {
  return (
    <div className="tab-content-inner">
    <div className="owl-carousel" id="resourcesOwl1">
      {[...Array(4)].map((_, index) => (
        <div className="KeyWebsiteCard" key={index}>
          <figure>
            <a href="#">
              <img src="images/nutrition-dieting.jpg" alt="" title="" />
            </a>
          </figure>
          <div className="KeyWebsiteCardDate">
            <i className="fa-solid fa-calendar-days"></i>
            <span>April </span>
            <span>5</span>,<span>2025</span>
          </div>
          <h4>
            <a href="#">Heading goes here</a>
          </h4>
          <div className="KeyWebsiteCardContent">
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>
          <a href="#" className="readmoreBtn">
            <span>Read More</span>
          </a>
        </div>
      ))}
    </div>
  </div>
  );
};

export default SupportPage;