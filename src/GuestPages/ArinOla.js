import React, { useRef } from "react";
import styled from "styled-components";
import generatePDF from "react-to-pdf";


const ArinRap = styled.div`
  font-family: "Roboto";
  .arin-1 {
    width: 100%;
    height: 100vh;
    position: relative;
  }
  .arin-1 img {
    width: 100%;
    height: 95%;
  }
  h1 {
    font-size: 18px;
  }
  .blue-color {
    color: blue;
  }
  p {
    font-size: 16px;
    font-weight: 500;
  }
  .upper, .down {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .all {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px;
    position: absolute;
    top: 80px;
  }
  .move-away {
    margin-top: 80px;
  }
  h4 {
    max-width: 500px;
    text-align: center;
    margin: auto;
    padding-bottom: 2px;
text-align: center;
text-transform: uppercase;
font-size: 18px;
font-weight: 600;
  }
`;

const Arin = () => {
    const picRef = useRef();

  return (
    <ArinRap>
      <div ref={picRef} className="arin-1">
        <img src="/images/head.jpg" alt="" />
        <div className="all">
          <div className="upper">
           
            <p>Date: 19/02/2025</p>
            <div>
              <p>Ms. Uzoma Jennifer Chinagorom</p>
              <p>10A Wumego Crescent</p>
              <p>Lekki Phase 1, Lagos</p>
            </div>
            <div>
              <p>Dear Ms. Uzoma,</p>
            </div>
          </div>
          <div>
            <h4>Brokerage Service on Sale of 2-Bedroom Apartment, Lekki phase 1, Lagos State.
            </h4>
          </div>
          <div className="down">
            <p>
            We appreciate the opportunity to assist you in securing your desired property. 
            In line with our discussions, we are pleased to present the terms of engagement for 
            our professional real estate brokerage services.

            </p>
            <p>
            Our agency fee for this transaction is 5% of the property value, with room for 
            slight negotiation if required. Kindly find below the official payment details:

            </p>
            <div>
              <p>Account Name: Everything Investment & Properties Ltd</p>
              <p>Account Number: 4091998021</p>
              <p>Bank: Polaris Bank</p>
            </div>
            <p>
            We kindly request that payments be made via bank transfer. Please do not hesitate to reach out if 
            you have any questions or require further clarification.

            </p>
            <p>We look forward to a smooth and successful transaction.
            </p>
            <p>Best regards,</p>

            <div className="move-away">
              <p>Edubiyi Esther,</p>
              <p>Customer Relationship Manager,</p>
              <p >F: Everything Investment & Properties Ltd.</p>
            </div>
          </div>
        </div>
      </div>
      <button
                onClick={() => {
                  generatePDF(picRef, {
                    filename: `header `,
                  });
                }}
              >
                Download{" "}
              </button>
    </ArinRap>
  );
};

export default Arin;
