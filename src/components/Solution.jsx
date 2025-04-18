import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import "../assets/css/compeounder.css"; // Adjust the path as needed
import "../assets/css/innerstyle.css"; // Adjust the path if necessary


const Solution = () => {
   return(
<div>
<section className="solutions-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-md-0">
            <div className="homeHeading with-btn" style={{ marginLeft: "-1000px" }}>
              <h2>Solutions</h2>
              <a href="#" className="readmoreBtn">
                <span>Explore Our Solutions</span>
              </a>
            </div>
            <div className="owl-carousel" id="solutionOwl">
              <div className="solution-item">
                <div className="solutionWrapper">
                  <figure>
                    <a href="#">
                      <img src="/images/solution.png" alt="Solution 1" />
                    </a>
                  </figure>
                  <h3>
                    <a href="#">Offload your non-core overheads</a>
                  </h3>
                  <p>
                    We have the right business solutions carved out for you,
                    enabling you to have relentless focus on your core. Let
                    comePounder do the heavy lifting, needed for a smoother
                    run of your operations.
                  </p>
                  <div className="solutioInnBtn">
                    <a href="#" className="signupBtn">
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="solution-item">
                <div className="solutionWrapper">
                  <figure>
                    <a href="#">
                      <img src="/images/solution.png" alt="Solution 2" />
                    </a>
                  </figure>
                  <h3>
                    <a href="#">Enhance customer experience</a>
                  </h3>
                  <p>
                    Deliver exceptional customer service and build lasting
                    relationships with our tailored solutions designed to
                    improve engagement and satisfaction.
                  </p>
                  <div className="solutioInnBtn">
                    <a href="#" className="signupBtn">
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="solution-item">
                <div className="solutionWrapper">
                  <figure>
                    <a href="#">
                      <img src="/images/solution.png" alt="Solution 3" />
                    </a>
                  </figure>
                  <h3>
                    <a href="#">Optimize your supply chain</a>
                  </h3>
                  <p>
                    Streamline your logistics and improve efficiency with our
                    innovative solutions that optimize your supply chain
                    management.
                  </p>
                  <div className="solutioInnBtn">
                    <a href="#" className="signupBtn">
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="solution-item">
                <div className="solutionWrapper">
                  <figure>
                    <a href="#">
                      <img src="/images/solution.png" alt="Solution 4" />
                    </a>
                  </figure>
                  <h3>
                    <a href="#">Drive business growth</a>
                  </h3>
                  <p>
                    Unlock new opportunities and expand your business with our
                    strategic solutions focused on innovation and market
                    development.
                  </p>
                  <div className="solutioInnBtn">
                    <a href="#" className="signupBtn">
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* You can add more solution items here */}
            </div>
          </div>
        </div>
      </div>
    </section>
</div>

   )
}

export default Solution;