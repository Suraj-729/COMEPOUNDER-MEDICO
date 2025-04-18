import React from "react";
import "../assets/css/innerstyle.css";
import "../assets/css/compeounder.css"; // Assuming you have a CSS file for styling
const CoreValue = () => {
  const values = [
    {
      imgSrc: "images/icons/access-control.png",
      title: "Accessibility",
      description:
        "Ensuring that medical information and services are available to all, with a focus on removing barriers to access.",
    },
    {
      imgSrc: "images/icons/money.png",
      title: "Affordability",
      description:
        "Providing tiered service options to accommodate various financial capabilities, ensuring no one is left behind.",
    },
    {
      imgSrc: "images/icons/save-time.png",
      title: "Timeliness",
      description:
        "Delivering information and services promptly to meet urgent needs and support timely healthcare decisions.",
    },
    {
      imgSrc: "images/icons/trust.png",
      title: "Integrity",
      description:
        "Maintaining the highest standards of accuracy, reliability, and ethical practices in all information and services provided.",
    },
    {
      imgSrc: "images/icons/collaborate.png",
      title: "Collaboration",
      description:
        "Working with healthcare providers, institutions, and technology partners to create a unified and efficient medical ecosystem.",
    },
    {
      imgSrc: "images/icons/project-management.png",
      title: "Innovation",
      description:
        "Continuously seeking new ways to improve access, affordability, and the delivery of medical information and services.",
    },
  ];

  return (
    <section className="corevalue">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="innerHeading">
              <h2>Core Values</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {values.map((value, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div className="why-choose-box">
                <figure>
                  <img src={value.imgSrc} alt={value.title} />
                </figure>
                <h4>{value.title}</h4>
                <div className="why-choose-box-content">
                  <p>{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValue;