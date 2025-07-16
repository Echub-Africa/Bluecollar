import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Marquee from "react-fast-marquee";

const CompanyRap = styled.div`
  background: #f2f2f2;

  .company-1 h1 {
    color: #101828;
    font-size: 40px;
    line-height: 45px;
    font-weight: 600;
    max-width: 629px;
    text-align: center;
  }
      .sub-home-22 {
    display: flex;
    gap: 30px;
    margin-top: 20px;
    height: 60px
  }
  .company-1 p {
    color: #666d7b;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    max-width: 629px;
    text-align: center;
  }
  .company-1 {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding-top: 50px;
  }
  .company-2 {
    display: flex;
    gap: 20px;
    margin: 100px 0px;
    justify-content: space-between;
  }
  .image-size-1 {
    width: 60%;
  }
  .image-size-2 {
    width: 40%;
  }
  .company-3 h2 {
    color: #101828;
    font-size: 40px;
    font-weight: 600;
    line-height: 50px;
    max-width: 506px;
  }
  .company-3-right p {
    color: #666d7b;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    max-width: 425px;
  }
  .company-3-right {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .company-3 {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
    padding-bottom: 100px;
  }
  .sub-company-4 p {
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    max-width: 300px;
  }
  .sub-company-4 h4 {
    color: #ffffff;
    font-size: 24px;
    font-weight: 600;
  }
  .sub-company-4 img {
    width: 50px;
    height: 50px;
  }
  .sub-company-4 {
    border: 1px solid #2b3d61;
    border-radius: 15px;
    padding: 35px 25px;
    width: 356px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 50px;
  }
  .p-comp {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .company-4 {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
    padding-top: 70px;
    padding-bottom: 70px;
    background: #101828;
  }
  .company-5-upper h2 {
    color: #101828;
    font-size: 40px;
    font-weight: 600;
    line-height: 45px;
    max-width: 387px;
  }
  .company-5-upper p {
    color: #666d7b;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    max-width: 313px;
  }
  .company-5-upper,
  .company-5-down {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }
  .company-5 {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-top: 100px;
    padding-bottom: 100px;
    background: #ffffff;
  }
  .company-6 p {
    color: #101828;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    max-width: 366px;
    text-align: center;
    margin: auto;
  }
  .company-6-sub {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  .company-6 {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  @media (max-width: 800px) {
    .image-size {
        width: 600px;
    }
    .company-2 {
      flex-wrap: wrap;
    }
  }
  @media (max-width: 678px) {
    .image-size {
        width: 500px;
    }
  }
  @media (max-width: 550px) {
    .image-size {
        width: 400px;
    }
  }
  @media (max-width: 450px) {
    .image-size {
        width: 300px;
    }
  }
  @media (max-width: 340px) {
    .image-size {
        width: 250px;
    }
  }
`;

