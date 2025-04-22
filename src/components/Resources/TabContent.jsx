import React, { useState } from "react";
import TabNavigation from "./TabNavigationPage";
import KeyWebsitePage from "../Tabs/KeyWebsite";
import EbookPage from "../Tabs/Ebook";
import BlogPage from "../Tabs/Blog";
// import FaqPage from "../Tabs/Faq";
import SupportPage from "../Tabs/Support";

const TabContentPage = () => {
  const [activeTab, setActiveTab] = useState("KeyWebsite"); // Default active tab

  return (
    <div>
      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Tab Content */}
      <div className="tab-content" id="myTabContent" style={{ marginTop: "20px" }}>
        {activeTab === "KeyWebsite" && <KeyWebsitePage />}
        {activeTab === "Ebook" && <EbookPage />}
        {activeTab === "Blog" && <BlogPage />}
        {/* {activeTab === "Faq" && <FaqPage />} */}
        {activeTab === "Support" && <SupportPage />}
      </div>
    </div>
  );
};

export default TabContentPage;