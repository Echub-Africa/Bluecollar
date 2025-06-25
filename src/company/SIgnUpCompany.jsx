import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const ArtisanRap = styled.div`
  .sign-1 h2 {
    color: #101828;
    font-size: 26px;
    font-weight: 600;
  }
  .sign-1 p {
    color: #667085;
    font-size: 16px;
    font-weight: 400;
  }
  .sign-1 {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
  input {
    width: 358px;
    height: 47px;
    border: 1px solid #1018281a;
    border-radius: 10px;
    padding-left: 40px;
    color: #101828;
    font-size: 14px;
    font-weight: 400;
  }
  .eye-icon {
    position: absolute;
    right: 5px;
    top: 13px;
  }
  .sign-2-sub input {
    width: 173px !important;
  }
  .sign-2-sub {
    display: flex;
    gap: 10px;
  }
  label {
    position: relative;
    width: 358px;
  }
  .sign-2-sub label {
    width: 173px !important;
  }
  .sign-2 span {
    border-right: 1px solid #1018281a;
    height: 20px;
    padding-right: 10px;
    position: absolute;
    top: 13px;
    left: 5px;
  }
  .sign-2 {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  button {
    width: 358px;
    height: 45px;
    border-radius: 10px;
    border-style: none;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .sign-3 div {
    background: #1018281a;
    width: 166px;
    height: 1px;
  }
  .sign-3 p {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
  }
  .sign-3 {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .sign-4 {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .sing-4-btn {
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    color: #101828;
    border: 1px solid #1018281a;
    width: 358px;
    height: 45px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
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
  .upper-sign {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .down-sign p {
    color: #667085;
    font-size: 12px;
    font-weight: 400;
    line-height: 19px;

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
    height: 120vh;
    padding: 20px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const SignUpCompany = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    password: "",
  });

  const isValid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
     formData.email.trim() !== "" &&
    formData.password.trim() !== "" &&
    formData.companyName.trim() !== "";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async () => {
    const payload = {
      ...formData,
      type: "company", // required by backend
    };

    try {
      const res = await fetch(
        "https://blucolar-be.onrender.com/api/company/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Signup failed");
      }

      const data = await res.json();
      console.log("✅ Signup successful:", data);

      // Store email for later use (e.g., fetch user on homepage)
      localStorage.setItem("companyToken", data.token);
      localStorage.setItem("companyEmail", formData.email);
      localStorage.setItem("companyName", formData.companyName);
      localStorage.setItem("companyfirstName", formData.firstName);
      localStorage.setItem("companylastName", formData.lastName);

      navigate("/company/confirmEmail");
    } catch (err) {
      console.error("❌ Signup failed:", err);
      setErrorMessage(err.message || "Signup failed. Please try again.");
    }
  };

  return (
    <ArtisanRap>
      <div className="all-sign">
        <div className="upper-sign">
          <div className="sign-1">
            <h2>Sign up as a Company</h2>
            <p>Create account in few steps</p>
          </div>
          <div className="sign-2">
            <label>
              <input
                type="text"
                value={formData.firstName}
                name="firstName"
                placeholder="First name"
                onChange={handleChange}
              />
              <span>
                <Icon
                  className="icon"
                  width="20px"
                  height="20px"
                  icon="charm:person"
                  style={{
                    color: formData.firstName ? "#101828" : "#667085",
                  }}
                />
              </span>
            </label>
            <label>
              <span>
                <Icon
                  className="icon"
                  width="20px"
                  height="20px"
                  icon="charm:person"
                  style={{
                    color: formData.lastName ? "#101828" : "#667085",
                  }}
                />
              </span>
              <input
                onChange={handleChange}
                type="text"
                name="lastName"
                value={formData.lastName}
                placeholder="Last name"
              />
            </label>
            <label>
              <input
                type="text"
                value={formData.companyName}
                name="companyName"
                placeholder="Company name"
                onChange={handleChange}
              />
              <span>
                <Icon
                  className="icon"
                  width="20px"
                  height="20px"
                  icon="charm:person"
                  style={{
                    color: formData.companyName ? "#101828" : "#667085",
                  }}
                />
              </span>
            </label>
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
                placeholder="Password (8 or more character)"
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
              type="submit"
              onClick={handleSubmit}
              disabled={!isValid}
              style={{
                backgroundColor: isValid ? "#0067D0" : "#abc7e3",
                cursor: !isValid ? "not-allowed" : "pointer",
              }}
            >
              Create my account
            </button>
          </div>
          <div className="sign-3">
            <div></div>
            <p>or</p>
            <div></div>
          </div>
          <div className="sign-4">
            <Link className="sing-4-btn">
              <img src="/images/apple.png" alt="" />
              Continue with Apple
            </Link>
            <Link className="sing-4-btn">
              <img src="/images/google.png" alt="" />
              Continue with Google
            </Link>
          </div>
          <div className="sign-5">
            <p>Already have an account?</p>
            <Link to="/artisanAuth/login" className="login-btn">
              Login
              <Icon
                className="icon"
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
    </ArtisanRap>
  );
};

export default SignUpCompany;
