import React, { useState } from "react";
import "../Header/Header.css";
import logoNgekos from "../../Asset/logo_ngekos.png";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
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
          <li>Home</li>
          <li>Private Policy</li>
          <li>Help Center</li>
          <li>
            <button className="button-login-header">Login</button>
          </li>
        </ul>
        <AiOutlineMenu className="menu-icon" onClick={handleMenuToggle} />
      </div>
    </div>
  );
};

export default Header;
