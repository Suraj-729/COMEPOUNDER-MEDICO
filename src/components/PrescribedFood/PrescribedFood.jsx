import React from "react";
import "../../assets/css/compeounder.css"; // Adjust the path as needed
import "../../assets/css/innerstyle.css";
import DietPage from "./SoftDiet";
import LiquidDietPage from "./LiquidDiet";
import HighDietPage from "./HighDiet"; // Assuming you have a CSS file for styling
import LowDietPage from "./LowDiet";
import FreeDietPage from "./FreeDiet";
const FoodPage = () => {
  return (
    <div>
      <section className="avail-section-1  avail-sec-with-bg" id="PatientMeal">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="avail-section-1-right">
                <img src="images/Prescribed-Food.png" alt="" title="" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="avail-section-1-left">
                <div className="homeHeading">
                  <h2>Prescribed Food</h2>
                </div>
                <p>
                  Introducing "Nourish-Meal," a revolutionary service designed
                  to bring personalized, health-conscious dining directly to
                  your doorstep. Tailored to the speciﬁc dietary prescriptions
                  from your doctor, dietician, or nutritionist, NourishMeal
                  ensures that each meal aligns perfectly with your health goals
                  and nutritional needs. Enjoy the convenience of selecting
                  preferred timeslots for delivery, ensuring that your meals
                  arrive fresh and ready to enjoy, allowing you to focus on your
                  well-being without the hassle of meal preparation
                </p>
              </div>
              <div className="row">
                <div className="col-md-12 avail_services_col">
                  <div className="owl-carousel" id="avail_services_4">
                    <DietPage />
                    <LiquidDietPage />
                    <HighDietPage />
                    <LowDietPage /> 

                                    
                <FreeDietPage />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default FoodPage;
