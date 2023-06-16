import { React, useState } from "react";
import { useNavigate } from "react-router";
import "../Login Page/LoginPage.css";
import logoNgekos from "../../Asset/logo_ngekos.png";
import logoLogin from "../../Asset/logo_login.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

const LoginPage = () => {
  const data = {
    email: "",
    password: "",
  };

  const dataError = {
    email: "",
    password: "",
  };

  const [datas, setDatas] = useState(data);
  const [errorMessage, setErrorMessage] = useState(dataError);
  const regexEmail = /^\w+@[A-Za-z_]+?\.[a-zA-Z]{2,3}$/;

  const handleInput = (e) => {
    const { name, value } = e.target;

    console.log(value);

    setDatas({
      ...datas,
      [name]: value,
    });

    if (name === "email") {
      if (!regexEmail.test(value)) {
        setErrorMessage({
          ...errorMessage,
          email: "Please use the correct email format!",
        });
      } else {
        setErrorMessage("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  const navigate = useNavigate();
  const registerPage = () => {
    navigate(`/register`);
  };

  const homePage = () => {
    navigate(`/home`);
  };

  return (
    <>
      <div className="login-section">
        <div className="section-login-1">
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <IoIosArrowBack style={{ width: "20px", height: "20px" }} />
              <p
                style={{
                  margin: "0 0 0 5px",
                  lineHeight: "20px",
                  fontFamily: "poppins",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
                onClick={registerPage}
              >
                Back
              </p>
            </div>
          </div>
          <img className="logo-ngekos" src={logoNgekos} alt="img" />
        </div>

        <div className="section-login-2">
          <img className="logo-login" src={logoLogin} alt="img" />

          <div className="login-card">
            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <label className="label-login">E-Mail</label>
                <br />
                <input
                  className="input-login"
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={datas.email}
                  onChange={handleInput}
                />

                <label className="label-login">Password</label>
                <br />
                <input
                  className="input-login"
                  type="password"
                  name="password"
                  id="password"
                  required
                  value={datas.password}
                  onChange={handleInput}
                />

                <div className="submit-button-container">
                  <button onClick={homePage} type="submit" className="login-button">
                    Login
                  </button>
                </div>
              </div>
            </form>

            <p className="register-forgot-account">
              Don't have any account?
              <span
                style={{ fontWeight: "400", marginLeft: "3px" }}
                onClick={registerPage}
              >
                Register
              </span>
            </p>

            <p className="register-forgot-account">Forgot Password?</p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "25px",
              }}
            >
              <div>
                <a
                  href="https://www.google.com"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="button-login-with-socmed">
                    <FcGoogle
                      style={{
                        color: "#3b5998",
                        width: "25px",
                        height: "25px",
                        marginRight: "5px",
                      }}
                    />
                    <p className="login-socmed">Sign in with Google</p>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="button-login-with-socmed">
                    <FaFacebook
                      style={{
                        color: "#3b5998",
                        width: "25px",
                        height: "25px",
                        marginRight: "5px",
                      }}
                    />
                    <p className="login-socmed">Sign in with Facebook</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
