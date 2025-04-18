import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Comepounder from "./pages/Comepounder";

import "./assets/css/bootstrap/scss/bootstrap.scss";



function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
       
       
        <Route path="/" element={<Comepounder />} />
        
      </Routes>
    </Router>
  );
}

export default App;