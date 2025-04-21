import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Comepounder from "./pages/Comepounder";
import AboutUs from "./pages/AboutUs";
import BussinessPage from "./pages/Bussiness";
import AvailPage from "./pages/Avail";
import "./assets/css/bootstrap/scss/bootstrap.scss";



function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
       
       
        <Route path="/" element={<Comepounder />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/bussiness" element={<BussinessPage />} />
        <Route path="/avail" element={<AvailPage />} />
      </Routes>
    </Router>
  );
}

export default App;