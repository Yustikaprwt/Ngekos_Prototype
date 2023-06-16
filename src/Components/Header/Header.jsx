import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../Header/Header.css";
import logoNgekos from "../../Asset/logo_ngekos.png";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const navigate = useNavigate();
  const homePage = () => {
    navigate(`/home`);
  };
  const privacyPolicyPage = () => {
    navigate(`/privacy/policy`);
  };
  const helpCenter = () => {
    navigate(`/help/center`);
  };
  const loginPage = () => {
    navigate(`/login`);
  };

  return (
    <div className="header-section">
      <div>
        <img
          style={{
            width: "160px",
            height: "70px",
            padding: "10px",
          }}
          src={logoNgekos}
          alt="img"
        />
      </div>

      <div className="header-option">
        <ul className={showMenu ? "show-menu" : ""}>
          <li onClick={homePage}>Home</li>
          <li onClick={privacyPolicyPage}>Private Policy</li>
          <li onClick={helpCenter}>Help Center</li>
          <li>
            <button onClick={loginPage} className="button-login-header">
              Login
            </button>
          </li>
        </ul>
        <AiOutlineMenu className="menu-icon" onClick={handleMenuToggle} />
      </div>
    </div>
  );
};

export default Header;
