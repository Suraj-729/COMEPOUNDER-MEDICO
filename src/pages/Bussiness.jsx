import React from "react";
import "../assets/css/compeounder.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/innerstyle.css"; // Assuming you have a CSS file for styling
import RelationPage from "../components/Bussiness/Relation";
import MotivePage from "../components/Bussiness/Motive"; // Assuming you have a CSS file for styling
import StaffSolutionPage from "../components/Bussiness/StaffSolution"; // Assuming you have a CSS file for styling      
import EquipmentSolutionPage from "../components/Bussiness/EquipmentSolution";
import MealSolutionPage from "../components/Bussiness/MealSolution";
import MainComponent from "../components/Support/SupportSection";
const BussinessPage = () => {
    return (
        <>
        <Header />
           <RelationPage />
           <MotivePage />
           <StaffSolutionPage />
           <EquipmentSolutionPage />
           <MealSolutionPage />
           <MainComponent />

        <Footer />
        </>
    );
    }

    export default BussinessPage;