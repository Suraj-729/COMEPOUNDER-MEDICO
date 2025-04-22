import React from "react";

import "../assets/css/compeounder.css";
import "../assets/css/innerstyle.css"; // Assuming you have a CSS file for styling
import Header from "../components/Header";
import Footer from "../components/Footer";
import ResourceBannerPage from "../components/Resources/bannerPage";
import LatestCompounder from "../components/Resources/LatestCompeounder";
import LatestCompounderOne from "../components/Resources/LatestCompeounderOne";
// import TablePannelPage from "../components/Resources/TablePannel";
const ResourcesPage = () => {
    return (
        <div>
            <Header />
              <ResourceBannerPage />
              <LatestCompounder />
              <LatestCompounderOne />
              {/* <TablePannelPage /> */}
            


            <Footer />
        </div>
    );
}   
export default ResourcesPage;
