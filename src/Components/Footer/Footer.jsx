import React from "react";
import { useNavigate } from "react-router";
import "../../Components/Footer/Footer.css";
import logoNgekos from "../../Asset/logo_ngekos.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const navigate = useNavigate();
  const aboutUs = () => {
    navigate(`/about/us`);
  };

  const helpCenter = () => {
    navigate(`/help/center`);
  };

  const privacyPolicy = () => {
    navigate(`/privacy/policy`);
  };

  return (
    <footer className="footer-container">
      <div className="footer-section">
        <div className="logo-container">
          <img className="logo-img" src={logoNgekos} alt="Ngekos Logo" />
        </div>

        <div className="section-footer">
          <p className="section-title">Ngekos</p>
          <ul>
            <li onClick={aboutUs}>About Us</li>
            <li onClick={helpCenter}>Help Center</li>
          </ul>
        </div>

        <div className="section-footer">
          <p className="section-title">Policy</p>
          <ul>
            <li onClick={privacyPolicy}>Privacy Policy</li>
          </ul>
        </div>

        <div className="section-footer">
          <p className="section-title">Contact Us</p>
          <ul>
            <li>
              <a
                href="mailto:Admin@NgeKos.co.id"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <MdEmail
                  style={{
                    width: "25px",
                    height: "25px",
                    marginRight: "7px",
                  }}
                />{" "}
                Admin@NgeKos.co.id
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/085333445566"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <IoLogoWhatsapp
                  style={{
                    width: "25px",
                    height: "25px",
                    marginRight: "10px",
                  }}
                />
                {""}
                0853 3344 5566
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="section-footer-bottom">
        <p>© 2023, Hak Cipta Dilindungi Oleh Undang-Undang</p>

        <div>
          <a
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
            href="https://id-id.facebook.com/"
          >
            <FaFacebook className="icon-footer" />
          </a>

          <a
            href="https://www.instagram.com/"
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <AiFillInstagram className="icon-footer" />
          </a>

          <a
            href="https://twitter.com/"
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <FaTwitter className="icon-footer" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
