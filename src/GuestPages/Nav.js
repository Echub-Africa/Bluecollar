import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { Icon } from "@iconify/react";

const NavRap = styled.div`
  display: flex;
  align-items: center;

  background-position: top;
  position: sticky;
  top: 0px;
  z-index: 9999;
  height: 100px;
  .nav-link {
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
  }
  .nav-link.active {
    font-weight: 500;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0px;
  }
  .all-nav {
    border: 1px solid #ffffff1a;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    padding: 0px 20px;
    width: 70%;
    margin: auto;
    position: fixed;
    margin-left: 14%;
  }
  .contact-us {
    background: #0067d0;
    width: 152px;
    height: 44px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
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
  @media (max-width: 550px) {
    .all-nav {
      width: 100%;
      border: none;
      marign-left: -1%;
    }
    @media screen and (max-width: 767px) {
      .all-nav {
        margin-left: 0%;
        width: 90%
      }
    }
  }
`;

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const { pathname } = useLocation();
  useEffect(() => {
    setClicked(false);
  }, [pathname]);
  return (
    <NavRap className={pathname !== "/" ? "white-nav" : "blue-nav"}>
      <nav>
        {/* <p style={{
           color: "#101828"
 
        }}>.</p> */}
    
        <div className="all-nav">    <div className="nav-mobile" onClick={handleClick}>
          {clicked ? (
            <Icon
              className="icon"
              width="30px"
              height="30px"
              icon="prime:times"
            />
          ) : (
            <Icon
              className="icon"
              width="30px"
              height="30px"
              icon="mdi-light:menu"
            />
          )}
        </div>
          <Link to="/">
            {" "}
            <img
              src={pathname != "/" ? "/images/logo-2.png" : "/images/logo.png"}
              alt=""
            />
          </Link>

          <div className={clicked ? "navbar active" : "navbar"} id="#navbar">
            <Link
              className={`nav-link ${activeLink === "home" ? "active" : ""}`}
              to="/"
              onClick={() => handleLinkClick("home")}
            >
              Home
            </Link>
            <Link
              className={`nav-link ${activeLink === "about" ? "active" : ""}`}
              to="/about"
              onClick={() => handleLinkClick("about")}
            >
             About
            </Link>

            <Link
              className={`nav-link ${activeLink === "blog" ? "active" : ""}`}
              to="/blog"
              onClick={() => handleLinkClick("blog")}
            >
              Blog
            </Link>
            <Link
              className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
              to="/arin"
              onClick={() => handleLinkClick("contact")}
            >
              Contact
            </Link>
          </div>
          <div className="contact-search">
            <Link to="/artisanAuth/signUp" className="contact-us">
              Create account
            </Link>
          </div>
        </div>
      </nav>
    </NavRap>
  );
};

export default Navbar;
