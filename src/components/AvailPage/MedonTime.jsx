import React from "react";
import "../../assets/css/compeounder.css"; // Adjust the path as needed
import "../../assets/css/innerstyle.css";

const MedsOnTimePage = () => {
  return (
    <div>
      <section class="avail-section-1  avail-sec-with-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="avail-section-1-right">
                <img src="images/Meds-on-time.png" alt="" title="" />
              </div>
            </div>
            <div class="col-md-8">
              <div class="avail-section-1-left">
                <div class="homeHeading">
                  <h2>Meds on-time</h2>
                </div>
                <p>
                  Introducing Medi-Swift, the groundbreaking platform
                  revolutionizing the way life-saving medications are delivered.
                  Unlike traditional services that focus on speciﬁc brands or
                  lengthy delivery times, Medi-Swift specializes in rapid,
                  10minute delivery of any prescribed medication, ensuring that
                  critical drugs reach patients when they need them most. By
                  leveraging advanced logistics and a vast network of partnered
                  pharmacies, MediSwift guarantees quick, reliable, and
                  brand-agnostic delivery, making it the essential service for
                  urgent medical needs.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default MedsOnTimePage;
