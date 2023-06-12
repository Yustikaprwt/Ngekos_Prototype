import React from "react";
import "../About Us/AboutUs.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import logo_1 from "../../Asset/logo_about_us_1.png";
import logo_2 from "../../Asset/logo_about_us_2.png";
import logo_3 from "../../Asset/logo_about_us_3.png";

const AboutUs = () => {
  return (
    <>
      <div className="about-us-section">
        <Navbar />
        <div className="about-us-section-1">
          <div className="image-about-us-container">
            <img src={logo_1} alt="img" />
            <div className="text-overlay">
              <h1>Best Kost Finder</h1>
              <p>
                The place to find a trusted kost with all its advantages.
                Founded on July 15 2022 in Balikpapan.
              </p>
            </div>
          </div>
        </div>

        <div className="about-us-section-2">
          <div className="text-about-us-section-2">
            <h2>Accurate Information and Data</h2>
            <p>
              Using IT (Information Technology) and technology facilities to
              provide accurate information, descriptions and data about kost.
            </p>
          </div>
          <img src={logo_2} alt="img" />
        </div>

        <div className="about-us-section-2">
          <img src={logo_3} alt="img" />
          <div className="text-about-us-section-2">
            <h2>Become an intermediary for owners and users</h2>
            <p>
              We are intermediaries that connect owners and users in order to
              provide better accommodation. with this innovation which aims to
              provide comfort and convenience for kost owners and users.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
