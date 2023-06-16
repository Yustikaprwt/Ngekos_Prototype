import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../Page/Login Page/LoginPage";
import Sidebar from "../Components/Sidebar/Sidebar";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sidebar" element={<Sidebar/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
