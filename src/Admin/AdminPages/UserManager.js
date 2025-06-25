import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const RequestRap = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  .request-1 h2 {
    color: #101828;
    font-weight: 600;
    font-size: 18px;
  }
  .request {
    border: 1px solid #1018281a;
    background: #ffffff;
    border-radius: 8px;
  }
  .request-1 {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #1018281a;
  }
  .request-1 button {
    background: #0067d0;
    width: 128px;
    height: 35px;
    border-radius: 8px;
    border-style: none;
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
  }
  .search-div {
    width: 296px;
    height: 40px;
    position: relative;
  }
  .search-div input {
    width: 296px;
    height: 40px;
    border: 1px solid #1018281a;
    border-radius: 100px;
    padding-left: 15px;
  }
  .filter-div {
    width: 126px;
    height: 40px;
    border: 1px solid #1018281a;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  .request-2 {
    padding: 20px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .search-icon {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .custom-table tbody td {
    color: #667085 !important;
  }
  .table-side-drop {
    position: absolute;
    background: #ffffff;
    border: 1px solid #1018281a;
    box-shadow: 0px 8px 20px -4px #00000014;
    padding: 10px 0px;
    width: 119px;
    right: 10px;
    border-radius: 12px;
    z-index: 1000;
  }
  .table-side-drop p {
    color: #101828;
    font-size: 14px;
    font-weight: 400;
    padding: 5px 10px;
  }
  .table-side-drop p:hover {
    background: #f7f7f7;
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
  .link {
    color: #667085;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;


  }
  .link.active {
    color: #101828;
    border-bottom: 2px solid #101828;
    padding-bottom: 20px;

  }
  .link-contain {
    display: flex;
    gap: 20px;
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
`;

const UserManager = () => {

  const navigate = useNavigate();

  const [dropdown, setDropdown] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
const [activeLink, setActiveLink] = useState("all")
const [recentUser, setRecentUser] = useState([]);
const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allUsers, setAllUsers] = useState([]);


  // Toggle dropdown
  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };
  const handleGoToDetail = (id) => {
    navigate(`/admin/users/details/${id}`);
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

const handleLinkClick = (link) => {
  setActiveLink(link);

  if (link === "all") {
    setRecentUser(allUsers);
  } else if (link === "artisans") {
    setRecentUser(allUsers.filter(user => user.accType === "artisan"));
  } else if (link === "clients") {
    setRecentUser(allUsers.filter(user => user.accType === "home-owner"));
  } else if (link === "company") {
    setRecentUser(allUsers.filter(user => user.accType === "company"));
  }
};


  useEffect(() => {
    const token = localStorage.getItem("adminToken");
  
    const fetchRecentData = async () => {
      try {
        const response = await fetch("https://blucolar-be.onrender.com/api/admin/recent-activity", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (!response.ok) throw new Error("Failed to fetch data");
  
        const data = await response.json();
  
        // Format recent users
const formattedUsers = (data.recentUsers || []).map((user) => ({
  id: user._id,
  name: `${user.firstName} ${user.lastName}`,
  accType: user.type || "N/A",
  email: user.email || "N/A",
  status: "Approved",
}));

setAllUsers(formattedUsers); // Save full list
setRecentUser(formattedUsers); // Initial display

  
    
  
        setRecentUser(formattedUsers);
      } catch (err) {
        console.error("Error fetching recent data:", err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchRecentData();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

const filteredUsers = recentUser?.filter((item) =>
  item?.name?.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <RequestRap>
      <div className="containary">
        <div className="request">
          <div className="request-1">
            <h2>User Management</h2>
          </div>
          <div className="request-2">
            <div className="link-contain">
            <Link
                className={`link ${
                  activeLink === "all" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("all")}
              >All Users</Link>
               <Link
                className={`link ${
                  activeLink === "artisans" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("artisans")}
              >Artisans</Link>
               <Link
                className={`link ${
                  activeLink === "clients" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("clients")}
              >Clients</Link>
               <Link
                className={`link ${
                  activeLink === "company" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("company")}
              >Companies</Link>
            </div>
                <div className="search-div">
                  <input
                    type="text"
                    placeholder="Enter User full name..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                  />
                  <Icon
                    className="search-icon"
                    width="16px"
                    height="16px"
                    icon="material-symbols:search-rounded"
                    style={{ color: "#667085" }}
                  />
                </div>
          </div>
          <div className="table-container">
            <div className="new-table-scroll">
              <div className="table-div-con">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>  FULL NAME</th>
                      <th>EMAIL</th>
                      <th> TITLE</th>
                      <th> SIGNUP DATE</th>
                      <th>STATUS</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers?.length > 0 ? (
  filteredUsers.map((items, index) => (

                        <tr
                          key={items?.id}
                          style={{ cursor: "pointer" }}
                          onClick={() => handleGoToDetail(items?.id)}
                        >
                          <td>{index + 1}</td>
                          <td>
                            <div className="item-img-name">
                                <img src="/images/img-12.png" alt="" />
                                {items?.name}
                            </div>
                            </td>
                          <td>{items?.email}</td>
                          <td>{items?.accType}</td>
                          <td>{items?.date}</td>
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
                          <td>
                            <div style={{ position: "relative" }}>
                              <span
                                style={{ cursor: "pointer" }}
                                onClick={() => toggleDropdown(items.id)}
                              >
                                ...
                              </span>

                              {/* Dropdown Menu */}
                              {openDropdown === items.id && (
                                <div className="table-side-drop">
                                  <p>Open</p>
                                  <p>Approve</p>
                                  <p>Delete</p>
                                </div>
                              )}
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
        </div>
      </div>
     
    </RequestRap>
  );
};

export default UserManager;
