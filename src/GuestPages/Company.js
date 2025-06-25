import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
      <div className="company-1 containery">
        <h1>Powering a new generation of businesses across Africa</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Odio cursus adipiscing
          venenatis nunc ultrices feugiat augue ultrices. Eget vulputate vitae
          sed cursus fermentum. Sit a eu eget pulvinar sit libero. Dignissim
          netus justo eget aliquet vitae. Id diam tincidunt convallis auctor
          facilisis hac tempus sociis.
        </p>
      </div>
      <div className="company-2 containery">
        <img  className="image-size image-size-1" src="/images/image-7.png" alt="" />
        <img className="image-size image-size-2" src="/images/image-8.png" alt="" />
      </div>
      <div className="company-3 containery">
        <h2>
          Constantly coming up with new ideas & working on improving artisans
          services for Africa.
        </h2>
        <div className="company-3-right">
          <p>
            Lorem ipsum dolor sit amet consectetur. Libero rutrum tristique ut
            dolor nisl sit iaculis nam. Dictum nunc condimentum quis placerat
            felis felis praesent rhoncus. Fusce velit eget cursus eu nunc
            pellentesque. Morbi massa egestas sit dignissim ac mollis. Purus
            blandit mauris imperdiet nulla sit lorem. Mauris elementum rhoncus
            vitae nulla in iaculis libero ornare metus. Eget quis justo
            vestibulum venenatis sagittis metus ut. Viverra enim malesuada ipsum
            sit augue sed blandit. Volutpat morbi erat mi viverra tincidunt elit
            eget sit augue.
          </p>
          <p>
            Vel condimentum aenean libero eget massa in lectus eu quam. Morbi a
            risus ac vulputate mi. Quis mauris id neque id lacus tortor id sit.
            Sapien pellentesque sit odio nisl. Massa varius elementum a commodo
            est neque nec. Suscipit ac senectus quis quis.
          </p>
        </div>
      </div>
      <div className="company-4 containery">
        <div className="sub-company-4">
          <img src="/images/img-4.png" alt="" />
          <h4>Mission</h4>
          <p>
            Our mission is to become a leading offshore services provider by
            delivering innovative, high-quality services with integrity and
            professionalism, prioritizing safety, security, and environmental
            responsibility.
          </p>
        </div>
        <div className="sub-company-4">
          <img src="/images/img-5.png" alt="" />
          <h4>Vision</h4>
          <p>
            Our vision is to maintain excellence and remain the foremost
            offshore servicing company and the preferred partner of IOCs and
            investors
          </p>
        </div>
        <div className="sub-company-4">
          <img src="/images/img-6.png" alt="" />
          <h4>Core Values</h4>
          <div className="p-comp">
            <p>S – Service Excellence</p>
            <p>I – Integrity </p>
            <p>Innovation </p>
            <p>P – Professionalism</p>
            <p>L – Leadership</p>
            <p>E – Entrepreneurship</p>
          </div>
        </div>
      </div>
      <div className="company-5 containery">
        <div className="company-5-upper">
          <h2>Meet the team behind the company</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Diam tellus nulla ridiculus
            nulla faucibus a suspendisse quis quis. Ullamcorper.
          </p>
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
        <div className="company-6-sub">
          <img src="/images/lag.png" alt="" />
          <img src="/images/lsetf.png" alt="" />
          <img src="/images/inn.png" alt="" />
          <img src="/images/m12.png" alt="" />
        </div>
      </div>
      <div className="containery">
        <div className="home-11">
          <div className="home-11-left">
            <h2>Build your carrier join the ECHub family today.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Curabitur ac tortor in
              mattis. Convallis imperdiet magna tincidunt in eleifend. Cras.
            </p>
            <div className="home-11-left-btn">
              <Link className="home-11-btn-1">Sign up</Link>
              <Link className="home-11-btn-2">Learn more</Link>
            </div>
          </div>
          <div>
            <img src="/images/image-13.png" alt="" />
          </div>
        </div>
      </div>
    </CompanyRap>
  );
};

export default Company;
