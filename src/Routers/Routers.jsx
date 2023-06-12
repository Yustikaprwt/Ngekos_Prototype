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
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
