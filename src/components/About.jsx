import React from "react";
import "../assets/css/compeounder.css";
import "../assets/css/innerstyle.css"; // Assuming you have a CSS file for styling
const About = () => {
  return (
    <div>
      <section className="aboutus">
        <figure className="aboutus-bg-1">
          <img src="images/hm5-hero-left_shape.png" alt="" />
        </figure>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="innerHeading">
                <h2>About Us</h2>
              </div>
              <div className="aboutContent">
                <p>
                  We are a young company, borne out of necessity. We aim to
                  democratize access to the entire medical ecosystem, ensuring
                  that healthcare information is available to one and all,
                  irrespective of social or literacy status and overcoming the
                  language barrier.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="aboutContentRight">
                <div className="figOne">
                  <figure>
                    <img src="images/about-banner-img-2.png" alt="" />
                  </figure>
                </div>
                <div className="figTwo">
                  <figure>
                    <img src="images/about-pae-img3.png" alt="" />
                  </figure>
                </div>
                <div className="figThree">
                  <figure>
                    <img src="images/about-pae-img4.png" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
