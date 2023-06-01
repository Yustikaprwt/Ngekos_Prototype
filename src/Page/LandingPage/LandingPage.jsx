import React from "react";
import "../../Page/LandingPage/LandingPage.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import bannerImage from "../../Asset/banner_home.png";

const LandingPage = () => {
  return (
    <>
      <div className="section-landing-page">
        <Header />
        <div>
          <img
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            src={bannerImage}
            alt="img"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
