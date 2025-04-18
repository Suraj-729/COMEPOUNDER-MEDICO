import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import "../assets/css/compeounder.css"; // Adjust the path as needed
import "../assets/css/innerstyle.css"; // Adjust the path if necessary


const HomeSecSix = () => {
     return(

        <div>
              <section className="homeSec-6">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="homeHeading">
                <h2 className="text-dark">It's easier with the apps</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-4">
              <div className="appWrapper">
                <div className="appIcon">
                  <img src="images/icons/smartphone.png" />
                </div>
                <h4>Consumer App</h4>
                <p>
                  Meant for all users. Download from Google Play store of Apple
                  Play Store
                </p>
                <div className="playstore">
                  <a
                    href="https://play.google.com/store/games?hl=en_IN&pli=1"
                    target="_blank"
                  >
                    <img src="images/playstore.png" />
                  </a>
                  <a href="https://www.apple.com/in/app-store/" target="_blank">
                    <img src="images/AppStore.png" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-4">
              <div className="phoneApp">
                <figure>
                  <img src="images/phone-app.png" />
                </figure>
              </div>
            </div>
            <div className="col-md-4 col-4">
              <div className="appWrapper">
                <div className="appIcon">
                  <img src="images/icons/medical-app.png" />
                </div>
                <h4>Provider App</h4>
                <p>
                  Meant for Providers. Download from Google Play Store of Apple
                  Play Store
                </p>
                <div className="playstore">
                  <a
                    href="https://play.google.com/store/games?hl=en_IN&pli=1"
                    target="_blank"
                  >
                    <img src="images/playstore.png" />
                  </a>
                  <a href="https://www.apple.com/in/app-store/" target="_blank">
                    <img src="images/AppStore.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
     )
}

export default HomeSecSix;