const Company = () => {
  return (
    <CompanyRap>
      <div className="company-3 containery">
        <h2>Powering a New Generation of Technical Service Across Africa  <h3 style={{fontSize: "20px", lineHeight: "25px", marginTop: "10px"}}>At ECHub we're not just fixing things - we're fixing how things are done.</h3></h2>

      
  <div className="company-3-right">
        <p>
         ECHub is Africa's fast growing tech-enabled blue-collar service company that offers end-to-end 
         maintenance, repair, installation, and construction services - tailored for individuals, businesses, and real estate
         stakeholders. We're building a smarter and more professional alternative to the artisan chaos millions face every day.
        </p>
        <p>Where most platforms connect youwith artisans, we take full ownership of the service process - from booking
          to execution. Our in-house workforce is certified, background-checked, trained, and constantly supported by our operations and technology teams to deliveredsafety, speed, and transparency.
        </p>
        <p>We currently serve:
          <br />
          <ul>
            <li><b>Facility manager</b> tired of escalations and substandard repairs</li>
            <li><b>Homeowners & landords</b>  who want quick, trustworthy service</li>
            <li><b>SMEs & developers</b>  looking for installation & finishing partners</li>
          <li><b>Corporates</b>  who need routine maintenance without overhead stress</li>
          </ul>
        </p>
        <p>With over 250+ jobs compleded, 150+ trchnicians trained, over 1000 talent pool and a growing footprint across Lagos, ECHub is setting thet standard for professional,
          modern, and efficient technical services across Nigeria - and soon, Africa.
        </p>
        </div>
      </div>
      <div className="company-2 containery">
        <img  className="image-size image-size-1" src="/images/image-7.png" alt="" />
        <img className="image-size image-size-2" src="/images/image-8.png" alt="" />
      </div>
      <div className="company-3 containery">
        <h2>
          Constantly coming up with new ideas & improving artisans
          services for Africa.
        </h2>
        <div className="company-3-right">
          <p>
           ECHub is redefining the future of work in the artisan and technical sector.
          </p>
          <p>
          We believe blue-collar work deserves structire, and innovation. That's why we are building:
          <ul>
            <li><b>Job-tracking tech</b> that offers real-time updtes and customer visibility</li>
            <li><b>Insuurance-backed services</b> for safety and peace of mind</li>
            <li><b>before-and-after service audits</b> for quality assurance</li>
            <li><b>Smart dashboard and monthly</b> report assurance</li>
            <li><b>A workforce empowerment pipeline</b> with training, mentorship, and onboarding</li>
          </ul>
          </p>
          <p>We constantly observe user behaviour to identify gaps and create micro-innovations - like:
            <ul>
              <li>Flexi-time service add-ons</li>
              <li>Emergency call features</li>
              <li>Bundled services (e.g. generator servicing + fuel delivery)</li>
              <li>In-app live chat for clients and operations</li>
              <li>Shared dashboards between decision-makers and service users</li>
            </ul>
          </p>
          <p>We're not just changing <b>how services are delivered, we're canging how artisans are seen, supported, and valued</b> in the economy</p>
        </div>
      </div>
      <div className="company-4 containery">
        <div className="sub-company-4">
          <img src="/images/img-4.png" alt="" />
          <h4>Mission</h4>
          <p>
           To transform technical service delivery in Africa by building a trusted, tech-enabled ecosystem that empowers professionals, satisfies customers,
           and guarantees service quality
          </p>
        </div>
        <div className="sub-company-4">
          <img src="/images/img-5.png" alt="" />
          <h4>Vision</h4>
          <p>
           To become Africa's most trusted brand for blue-collar services, restoring confidence in local expertise and setting new benchmarks for quality,
           accountability, and profesionalism.
          </p>
        </div>
        <div className="sub-company-4">
          <img src="/images/img-6.png" alt="" />
          <h4>Core Values</h4>
          <div className="p-comp">
           <p><b>Accountability over excuses:</b> We don't blame. We own and solve.</p>
           <p><b>Excellence in every detail:</b> From wire to water, we deliver quality that lasts.</p>
           <p><b>Safety first, always:</b> For clients, workers, and property.</p>
           <p><b>Human support, not just tech:</b> Real people. Real help. Every time.</p>
           <p><b>Dignity of labour:</b> We empower skilled artisans to thrive in modern economy.</p>
          </div>
        </div>
      </div>
      <div className="company-5 containery">
        <div className="company-5-upper">
          <h2>Meet the team behind the company</h2>
          <p>
           ECHub is powered by a team of innovators, builders, and problem-solvers who deeply understand both the chaos of blue-collar services
           in Africa and the power of structure and technology to fix it.
          </p>Together,we bring over 10+ years of combined experience across construction, field operations, workforce development, product design,
          logistics, and customer experience.
          <p></p>
        </div>
        <div className="company-5-down">
          <img src="images/image-9.png" alt="" />
          <img src="images/image-10.png" alt="" />
          <img src="images/image-11.png" alt="" />
          <img src="images/image-12.png" alt="" />
        </div>
      </div>
      <div className="company-6 containery">
        <p>
          Powering the homeowners, from next-gen startups to established
          companies.
        </p>
<Marquee pauseOnHover={true} speed={30} direction="left">
          <div className="sub-home-22">
        <img src="/images/lag.png" alt="" />
        <img src="/images/lsetf.png" alt="" />
        <img src="/images/inn.png" alt="" />
        <img src="/images/m12.png" alt="" />
         </div>
        </Marquee>
      </div>
      <div className="containery">
          <div className="home-11">
            <div className="home-11-left">
              <h2>Build your career join the ECHub family today.</h2>
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
    </CompanyRap>
  );
};

export default Company;
