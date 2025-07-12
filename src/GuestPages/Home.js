import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import Typewriter from "./Typwriter.jsx";
import { Icon } from "@iconify/react/dist/iconify.js";

const faqs = [
  {
    question: "What services does ECHub provide?",
    answer:
      "ECHub offers a wide range of home and office maintenance services including plumbing, electrical, carpentry, air conditioning, and more.",
  },
  {
    question: "How do I request a service?",
    answer:
      "You can request a service by signing up on our platform, selecting the service needed, and submitting a request through the dashboard.",
  },
  {
    question: "Are your artisans trained and certified?",
    answer:
      "Yes, all ECHub artisans go through a rigorous screening and training process before onboarding.",
  },
  {
    question: "Do you offer emergency repair services?",
    answer:
      "Yes, ECHub provides emergency repair services depending on availability in your area.",
  },
  {
    question: "Can businesses and commercial properties use ECHub?",
    answer:
      "Absolutely! We offer tailored solutions for businesses and commercial properties.",
  },
  {
    question: "How do you ensure quality control?",
    answer:
      "ECHub has a feedback and rating system, as well as periodic quality checks for all service providers.",
  },
  {
    question: "Do you provide warranties on services rendered?",
    answer:
      "Yes, selected services come with warranties. Details are provided during booking.",
  },
];

