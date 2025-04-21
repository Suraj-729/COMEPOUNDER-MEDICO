import React from "react";
import "../../assets/css/compeounder.css"; // Adjust the path as needed
import "../../assets/css/innerstyle.css";
const CustomSolution = () => {
  return (
    <div className="col-md-6">
      <div className="solutionType" style={{ backgroundColor: "#ecfffe" }}>
        <figure>
          <img src="images/icons/custom-service.png" alt="Custom Solution Icon" />
        </figure>
        <h3>Custom Solution</h3>
        <p>Use this solution, if your demand is for fresh set-up</p>
        <a href="/" className="customBtn readmoreBtn">
          <span>Contact Sales</span>
        </a>
      </div>
    </div>
  );
};

export default CustomSolution;