import { React, useState } from "react";
import { useNavigate } from "react-router";
import "../Register Page/RegisterPage.css";
import { IoIosArrowBack } from "react-icons/io";
import logoRegister from "../../Asset/logo_register.png";

const RegisterPage = () => {
  const data = {
    fullname: "",
    number: "",
    email: "",
    password: "",
    confirm: "",
  };

  const dataError = {
    fullname: "",
    number: "",
    email: "",
    password: "",
    confirm: "",
  };

  const [datas, setDatas] = useState(data);
  const [errorMessage, setErrorMessage] = useState(dataError);
  const regexEmail = /^\w+@[A-Za-z_]+?\.[a-zA-Z]{2,3}$/;
  const regexNumber = /^[0-9]*$/;

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
    if (name === "number") {
      if (!regexNumber.test(value)) {
        setErrorMessage({
          ...errorMessage,
          number: "Phone number must be number!",
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

  const homePage = () => {
    navigate(`/home`);
  };

  const loginPage = () => {
    navigate(`/login`);
  };

  return (
    <>
      <div className="register-section">
        <div className="section-register-1">
          <IoIosArrowBack
            style={{
              width: "20px",
              height: "20px",
            }}
            onClick={homePage}
          />
        </div>

        <div className="section-register-2">
          <div className="register-card">
            <form className="form-register" onSubmit={handleSubmit}>
              <div className="input-register-field">
                <label className="label-register">Fullname</label>
                <br />
                <input
                  className="input-register"
                  type="fullname"
                  name="fullname"
                  id="fullname"
                  required
                  value={datas.fullname}
                  onChange={handleInput}
                />

                <label className="label-register">Number Handphone</label>
                <br />
                <input
                  className="input-register"
                  type="number"
                  name="number"
                  id="number"
                  required
                  value={datas.number}
                  onChange={handleInput}
                />

                <label className="label-register">Email</label>
                <br />
                <input
                  className="input-register"
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={datas.email}
                  onChange={handleInput}
                />

                <label className="label-register">Password</label>
                <br />
                <input
                  className="input-register"
                  type="password"
                  name="password"
                  id="password"
                  required
                  value={datas.password}
                  onChange={handleInput}
                />

                <label className="label-register">Confirm Password</label>
                <br />
                <input
                  className="input-register"
                  type="confirm"
                  name="confirm"
                  id="confirm"
                  required
                  value={datas.confirm}
                  onChange={handleInput}
                />
              </div>

              <div className="register-button-container">
                <button onClick={loginPage} className="register-button">
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="logo-register">
            <img
              style={{
                width: "320px",
                height: "320px",
              }}
              src={logoRegister}
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
