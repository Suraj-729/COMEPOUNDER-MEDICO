import React from 'react';
 // Optional: Add a CSS file for styling
import "../assets/css/compeounder.css"; // Assuming you have a CSS file for styling
import "../assets/css/innerstyle.css";

const Mission = () => {
  return (
    <section className="mission">
      <div className="container">
        <div className="row">
          {/* Mission Section */}
          <div className="col-md-6 mv-col">
            <div className="mv-box">
              <div className="row">
                <div className="col-md-4">
                  <img src="images/mission.png" alt="Mission" />
                </div>
                <div className="col-md-8">
                  <div className="innerHeading">
                    <h3>Mission</h3>
                  </div>
                  <p>
                    To empower individuals and healthcare professionals with seamless, timely, and
                    affordable access to comprehensive medical ecosystem information and services,
                    fostering informed decision-making, enhancing health outcomes, and promoting
                    equitable healthcare for all.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="col-md-6 mv-col vision">
            <div className="mv-box">
              <div className="row">
                <div className="col-md-8">
                  <div className="innerHeading">
                    <h3>Vision</h3>
                  </div>
                  <p>
                    We envision a world where every person, regardless of socioeconomic status, has
                    the ability to access vital medical information and services when they need
                    them, ultimately leading to a healthier, more informed global community.
                  </p>
                </div>
                <div className="col-md-4">
                  <img src="images/vission.png" alt="Vision" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;