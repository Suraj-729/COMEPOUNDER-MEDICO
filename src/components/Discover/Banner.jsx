import React from "react";
import "../../assets/css/compeounder.css";
import "../../assets/css/innerstyle.css";

const Banner = () => {
  return (
    <section className="innerPageBanner">
      <figure>
        <img src="images/Comepounder.jpg" alt="" />
      </figure>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 text-center">
            <div className="innerPageBannerHeading">
              <h2>Discover</h2>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Discover</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    
  );
};
export default Banner;
