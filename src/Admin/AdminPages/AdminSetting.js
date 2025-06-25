import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
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

const AdminSetting = () => {
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
      
  const [activeLink, setActiveLink] = useState("profile");
  const [formData, setFormData] = useState({
    fullname: "Ikechukwu Goodswill",
    email: "example@yahoo.com",
    phone: "070660911112",
    address: "74 Shitta Street Allen Avenu Ikeja Lagos",
  });

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const handleDropdown = () => {
    setDropdown(!dropdown);
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
            <Link
              className={`link ${activeLink === "admin" ? "active" : ""}`}
              onClick={() => handleLinkClick("admin")}
            >
              Admin
            </Link>
          </div>
          {activeLink==="admin" &&
          <button onClick={handleDropdown}>Add admin</button>
          }
          </div>
          <div>
            {activeLink === "profile" && (
              <div className="all-profile">
                <div className="profile-1">
                  <div className="inner-profile-1">
                    <label>Fullname</label>
                    <input type="text" value={formData.fullname} readOnly />
                  </div>
                  <div className="inner-profile-1">
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
                      <h4>07066091112</h4>
                    </div>
                    <div className="profile-info-div">
                      <p>Email Address:</p>
                      <h4>example@yahoo.com</h4>
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
                      <h4>Electrical</h4>
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
            {activeLink==="admin" && (
                <>
                <div className="table-container">
            <div className="new-table-scroll">
              <div className="table-div-con">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>  NAME</th>
                      <th>EMAIL</th>
                      <th> ROLE</th>
                      <th>STATUS</th>
                      <th>DATE ADDED</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users?.length > 0 ? (
                      users.map((items, index) => (
                        <tr
                          key={items?.id}
                          style={{ cursor: "pointer" }}
                        >
                          <td>
                            <div className="item-img-name">
                                <img src="/images/img-12.png" alt="" />
                                {items?.fullname}
                            </div>
                            </td>
                          <td>{items?.email}</td>
                          <td>{items?.role}</td>
                          <td>
                            <div
                              style={{
                                background:
                                  items.status === "Pending"
                                    ? "#FBF1E7"
                                    : "#E4EFFA",
                                color:
                                  items.status === "Pending"
                                    ? "#FF8C1A"
                                    : "#0067D0",
                                borderRadius: "100px",
                                padding: "5px 12px",
                                width: "fit-content",
                              }}
                            >
                              {items?.status}
                            </div>
                          </td>
                          <td>{items?.date}</td>

                          <td>
                            <div style={{ position: "relative" }}>
                              <span
                                style={{ cursor: "pointer" }}
                              >
                                ...
                              </span>

                            
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="10" className="no-case">
                          <img src="/images/mask_img.png" alt="" />
                          <h3>No Request.</h3>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
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

export default AdminSetting;