const HomeRap = styled.div`

  .small-top-div p {
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
  }
  .small-top-div span {
    width: 9px;
    height: 9px;
    background: #0067d0;
    border-radius: 50%;
  }
  .small-top-div {
    background: #ffffff0a;
    display: flex;
    align-items: center;
    border-radius: 100px;
    padding: 5px 10px;
    gap: 10px;
    width: fit-content;
  }
  .home-sub-1 h1 {
    color: #ffffff;
    font-weight: 600;
    line-height: 50px;
    max-width: 514px;
    font-size: 40px;
  }
    @media screen and (max-width: 767px) {
     .home-sub-1 h1 {
     font-size: 24px;
     }
  }
  .home-sub-1 p {
    color: #a5acbb;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    max-width: 475px;
  }
  .hire,
  .become {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0067d0;
    width: 188px;
    height: 50px;
    border-radius: 100px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
  }

  @media screen and (max-width: 767px) {
  .hire,
  .become  {
  width: 46%;
  }
  }
  .become {
    background: transparent;
    border: 1px solid #ffffff26;
  }
  .home-1-btn {
    display: flex;
    gap: 15px;
  }
  .home-sub-1 {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: -190px;
  }
  @media screen and (max-width: 767px) {
    .home-sub-1 {
      margin-top: -40px;
    }
  }
  .home-1 {
    background: #101828;
    padding-top: 70px;
    padding-bottom: 70px;
    display: flex;
    gap: 20px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .home-2 p {
    color: #101828;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }
  .home-2 {
    padding-top: 50px;
    padding-bottom: 70px;
  }
  .sub-home-22 {
    display: flex;
    gap: 30px;
    margin-top: 20px;
    height: 60px
  }
      .sub-home-2 {
    display: flex;
    gap: 30px;
    margin-top: 20px;
  }
  .sub-home-3 {
    position: relative;
    border: 3px solid #ebeae9;
    border-radius: 15px;
    width: 341px;
    height: 435px;
  }
  .sub-home-3 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
  .sub-home-3-sub {
    backdrop-filter: blur(2.5px);
    background: #ffffff;
    width: 293px;
    height: 90px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    padding-left: 20px;
    position: absolute;
    bottom: 10px;
    left: 15px;
  }
  .sub-home-3-sub h4 {
    color: #101828;
    font-weight: 600;
    font-size: 18px;
  }
  .sub-home-3-sub p {
    color: #666d7b;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    max-width: 249px;
  }
  .home-3 {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .start-today {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0067d0;
    width: 211px;
    height: 50px;
    border-radius: 100px;
    margin: auto;
    color: #ffffff;
    font-weight: 600;
    font-size: 16px;
  }
  .all-home-3 {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 100px;
  }
  .sub-home-4 h2 {
    color: #101828;
    font-size: 50px;
    font-weight: 600;
    line-height: 50px;
    max-width: 417px;
  }
  .grean-mark {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #159615;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .job-div p {
    color: #101828 !important;
    font-size: 16px;
    font-weight: 500;
  }
  .job-div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .inner-sub-home-4 p {
    color: #666d7b;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    max-width: 204px;
  }
  .inner-sub-home-4 {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .sub-home-4-sub {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .sub-home-4 {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .home-4 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 100px;
  }
  .upper-home-5 h2 {
    color: #ffffff;
    font-size: 45px;
    font-weight: 600;
    line-height: 45px;
    max-width: 421px;
  }
  .upper-home-5 p {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
    opacity: 0.7;
    max-width: 370px;
  }
  .upper-home-5 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }
  .sub-home-5-sub h4 {
    color: #ffffff;
    max-width: 225px;
    font-weight: 600;
    line-height: 24px;
    font-size: 20px;
  }
  .sub-home-5-sub p {
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #ffffff;
    opacity: 0.7;
    max-width: 292px;
  }
  .discover-more {
    text-decoration: none;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .sub-home-5-sub {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .sub-home-5 {
    display: flex;
    flex-direction: column;
    gap: 50px;
    border: 1px solid #2b3d61;
    width: 366px;
    border-radius: 20px;
    padding: 35px 25px;
  }
  .sub-home-5 img {
    width: 48px;
    height: 48px;
  }
  .down-home-5 {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .home-5 {
    display: flex;
    flex-direction: column;
    gap: 50px;
    background: #101828;
    padding-top: 70px;
    padding-bottom: 70px;
    margin-bottom: 100px;
  }
  .sub-home-6 p {
    color: #101828;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    max-width: 182px;
  }
  .sub-home-6 h3 {
    color: #0067d0;
    font-size: 60px;
    font-weight: 600;
  }
  .sub-home-6 {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .home-6,
  .home-7 {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 100px;
  }
  .home-7 p {
    color: #101828;
    font-size: 16px;
    font-weight: 500;
  }
  .upper-home-8 h2 {
    color: #101828;
    font-weight: 600;
    font-size: 35px;
    max-width: 432px;
    line-height: 38px;
  }
  .upper-home-8 p {
    color: #666d7b;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    max-width: 362px;
  }
  .upper-home-8 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }
  .sub-home-8 p {
    color: #101828;
    font-size: 16px;
    font-weight: 500;
  }
  .sub-home-8 {
    border: 1px solid #1018281a;
    background: #ffffff;
    width: 273px;
    height: 60px;
    display: flex;
    gap: 15px;
    padding-left: 15px;
    border-radius: 10px;
    align-items: center;
  }
  .mid-home-8 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .indi-project,
  .cor-project {
    background: #0067d0;
    width: 263px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-radius: 100px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
  }
  .cor-project {
    color: #0067d0;
    background: #ffffff;
    border: 1px solid #0067d0;
    width: 283px;
  }
  .down-home-8 {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin: auto;
    flex-wrap: wrap;
  }
  .home-8 {
    background: #f2f2f2;
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-top: 70px;
    padding-bottom: 70px;
    margin-bottom: 100px;
  }
  .home-9 h2 {
    color: #101828;
    font-size: 40px;
    font-weight: 600;
    max-width: 500px;
    text-align: center;
    margin: auto;
    line-height: 45px;
  }
  .star-div p {
    color: #666d7b !important;
    font-size: 14px;
    font-weight: 400;
  }
  .star-div h4 {
    color: #101828;
    font-size: 16px;
    font-weight: 500;
  }
  .five-star {
    display: flex;
    gap: 5px;
  }
  .star-div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .sub-home-9-sub {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .home-9-sub p {
    color: #101828;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    max-width: 306px;
  }
  .home-9-sub {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 40px 20px;
    background: #f2f2f2;
    border-radius: 15px;
    width: 361px;
  }
  .all-home-9-sub {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }
  .home-9 {
    display: flex;
    flex-direction: column;
    gap: 100px;
    margin-bottom: 100px;
  }
  .home-10-left h2 {
    color: #101828;
    font-size: 40px;
    font-weight: 600;
    line-height: 48px;
    max-width: 383px;
  }
  .home-10-left p {
    color: #666d7b;
    font-size: 18px;
    font-weight: 400;
  }
  .contact-btn {
    background: #0067d0;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 161px;
    height: 48px;
    border-radius: 100px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
  }
  .home-10-left {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .sub-home-10 p {
    color: #101828;
    font-weight: 600;
    font-size: 16px;
  }
  .sub-home-10 {
    justify-content: space-between;
    align-items: center;
    border: 1px solid #1018281a;
    border-radius: 20px;
    width: 653px;
    height: 100%;
    padding: 10px 10px;
  }
  .sub-home-100 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }
  .home-10-right {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .home-10 {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }
  @media (max-width: 1250px) {
    .mid-home-8 {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 950px) {
    .mid-home-8 {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 750px) {
    .sub-home-10 {
      width: 500px;
    }
  }
  @media (max-width: 620px) {
    .mid-home-8 {
      grid-template-columns: repeat(1, 1fr);
      align-items: center;
    }
    .home-8 {
      align-items: center;
    }
    .sub-home-10 {
      width: 400px;
      gap: 20px;
    }
  }
  @media (max-width: 500px) {
    .home-1 img {
      width: 350px;
    }
    .home-1-btn {
      flex-wrap: wrap;
    }
    .home-sub-1 h1 {
      font-size: 30px;
      line-height: 40px;
    }
    .sub-home-10 {
      width: 100%;
      gap: 30px;
    }
  }
  @media (max-width: 400px) {
    .home-1 img {
      width: 250px;
    }
    .sub-home-3-sub {
      width: 250px;
    }
  }
  @media (max-width: 350px) {
    .home-sub-1 h1 {
      font-size: 45px;
    }
    .sub-home-3-sub {
      width: 220px;
    }
  }
    @media screen and (max-width: 767px) {
    .disturb {
  width: 100%;
    }}

    
`;

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const wahalaStyles = [
    { color: "#6333fb", textDecoration: "none" }, // China Wahala - Red
    { color: "#BF3BD6", textDecoration: "none" }, // Ecom Wahala - Blue
    { color: "#0067d0", textDecoration: "none" }, // Import Wahala - Green
    { color: "#AA1C4D", textDecoration: "none" }, // Trade Wahala - Purple
    { color: "#994A12", textDecoration: "none" }, // RMB Wahala - Orange
  ];

  return (
    <HomeRap>
      <div className="home-1 containery">
        <div className="home-sub-1">
          <div className="small-top-div">
            <span></span>
            <p>Led by a team of over a decade of experience, we are →</p>
          </div>
          <h1>
            Powering Solutions in
            <Typewriter
              texts={["Repairs", "Maintenance", "Construction"]}
              styles={wahalaStyles} // Pass the styles array
              typingSpeed={150}
              deletingSpeed={100}
              delay={1000}
            />
            for businesses and individuals across Africa.
          </h1>
          <p>
            We provide professional & expert services for ongoing maintenance,
            workforce support, and large-scale projects.
          </p>
          <div className="home-1-btn">
            <Link to="/artisanAuth/signUp" className="hire">Sign up</Link>
            <Link to="/artisanAuth/login" className="become">Sign in</Link>
          </div>
        </div>
        <div>
          <img src="/images/image-1.png" alt="" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
       <div className="home-6 containery">
        <div className="sub-home-6">
          <h3>1K+</h3>
          <p>Top Rated, highly skilled technical talent pro</p>
        </div>
        <div className="sub-home-6">
          <h3>$10K</h3>
          <p>Cost savings per project handled by Bluecollar</p>
        </div>
        <div className="sub-home-6">
          <h3>86%</h3>
          <p>Faster time to hire</p>
        </div>
        <div className="sub-home-6">
          <h3>74%</h3>
          <p>Faster Project Delivery</p>
        </div>
      </div>
      <div className="all-home-3 containery">
        <div className="home-3 ">
          <div className="sub-home-3">
            <img src="/images/image-2.png" alt="" />
            <div className="sub-home-3-sub">
              <h4>Facility Management</h4>
              <p>We handle continuous maintenance for commercial properties.</p>
            </div>
          </div>
          <div className="sub-home-3">
            <img src="/images/image-3.png" alt="" />
            <div className="sub-home-3-sub">
              <h4>Construction & Renovation</h4>
              <p>We provide End-to-end project execution.</p>
            </div>
          </div>
          <div className="sub-home-3">
            <img src="/images/image-4.png" alt="" />
            <div className="sub-home-3-sub">
              <h4>Workforce Outsourcing</h4>
              <p>Need skilled hands for your project? We provide the best.</p>
            </div>
          </div>
        </div>
        <Link to="/artisanAuth/signUp" className="start-today">Start a Project Today</Link>
      </div>
      <div className="home-4 containery">
        <div className="sub-home-4">
          <h2>Find skilled workers for your home or business</h2>
          <div className="sub-home-4-sub">
            <div className="inner-sub-home-4">
              <div className="job-div">
                <div className="grean-mark">
                  <Icon
                    width="14px"
                    height="14px"
                    icon="fluent-mdl2:check-mark"
                    style={{ color: "#ffffff" }}
                  />
                </div>
                <p>Job Tracking</p>
              </div>
              <p>See job progress and updates in real time</p>
            </div>
            <div className="inner-sub-home-4">
              <div className="job-div">
                <div className="grean-mark">
                  <Icon
                    width="14px"
                    height="14px"
                    icon="fluent-mdl2:check-mark"
                    style={{ color: "#ffffff" }}
                  />
                </div>
                <p>Repair History</p>
              </div>
              <p>Keep records of past services for easy reference.</p>
            </div>
            <div className="inner-sub-home-4">
              <div className="job-div">
                <div className="grean-mark">
                  <Icon
                    width="14px"
                    height="14px"
                    icon="fluent-mdl2:check-mark"
                    style={{ color: "#ffffff" }}
                  />
                </div>
                <p>Payments</p>
              </div>
              <p>Secure, seamless transactions within the platform</p>
            </div>

            <div className="inner-sub-home-4">
              <div className="job-div">
                <div className="grean-mark">
                  <Icon
                    width="14px"
                    height="14px"
                    icon="fluent-mdl2:check-mark"
                    style={{ color: "#ffffff" }}
                  />
                </div>
                <p>Insurance & Guarantees</p>
              </div>
              <p>We cover damages and ensure high service standards.</p>
            </div>
          </div>
        </div>
        <div>
          <img src="/images/image-5.png" className="disturb" alt="" />
        </div>
      </div>
     
      <div className="home-7 containery">
        <p>As featured on</p>
           <Marquee pauseOnHover={true} speed={30} direction="left">
          <div className="sub-home-22">
        <img src="/images/lag.png" alt="" />
        <img src="/images/lsetf.png" alt="" />
        <img src="/images/inn.png" alt="" />
        <img src="/images/m12.png" alt="" />
         </div>
        </Marquee>
      </div>
      <div className="home-8 containery">
        <div className="upper-home-8">
          <h2>
            Need the right team for the job? we have already built it for you
          </h2>
          <p>
            We provide direct maintenance, construction, installation, and
            repair services across multiple sectors, ready for your next project
          </p>
        </div>
        <div className="mid-home-8">
          <div className="sub-home-8">
            <img src="/images/icon-1.png" alt="" />
            <p>Electrical Services</p>
          </div>
          <div className="sub-home-8">
            <img src="/images/icon-2.png" alt="" />
            <p>Flooring</p>
          </div>
          <div className="sub-home-8">
            <img src="/images/icon-3.png" alt="" />
            <p>Masonry & Construction</p>
          </div>
          <div className="sub-home-8">
            <img src="/images/icon-4.png" alt="" />
            <p>Plumbing Services</p>
          </div>
          <div className="sub-home-8">
            <img src="/images/icon-5.png" alt="" />
            <p>Woodwork & Carpentry</p>
          </div>
          <div className="sub-home-8">
            <img src="/images/icon-6.png" alt="" />
            <p>Remodeling</p>
          </div>
          <div className="sub-home-8">
            <img src="/images/icon-7.png" alt="" />
            <p>HVAC & Cooling Systems</p>
          </div>
          <div className="sub-home-8">
            <img src="/images/icon-8.png" alt="" />
            <p>Painting</p>
          </div>
          <div className="sub-home-8">
            <img src="/images/icon-9.png" alt="" />
            <p>Roofing</p>
          </div>
          <div className="sub-home-8">
            <img src="/images/icon-10.png" alt="" />
            <p>Plumbing</p>
          </div>
          <div className="sub-home-8">
            <img src="/images/icon-11.png" alt="" />
            <p>Metalwork & Welding</p>
          </div>
          <div className="sub-home-8">
            <img src="/images/icon-12.png" alt="" />
            <p>General Maintenance</p>
          </div>
        </div>
        <div className="down-home-8">
          <Link to="/clientAuth/signUp" className="indi-project">Start an Individual Project</Link>
          <Link to="/companyAuth/signUp" className="cor-project">Hire or start a corporate project</Link>
        </div>
      </div>
      <div className="home-5 containery">
        <div className="upper-home-5">
          <h2>Enjoy the Bluecollar experience</h2>
          <p>
            We simplify the hiring process, offer on-the-job insurance and give
            the Laborhack Guarantee to ensure our clients' peace of mind.
          </p>
        </div>
        <div className="down-home-5">
          <div className="sub-home-5">
            <img src="/images/img-1.png" alt="" />
            <div className="sub-home-5-sub">
              <h4>Hire trusted & vetted workers instantly</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Scelerisque cursus in
                nunc in mi eget. Condimentum dui laoreet tincidunt amet.
              </p>
              <Link className="discover-more">
                Discover More
                <Icon
                  width="18px"
                  height="18px"
                  icon="formkit:arrowright"
                  style={{ color: "#ffffff" }}
                />
              </Link>
            </div>
          </div>
          <div className="sub-home-5">
            <img src="/images/img-2.png" alt="" />
            <div className="sub-home-5-sub">
              <h4>Save time through simplified hiring</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Scelerisque cursus in
                nunc in mi eget. Condimentum dui laoreet tincidunt amet.
              </p>
              <Link className="discover-more">
                Discover More
                <Icon
                  width="18px"
                  height="18px"
                  icon="formkit:arrowright"
                  style={{ color: "#ffffff" }}
                />
              </Link>
            </div>
          </div>
          <div className="sub-home-5">
            <img src="/images/img-3.png" alt="" />
            <div className="sub-home-5-sub">
              <h4>Manage and reduce risk</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Scelerisque cursus in
                nunc in mi eget. Condimentum dui laoreet tincidunt amet.
              </p>
              <Link className="discover-more">
                Discover More
                <Icon
                  width="18px"
                  height="18px"
                  icon="formkit:arrowright"
                  style={{ color: "#ffffff" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="home-2 containery">
        <p>Trusted by top companies and contractors</p>
        <Marquee pauseOnHover={true} speed={10} direction="left">
          <div className="sub-home-2">
            <img src="/images/shopify.png" alt="" />
            <img src="/images/okta.png" alt="" />
            <img src="/images/atla.png" alt="" />
            <img src="/images/deloitte.png" alt="" />
            <img src="/images/shopify.png" alt="" />

            <img
              style={{ marginRight: "30px" }}
              src="/images/okta.png"
              alt=""
            />
          </div>
        </Marquee>
      </div>

      <div className="home-9 containery">
        <h2>See what our customers have to say about us</h2>
        <div className="all-home-9-sub">
          <div className="home-9-sub">
            <p>
              "ECHub has completely transformed how we handle maintenance at our
              office complex. Their electricians and plumbers are highly
              skilled, professional, and always on time. We no longer worry
              about faulty wiring or plumbing leaks because we have a team we
              can trust. Highly recommended!"
            </p>
            <div className="sub-home-9-sub">
              <img src="/images/pep.png" alt="" />
              <div className="star-div">
                <div className="five-star">
                  <Icon
                    width="14px"
                    height="14px"
                    icon="material-symbols-light:star-rounded"
                    style={{ color: "#F6B01E" }}
                  />
                  <Icon
                    width="14px"
                    height="14px"
                    icon="material-symbols-light:star-rounded"
                    style={{ color: "#F6B01E" }}
                  />
                  <Icon
                    width="14px"
                    height="14px"
                    icon="material-symbols-light:star-rounded"
                    style={{ color: "#F6B01E" }}
                  />
                  <Icon
                    width="14px"
                    height="14px"
                    icon="material-symbols-light:star-rounded"
                    style={{ color: "#F6B01E" }}
                  />
                  <Icon
                    width="14px"
                    height="14px"
                    icon="material-symbols-light:star-rounded"
                    style={{ color: "#F6B01E" }}
                  />
                </div>
                <h4>Mr. Adekunle Adebayo</h4>
                <p>Facility Manager, Lagos</p>
              </div>
            </div>
          </div>
          <div className="home-9-sub">
            <p>
              “I needed urgent repairs on my wooden kitchen cabinets and a
              complete rewiring of my home. ECHub delivered beyond my
              expectations. The artisans were courteous, efficient, and left my
              house spotless after the job. It’s rare to find a service provider
              this reliable.”
            </p>
            <div className="sub-home-9-sub">
              <img src="/images/pep.png" alt="" />
              <div className="star-div">
                <div className="five-star">
                  <Icon
                    width="14px"
                    height="14px"
                    icon="material-symbols-light:star-rounded"
                    style={{ color: "#F6B01E" }}
                  />
                  <Icon
                    width="14px"
                    height="14px"
                    icon="material-symbols-light:star-rounded"
                    style={{ color: "#F6B01E" }}
                  />
                  <Icon
                    width="14px"
                    height="14px"
                    icon="material-symbols-light:star-rounded"
                    style={{ color: "#F6B01E" }}
                  />
                  <Icon
                    width="14px"
                    height="14px"
                    icon="material-symbols-light:star-rounded"
                    style={{ color: "#F6B01E" }}
                  />
                  <Icon
                    width="14px"
                    height="14px"
                    icon="material-symbols-light:star-rounded"
                    style={{ color: "#F6B01E" }}
                  />
                </div>
                <h4>Mrs. Chioma Nwosu</h4>
                <p>Homeowner, Startime Estate</p>
              </div>
            </div>
          </div>
          <div className="home-9-sub">
            <p>
              "We’ve worked with ECHub for multiple projects, including HVAC
              installations and masonry work. Their attention to detail, speed,
              and quality of service make them our go-to partner for any
              construction and maintenance needs. They’re not just artisans;
              they’re professionals who get the job done right.”
            </p>
            <div className="sub-home-9-sub">
              <img src="/images/pep.png" alt="" />
              <div className="star-div">
                <div className="five-star">
                  <Icon
                    width="14px"
                    height="14px"
                    icon="material-symbols-light:star-rounded"
                    style={{ color: "#F6B01E" }}
                  />
                  <Icon
                    width="14px"
                    height="14px"
                    icon="material-symbols-light:star-rounded"
                    style={{ color: "#F6B01E" }}
                  />
                  <Icon
                    width="14px"
                    height="14px"
                    icon="material-symbols-light:star-rounded"
                    style={{ color: "#F6B01E" }}
                  />
                  <Icon
                    width="14px"
                    height="14px"
                    icon="material-symbols-light:star-rounded"
                    style={{ color: "#F6B01E" }}
                  />
                  <Icon
                    width="14px"
                    height="14px"
                    icon="material-symbols-light:star-rounded"
                    style={{ color: "#F6B01E" }}
                  />
                </div>
                <h4>Engr. Femi Oladipo</h4>
                <p>Construction Project Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-10 containery">
        <div className="home-10-left">
          <h2>Frequently Asked Questions</h2>
          <p>Do you still have any questions?</p>
          <a href="/contact" className="contact-btn">
            Contact us
            <Icon
              width="14px"
              height="14px"
              icon="akar-icons:arrow-up-right"
              style={{ color: "#ffffff" }}
            />
          </a>
        </div>

        <div className="home-10-right">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="sub-home-10"
              onClick={() => toggleFAQ(index)}
              style={{ cursor: "pointer" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <p style={{ float: "left", padding: "10px" }}>{faq.question}</p>
                <Icon
                  width="14px"
                  height="14px"
                  icon={
                    openIndex === index ? "ic:round-minus" : "ic:round-plus"
                  }
                  style={{
                    color: "#101828",
                    float: "right",
                    marginLeft: "-27px",
                    marginTop: "10px",
                  }}
                />
              </div>
              {openIndex === index && (
                <p className="sub-home-100">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="containery">
        <div className="home-11">
          <div className="home-11-left">
            <h2>Build your carrier join the ECHub family today.</h2>
            <p>
              Are you a skilled artisan looking for growth opportunities? Join
              our network of professionals and build a thriving career with us.
            </p>
            <div className="home-11-left-btn">
              <Link to="/artisanAuth/artisanreg" className="home-11-btn-1">Sign up</Link>
              <Link to="/artisanAuth/artisanLog" className="home-11-btn-2">Sign In</Link>
            </div>
          </div>
          <div>
            <img src="/images/image-6.png" alt="" />
          </div>
        </div>
      </div>
    </HomeRap>
  );
};

export default Home;
