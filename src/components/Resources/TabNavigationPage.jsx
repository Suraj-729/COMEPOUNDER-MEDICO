import React, { useState } from "react";
import "../../assets/css/compeounder.css";
import "../../assets/css/innerstyle.css";
import "../../assets/css/bootstrap/dist/css/bootstrap.min.css";
// import FaqPageOne from "../Tabs/Faq";

const TabNavigationPage = () => {
  const [activeTab, setActiveTab] = useState("KeyWebsite"); // Default active tab

  return (
    <div>
      {/* Tab Navigation */}
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "KeyWebsite" ? "active" : ""}`}
            onClick={() => setActiveTab("KeyWebsite")}
            type="button"
            role="tab"
          >
            Key Website
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "Ebook" ? "active" : ""}`}
            onClick={() => setActiveTab("Ebook")}
            type="button"
            role="tab"
          >
            E-Book/Guide
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "Blog" ? "active" : ""}`}
            onClick={() => setActiveTab("Blog")}
            type="button"
            role="tab"
          >
            Blog
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "Faq" ? "active" : ""}`}
            onClick={() => setActiveTab("Faq")}
            type="button"
            role="tab"
          >
            FAQ
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "Support" ? "active" : ""}`}
            onClick={() => setActiveTab("Support")}
            type="button"
            role="tab"
          >
            Support
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content" style={{ marginTop: "20px" }}>
        {activeTab === "KeyWebsite" && (
          <div>
            <h1>Key Website Content</h1>
            <p>Content for the Key Website tab goes here.</p>
          </div>
        )}
        {activeTab === "Ebook" && (
          <div>
            <h1>E-Book/Guide Content</h1>
            <p>Content for the E-Book/Guide tab goes here.</p>
          </div>
        )}
        {activeTab === "Blog" && (
          <div>
            <h1>Blog Content</h1>
            <p>Content for the Blog tab goes here.</p>
          </div>
        )}
        {/* {activeTab === "Faq" && */}
          
    
        {activeTab === "Support" && (
          <div>
            <h1>Support Content</h1>
            <p>Content for the Support tab goes here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabNavigationPage;