import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Icon } from "@iconify/react";

const NavRap = styled.div`
.notification-item {
  border: 1px solid #ccc; /* Add a border for visibility */
  padding: 10px;
  background-color: #f9f9f9; /* Light background color */
}

  .nav-link {
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    color: #ffffff80;
  }
  .nav-link.active {
    color: #ffffff;
  }
  .navbar {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .nav-mobile {
    display: none;
  }
  nav {
    background: #101828;
    border-bottom: 1px solid #1018281a;
    height: 80px;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    z-index: 9999;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
  }
  .all-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
  }

  .search-div-input {
    position: relative;
    width: 225px;
  }
  .search-div-input input {
    width: 225px;
    height: 32px;
    border-radius: 100px;
    border: 1px solid #d9e4e924;
    background: #ffffff1f;
    padding-left: 30px;
  }
  .search-icon {
    position: absolute;
    top: 9px;
    left: 10px;
  }
  .nav-div-left {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .notification-div {
    border: 1px solid #ffffff24;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
  }
  .notification-div img {
    width: 15px !important;
    height: 15px !important;
  }
  .sub-nav-div-right img {
    width: 32px;
    height: 32px;
  }
  .sub-nav-div-right {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .nav-div-right {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  .optionpop {
    border: 1px solid #1018281a;
    background: #ffffff;
    box-shadow: 0px 8px 22px 0px #0000001a;
    width: 186px;
    height: 93px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    position: absolute;
    right: 10px;
    top: 50px;
  }
  .optionpop-btn {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #101828;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 15px;
  }
  .optionpop-btn:hover {
    background: #f7f7f7;
  }
  .optionpop-btn img {
    width: 18px;
    height: 18px;
  }
  .notify-header h4 {
    color: #101828;
    font-size: 14px;
    font-weight: 600;
  }
  .notify-header {
    background: #f7f7f7;
    padding: 5px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border: 1px solid #1018281a;
  }
  .notify-div p {
    color: #a8afbe;
    font-size: 14px;
    font-weight: 400;
  }
  .notify-div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    height: 80%;
  }
  .notify {
    box-shadow: 0px 8px 22px 0px #0000001a;
    width: 280px;
    height: 350px;
    border-radius: 10px;
    background: #ffffff;
    position: absolute;
    right: 0px;
  }
  .all-notify {
    position: relative;
  }

  @media (max-width: 992px) {
    .navbar {
      display: flex;
      flex-direction: column;
      align-items: flex-start !important;
      justify-content: flex-start !important;
      position: fixed;
      top: 70px;
      left: -360px;
      width: 300px;
      height: 100vh;
      background: #101828;

      color: white;
      box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
      padding: 40px 0 0 30px;
      transition: 0.3s ease-in-out;
      z-index: 9999;
    }

    .navbar.active {
      left: 0px;
    }
    .nav-mobile {
      display: block;
    }
    .nav-upper {
      padding: 8px 30px;
    }
    .nav-lower {
      padding: 0px 30px;
    }
    nav {
      padding: 10px 20px !important;
    }
  }
  @media (max-width: 600px) {
    .nav-div-left {
      flex-wrap: wrap;
      margin-left: 10px;
      gap: 7px !important;
    }
    nav {
      height: auto !important;
      padding-top: 20px !important;
    }
  }
  @media (max-width: 480px) {
    .all-nav {
      flex-wrap: wrap;
    }
  }
    .all-notify {
  position: relative;
  display: inline-block;
}

.notification-div {
  cursor: pointer;
  position: relative;
}

.notification-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
}

.notify {
  position: absolute;
  right: 0;
  top: 40px;
  width: 320px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 100;
  display: block; /* Ensure it is displayed */
}


.notify-header {
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.notify-div {
  max-height: 400px;
  overflow-y: auto;
}

.notification-item {
  padding: 12px 16px;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  gap: 12px;
}

.notification-item.unread {
  background-color: #f8f9fa;
}

.notification-content {
  flex: 1;
}

.notification-date {
  color: #666;
  display: block;
  margin-top: 4px;
  font-size: 0.8em;
}

.no-notifications {
  padding: 20px;
  text-align: center;
  color: #666;
}

`;

const ClientDashboardNavbar = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [optionDrop, setOptionDrop] = useState(false);
  const [notifyPop, setNotifyPop] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   const API_URL = "https://blucolar-be.onrender.com/api/notification/";


  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleOptionDrop = () => {
    setOptionDrop(!optionDrop);
    setNotifyPop(false);
  };

const handleNotifyPop = () => {
  setNotifyPop(!notifyPop);
  console.log("Notify Pop State:", !notifyPop); // Log the new state
  setOptionDrop(false);
};

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const { pathname } = useLocation();
  useEffect(() => {
    setClicked(false);
  }, [pathname]);

  const handleLogout = () => {
    // Clear localStorage
  localStorage.removeItem("artisanToken");
  localStorage.removeItem("artisanFirstName");
  localStorage.removeItem("artisanLastName");
  localStorage.removeItem("artisanEmail");
  localStorage.removeItem("artisanType");
  localStorage.removeItem("artisanRole");
  localStorage.removeItem("artisanName");

      localStorage.removeItem("home-ownerToken");
    localStorage.removeItem("home-ownerFirstName");
    localStorage.removeItem("home-ownerLastName");
    localStorage.removeItem("home-ownerEmail");
    localStorage.removeItem("home-ownerType");
    localStorage.removeItem("home-ownerRole");

        localStorage.removeItem("companyToken");
  localStorage.removeItem("companyfirstName");
  localStorage.removeItem("companylastName");
  localStorage.removeItem("companyEmail");
  localStorage.removeItem("companyName");
  localStorage.removeItem("companyType");
  localStorage.removeItem("companyRole");

      localStorage.removeItem("adminToken");
    localStorage.removeItem("adminFirstName");
    localStorage.removeItem("adminLastName");
    localStorage.removeItem("adminEmail");
    localStorage.removeItem("adminType");
    localStorage.removeItem("adminRole");

    // Redirect to login page
    navigate("/"); // Or your landing page route
  };

   const token = localStorage.getItem("home-ownerToken");

  const yourToken = token; // Replace with your actual token
  
