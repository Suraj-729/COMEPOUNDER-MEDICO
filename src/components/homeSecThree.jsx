import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import "../assets/css/compeounder.css"; // Adjust the path as needed
import "../assets/css/innerstyle.css"; // Adjust the path if necessary


const HomeSecThree = () => {

    return (
        <div>
             <section className="homeSec-3">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="sec-3Content-left">
                <div className="homeHeading">
                  <h2 className="text-white">
                    Information is not something, you will be concerned with
                  </h2>
                </div>
                <div className="sec-3Content">
                  <p>
                    Magine having an intelligent medical assistant at your home,
                    available to provide personalized informational support in
                    your preferred language. With comePounder™, this vision
                    becomes a reality. Our AI-driven platform empowers users to
                    ask questions, receive detailed information on doctor's
                    prescriptions, radiological and pathological reports, and
                    effortlessly schedule reminders for medications or medical
                    tests.
                  </p>
                </div>
                <a href="#" className="downloadApp">
                  Download App
                </a>
              </div>
            </div>
            <div className="col-md-5">
              {/* <!-- <div className="rightContentSec-3">
            <figure>
              <img src="images/nurse.png">
            </figure>
          </div> --> */}
              <div className="sec-3Content-right">
                <div
                  id="carouselComepound"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselComepound"
                      data-bs-slide-to="0"
                      className="active btnOne"
                      aria-current="true"
                      aria-label="Slide 1"
                    >
                      <img src="images/icons/medicalsystem.png" />
                    </button>
                    <button
                      type="button"
                      data-bs-target="#carouselComepound"
                      data-bs-slide-to="1"
                      className="btnTwo"
                      aria-label="Slide 2"
                    >
                      <img src="images/icons/labdoc.png" />
                    </button>
                    <button
                      type="button"
                      data-bs-target="#carouselComepound"
                      data-bs-slide-to="2"
                      className="btnThree"
                      aria-label="Slide 3"
                    >
                      <img src="images/icons/mobData.png" />
                    </button>
                    <button
                      type="button"
                      data-bs-target="#carouselComepound"
                      data-bs-slide-to="3"
                      className="btnFour"
                      aria-label="Slide 4"
                    >
                      <img src="images/icons/setlab.png" />
                    </button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="carouselComepoundImg">
                        <figure>
                          {" "}
                          <img
                            src="images/Assistant.png"
                            className="d-block"
                            alt="..."
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="carouselComepoundImg">
                        <figure>
                          {" "}
                          <img
                            src="images/AI-Assistant.png"
                            className="d-block"
                            alt="..."
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="carouselComepoundImg">
                        <figure>
                          {" "}
                          <img
                            src="images/Assistant-2.png"
                            className="d-block"
                            alt="..."
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="carouselComepoundImg">
                        <figure>
                          {" "}
                          <img
                            src="images/Assistant-3.png"
                            className="d-block"
                            alt="..."
                          />
                        </figure>
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
    );
    }
    export default HomeSecThree;