import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import "../assets/css/compeounder.css"; // Adjust the path as needed
import "../assets/css/innerstyle.css"; // Adjust the path if necessary

const HomeSecFive = () => {
  return (
    <div>
      <section className="homeSec-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="homeHeading with-btn"
                style={{ marginLeft: "-950px" }}
              >
                <h2>Services</h2>
                <a href="#" className="readmoreBtn">
                  {" "}
                  <span> Explore Our Services</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="serviceWrapper">
                <ul>
                  <li className="row">
                    <div className="col-md-5 col-sm-5 col-3">
                      <figure>
                        <img src="images/service-1.png" />
                      </figure>
                    </div>
                    <div className="col-md-7 col-sm-7 col-9">
                      <div className="serviceWrapperInn">
                        <div className="serviceHead">
                          <h5>
                            <a href="#"> Expand your Business, boundaryless </a>
                          </h5>
                        </div>
                        <div className="serviceInnContent">
                          <p>
                            As a health service Provider and enterprise, please
                            don't wait for someone to recommend for your
                            business. Make yourself visible to across
                            city/nation and start selling to broader consumers,
                            all online, unlimited
                          </p>
                        </div>
                        <div className="serviceInnBtn">
                          <a href="#" className="signupBtn">
                            {" "}
                            <span>Read More</span>{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="serviceWrapper">
                <ul>
                  <li className="row">
                    <div className="col-md-5 col-sm-5 col-3">
                      <figure>
                        <img src="images/service-2.png" />
                      </figure>
                    </div>
                    <div className="col-md-7 col-sm-7 col-9">
                      <div className="serviceWrapperInn">
                        <div className="serviceHead">
                          <h5>
                            <a href="#">
                              Earn, when you want and, in your vicinity{" "}
                            </a>
                          </h5>
                        </div>
                        <div className="serviceInnContent">
                          <p>
                            As an individual caregiver, you can extend service
                            for those in need, outside your working hours,
                            enabling you to earn more. Manage your own calendar
                            and provide service within radius of your preference
                          </p>
                        </div>
                        <div className="serviceInnBtn">
                          <a href="#" className="signupBtn">
                            {" "}
                            <span>Read More</span>{" "}
                          </a>
                        </div>
                      </div>
                    </div>
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

export default HomeSecFive;
