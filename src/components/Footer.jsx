import React from "react";
// import "./Footer.css"; // Assuming you have a CSS file for styling
import "../assets/css/compeounder.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footerWrap">
          <div className="row">
            <div className="col-md-4">
              <div className="footerHead">
                <div className="footer-image">
                  <img src="./images/logo.png" alt="Logo" />
                </div>
                <p>
                  Your health, our priority with
                  <br />
                  personalized support
                </p>
                <ul className="flist">
                  <li>
                    <i className="fa-solid fa-phone"></i> +1234567890
                  </li>
                  <li>
                    <a href="mailto:info@comepounder.com">
                      <i className="fa-solid fa-envelope"></i> info@comepounder.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footerHead">
                <h4>Product</h4>
              </div>
              <div className="row">
                <div className="col-6">
                  <ul className="flist">
                    <li>
                      <a href="avail.html#Caregiver">Caregiver</a>
                    </li>
                    <li>
                      <a href="avail.html#MedicalEquipments">Medical Equipments</a>
                    </li>
                    <li>
                      <a href="avail.html#Accomodation">Accomodation</a>
                    </li>
                    <li>
                      <a href="avail.html#PatientMeal">Patient Meal</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="flist">
                    <li>
                      <a href="avail.html#Diagnostics">Diagnostics</a>
                    </li>
                    <li>
                      <a href="avail.html#RehabCenters">Rehab Centers</a>
                    </li>
                    <li>
                      <a href="avail.html#BloodBank">Blood Bank</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="footerHead">
                <h4>More</h4>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="flist">
                      <li>
                        <a href="discover.html">Discover </a>
                      </li>
                      <li>
                        <a href="avail.html">Avail</a>
                      </li>
                      <li>
                        <a href="resources.html">Resources</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="flist">
                      <li>
                        <a href="#">Privacy Policy </a>
                      </li>
                      <li>
                        <a href="#">Terms & Conditions</a>
                      </li>
                      <li>
                        <a href="#">Disclaimers</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="small m-0 pt-2">Copyright @ comePounder 2025</p>
      </div>
    </footer>
  );
};

export default Footer;