import React from "react";

import "../../assets/css/compeounder.css"; // Adjust the path as needed
import "../../assets/css/innerstyle.css";
import Cardio from "./Cardio";
import RespiratoryPage from "./respiratory";
import MobilityPage from "./Mobility";
import MrdicalBed from "./MedicalBed";
import GenCarePAge from "./GenCare";
const Equipments = () => {
  return (
    <div>
      <section
        className="avail-section-1 avail-sec-with-bg"
        id="#MedicalEquipments"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="avail-section-1-right">
                <img src="images/Medical-Equipment.png" alt="" title="" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="avail-section-1-left">
                <div className="homeHeading">
                  <h2>Medical Equipment</h2>
                </div>

                <p>
                  Introducing our revolutionary medical equipment rental service
                  “Home-Equip”, bringing unparalleled convenience to your
                  doorstep! Whether you need a hospital bed, oxygen
                  concentrator, or any specialized medical device, our diverse
                  rental options cater to all your healthcare needs. With
                  ﬂexible rental plans and easy delivery, we ensure you receive
                  top-quality equipment, from a wide variety of supplier,
                  without the hefty upfront costs, making advanced medical care
                  accessible and aﬀordable for everyone
                </p>
              </div>
              <div className="row">
                <div className="col-md-12 avail_services_col">
                  <div className="owl-carousel" id="avail_services_2">
                    <Cardio />
            <RespiratoryPage />
                    <MobilityPage />

                    <MrdicalBed />
                    <GenCarePAge />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Equipments;
