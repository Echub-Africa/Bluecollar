import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginRap = styled.div`
  input {
    border: 1px solid #1018281a;
    width: 358px;
    height: 47px;
    border-radius: 10px;
    padding: 0px 40px;
    color: #101828;
    font-size: 14px;
    font-weight: 400;
  }
  label {
    width: 358px !important;
    position: relative !important;
  }
  .icon {
    position: absolute;
    left: 10px;
    top: 13px;
  }
  .eye-icon {
    position: absolute;
    right: 10px;
    top: 13px;
  }
  button {
    width: 358px;
    height: 45px;
    border-radius: 10px;
    border-style: none;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    margin-top: 20px;
  }
  .line-div {
    border: 1px solid #1018281a;
    width: 168px;
  }
  .line-or-div p {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
  }
  .line-or-div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .google {
    text-decoration: none;
    color: #101828;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid #1018281a;
    width: 358px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
  }
  .sign-5 p {
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
  .sign-5 {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .upper-login h2 {
    color: #101828;
    font-size: 26px;
    font-weight: 600;
  }
  .upper-login p {
    color: #667085;
    font-size: 16px;
    font-weight: 400;
  }
  .upper-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
  }
  .login-all {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
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

const CompanyLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const isValid =
    formData.email.trim() !== "" && formData.password.trim() !== "";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClick = async () => {
    if (!isValid) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://blucolar-be.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();


      
    // Check if the logged-in user is an artisan
    if (data.user.role !== "company") {
      setErrorMessage("Access denied. Only Companies can log in to this section.");
      return;
    }
      console.log("✅ Login successful:", data);

      // Store user data in local storage
      localStorage.setItem("companyToken", data.token);
      localStorage.setItem("companyName", data.companyName);
      localStorage.setItem("companyEmail", data.user.email);
      localStorage.setItem("companyRole", data.user.role);
      localStorage.setItem("companyType", data.user.type);
      localStorage.setItem("companyfirstName", data.user.firstName);
      localStorage.setItem("companylastName", data.user.lastName);

      // Navigate to company dashboard
      navigate("/company");
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LoginRap>
      <div className="all-sign">
        <div className="login-all">
          <div className="upper-login">
            <h2>Company Login</h2>
          </div>
          <label>
            <span>
              <Icon
                className="icon"
                width="20px"
                height="20px"
                icon="ic:outline-email"
                style={{
                  color: formData.email ? "#101828" : "#667085",
                }}
              />
            </span>
            <input
              onChange={handleChange}
              type="email"
              value={formData.email}
              name="email"
              placeholder="Email Address"
            />
          </label>
          <label>
            <span>
              <Icon
                className="icon"
                width="20px"
                height="20px"
                icon="mdi:password-outline"
                style={{
                  color: formData.password ? "#101828" : "#667085",
                }}
              />
            </span>
            <input
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              placeholder="Password "
            />
            <Icon
              className="eye-icon"
              icon={showPassword ? "solar:eye-outline" : "mage:eye-off"}
              width="20"
              height="20"
              style={{ color: "#99A2AF" }}
              onClick={togglePasswordVisibility}
            />
          </label>
          {errorMessage && (
            <div style={{ color: "red", marginBottom: "1rem" }}>
              {errorMessage}
            </div>
          )}
          <button
            onClick={handleClick}
            disabled={!isValid || isSubmitting}
            style={{
              backgroundColor: isValid ? "#0067D0" : "#abc7e3",
              cursor: !isValid ? "not-allowed" : "pointer",
            }}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

          <div className="line-or-div">
            <div className="line-div"></div>
            <p>or</p>
            <div className="line-div"></div>
          </div>
          <Link className="google">
            <img src="/images/google.png" alt="" />
            Continue with Google
          </Link>
          <div className="sign-5">
            <p>Dont't have an account?</p>
            <Link to="/artisanAuth/signUp" className="login-btn">
              Sign up
              <Icon
                width="14px"
                height="14px"
                icon="formkit:arrowright"
                style={{ color: "#0067D0" }}
              />
            </Link>
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
    </LoginRap>
  );
};

export default CompanyLogin;
