import React from "react";
import "../../assets/css/compeounder.css"; // Adjust the path as needed
import "../../assets/css/innerstyle.css";

const DiagnosticsPage = () => {
  return (
    <div>
      <section className="avail-section-1  avail-sec-with-bg" id="Diagnostics">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="avail-section-1-right">
                <img src="images/Quicker-Diagnosis.png" alt="" title="" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="avail-section-1-left">
                <div className="homeHeading">
                  <h2>Quicker Diagnosis</h2>
                </div>
                <p>
                  Discover a smarter, more convenient way to access essential
                  diagnostic services with our innovative platform. Say goodbye
                  to long hospital queues and exorbitant prices. Our service
                  empowers you to eﬀortlessly locate nearby private diagnostic
                  centers, explore their comprehensive test menus, and
                  seamlessly book appointments—all from the comfort of your
                  home. Enjoy signiﬁcant cost savings, reduced wait times, and
                  the peace of mind that comes with quick, reliable healthcare
                  solutions.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default DiagnosticsPage;
