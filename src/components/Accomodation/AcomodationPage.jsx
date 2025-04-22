import React from "react";
import "../../assets/css/compeounder.css"; // Adjust the path as needed
import "../../assets/css/innerstyle.css";
import HotelPage from "./HotelPage";
import GuestHousePage from "./GuestHouse"; // Assuming you have a GuestHouse component
import DormitoryPage from "./Dormitory"; // Assuming you have a Dormitory component
import LodgePage from "./Lodge"; // Assuming you have a Lodging component
const AccomodationPage = () => {
  return (
    <div>
      <section className="avail-section-1" id="Accomodation">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="avail-section-1-left">
                <div className="homeHeading">
                  <h2>Easy Accommodation</h2>
                </div>
                <p>
                  Discover our seamless accommodation solution, “Easy-Stay”,
                  designed to ease the journey for families and friends of
                  hospital patients! Our intuitive platform eﬀortlessly connects
                  kin to a curated selection of nearby lodgings, ensuring you
                  ﬁnd the perfect balance of comfort and aﬀordability. Whether
                  you're looking for a cozy bed-and-breakfast or a
                  budgetfriendly hotel, our service simpliﬁes the search,
                  bringing peace of mind and convenience right to your
                  ﬁngertips. Experience hassle-free lodging options tailored to
                  suit your budget, all within easy reach of the hospital, so
                  you can focus on what truly matters.
                </p>
              </div>
              <div className="row">
                <div className="col-md-12 avail_services_col">
                  <div className="owl-carousel" id="avail_services_3">
                    <HotelPage/>
                    <GuestHousePage/>
                    <DormitoryPage/>
                    <LodgePage/>  
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="avail-section-1-right">
                <img src="images/EasyAccommodation.png" alt="" title="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AccomodationPage;
