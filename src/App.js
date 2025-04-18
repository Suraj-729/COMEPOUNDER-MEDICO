import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Comepounder from "./pages/Comepounder";
import AboutUs from "./pages/AboutUs";

import "./assets/css/bootstrap/scss/bootstrap.scss";



function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
       
       
        <Route path="/" element={<Comepounder />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;