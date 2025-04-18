import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import "../assets/css/compeounder.css"; // Adjust the path as needed
import "../assets/css/innerstyle.css"; // Adjust the path if necessary

const HomeSecTwo = () => {
    return (
        <div>
         <section className="homeSec-2">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-6">
              <div className="section-2Content">
                <div className="homeHeading">
                  <h2>Revolutionizing Healthcare Delivery and Experience </h2>
                </div>
                <p>
                  At comePounder™, we redefine healthcare with personalized
                  support, connecting you to a variety of health service
                  providers, ranging from Caregivers, Equipment Suppliers, Rehab
                  centers, Bloodbanks, Accommodation service providers or
                  Patient meal suppliers, all through a single window, making
                  you to “choose” and “avail services” at your doorsteps
                </p>
              </div>
            </div>
            {/* <!-- <div className="col-md-6">
          <div className="section-2img">
            <figure>
              <img src="images/healthcare-img.png">
            </figure>
          </div>
        </div> --> */}
          </div>
          <div className="row" style={{ marginTop: "60px" }}>
            <div className="col-md-12">
              <div className="homeHeading">
                <h3>You will have access to…</h3>
              </div>
            </div>
            <div className="col-md-4 col-4">
              <div className="counter">
                <h2>
                  <span className="counter-count">120000</span>+
                </h2>
                <p>Partner Businesses</p>
              </div>
            </div>
            <div className="col-md-4 col-4">
              <div className="counter">
                <h2>
                  <span className="counter-count">450000</span>+
                </h2>
                <p>Stylist</p>
              </div>
            </div>
            <div className="col-md-4 col-4">
              <div className="counter">
                <h2>
                  <span className="counter-count">1</span> billion+
                </h2>
                <p>Professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
    }
    export default HomeSecTwo;