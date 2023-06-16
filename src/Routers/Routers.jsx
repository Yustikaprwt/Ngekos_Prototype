import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../Page/Login Page/LoginPage";
import RegisterPage from "../Page/Register Page/RegisterPage";
import LandingPage from "../Page/LandingPage/LandingPage";
import HomePage from "../Page/Home Page/HomePage";
import HelpCenter from "../Page/Help Center/HelpCenter";
import AboutUs from "../Page/About Us/AboutUs";
import PrivacyPolicy from "../Page/Privacy Policy/PrivacyPolicy";
import ProfilePage from "../Page/Profile Page/ProfilePage";
import KostFlorentine from "../Page/Kost Florentine/KostFlorentine";
import KostTulip from "../Page/Kost Tulip/KostTulip";
import KostSunflower from "../Page/Kost Sunflower/KostSunflower";
import KostLavender from "../Page/Kost Lavender/KostLavender";
import PaymentFlorentine from "../Page/Payment Page Kost Florentine/PaymentFlorentine";
import PaymentTulip from "../Page/Payment Page Kost Tulip/PaymentTulip";
import PaymentSunflower from "../Page/Payment Page Kost Sunflower/PaymentSunflower";
import PaymentLavender from "../Page/Payment Page Kost Lavender/PaymentLavender";
import KostAroundCampus from "../Page/Kost Around Campus/KostAroundCampus";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/help/center" element={<HelpCenter />} />
        <Route path="/about/us" element={<AboutUs />} />
        <Route path="/privacy/policy" element={<PrivacyPolicy />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/kost/florentine" element={<KostFlorentine />} />
        <Route path="/kost/tulip" element={<KostTulip />} />
        <Route path="/kost/sunflower" element={<KostSunflower />} />
        <Route path="/kost/lavender" element={<KostLavender />} />
        <Route path="/kost/around/campus" element={<KostAroundCampus />} />
        <Route path="/payment/florentine" element={<PaymentFlorentine />} />
        <Route path="/payment/tulip" element={<PaymentTulip />} />
        <Route path="/payment/sunflower" element={<PaymentSunflower />} />
        <Route path="/payment/lavender" element={<PaymentLavender />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
