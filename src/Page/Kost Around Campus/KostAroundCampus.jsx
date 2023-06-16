import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CardRecommendation from "../../Components/Card Recommendation Campus/CardRecommendation";

const KostAroundCampus = () => {
  return (
    <>
      <div className="kost-around-campus-section">
        <Navbar />
        <CardRecommendation />
      </div>
      <Footer />
    </>
  );
};

export default KostAroundCampus;
