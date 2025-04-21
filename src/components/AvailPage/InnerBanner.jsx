import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import "../../assets/css/compeounder.css"; // Adjust the path as needed
import "../../assets/css/innerstyle.css"; // Adjust the path if necessary

const InnerBanner = () => {
  return (
    <div>
      <section class="innerPageBanner avail-inner-banner">
        <figure>
          <img src="images/Comepounder.jpg" alt="" />
        </figure>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <div className="innerPageBannerHeading">
                <h2>Avail</h2>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">Avail</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default InnerBanner;
