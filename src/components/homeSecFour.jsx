import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import "../assets/css/compeounder.css"; // Adjust the path as needed
import "../assets/css/innerstyle.css"; // Adjust the path if necessary


const HomeSecFour = () => {
    return (
       

        <div>
            <section className="homeSec-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul
                className="nav nav-pills mb-3 justify-content-center"
                id="ServiceTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-services-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-services"
                    type="button"
                    role="tab"
                    aria-controls="pills-services"
                    aria-selected="true"
                  >
                    Services
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-tools-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-tools"
                    type="button"
                    role="tab"
                    aria-controls="pills-tools"
                    aria-selected="false"
                  >
                    Items
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="ServiceTabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-services"
                  role="tabpanel"
                  aria-labelledby="pills-services-tab"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="homeHeading text-white">
                        <h3>Based on national volume as of yesterday</h3>
                      </div>
                      <div className="owl-carousel pt-2" id="ServicesOwl">
                        <div className="servicesBox">
                          <figure>
                            <img
                              src="images/medical.png"
                              alt="Medical Equipment"
                            />
                          </figure>
                          <figcaption>
                            <h3>Medical Equipment</h3>
                          </figcaption>
                        </div>
                        <div className="servicesBox">
                          <figure>
                            <img src="images/caregiver.png" alt="CareGiver" />
                          </figure>
                          <figcaption>
                            <h3>CareGiver</h3>
                          </figcaption>
                        </div>
                        <div className="servicesBox">
                          <figure>
                            <img src="images/Blood-Bank.png" alt="Blood Bank" />
                          </figure>
                          <figcaption>
                            <h3>Blood Bank</h3>
                          </figcaption>
                        </div>
                        <div className="servicesBox">
                          <figure>
                            <img
                              src="images/accommodation.png"
                              alt="Accommodation"
                            />
                          </figure>
                          <figcaption>
                            <h3>Accommodation</h3>
                          </figcaption>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-tools"
                  role="tabpanel"
                  aria-labelledby="pills-tools-tab"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="homeHeading text-white">
                        <h3>Based on national volume as of yesterday</h3>
                      </div>
                      <div className="owl-carousel pt-2" id="ServicesOwl2">
                        <div className="servicesBox">
                          <figure>
                            <img src="images/medical.png" alt="Dresser" />
                          </figure>
                          <figcaption>
                            <h3>Dresser</h3>
                          </figcaption>
                        </div>
                        <div className="servicesBox">
                          <figure>
                            <img
                              src="images/Dialysis-Kit.png"
                              alt="Dialysis Kit"
                            />
                          </figure>
                          <figcaption>
                            <h3>Dialysis Kit</h3>
                          </figcaption>
                        </div>
                        <div className="servicesBox">
                          <figure>
                            <img
                              src="images/Guest-House.png"
                              alt="Guest House"
                            />
                          </figure>
                          <figcaption>
                            <h3>Guest House</h3>
                          </figcaption>
                        </div>
                        <div className="servicesBox">
                          <figure>
                            <img src="images/O+-Blood.png" alt="O+ Blood" />
                          </figure>
                          <figcaption>
                            <h3>O+ Blood</h3>
                          </figcaption>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
};

export default HomeSecFour;