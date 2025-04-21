import React from "react";
import "../../assets/css/compeounder.css"; // Adjust the path as needed
import "../../assets/css/innerstyle.css";
import "../../assets/@fortawesome/fontawesome-free/css/all.min.css"; // Ensure this path is correct based on your project structure

const SelfService = () => {
  return (
    <div className="col-md-6">
      <div className="solutionType">
        <figure>
          <img src="images/icons/kiosk.png" alt="Self Service Icon" />
        </figure>
        <h3>Self Serviced</h3>
        <p>Use this service, if your demand is Incremental in nature</p>
        <ul className="list">
          <li><i className="fa-solid fa-arrow-right"></i> Download the App</li>
          <li><i className="fa-solid fa-arrow-right"></i> Go-to Business</li>
          <li><i className="fa-solid fa-arrow-right"></i> Select the service</li>
          <li><i className="fa-solid fa-arrow-right"></i> Fill-the requirement</li>
        </ul>
        <p>Wait to get this fulfilled. You can track the progress on the app itself</p>
        <a className="customBtn readmoreBtn" onClick={() => alert("Login clicked!")}>
          <span>Login</span>
        </a>
      </div>
    </div>
  );
};

export default SelfService;