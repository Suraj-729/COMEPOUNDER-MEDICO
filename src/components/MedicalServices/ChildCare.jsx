import React from "react";
import "../../assets/css/compeounder.css"; // Adjust the path as needed
import "../../assets/css/innerstyle.css";

const Childcare = () => {
  return (
    <div>
      <section className="service-section" id="ChildCare">
        <div className="row">
          <div className="col-md-12">
            <div className="why-choose-box avail-card">
              <figure>
                <img src="images/icons/CHILD_CARE.png" alt="Child Care" />
              </figure>
              <h4>CHILD CARE</h4>
              <a href="/" className="readmoreBtn">
                <span>Book now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Childcare;
