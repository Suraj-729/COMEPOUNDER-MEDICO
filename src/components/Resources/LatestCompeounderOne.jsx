import React from "react";
import "../../assets/css/compeounder.css";
import "../../assets/css/innerstyle.css";
import "../../assets/css/bootstrap/dist/css/bootstrap.min.css"; // Adjust the path as needed

import TabNavigation from "./TabNavigationPage";
import TabContentPage from "./TabContent";                         

const LatestCompounderOne = () => {
  return (
    <section className="resources-page-section-2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="resources-page-tab">
              <TabNavigation />
              <TabContentPage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestCompounderOne;