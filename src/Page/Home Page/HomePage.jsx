import React from "react";
import "../Home Page/HomePage.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import logo_ngekos from "../../Asset/logo_ngekos.png";
import map from "../../Asset/map.png";
import CardRecommendation from "../../Components/Card Recommendation Campus/CardRecommendation";
import kampus_1 from "../../Asset/kampus_1.jpg";
import kampus_2 from "../../Asset/kampus_2.jpg";
import kampus_3 from "../../Asset/kampus_3.jpeg";
import kampus_4 from "../../Asset/kampus_4.jpg";

const HomePage = () => {
  return (
    <>
      <div className="homepage-section">
        <Navbar />
        <div className="homepage-section-1">
          <img
            style={{
              width: "250px",
              height: "100px",
            }}
            src={logo_ngekos}
            alt="img"
          />
          <img
            style={{
              width: "470px",
              height: "180px",
            }}
            src={map}
            alt="img"
          />
        </div>

        <div className="homepage-section-2">
          <h1>Want to Find Cheap and Reliable Kost?</h1>
          <h2>NgeKos is a Solution !!!</h2>
        </div>

        <div className="homepage-section-3">
          <h3>Recommendation Kost in Balikpapan</h3>
          <CardRecommendation />
        </div>
        <div className="homepage-section-4">
          <h3>Area Around Campus</h3>
          <div className="homepage-section-4-campus">
            <div className="homepage-section-4-campus-card">
              <img src={kampus_1} alt="img" />
            </div>

            <div className="homepage-section-4-campus-card">
              <img src={kampus_2} alt="img" />
            </div>

            <div className="homepage-section-4-campus-card">
              <img src={kampus_3} alt="img" />
            </div>

            <div className="homepage-section-4-campus-card">
              <img src={kampus_4} alt="img" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
