import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


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
  }
  .add-admin-upper button {
    width: 128px;
    height: 35px;
    border-radius: 8px;
    border: 1px solid #0067D0;
    background: transparent;
    font-size: 14px;
    font-weight: 600;
    color:  #0067D0;

  }
  .add-admin-upper {
    border-bottom: 1px solid #1018281a;
    display: flex;
    padding: 20px;
    padding-bottom: 0px;
    align-items: center;
    justify-content: space-between;
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
  .item-img-name img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
  .item-img-name  {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .dropdown-div {
    border-top: 1px solid #1018281a;
    background: #ffffff;
    border-radius: 6px;
  }
  .drop-header h4 {
    color: #101828;
    font-size: 16px;
    font-weight: 600;
  }
  .drop-header {
    background: #f7f7f7;
    border-bottom: 1px solid #1018281a;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  label {
    color: #667085;
    font-size: 15px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .drop-body input {
    border: 1px solid #1018281a;
    width: 356px;
    height: 48px;
    border-radius: 10px;
    padding-left: 15px;
  }
  .drop-body button {
    width: 356px;
    height: 48px;
    border-radius: 10px;
    background: #0067d0;
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    border-style: none;
  }
  .drop-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .body-with {
    max-width: 460px;
    line-height: 19px;
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

const ClientSetting = () => {
    const users = [
        {
          id: 1,
          email: "micheal@mail.com",
          fullname: "Micheal Soyombo",
          role: "Admin",
          date: "24 Jan, 2024 5:30PM",
          status: "Pending"
        },
        {
          id: 2,
          email: "micheal@mail.com",
          fullname: "Micheal Soyombo",
          role: "Admin",
          date: "24 Jan, 2024 5:30PM",
          status: "Pending"

        },
        {
          id: 3,
          email: "micheal@mail.com",
          fullname: "Micheal Soyombo",
          role: "Admin",
          date: "24 Jan, 2024 5:30PM",
          status: "Pending"

        },
        {
          id: 4,
          email: "micheal@mail.com",
          fullname: "Micheal Soyombo",
          role: "Admin",
          date: "24 Jan, 2024 5:30PM",
          status: "Active"

        },
        {
          id: 5,
          email: "micheal@mail.com",
          fullname: "Micheal Soyombo",
          role: "Admin",
          date: "24 Jan, 2024 5:30PM",
          status: "Active"

        },
        {
          id: 6,
          email: "micheal@mail.com",
          fullname: "Micheal Soyombo",
          role: "Admin",
          date: "24 Jan, 2024 5:30PM",
          status: "Active"

        },
        {
          id: 7,
          email: "micheal@mail.com",
          fullname: "Micheal Soyombo",
          role: "Admin",
          date: "24 Jan, 2024 5:30PM",
          status: "Active"

        },
      ];
        const [dropdown, setDropdown] = useState(false);
 const navigate = useNavigate();
                  useEffect(() => {
    const token = localStorage.getItem("home-ownerToken");
    if (!token) {
      navigate("/clientAuth/login");
    }
  }, [navigate]);

      
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
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

        useEffect(() => {
        setFormData((prev) => ({
          ...prev,
          firstName: localStorage.getItem("artisanFirstName") || "",
          lastName: localStorage.getItem("artisanLastName") || "",
        }));
      }, []);


  const firstName = localStorage.getItem("home-ownerFirstName");
  const lastName = localStorage.getItem("home-ownerLastName");
  const Email = localStorage.getItem("home-ownerEmail");
  const role = localStorage.getItem("home-ownerRole");
  const type = localStorage.getItem("home-ownerType");
  const industry = localStorage.getItem("home-ownerIndustry");



  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

    const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

   const token = localStorage.getItem("home-ownerToken"); // Replace with your actual token key

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (form.newPassword !== form.confirmPassword) {
      setMessage("New passwords do not match");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://blucolar-be.onrender.com/api/users/change-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            currentPassword: form.currentPassword,
            newPassword: form.newPassword,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to change password");
      }

      setMessage("Password updated successfully.");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <SettingRap>
        <div className="containary">
      <div className="setting ">
        <div className="setting-header">
          <h4>Settings</h4>
        </div>
        <div >
            <div className="add-admin-upper">
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
            {/* <Link
              className={`link ${activeLink === "admin" ? "active" : ""}`}
              onClick={() => handleLinkClick("admin")}
            >
              Admin
            </Link> */}
          </div>
          {/* {activeLink==="admin" &&
          <button onClick={handleDropdown}>Add admin</button>
          } */}
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
                  <div className="inner-profile-1">
                    <label>Email Address</label>
                    <input type="text" value={formData.email} readOnly />
                  </div>
                  {/* <div className="inner-profile-1">
                    <label>Phone Number</label>
                    <input type="text" value={formData.phone}  readOnly/>
                  </div> */}
                  {/* <div className="inner-profile-1">
                    <label>Address</label>
                    <input style={{
                        height: "122px",
                        borderRadius: "15px"                    }} type="text" value={formData.address} readOnly/>
                  </div> */}
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
                    {/* <div className="profile-info-div">
                      <p>Phone Number:</p>
                      <h4>07066091112</h4>
                    </div>
                    <div className="profile-info-div">
                      <p>Gender:</p>
                      <h4>Male</h4>
                    </div>
                    <div className="profile-info-div">
                      <p>Industry:</p>
                      <h4>Electrical</h4>
                    </div> */}
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
          <input
            type="password"
            name="currentPassword"
            placeholder="Enter Current Password"
            value={form.currentPassword}
            onChange={handleChange}
          />
        </div>
        <div className="secure">
          <label>New Password</label>
          <input
            type="password"
            name="newPassword"
            placeholder="Enter New Password"
            value={form.newPassword}
            onChange={handleChange}
          />
        </div>
        <div className="secure">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm New Password"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </div>
      </div>

      {message && (
        <p style={{ color: message.includes("success") ? "green" : "red" }}>
          {message}
        </p>
      )}

      <div className="security-2">
        <button
          className="cancel"
          onClick={() =>
            setForm({ currentPassword: "", newPassword: "", confirmPassword: "" })
          }
        >
          Cancel
        </button>
        <button className="update" onClick={handleSubmit} disabled={loading}>
          {loading ? "Updating..." : "Update"}
        </button>
      </div>
    </div>
                </>
            )}
           
          </div>
        </div>
      </div>
      </div>
       {dropdown ? (
              <div className="dropdown-container">
                <div className="dropdown-div">
                  <div className="drop-header">
                    <h4>Add admin</h4>
                    <Icon
                      onClick={handleDropdown}
                      className="icon"
                      width="18px"
                      height="18px"
                      icon="humbleicons:times"
                      style={{ color: "#667085" }}
                    />
                  </div>
                  <div className="drop-body">
                    <label>
                      Full name
                      <input type="text" placeholder="Enter title" />
                    </label>
                    <label>
                      Email
                      <input type="text" placeholder="" />
                    </label>
                    <label>
                      Role
                      <input type="text" placeholder="Enter footer" />
                    </label>
                   
                   
                    <button>Add Admin</button>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
    </SettingRap>
  );
};

export default ClientSetting;
