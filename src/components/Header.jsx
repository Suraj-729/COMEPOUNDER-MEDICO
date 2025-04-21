import React from "react";
import "../assets/css/compeounder.css"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom"; // Import Link from react-router-dom
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 col-6">
            <div className="logocaption">
              <a href="index.html">
                <img src="./images/logo.png" alt="Logo" />
              </a>
            </div>
          </div>
          <div className="col-md-9 col-6">
            <div className="rightnav">
              <nav className="navbar navbar-expand-lg">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarCompounder"
                  aria-controls="navbarCompounder"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarCompounder"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="discover.html">
                        Discover
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/avail">
                        Avail
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/bussiness">
                        Business
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="resources.html">
                        Resources
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/aboutus">
                        About
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <a href="/" className="signupBtn">
                <span> Sign Up</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;