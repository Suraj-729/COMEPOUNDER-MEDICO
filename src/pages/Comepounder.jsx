import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import "../assets/css/compeounder.css"; // Adjust the path as needed

const Comepounder = () => {
  return (
    <div>
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
                        <a className="nav-link" href="avail.html">
                          Avail
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="business.html">
                          Business
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="resources.html">
                          Resources
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="about.html">
                          About
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
                <a href="#" className="signupBtn">
                  <span> Sign Up</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="banner">
        <div className="slider-caption text-center">
          <figure className="position-absolute top-0 end-0 me-n4 mt-n7 d-none d-xl-block">
            {/* SVG content */}
          </figure>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="banner-caption">
                  <h2>
                    <span> Revolutionizing</span>
                  </h2>
                  <h3>
                    <span> Healthcare Delivery</span>
                  </h3>
                  <h4>
                    Your intelligent medical assistant for personalized
                    healthcare solutions.
                  </h4>
                  <div className="slider-search-con">
                    <form action="">
                      <input
                        type="search"
                        placeholder="Discover health services in your area"
                      />
                      <button>Search</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="homeSec-2">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-6">
              <div className="section-2Content">
                <div className="homeHeading">
                  <h2>Revolutionizing Healthcare Delivery and Experience </h2>
                </div>
                <p>
                  At comePounder™, we redefine healthcare with personalized
                  support, connecting you to a variety of health service
                  providers, ranging from Caregivers, Equipment Suppliers, Rehab
                  centers, Bloodbanks, Accommodation service providers or
                  Patient meal suppliers, all through a single window, making
                  you to “choose” and “avail services” at your doorsteps
                </p>
              </div>
            </div>
            {/* <!-- <div className="col-md-6">
          <div className="section-2img">
            <figure>
              <img src="images/healthcare-img.png">
            </figure>
          </div>
        </div> --> */}
          </div>
          <div className="row" style={{ marginTop: "60px" }}>
            <div className="col-md-12">
              <div className="homeHeading">
                <h3>You will have access to…</h3>
              </div>
            </div>
            <div className="col-md-4 col-4">
              <div className="counter">
                <h2>
                  <span className="counter-count">120000</span>+
                </h2>
                <p>Partner Businesses</p>
              </div>
            </div>
            <div className="col-md-4 col-4">
              <div className="counter">
                <h2>
                  <span className="counter-count">450000</span>+
                </h2>
                <p>Stylist</p>
              </div>
            </div>
            <div className="col-md-4 col-4">
              <div className="counter">
                <h2>
                  <span className="counter-count">1</span> billion+
                </h2>
                <p>Professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="homeSec-3">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="sec-3Content-left">
                <div className="homeHeading">
                  <h2 className="text-white">
                    Information is not something, you will be concerned with
                  </h2>
                </div>
                <div className="sec-3Content">
                  <p>
                    Magine having an intelligent medical assistant at your home,
                    available to provide personalized informational support in
                    your preferred language. With comePounder™, this vision
                    becomes a reality. Our AI-driven platform empowers users to
                    ask questions, receive detailed information on doctor's
                    prescriptions, radiological and pathological reports, and
                    effortlessly schedule reminders for medications or medical
                    tests.
                  </p>
                </div>
                <a href="#" className="downloadApp">
                  Download App
                </a>
              </div>
            </div>
            <div className="col-md-5">
              {/* <!-- <div className="rightContentSec-3">
            <figure>
              <img src="images/nurse.png">
            </figure>
          </div> --> */}
              <div className="sec-3Content-right">
                <div
                  id="carouselComepound"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselComepound"
                      data-bs-slide-to="0"
                      className="active btnOne"
                      aria-current="true"
                      aria-label="Slide 1"
                    >
                      <img src="images/icons/medicalsystem.png" />
                    </button>
                    <button
                      type="button"
                      data-bs-target="#carouselComepound"
                      data-bs-slide-to="1"
                      className="btnTwo"
                      aria-label="Slide 2"
                    >
                      <img src="images/icons/labdoc.png" />
                    </button>
                    <button
                      type="button"
                      data-bs-target="#carouselComepound"
                      data-bs-slide-to="2"
                      className="btnThree"
                      aria-label="Slide 3"
                    >
                      <img src="images/icons/mobData.png" />
                    </button>
                    <button
                      type="button"
                      data-bs-target="#carouselComepound"
                      data-bs-slide-to="3"
                      className="btnFour"
                      aria-label="Slide 4"
                    >
                      <img src="images/icons/setlab.png" />
                    </button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="carouselComepoundImg">
                        <figure>
                          {" "}
                          <img
                            src="images/Assistant.png"
                            className="d-block"
                            alt="..."
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="carouselComepoundImg">
                        <figure>
                          {" "}
                          <img
                            src="images/AI-Assistant.png"
                            className="d-block"
                            alt="..."
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="carouselComepoundImg">
                        <figure>
                          {" "}
                          <img
                            src="images/Assistant-2.png"
                            className="d-block"
                            alt="..."
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="carouselComepoundImg">
                        <figure>
                          {" "}
                          <img
                            src="images/Assistant-3.png"
                            className="d-block"
                            alt="..."
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="homeSec-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul
                className="nav nav-pills mb-3 justify-content-center"
                id="ServiceTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-services-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-services"
                    type="button"
                    role="tab"
                    aria-controls="pills-services"
                    aria-selected="true"
                  >
                    Services
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-tools-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-tools"
                    type="button"
                    role="tab"
                    aria-controls="pills-tools"
                    aria-selected="false"
                  >
                    Items
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="ServiceTabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-services"
                  role="tabpanel"
                  aria-labelledby="pills-services-tab"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="homeHeading text-white">
                        <h3>Based on national volume as of yesterday</h3>
                      </div>
                      <div className="owl-carousel pt-2" id="ServicesOwl">
                        <div className="servicesBox">
                          <figure>
                            <img
                              src="images/medical.png"
                              alt="Medical Equipment"
                            />
                          </figure>
                          <figcaption>
                            <h3>Medical Equipment</h3>
                          </figcaption>
                        </div>
                        <div className="servicesBox">
                          <figure>
                            <img src="images/caregiver.png" alt="CareGiver" />
                          </figure>
                          <figcaption>
                            <h3>CareGiver</h3>
                          </figcaption>
                        </div>
                        <div className="servicesBox">
                          <figure>
                            <img src="images/Blood-Bank.png" alt="Blood Bank" />
                          </figure>
                          <figcaption>
                            <h3>Blood Bank</h3>
                          </figcaption>
                        </div>
                        <div className="servicesBox">
                          <figure>
                            <img
                              src="images/accommodation.png"
                              alt="Accommodation"
                            />
                          </figure>
                          <figcaption>
                            <h3>Accommodation</h3>
                          </figcaption>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-tools"
                  role="tabpanel"
                  aria-labelledby="pills-tools-tab"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="homeHeading text-white">
                        <h3>Based on national volume as of yesterday</h3>
                      </div>
                      <div className="owl-carousel pt-2" id="ServicesOwl2">
                        <div className="servicesBox">
                          <figure>
                            <img src="images/medical.png" alt="Dresser" />
                          </figure>
                          <figcaption>
                            <h3>Dresser</h3>
                          </figcaption>
                        </div>
                        <div className="servicesBox">
                          <figure>
                            <img
                              src="images/Dialysis-Kit.png"
                              alt="Dialysis Kit"
                            />
                          </figure>
                          <figcaption>
                            <h3>Dialysis Kit</h3>
                          </figcaption>
                        </div>
                        <div className="servicesBox">
                          <figure>
                            <img
                              src="images/Guest-House.png"
                              alt="Guest House"
                            />
                          </figure>
                          <figcaption>
                            <h3>Guest House</h3>
                          </figcaption>
                        </div>
                        <div className="servicesBox">
                          <figure>
                            <img src="images/O+-Blood.png" alt="O+ Blood" />
                          </figure>
                          <figcaption>
                            <h3>O+ Blood</h3>
                          </figcaption>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="homeSec-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="homeHeading with-btn" style={{ marginLeft: "-950px" }}>
                <h2>Services</h2>
                <a href="#" className="readmoreBtn">
                  {" "}
                  <span> Explore Our Services</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="serviceWrapper">
                <ul>
                  <li className="row">
                    <div className="col-md-5 col-sm-5 col-3">
                      <figure>
                        <img src="images/service-1.png" />
                      </figure>
                    </div>
                    <div className="col-md-7 col-sm-7 col-9">
                      <div className="serviceWrapperInn">
                        <div className="serviceHead">
                          <h5>
                            <a href="#"> Expand your Business, boundaryless </a>
                          </h5>
                        </div>
                        <div className="serviceInnContent">
                          <p>
                            As a health service Provider and enterprise, please
                            don't wait for someone to recommend for your
                            business. Make yourself visible to across
                            city/nation and start selling to broader consumers,
                            all online, unlimited
                          </p>
                        </div>
                        <div className="serviceInnBtn">
                          <a href="#" className="signupBtn">
                            {" "}
                            <span>Read More</span>{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="serviceWrapper">
                <ul>
                  <li className="row">
                    <div className="col-md-5 col-sm-5 col-3">
                      <figure>
                        <img src="images/service-2.png" />
                      </figure>
                    </div>
                    <div className="col-md-7 col-sm-7 col-9">
                      <div className="serviceWrapperInn">
                        <div className="serviceHead">
                          <h5>
                            <a href="#">
                              Earn, when you want and, in your vicinity{" "}
                            </a>
                          </h5>
                        </div>
                        <div className="serviceInnContent">
                          <p>
                            As an individual caregiver, you can extend service
                            for those in need, outside your working hours,
                            enabling you to earn more. Manage your own calendar
                            and provide service within radius of your preference
                          </p>
                        </div>
                        <div className="serviceInnBtn">
                          <a href="#" className="signupBtn">
                            {" "}
                            <span>Read More</span>{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-md-0">
            <div className="homeHeading with-btn" style={{ marginLeft: "-1000px" }}>
              <h2>Solutions</h2>
              <a href="#" className="readmoreBtn">
                <span>Explore Our Solutions</span>
              </a>
            </div>
            <div className="owl-carousel" id="solutionOwl">
              <div className="solution-item">
                <div className="solutionWrapper">
                  <figure>
                    <a href="#">
                      <img src="/images/solution.png" alt="Solution 1" />
                    </a>
                  </figure>
                  <h3>
                    <a href="#">Offload your non-core overheads</a>
                  </h3>
                  <p>
                    We have the right business solutions carved out for you,
                    enabling you to have relentless focus on your core. Let
                    comePounder do the heavy lifting, needed for a smoother
                    run of your operations.
                  </p>
                  <div className="solutioInnBtn">
                    <a href="#" className="signupBtn">
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="solution-item">
                <div className="solutionWrapper">
                  <figure>
                    <a href="#">
                      <img src="/images/solution.png" alt="Solution 2" />
                    </a>
                  </figure>
                  <h3>
                    <a href="#">Enhance customer experience</a>
                  </h3>
                  <p>
                    Deliver exceptional customer service and build lasting
                    relationships with our tailored solutions designed to
                    improve engagement and satisfaction.
                  </p>
                  <div className="solutioInnBtn">
                    <a href="#" className="signupBtn">
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="solution-item">
                <div className="solutionWrapper">
                  <figure>
                    <a href="#">
                      <img src="/images/solution.png" alt="Solution 3" />
                    </a>
                  </figure>
                  <h3>
                    <a href="#">Optimize your supply chain</a>
                  </h3>
                  <p>
                    Streamline your logistics and improve efficiency with our
                    innovative solutions that optimize your supply chain
                    management.
                  </p>
                  <div className="solutioInnBtn">
                    <a href="#" className="signupBtn">
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="solution-item">
                <div className="solutionWrapper">
                  <figure>
                    <a href="#">
                      <img src="/images/solution.png" alt="Solution 4" />
                    </a>
                  </figure>
                  <h3>
                    <a href="#">Drive business growth</a>
                  </h3>
                  <p>
                    Unlock new opportunities and expand your business with our
                    strategic solutions focused on innovation and market
                    development.
                  </p>
                  <div className="solutioInnBtn">
                    <a href="#" className="signupBtn">
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* You can add more solution items here */}
            </div>
          </div>
        </div>
      </div>
    </section>

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
      <section className="homeSec-7">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="homeHeading">
                <h2 className="text-white">Client Success Story</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="owl-carousel" id="successOwl">
                <div className="successOwl-item">
                  <div className="successStory">
                    <div className="stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h6>Quisque vel erat vitae erat tincidunt hendrerit.</h6>
                    <p>
                      Neque porro quisquam est qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit...
                    </p>
                  </div>
                </div>
                <div className="successOwl-item">
                  <div className="successStory">
                    <div className="stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h6>Quisque vel erat vitae erat tincidunt hendrerit.</h6>
                    <p>
                      Neque porro quisquam est qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit...
                    </p>
                  </div>
                </div>
                <div className="successOwl-item">
                  <div className="successStory">
                    <div className="stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h6>Quisque vel erat vitae erat tincidunt hendrerit.</h6>
                    <p>
                      Neque porro quisquam est qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit...
                    </p>
                  </div>
                </div>
                <div className="successOwl-item">
                  <div className="successStory">
                    <div className="stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h6>Quisque vel erat vitae erat tincidunt hendrerit.</h6>
                    <p>
                      Neque porro quisquam est qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Additional sections go here */}

      <footer>
        <div className="container">
          <div className="footerWrap">
            <div className="row">
              <div className="col-md-4">
                <div className="footerHead">
                  <div className="footer-image">
                    <img src="./images/logo.png" alt="Logo" />
                  </div>
                  <p>
                    Your health, our priority with
                    <br />
                    personalized support
                  </p>
                  <ul className="flist">
                    <li>
                      <i className="fa-solid fa-phone"></i> +1234567890
                    </li>
                    <li>
                      <a href="mailto:info@comepounder.com">
                        <i className="fa-solid fa-envelope"></i>{" "}
                        info@comepounder.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footerHead">
                  <h4>Product</h4>
                </div>
                <div className="row">
                  <div className="col-6">
                    <ul className="flist">
                      <li>
                        <a href="avail.html#Caregiver">Caregiver</a>
                      </li>
                      <li>
                        <a href="avail.html#MedicalEquipments">
                          Medical Equipments
                        </a>
                      </li>
                      <li>
                        <a href="avail.html#Accomodation">Accomodation</a>
                      </li>
                      <li>
                        <a href="avail.html#PatientMeal">Patient Meal</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="flist">
                      <li>
                        <a href="avail.html#Diagnostics">Diagnostics</a>
                      </li>
                      <li>
                        <a href="avail.html#RehabCenters">Rehab Centers</a>
                      </li>
                      <li>
                        <a href="avail.html#BloodBank">Blood Bank</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="footerHead">
                  <h4>More</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="flist">
                        <li>
                          <a href="discover.html">Discover </a>
                        </li>
                        <li>
                          <a href="avail.html">Avail</a>
                        </li>
                        <li>
                          <a href="resources.html">Resources</a>
                        </li>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="flist">
                        <li>
                          <a href="#">Privacy Policy </a>
                        </li>
                        <li>
                          <a href="#">Terms & Conditions</a>
                        </li>
                        <li>
                          <a href="#">Disclaimers</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="small m-0 pt-2">Copyright @ comePounder 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Comepounder;
