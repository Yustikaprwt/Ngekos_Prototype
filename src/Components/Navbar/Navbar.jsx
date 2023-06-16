import React, { useState } from "react";
import { useNavigate } from "react-router";
import Modal from "react-bootstrap/Modal";
import "../../Components/Navbar/Navbar.css";
import { MdAccountCircle } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { AiFillNotification } from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navigate = useNavigate();
  const homePage = () => {
    navigate(`/home`);
  };

  const helpCenter = () => {
    navigate(`/help/center`);
  };

  const profilePage = () => {
    navigate(`/profile`);
  };

  return (
    <>
      <div className="section-navbar">
        <ul className={showMenu ? "menu-active" : ""}>
          <li onClick={homePage}>Home</li>
          <li onClick={helpCenter}>Help Center</li>
          <li onClick={handleShow}>Notification</li>
          <li>
            <MdAccountCircle onClick={profilePage}
              style={{
                width: "35px",
                height: "35px",
              }}
            />
          </li>
        </ul>
        <div className="toggle-menu" onClick={toggleMenu}>
          <FiMenu />
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AiFillNotification
            style={{
              width: "20px",
              height: "20px",
            }}
          />{" "}
          Your booking is success!
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navbar;
