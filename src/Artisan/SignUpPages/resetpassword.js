import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const ResetPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleReset = async () => {
    if (!email || !code || !newPassword) {
      return setMessage("All fields are required.");
    }

    if (newPassword !== confirmPassword) {
      return setMessage("Passwords do not match.");
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://blucolar-be.onrender.com/api/users/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            code: code,
            newPassword: newPassword,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Reset failed");
      }

      setMessage("Password reset successful! Redirecting...");
      setTimeout(() => navigate("/artisanAuth/login/Artisan"), 2000);
    } catch (err) {
      setMessage(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

    const isValid = email.includes("@");
    
  return (
    <ConfirmRap>
      <div className="all-sign">
        <div className="upper-confirm">
          <div className="sign-1">
            <h2>Reset your password</h2>
          </div>
          <div className="sign-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginBottom: 10 }}
            />
          </div>

          <div className="sign-2">
            <input
              type="text"
              placeholder="Enter the code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={{ marginBottom: 10 }}
            />
          </div>

          <div className="sign-2">
            <input
              type="password"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={{ marginBottom: 10 }}
            />
          </div>

          <div className="sign-2">
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ marginBottom: 10 }}
            />
          </div>

          <div className="sign-3">
            <button
              onClick={handleReset}
              disabled={!isValid || isSubmitting}
              style={{
                backgroundColor: isValid ? "#0067D0" : "#abc7e3",
                cursor: !isValid ? "not-allowed" : "pointer",
              }}
            >
              {isSubmitting ? "Resetting..." : "Reset Password"}
            </button>
          </div>
          {message && (
            <p
              style={{
                marginTop: 10,
                color: message.includes("successful") ? "green" : "red",
              }}
            >
              {message}
            </p>
          )}
        </div>

        <div className="down-sign">
          <p>
            By clicking “Login or Signup”, you assert that you have read and
            agreed to our <span>Terms of Service</span> and{" "}
            <span>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </ConfirmRap>
  );
};

export default ResetPassword;
