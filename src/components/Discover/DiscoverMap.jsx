import React from "react";
import "../../assets/css/compeounder.css";
import "../../assets/css/innerstyle.css";



const DiscoverMapPage = () => {
    return (
        <section className="discover-map">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 p-0">
                        <div className="map-wrapper">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d116863.40700145105!2d85.74842971207255!3d20.340685398400037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scomepounder%20bhubaneswar!5e0!3m2!1sen!2sin!4v1744284302673!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Discover Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscoverMapPage;