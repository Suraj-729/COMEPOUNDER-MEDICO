import React from "react";
import "../../assets/css/compeounder.css"; // Adjust the path as needed
import "../../assets/css/innerstyle.css";


const Cardio = () => {
  return (
    <div>
      <section className="service-section" id="Cardio">
        <div className="row">
          <div className="col-md-12">
            <div className="why-choose-box avail-card">
              <figure>
                <img src="images/icons/CARDIO.png" alt="Cardio" />
              </figure>
              <h4>CARDIO</h4>
              <a href="#" className="readmoreBtn"><span>Book now</span></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Cardio;