import React from "react";
import "../../assets/css/compeounder.css"; // Adjust the path as needed
import "../../assets/css/innerstyle.css";

const BloodBankPage = () => {
  return (
    <div>
      <section className="avail-section-1" id="BloodBank">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="avail-section-1-left">
                <div className="homeHeading">
                  <h2>Blood Availability </h2>
                </div>
                <p>
                  Introducing "Blood-Link," a next-gen service designed to
                  streamline the process of ﬁnding blood units in India. With
                  BloodLink, patients and their families can eﬀortlessly access
                  real-time availability of various blood units across multiple
                  blood banks in their city. Say goodbye to the hassle of
                  visiting numerous blood banks— our user-friendly platform
                  provides instant updates, ensuring you get the blood you need
                  when you need it. Join us in transforming the way blood
                  availability is managed, and help save lives with just a few
                  clicks.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="avail-section-1-right">
                <img src="images/BloodAvailability.png" alt="" title="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BloodBankPage;

