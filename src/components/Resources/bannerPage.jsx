import React from "react";
import "../../assets/css/compeounder.css"; // Adjust the path as needed
import "../../assets/css/innerstyle.css";

const ResourceBannerPage = () => {
  return (
    <div>
       <section className="innerPageBanner">
        <figure>
            <img src="images/Comepounder.jpg" alt="" />
        </figure>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-12 text-center">
                    <div className="innerPageBannerHeading">
                        <h2>Explore all our resources</h2>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Resources</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </div>
  );
};
export default ResourceBannerPage;