useEffect(() => {
   const fetchNotifications = async () => {
     try {
       setLoading(true);
       const response = await fetch(API_URL, {
         method: 'GET',
         headers: {
           'Authorization': `Bearer ${yourToken}`,
           'Content-Type': 'application/json',
         },
       });

       if (!response.ok) {
         const errorData = await response.json(); // Attempt to parse the error response
         throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.message || 'Unknown error'}`);
       }

       const data = await response.json();
       console.log("Full API Response:", data); // Log the full response

       // Access the notifications array from the response object
       if (data.notifications && Array.isArray(data.notifications)) {
         setNotifications(data.notifications);
         console.log("Notifications state updated:", data.notifications); // Log the updated notifications
       } else {
         throw new Error('Unexpected response format');
       }
     } catch (err) {
       setError(err.message);
       console.error("Failed to fetch notifications:", err); // Log the error
     } finally {
       setLoading(false);
     }
   };
  
   fetchNotifications();
   }, []);


  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

   

  return (
    <NavRap>
      <nav className="containary">
        {/* <p style={{
           color: "#101828"
 
        }}>.</p> */}
        <div className="nav-mobile" onClick={handleClick}>
          {clicked ? (
            <Icon
              className="icon"
              width="30px"
              height="30px"
              icon="prime:times"
              style={{ color: "#ffffff" }}
            />
          ) : (
            <Icon
              className="icon"
              width="30px"
              height="30px"
              icon="mdi-light:menu"
              style={{ color: "#ffffff" }}
            />
          )}
        </div>

        <div className="all-nav">
          <div className="nav-div-left">
           <Link to="/"> <img src="/images/dash-logo.png" alt="" /></Link>
        
          </div>
          <div className="nav-div-right">
            <div className={clicked ? "navbar active" : "navbar"} id="#navbar">
              <Link
                className={`nav-link ${activeLink === "home" ? "active" : ""}`}
                to="/client"
                onClick={() => handleLinkClick("home")}
              >
                Home
              </Link>
              {/* <Link
                className={`nav-link ${
                  activeLink === "request" ? "active" : ""
                }`}
                to="/client/request"
                onClick={() => handleLinkClick("request")}
              >
                Request
              </Link> */}
              <Link
                className={`nav-link ${
                  activeLink === "invoice" ? "active" : ""
                }`}
                to="/client/invoice"
                onClick={() => handleLinkClick("invoice")}
              >
                Invoice
              </Link>
              <Link
                className={`nav-link ${activeLink === "job" ? "active" : ""}`}
                to="/client/jobs"
                onClick={() => handleLinkClick("job")}
              >
                My Projects
              </Link>

              <Link
                className={`nav-link ${
                  activeLink === "messages" ? "active" : ""
                }`}
                to="/client/messages"
                onClick={() => handleLinkClick("messages")}
              >
                Messages
              </Link>
            </div>
            <div className="sub-nav-div-right">
       <div className="all-notify">
      <div onClick={handleNotifyPop} className="notification-div">
        <img src="/images/icon-16.png" alt="Notifications" />
        {notifications.some(n => !n.read) && (
          <span className="notification-badge"></span>
        )}
      </div>

{notifyPop && (
  <div className="notify">
    <div className="notify-header">
      <h4>Notifications</h4>
      <span className="notification-count">
        {notifications.length} {notifications.length === 1 ? 'item' : 'items'}
      </span>
    </div>
    
    <div className="notify-div">
      {loading ? (
        <div className="notification-loading">
          <img src="/images/icon-25.png" alt="Loading" />
          <p>Loading notifications...</p>
        </div>
      ) : error ? (
        <div className="notification-error">
          <img src="/images/icon-25.png" alt="Error" />
          <p>Error loading notifications</p>
        </div>
      ) : notifications.length > 0 ? (
        notifications.map((notification) => (
          <div 
            key={notification._id} 
            className={`notification-item ${!notification.read ? 'unread' : ''}`}
          >
            <img src="/images/icon-25.png" alt="Notification" />
            <div className="notification-content">
              <p className="notification-message">{notification.message}</p>
              <small className="notification-date">
                {formatDate(notification.createdAt)}
              </small>
            </div>
          </div>
        ))
      ) : (
        <div className="no-notifications">
          <img src="/images/icon-25.png" alt="No notifications" />
          <p>No notifications available</p>
        </div>
      )}
    </div>
  </div>
)}



   
   
    </div>
           
              <img src="/images/img-9.png" alt="" />
              <div style={{ position: "relative" }}>
                <Icon
                  onClick={handleOptionDrop}
                  width="24px"
                  height="24px"
                  icon="iconamoon:arrow-down-2-light"
                  style={{ color: "#FFFFFF80", cursor: "pointer" }}
                />
                {optionDrop ? (
                  <>
                    <div className="optionpop">
                      <Link
                        onClick={handleOptionDrop}
                        to="/client/setting"
                        className="optionpop-btn"
                      >
                        <img src="/images/icon-24.png" alt="" />
                        Setting
                      </Link>
                      <button onClick={handleLogout} className="optionpop-btn">
                        <img src="/images/icon-25.svg" alt="" />
                        Log out
                      </button>
                    </div>
                  </>
                ) : (
                  ""
                )}

                <div></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </NavRap>
  );
};

export default ClientDashboardNavbar;
