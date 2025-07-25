import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Icon } from "@iconify/react";

const NavRap = styled.div`
  .nav-link {
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff80;
  }
    @media screen and (max-width: 767px) {
    .nav-link {
      font-size: 20px;
}
}
  .nav-link.active {
    color: #ffffff;
  }
  .navbar {
    display: flex;
    align-items: center;
    gap: 20px;
  }
        @media screen and (max-width: 767px) {
    .navbar {
      margin-top: 40px;
    }
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
    @media screen and (max-width: 767px) {
    .search-div-input {
      width: 100%;
        color: white;
    }
  }
  .search-div-input input {
    width: 225px;
    height: 32px;
    border-radius: 100px;
    border: 1px solid #d9e4e924;
    background: #ffffff1f;
    padding-left: 30px;
    color: white;
  }
      .search-div-input input::placeholder {
      color: white;}
  @media screen and (max-width: 767px) {
    .search-div-input input {
      width: 100%;
    }
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
    @media screen and (max-width: 767px) {
    .sub-nav-div-right {
      gap: 25px;
      margin-left: 10px;
      float: right;
    }
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
    padding: 15px;
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
    height: 70%;
  }
  .notify {
    border: 1px solid #1018281a;
    box-shadow: 0px 8px 22px 0px #0000001a;
    width: 280px;
    height: 187px;
    border-radius: 10px;
    background: #ffffff;
    position: absolute;
    top: 50px;
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
`;

const ArtisanDashboardNavbar = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [optionDrop, setOptionDrop] = useState(false);
  const [notifyPop, setNotifyPop] = useState(false);
const modalRef = useRef(null);
const profileRef = useRef(null);

const handleClickOutside = (event) => {
  if (modalRef.current && !modalRef.current.contains(event.target)) {
    setNotifyPop(false);
  }
  if (profileRef.current && !profileRef.current.contains(event.target)) {
    setOptionDrop(false);
  }
};

useEffect(() => {
  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);



  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleOptionDrop = () => {
    setOptionDrop(!optionDrop);
    setNotifyPop(false);
  };

  const handleNotifyPop = () => {
    setNotifyPop(!notifyPop);
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
            <img src="/images/dash-logo.png" alt="" />
            <div className="search-div-input">
              <Icon
                className="search-icon"
                width="16px"
                height="16px"
                icon="material-symbols:search-rounded"
                style={{ color: "#FFFFFF80" }}
              />
              <input type="text" placeholder="search..." />
            </div>
          </div>
          <div className="nav-div-right">
            <div className={clicked ? "navbar active" : "navbar"} id="#navbar">
              <Link
                className={`nav-link ${activeLink === "home" ? "active" : ""}`}
                to="/artisan"
                onClick={() => handleLinkClick("home")}
              >
                Home
              </Link>
              <Link
                className={`nav-link ${activeLink === "job" ? "active" : ""}`}
                to="/artisan/jobs"
                onClick={() => handleLinkClick("job")}
              >
                My Jobs
              </Link>

              {/* <Link
                className={`nav-link ${
                  activeLink === "messages" ? "active" : ""
                }`}
                to="/artisan/messages"
                onClick={() => handleLinkClick("messages")}
              >
                Messages
              </Link> */}
            </div>
            <div className="sub-nav-div-right">
              <div className="all-notify">
                <div  onClick={handleNotifyPop} className="notification-div">
                  <img src="/images/icon-16.png" alt="" />
                </div>
                {notifyPop ? (
                  <>
                    <div ref={modalRef} className="notify">
                      <div className="notify-header">
                        <h4>Notification</h4>
                      </div>
                      <div className="notify-div">
                        <img src="/images/icon-25.png" alt="" />
                        <p>No notification</p>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
              {/* <div className="notification-div">
                <img src="/images/icon-17.png" alt="" />
              </div> */}
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
                    <div ref={profileRef} className="optionpop">
                      <Link
                        onClick={handleOptionDrop}
                        to="/artisan/settings"
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

export default ArtisanDashboardNavbar;
