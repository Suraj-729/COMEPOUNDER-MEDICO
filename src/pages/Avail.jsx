import React from "react";
import "../assets/css/compeounder.css";
import "../assets/css/innerstyle.css"; // Assuming you have a CSS file for styling
import Header from "../components/Header";
import Footer from "../components/Footer";
import InnerBanner from "../components/AvailPage/InnerBanner"; // Adjust the path as needed
import Search from "../components/AvailPage/SerachPage";
import Caregiver from "../components/MedicalServices/Caregiver";
import Equipments from "../components/MedicalEquipment/Equipments";
const AvailPage = () => {
    return (
         <div>
             <Header />
                <InnerBanner />
                <Search />
                <Caregiver />
                <Equipments />
             <Footer />
         </div>
    );
    }
    export default AvailPage;