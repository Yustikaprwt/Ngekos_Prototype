import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../Page/Login Page/LoginPage";
import RegisterPage from "../Page/Register Page/RegisterPage";
import Header from "../Components/Header/Header";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/test" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
