import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterRap = styled.div`
  .footer-1 p {
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
  }
  .footer-1 h2 {
    color: #ffffff;
    font-weight: 500;
    font-size: 35px;
  }
  .footer-1 {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .footer-2 input {
    background: #ffffff;
    width: 347px;
    height: 55px;
    border-radius: 100px;
    padding-left: 15px;
    border: none;
  }
  .subscribe {
    background: #0067d0;
    text-decoration: none;
    width: 143px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
  }
  .footer-2 {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .footer-upper {
    background: #101828;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .footer-3 h6 {
    color: #101828;
    font-weight: 500;
    font-size: 14px;
  }
  .links {
    color: #666D7B;
    font-weight: 400;
    font-size: 14px;
  }
  .footer-3  {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .footer-4 {
    display: flex;
    gap: 20px;
  }
  .middle-footer  {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .middle-down {
    background: #F2F2F2;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .down-footer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    border-top: 1px solid #1018281A;
    padding-top: 50px;
    margin-top: 100px;
    align-items: center;
  }
  .last-footer {
    color: #666D7B;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    padding-top: 50px;
  }
  @media (max-width: 860px) {
    .footer-2 {
        flex-wrap: wrap;
    }
  }
  @media (max-width: 640px) {
    .footer-upper {
        flex-wrap: wrap;
        gap: 20px;
    }
    .middle-footer, .down-footer {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
        align-items: flex-start;
    }
  } 
  @media (max-width: 390px) {
    .footer-2 input {
        width: 300px;
    }
    .middle-footer, .down-footer {
        grid-template-columns: repeat(1, 1fr);
        gap: 40px;
    }
  }
  @media (max-width: 340px) {
    .footer-2 input {
        width: 250px;
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterRap>
      <div className="footer-upper containery">
        <div className="footer-1">
          <h2>Subscribe to our newsletter</h2>
          <p>Trusted by many others like you.</p>
        </div>
        <div className="footer-2">
          <input type="text" placeholder="Enter email address" />
          <Link className="subscribe">SUBSCRIBE</Link>
        </div>
      </div>
      <div className="middle-down containery">
        <div className="middle-footer ">
            <div className="footer-3">
            <h6>Products</h6>
            <Link to="/artisan/artisanreg" className="links">Apply as an Artisan</Link>
            <Link className="links">Bluecollar homeowners</Link>
            <Link className="links">Bluecollar business</Link>
            <Link className="links">Invoice</Link>
            <Link className="links">Request</Link>
            <Link to="/world" className="links">Subscriptions</Link>
            </div>
            <div className="footer-3">
            <h6>Company</h6>
            <Link className="links">About us</Link>
            <Link className="links">Press</Link>
            <Link className="links">Careers</Link>
            <Link className="links">Blog</Link>
            <Link className="links">FAQs</Link>
            <Link className="links">Affiliates and partnerships</Link>
            <Link className="links">Help centre</Link>
            </div>
            <div className="footer-3">
            <h6>Support</h6>
            <Link className="links">Terms of service</Link>
            <Link className="links">Privacy policy</Link>
            <Link className="links">Artisan terms of service</Link>
            <Link className="links">Cokie policy</Link>
            <Link className="links">Others</Link>
            </div>
            <div className="footer-3">
            <h6>Follow us</h6>
            <div className="footer-4">
            <Icon
                width="20px"
                height="20px"
                icon="mdi:facebook"
                style={{color: "#666d7b"}}
            />
            <Icon
                className="icon"
                width="20px"
                height="20px"
                icon="prime:twitter"
                style={{color: "#666d7b"}}

            />
            <Icon
                className="icon"
                width="20px"
                height="20px"
                icon="mdi:instagram"
                style={{color: "#666d7b"}}

            />
            </div>
            </div>
        </div>
        <div className="down-footer">
            <Link to="/"><img src="/images/footer-logo.png" alt="" /></Link>
            <div className="footer-3">
                <Link className="links">Legal</Link>
                <Link className="links">Complaints</Link>
            </div>
            <div className="footer-3">
                <Link className="links">Privacy policy</Link>
                <Link className="links">Country site map</Link>

            </div>
            <div className="footer-3">
                <Link className="links">Cookie Policy</Link>
            </div>
        </div>
        <p className="last-footer">Copyright © {currentYear} Echub Africa. All Rights Reserved</p>
      </div>
    </FooterRap>
  );
};

export default Footer;
