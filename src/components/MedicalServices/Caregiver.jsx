import React from "react";
import ElderlyCare from "./ElderlyCare";
import ChildCare from "./ChildCare";
import Nurse from "./Nurse";
import Dresser from "./Dresser";
import Physio from "./Physio";

import "../../assets/css/compeounder.css"; // Adjust the path as needed
import "../../assets/css/innerstyle.css";

const Caregiver = () => {
    return (
      <section className="avail-section-1" id="Caregiver">
        <div className="container">
          <div className="row">
            {/* Left Section */}
            <div className="col-md-8">
              <div className="avail-section-1-left">
                <div className="homeHeading">
                  <h2>Medical Caregiver</h2>
                </div>
                <p>
                  Introducing "Care@Home," your ultimate solution for seamless,
                  on-demand health caregiver services right at your doorstep.
                  Whether you need postoperative care, elderly assistance, or
                  specialized medical support, Care@Home connects you with highly
                  qualified and vetted caregivers in no time. Our user-friendly
                  platform allows you to choose from a wide array of Providers,
                  who are best in the business. Once chosen, you can book,
                  schedule and manage your caregiver services effortlessly.
                </p>
  
                {/* Services Section */}
                <div className="row">
                  <div className="col-md-12 avail_services_col">
                    <div className="owl-carousel" id="avail_services_1">
                      <ElderlyCare
                        
                      />
                      <Nurse
                        image="images/icons/CHILD_CARE.png"
                        title="CHILD CARE"
                        link="#"
                      />
                      <ChildCare
                        
                      />
                      <Dresser
                       
                      />
                      <Physio
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Right Section */}
            <div className="col-md-4">
              <div className="avail-section-1-right">
                <img
                  src="images/MedicalCaregiver.png"
                  alt="Medical Caregiver"
                  title="Medical Caregiver"
                  className="caregiver-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Caregiver;