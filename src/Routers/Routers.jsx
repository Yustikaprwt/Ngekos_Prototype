import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../Page/Login Page/LoginPage";
import RegisterPage from "../Page/Register Page/RegisterPage";
import LandingPage from "../Page/LandingPage/LandingPage";
import HomePage from "../Page/Home Page/HomePage";
import CardRecommendation from "../Components/Card Recommendation Campus/CardRecommendation";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/test" element={<CardRecommendation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
