import { React, useState } from "react";
import { useNavigate } from "react-router";
import "../Profile Page/ProfilePage.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Modal from "react-bootstrap/Modal";
import logo_profile from "../../Asset/logo_profile.png";

const ProfilePage = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate(`/`);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="profile-page-section">
        <Navbar />
        <div className="profile-section">
          <div className="profile-page-section-1">
            <h3>Profile Account</h3>
            <p>
              Fullname{" "}
              <span
                style={{
                  marginLeft: "5px",
                }}
              >
                : Marsha
              </span>
            </p>
            <p>
              Email{" "}
              <span
                style={{
                  marginLeft: "35px",
                }}
              >
                : marsha@gmail.com
              </span>
            </p>
            <button onClick={logout} className="edit-profile-password">
              Logout
            </button>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label>New Password</label>
                <input
                  style={{ border: "none", borderBottom: "1px solid black" }}
                ></input>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button className="edit-profile-password" onClick={handleClose}>
                Close
              </button>
              <button className="edit-profile-password" onClick={handleClose}>
                Save Changes
              </button>
            </Modal.Footer>
          </Modal>

          <div className="profile-page-section-2">
            <h3>Account Password</h3>
            <p>
              Password{" "}
              <span
                style={{
                  marginLeft: "5px",
                }}
              >
                : *****
              </span>
            </p>
            <button onClick={handleShow} className="edit-profile-password">
              Edit Password
            </button>
          </div>
          <img className="logo-profile-page" src={logo_profile} alt="img" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
