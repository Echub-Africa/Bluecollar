import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignUpRap = styled.div`
  .sign-1 h2 {
    color: #101828;
    font-size: 26px;
    font-weight: 600;
    line-height: 32px;
    text-align: center;
    max-width: 300px;
  }
  .sign-1 p {
    color: #667085;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
  }
  .sign-1 {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
  .inner-sign {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .inner-sign span {
    border: 1.5px solid #1018281f;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .inner-sign.active span {
    border: 5px solid #0067d0;
  }
  .sign-2 {
    display: flex;
    gap: 20px;
  }
  .sub-sign-2 p {
    color: #101828;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    max-width: 168px;
  }
  .sub-sign-2 {
    border: 1px solid #1018281f;
    width: 230px;
    height: 170px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
  }
  .sub-sign-2.active {
    border: 1px solid #0067d0;
  }
  .sign-3 button {
    width: 358px;
    height: 45px;
    border-radius: 10px;
    border-style: none;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .sign-3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .sub-sign-3 p {
    color: #667085;
    font-size: 16px;
    font-weight: 400;
  }
  .login-btn {
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    color: #0067d0;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .sub-sign-3 {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .upper-sign {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
  .down-sign p {
    color: #667085;
    font-size: 12px;
    font-weight: 400;
    line-height: 19px;
    text-align: center;
    max-width: 345px;
  }
  .down-sign span {
    text-decoration: underline;
    text-decoration-style: solid;
    text-decoration-offset: Auto;
    text-decoration-thickness: Auto;
    color: #0067d0;
  }
  .down-sign {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .all-sign {
    height: 90vh;
    padding: 20px;
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const ArtisanPreLogin = () => {
    const navigate = useNavigate()
  const [activeLink, setActiveLink] = useState("");

  const isValid = activeLink !== "";

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };


  const handleClick = () => {
    if (activeLink==="artisan") {
        navigate('/artisanAuth/login/Artisan')
    }

    if (activeLink==="company") {
      navigate('/companyAuth/login')
  }

  if (activeLink==="owner") {
    navigate('/clientAuth/login')
  
  }
  }
  return (
    <SignUpRap>
      <div className="all-sign">
        <div className="upper-sign">
          <div className="sign-1">
            <h2>Select account login type</h2>
            <p>Choose your account type</p>
          </div>
          <div className="sign-2">
            <div
              onClick={() => handleLinkClick("artisan")}
              className={`sub-sign-2 ${
                activeLink === "artisan" ? "active" : ""
              }`}
            >
              <div
                className={`inner-sign ${
                  activeLink === "artisan" ? "active" : ""
                }`}
              >
                <img src="/images/art.png" alt="" />
                <span></span>
              </div>
              <p>Artisan login</p>
            </div>

          </div>
          <div className="sign-3">
            <button onClick={handleClick}
              disabled={!isValid}
              style={{
                backgroundColor: isValid ? "#0067D0" : "#abc7e3",
                cursor: !isValid ? "not-allowed" : "pointer",
              }}
            >
              Continue
            </button>
            <div className="sub-sign-3">
              <p>Don't have an account?</p>
              <Link to="/artisanAuth/artisanreg" className="login-btn">
                Sign up
                <Icon
                  className="icon"
                  width="14px"
                  height="14px"
                  icon="formkit:arrowright"
                  style={{ color: "#0067D0" }}
                />
              </Link>
            </div>
<br />
             <div className="sub-sign-3">
              <p>You forgot your password?</p>
              <Link to="/artisanAuth/forgotPassword" className="login-btn">
                Reset it
                <Icon
                  className="icon"
                  width="14px"
                  height="14px"
                  icon="formkit:arrowright"
                  style={{ color: "#0067D0" }}
                />
              </Link>
            </div>
            <br />
          </div>
        </div>
        <div className="down-sign">
          <p>
            By clicking “Login or Signup”, you assert that you have read and
            agreed to our
            <span> Terms of Service </span> and
            <span> Privacy Policy.</span>
          </p>
        </div>
      </div>
    </SignUpRap>
  );
};

export default ArtisanPreLogin;
