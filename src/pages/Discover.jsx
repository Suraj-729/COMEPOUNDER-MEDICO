import React from "react";

import "../assets/css/compeounder.css";
import "../assets/css/innerstyle.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Discover/Banner";
import InnerBannerPage from "../components/Discover/InnerBanner";
import DiscoverCard from "../components/Discover/DiscoverCard";
 import DiscoverMapPage from "../components/Discover/DiscoverMap";
// import FacilitiesCard from "../components/Discover/Card";
const DiscoverPage = () => {
    const cardsData = [
        {
            imageSrc: "images/hospital.png",
            title: "Hospital",
            rows: [
                { siNo: 1, hospitalName: "Hospital Name", rating: 4, halfStar: true },
                { siNo: 2, hospitalName: "Hospital Name", rating: 4, halfStar: true },
                { siNo: 3, hospitalName: "Hospital Name", rating: 4, halfStar: true },
                { siNo: 4, hospitalName: "Hospital Name", rating: 4, halfStar: true },
                { siNo: 5, hospitalName: "Hospital Name", rating: 4, halfStar: true },
            ],
        },
        {
            imageSrc: "images/icons/medical-equipment.png",
            title: "Equipment",
            rows: [
                { siNo: 1, hospitalName: "Hospital Name", rating: 4, halfStar: true },
                { siNo: 2, hospitalName: "Hospital Name", rating: 4, halfStar: true },
                { siNo: 3, hospitalName: "Hospital Name", rating: 4, halfStar: true },
                { siNo: 4, hospitalName: "Hospital Name", rating: 4, halfStar: true },
                { siNo: 5, hospitalName: "Hospital Name", rating: 4, halfStar: true },
            ],
        },
        {
            imageSrc: "images/icons/blood-bank.png",
            title: "Blood Bank",
            rows: [
                { siNo: 1, hospitalName: "Hospital Name", rating: 4, halfStar: true },
                { siNo: 2, hospitalName: "Hospital Name", rating: 4, halfStar: true },
                { siNo: 3, hospitalName: "Hospital Name", rating: 4, halfStar: true },
                { siNo: 4, hospitalName: "Hospital Name", rating: 4, halfStar: true },
                { siNo: 5, hospitalName: "Hospital Name", rating: 4, halfStar: true },
            ],
        },
        {
            imageSrc: "images/health-clinic.png",
            title: "Clinic",
            rows: [
                { siNo: 1, hospitalName: "Hospital Name", rating: 4, halfStar: true },
                { siNo: 2, hospitalName: "Hospital Name", rating: 4, halfStar: true },
                { siNo: 3, hospitalName: "Hospital Name", rating: 4, halfStar: true },
                { siNo: 4, hospitalName: "Hospital Name", rating: 4, halfStar: true },
                { siNo: 5, hospitalName: "Hospital Name", rating: 4, halfStar: true },
            ],
        },
    ];

    return (
        <div>
            <Header />
            <Banner />
            <InnerBannerPage />
            <section className="discover">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="discover-wrapper">
                                <div className="owl-carousel" id="discoverowl">
                                    {cardsData.map((card, index) => (
                                        <DiscoverCard
                                            key={index}
                                            imageSrc={card.imageSrc}
                                            title={card.title}
                                            rows={card.rows}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <DiscoverMapPage />
            

            <Footer />
        </div>
    );
};

export default DiscoverPage;