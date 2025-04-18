import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import "../assets/css/compeounder.css"; // Adjust the path as needed
import "../assets/css/innerstyle.css"; // Adjust the path if necessary


const BannerPage = () => {
  return (
    <div>
      <section className="banner">
        <div className="slider-caption text-center">
          <figure className="position-absolute top-0 end-0 me-n4 mt-n7 d-none d-xl-block">
            {/* SVG content */}
          </figure>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="banner-caption">
                  <h2>
                    <span> Revolutionizing</span>
                  </h2>
                  <h3>
                    <span> Healthcare Delivery</span>
                  </h3>
                  <h4>
                    Your intelligent medical assistant for personalized
                    healthcare solutions.
                  </h4>
                  <div className="slider-search-con">
                    <form action="">
                      <input
                        type="search"
                        placeholder="Discover health services in your area"
                      />
                      <button>Search</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerPage;
