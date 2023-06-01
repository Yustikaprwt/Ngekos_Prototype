import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../Page/Login Page/LoginPage";
import RegisterPage from "../Page/Register Page/RegisterPage";
import Navbar from "../Components/Navbar/Navbar";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/test" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
