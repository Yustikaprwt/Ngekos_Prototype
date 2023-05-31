import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../Page/Login Page/LoginPage";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
