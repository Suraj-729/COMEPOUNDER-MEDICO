import React from "react";
import "../assets/css/compeounder.css";
import "../assets/css/innerstyle.css"; // Assuming you have a CSS file for styling
import Header from "../components/Header";
import Footer from "../components/Footer";
import InnerBanner from "../components/AvailPage/InnerBanner"; // Adjust the path as needed
import Search from "../components/AvailPage/SerachPage";
import Caregiver from "../components/MedicalServices/Caregiver";
import Equipments from "../components/MedicalEquipment/Equipments";
import AccomodationPage from "../components/Accomodation/AcomodationPage";
import FoodPage from "../components/PrescribedFood/PrescribedFood";
import BloodBankPage from "../components/AvailPage/BloodBank"; // Adjust the path as needed
import DiagnosticsPage from "../components/AvailPage/Diagnostics"; // Adjust the path as needed
import RegainIndependencePage from "../components/AvailPage/RegainIndependence"; // Adjust the path as needed
import MedsOnTimePage from "../components/AvailPage/MedonTime"; // Adjust the path as needed
const AvailPage = () => {
    return (
         <div>
             <Header />
                <InnerBanner />
                <Search />
                <Caregiver />
                <Equipments />
                <AccomodationPage />
                <FoodPage />
                <BloodBankPage />
                <DiagnosticsPage />
                <RegainIndependencePage />
                <MedsOnTimePage />
             <Footer />
         </div>
    );
    }
    export default AvailPage;