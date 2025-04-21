import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import "../../assets/css/compeounder.css"; // Adjust the path as needed
import "../../assets/css/innerstyle.css"; // Adjust the path if necessary

const EquipmentSolutionPage = () => {
  return (
    <div>
      <section className="solution-wrapper solution-right">
        <figure className="solution-image">
          <img src="images/delivery-equipment.jpg" alt="" />
        </figure>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="homeHeading">
                <h2>Equipments Solution</h2>
              </div>
              <p>
                {" "}
                Introducing comePounder's B2B Service Fast-Equip, your ultimate
                partner for seamless procurement of essential medical equipment
                for hospitals and rehab centers. Whether you're expanding your
                facility or setting up a new one, our dedicated service
                simplifies the oftencomplex procurement process. Simply specify
                your bulk requirements and rate expectations, and we handle the
                rest. Our platform connects you with reliable suppliers,
                ensuring timely delivery and competitive pricing. With
                comePounder, you can focus on patient care while we take care of
                your equipment needs, making your expansion or setup process
                smoother and more efficient.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default EquipmentSolutionPage;
