import React from "react";
import "../../assets/css/compeounder.css";
import "../../assets/css/innerstyle.css";
import "../../assets/css/bootstrap/dist/css/bootstrap.min.css"; // Adjust the path as needed     
const LatestCompounder = () => {
  return (
    <section className="resources-page">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="homeHeading">
              <h2>Latest @Comepounder</h2>
            </div>
            <div className="lates-resources">
              <figure>
                <img src="images/nutrition-dieting.jpg" alt="" title="" />
              </figure>
              <h4>Heading goes here</h4>
              <div className="lates-resources-content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="announcements-events-con">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="Announcements-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Announcements-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="Announcements-tab-pane"
                    aria-selected="true"
                  >
                    Announcements
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                  >
                    Events
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="Announcements-tab-pane"
                  role="tabpanel"
                  aria-labelledby="Announcements-tab"
                  tabIndex="0"
                >
                  <div className="announcements-events">
                    <ul>
                      {Array(6)
                        .fill(0)
                        .map((_, index) => (
                          <li key={index}>
                            <figure>
                              <img src="images/Announcements.png" alt="" />
                            </figure>
                            <div className="announcements-events-content">
                              <p>
                                <a href="#">
                                  Centre, Delhi Govt Sign MoU to Roll Out
                                  Ayushman Bharat with ₹10 Lakh Cover per Family
                                </a>
                              </p>
                              <div className="announcements-date">
                                <span>April </span>
                                <span> 5</span>
                              </div>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile-tab-pane"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                  tabIndex="0"
                >
                  <div className="announcements-events">
                    <ul>
                      {Array(6)
                        .fill(0)
                        .map((_, index) => (
                          <li key={index}>
                            <figure>
                              <img src="images/Announcements.png" alt="" />
                            </figure>
                            <div className="announcements-events-content">
                              <p>
                                <a href="#">
                                  Centre, Delhi Govt Sign MoU to Roll Out
                                  Ayushman Bharat with ₹10 Lakh Cover per Family
                                </a>
                              </p>
                              <div className="announcements-date">
                                <span>April </span>
                                <span> 5</span>
                              </div>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestCompounder;