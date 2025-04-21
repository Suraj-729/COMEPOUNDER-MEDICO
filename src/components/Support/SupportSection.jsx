import React from "react";
import SelfService from "./SelfService";
import CustomSolution from "./CustomerClient";
import "../../assets/css/compeounder.css"; // Adjust the path as needed
import "../../assets/css/innerstyle.css";
const MainComponent = () => {
  return (
    <section className="businessEnd">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="homeHeading text-center">
              <h2>Two Ways to Get Started</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <SelfService />
          <CustomSolution />
        </div>
      </div>
    </section>
  );
};

export default MainComponent;