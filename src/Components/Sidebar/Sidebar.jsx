import React, { useState, useEffect } from "react";
import "../Sidebar/Sidebar.css";
import logo_ngekos from "../../Asset/logo_ngekos.png";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { RxUpdate } from "react-icons/rx";
import { MdAddHomeWork, MdOutlineLogout } from "react-icons/md";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const checkIsMobile = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
        setSidebarOpen(false);
      } else {
        setIsMobile(false);
        setSidebarOpen(true);
      }
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <>
      {isMobile && (
        <div className="sidebar-toggle" onClick={handleToggleSidebar}>
          <AiOutlineMenu />
        </div>
      )}

      <div className={`sidebar-section ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-section-1">
          <img src={logo_ngekos} alt="img" />
        </div>

        <div className="sidebar-section-2">
          <div className="sidebar-section-3">
            <AiFillHome />
            <span>My Kost</span>
          </div>

          <div className="sidebar-section-3">
            <RxUpdate />
            <span>Update Kost Information</span>
          </div>

          <div className="sidebar-section-3">
            <MdAddHomeWork />
            <span>Add New Kost</span>
          </div>

          <div className="sidebar-section-4">
            <MdOutlineLogout />
            <span>Log Out</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
