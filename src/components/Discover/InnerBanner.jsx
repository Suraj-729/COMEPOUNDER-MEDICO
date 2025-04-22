import React, { useState } from "react";
import "../../assets/css/compeounder.css";
import "../../assets/css/innerstyle.css";

const InererBannerPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <section className="innerBanner">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="homeHeading">
              <div className="select-area">
                <div className="select-area-wrapper">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    onClick={toggleDropdown}
                  >
                    <i className="fa-solid fa-magnifying-glass"></i> All Treatments and Venus
                  </button>

                  {dropdownOpen && (
                    <ul className="dropdown-menu show">
                      <li><button className="dropdown-item">Treatment</button></li>
                      <li><button className="dropdown-item">Treatment</button></li>
                      <li><button className="dropdown-item">Treatment</button></li>
                    </ul>
                  )}

                  <button className="location-btn">
                    <i className="fa-solid fa-location-dot"></i> Current Location
                  </button>

                  <button className="search">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InererBannerPage;
