import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const ConfirmRap = styled.div`
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
  input {
    border: 1px solid #1018281a;
    width: 358px;
    height: 47px;
    border-radius: 10px;
    padding-left: 20px;
  }
  .resend-div {
    width: 358px;
    height: 50px;
    border-radius: 10px;
    padding-left: 20px;
    background: #1018280d;
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .resend-div p {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
  }
  .resend-btn {
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    color: #0067d0;
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
  .upper-confirm {

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .sign-2 {
    display: flex;
    flex-direction: column;
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
const ClientConfirmEmail = () => {
  const navigate = useNavigate();
  const [confirmCode, setConfirmCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isValid = confirmCode.trim() !== "";

  const email = localStorage.getItem("companyEmail");

  const handleConfirm = async () => {
    if (!email) {
      alert("No email found. Please sign up again.");
      navigate("/company/signUp");
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Sending verification request with:", { email, code: confirmCode });

      const res = await fetch("https://blucolar-be.onrender.com/api/company/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          code: confirmCode, // change to `code` if API expects `code`
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Verification failed");
      }

      const data = await res.json();
      console.log("✅ Verification successful:", data);

      navigate("/companyAuth/login");
    } catch (error) {
      alert(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendCode = async () => {
    if (!email) return alert("Email not found. Please sign up again.");

    try {
      const res = await fetch("https://blucolar-be.onrender.com/api/auth/resend-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to resend code");
      }

      alert("Verification code resent successfully.");
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <ConfirmRap>
  <div className="all-sign">
        <div className="upper-confirm">
          <div className="sign-1">
            <h2>Confirm email address</h2>
            <p>Enter the code sent to <strong>{email}</strong></p>
          </div>
          <div className="sign-2">
            <input
              type="text"
              placeholder="Enter code"
              value={confirmCode}
              name="confirmCode"
              onChange={(e) => setConfirmCode(e.target.value)}
            />
            <div className="resend-div">
              <img src="/images/error.png" alt="" />
              <p>Didn't get the code?</p>
              <button className="resend-btn" onClick={handleResendCode} type="button">
                Resend
              </button>
            </div>
          </div>
          <div className="sign-3">
            <button
              type="button"
              onClick={handleConfirm}
              disabled={!isValid || isSubmitting}
              style={{
                backgroundColor: isValid ? "#0067D0" : "#abc7e3",
                cursor: !isValid ? "not-allowed" : "pointer",
              }}
            >
              {isSubmitting ? "Verifying..." : "Continue"}
            </button>
            <div className="sub-sign-3">
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
        </div>
        <div className="down-sign">
          <p>
            By clicking “Login or Signup”, you assert that you have read and agreed to our
            <span> Terms of Service </span> and
            <span> Privacy Policy.</span>
          </p>
        </div>
      </div>
    </ConfirmRap>
  );
};

export default ClientConfirmEmail;
