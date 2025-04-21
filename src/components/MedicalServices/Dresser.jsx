import React from "react";
import "../../assets/css/compeounder.css"; // Adjust the path as needed
import "../../assets/css/innerstyle.css";

const Dresser = () => {
  return (
    <div>
      <section className="service-section" id="Dresser">
        <div className="row">
          <div className="col-md-12">
            <div className="why-choose-box avail-card">
              <figure>
                <img src="images/icons/dresser.png" alt="Dresser" />
              </figure>
              <h4>DRESSER</h4>
              <a href="#" className="readmoreBtn">
                <span>Book now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Dresser;
