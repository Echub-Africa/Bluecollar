import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SettingRap = styled.div`
padding-top: 50px;
padding-bottom: 70px;
  .setting-header {
    padding: 15px;
    border-bottom: 1px solid #1018281a;
  }
  .setting-header h4 {
    color: #101828;
    font-size: 16px;
    font-weight: 600;
  }
  .link {
    text-decoration: none;
    color: #667085;
    font-size: 14px;
    font-weight: 400;
    padding-bottom: 11px;
  }
  .link.active {
    color: #101828;
    font-weight: 500;
    border-bottom: 2px solid #101828;
  }
  .link-container {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 15px;
    padding-bottom: 0px;
    border-bottom: 1px solid #1018281a;
  }
  .inner-profile-1 label {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
  }
  .inner-profile-1 input {
    background: #f7f7f7;
    width: 380px;
    height: 45px;
    border-radius: 100px;
    padding-left: 15px;
  }
  .inner-profile-1 {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .profile-info-div p {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
  }
  .profile-info-div h4 {
    color: #101828;
    font-size: 14px;
    font-weight: 400;
  }
  .profile-info-div  {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .profile-info {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .profile-2 button {
    border: 1px solid #1018281F;
    width: 105px;
    height: 30px;
    border-radius: 100px;
    border-style: none;
    color: #667085;
    font-size: 12px;
    font-family: 400;

  }
  .profile-2 img {
    width: 68px;
    height: 70px;
  }
  .profile-2 {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 50%;

  }
  .profile-1 {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
    margin: 40px;
    margin-right: 0px;
    border-right: 1px solid #1018281F;

  }
  .all-profile {
    display: flex;
  }
  .setting {
    background: #FFFFFF;
    border: 1px solid #1018281A;
    border-radius: 8px;
  }
  .security-head h4 {
    color: #112240;
    font-size: 14px;
    font-weight: 500;

  }
  .security-head p {
    color: #667085;
    font-size: 14px;
    font-weight: 400;

  }
  .security-head, .secure  {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .secure label {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
  }
  .secure input {
    border: 1px solid #1122401F;
    border-radius: 100px;
    width: 264px;
    height: 45px;
    padding-left: 10px;
  }
  .security-2 button {
    border-style: none;
    width: 125px;
    height: 40px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 8px;
  }
  .cancel {
    color: #101828;
    background: #EAEBEE;

  }
  .update {
    color: #ffffff;
    background: #0067D0;

  }
  .security-2 {
    display: flex;
    gap: 11px;
  }
  .security, .security-1 {
    padding: 40px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .security-1 {
    padding: 0px;
    padding-bottom: 0px;
  }
  @media (max-width: 992px) {
    .all-profile {
        flex-direction: column;

    }
    .profile-1 {
        border: none;
        width: 100%;
    }
    .profile-2, .profile-info {
        width: 100%;
        padding: 20px;

    }
  }
  @media (max-width: 500px) {
    .inner-profile-1 input  {
        width: 300px;
    }
  }
  @media (max-width: 450px) {
    .inner-profile-1 input  {
        width: 250px;
    }
  }
  @media (max-width: 380px) {
    .secure input {
        width: 200px;
    }
  }
  @media (max-width: 350px) {
    .inner-profile-1 input  {
        width: 200px;
    }
  }
`;

const ArtisanSetting = () => {
  const [activeLink, setActiveLink] = useState("profile");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "090882973",
    address: "74 Shitta Street Allen Avenu Ikeja Lagos",
    email: "francis@gmail.com"
  });

  
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

      useEffect(() => {
      setFormData((prev) => ({
        ...prev,
        firstName: localStorage.getItem("artisanFirstName") || "",
        lastName: localStorage.getItem("artisanLastName") || "",
      }));
    }, []);

      const firstName = localStorage.getItem("artisanFirstName");
  const lastName = localStorage.getItem("artisanLastName");
  const Email = localStorage.getItem("artisanEmail");
  const role = localStorage.getItem("artisanRole");
  const type = localStorage.getItem("artisanType");
  const industry = localStorage.getItem("artisanIndustry");

  return (
    <SettingRap>
        <div className="containary">
      <div className="setting ">
        <div className="setting-header">
          <h4>Settings</h4>
        </div>
        <div>
          <div className="link-container">
            <Link
              className={`link ${activeLink === "profile" ? "active" : ""}`}
              onClick={() => handleLinkClick("profile")}
            >
              Profile
            </Link>
            <Link
              className={`link ${activeLink === "security" ? "active" : ""}`}
              onClick={() => handleLinkClick("security")}
            >
              Security
            </Link>
          </div>
          <div>
            {activeLink === "profile" && (
              <div className="all-profile">
                <div className="profile-1">
                  <div className="inner-profile-1">
                    <label>First Name</label>
                    <input type="text" value={formData.firstName} readOnly />
                  </div>
                      <div className="inner-profile-1">
                    <label>Last Name</label>
                    <input type="text" value={formData.lastName} readOnly />
                  </div>
                  <div
                   className="inner-profile-1">
                    <label>Email Address</label>
                    <input type="text" value={formData.email} readOnly />
                  </div>
                  <div className="inner-profile-1">
                    <label>Phone Number</label>
                    <input type="text" value={formData.phone}  readOnly/>
                  </div>
                  <div className="inner-profile-1">
                    <label>Address</label>
                    <input style={{
                        height: "122px",
                        borderRadius: "15px"                    }} type="text" value={formData.address} readOnly/>
                  </div>
                </div>
                <div className="profile-2">
                  <img src="/images/img-12.png" alt="" />
                  <button>Upload Photo</button>
                  <div className="profile-info">
                    <div className="profile-info-div">
                      <p>Name:</p>
                      <h4>{firstName} {lastName}</h4>
                    </div>
                    <div className="profile-info-div">
                      <p>Email Address:</p>
                      <h4>{Email}</h4>
                    </div>
                    <div className="profile-info-div">
                      <p>Phone Number:</p>
                      <h4>07066091112</h4>
                    </div>
                    <div className="profile-info-div">
                      <p>Gender:</p>
                      <h4>Male</h4>
                    </div>
                    <div className="profile-info-div">
                      <p>Industry:</p>
                      <h4>{industry}</h4>
                    </div>
                    <div className="profile-info-div">
                      <p>Availability Badge:</p>
                      <h4>Available</h4>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeLink==="security" && (
                <>
                <div className="security">
                    <div className="security-head">
                        <h4>Change Password</h4>
                        <p>Secure your account with your preferred password.</p>
                    </div>
                    <div className="security-1">
                        <div className="secure">
                            <label>Current Password</label>
                            <input type="text" placeholder="Enter Current Password" />
                        </div>
                        <div className="secure">
                            <label>New Password</label>
                            <input type="text" placeholder="Enter New Password" />
                        </div>
                        <div className="secure">
                            <label>Confirm Password</label>
                            <input type="text" placeholder="Confirm New Password" />
                        </div>
                    </div>
                    <div className="security-2">
                        <button className="cancel">Cancel</button>
                        <button className="update">Update</button>
                    </div>
                </div>
                </>
            )}
          </div>
        </div>
      </div>
      </div>
    </SettingRap>
  );
};

export default ArtisanSetting;
