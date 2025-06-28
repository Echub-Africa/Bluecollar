import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const DetailRap = styled.div`
  padding-bottom: 50px;
  padding-top: 50px;
  .back-div {
    background: #1018280d;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .detail-1-sub-1 h2 {
    color: #101828;
    font-size: 24px;
    font-weight: 600;
  }
  .inner-detail-1 p {
    color: #667085b2;
    font-size: 14px;
    font-weight: 500;
    border-right: 1.5px solid #10182826;
    padding-right: 10px;
  }
  .inner-detail-1 span {
    color: #0067d0;
  }
  .inner-detail-1 h6 {
    color: #e0a416;
    font-size: 14px;
    font-weight: 500;
  }
  .inner-detail-1 {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .detail-1-sub-1 {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .detail-i-left {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .detail-1-sub-2-inner p {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
  }
  .detail-1-sub-2-inner h4 {
    color: #101828;
    font-size: 24px;
    font-weight: 600;
  }
  .detail-1-sub-2-inner {
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-right: 1px solid #1018281a;
    padding-right: 40px;
  }
  .detail-1-right {
    display: flex;
    gap: 40px;
    background: #f7f7f7;
    padding: 20px;
    border-radius: 8px;
  }
  .no-border {
    border: none;
  }
  .detail-1 {
    background: #ffffff;
    border: 1px solid #1018281a;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
  }
  .link {
    text-decoration: none;
    color: #66708580;
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 20px;
  }
  .link.active {
    color: #101828;
    border-bottom: 2px solid #0067d0;
  }
  .left-header {
    padding-left: 20px;
    padding-top: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid #1018281a;
  }
  .left-body-inner h4 {
    color: #101828;
    font-size: 14px;
    font-weight: 500;
  }
  .left-body-inner p {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    max-width: 518px;
  }
  .left-body-inner {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .left-body {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
  }

  .complete-job {
    background: #27a549;
    width: 127px;
    height: 30px;
    border-radius: 5px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-weight: 500;
    font-size: 13px;
    border-style: none;
  }
  .right-header h4 {
    color: #101828;
    font-weight: 500;
    font-size: 16px;
  }
  .right-header {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid #1018281a;
  }
  .right-body {
    background: #f7f7f7;
    border: 1px solid #1018281a;
    margin: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .right-body-div {
    height: 395px;
    width: 100%;
    background: #ffffff;
    border: 1px solid #1018281a;
    border-radius: 8px;
  }
  .right-down p {
    color: #66708580;
    font-size: 14px;
    font-weight: 400;
  }
  .right-down-icon {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .right-down {
    border: 1px solid #1018281a;
    background: #ffffff;
    border-radius: 8px;
    height: 53px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
  }
  .detail-2-left {
    background: #ffffff;
    border: 1px solid #1018281a;
    border-radius: 8px;
    width: 60%;
  }
  .detail-2-right {
    background: #ffffff;
    border: 1px solid #1018281a;
    border-radius: 8px;
    width: 40%;
  }
  .detail-2 {
    display: flex;
    gap: 20px;
  }
  .all-detail {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .mile-1-inner-1 h4 {
    color: #101828;
    font-size: 14px;
    font-weight: 500;
  }
  .mile-1-inner-1 {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .mile-1-sub-1 h5 {
    color: #27a549;
    font-size: 14px;
    font-weight: 500;
  }
  .mile-1-sub-1 h6 {
    background: #6670851a;
    padding: 5px 8px;
    border-radius: 100px;
    color: #667085b2;
    font-size: 12px;
    font-weight: 500;
  }
  .mile-1-sub-1 p {
    color: #667085b2;
    font-size: 14px;
    font-weight: 500;
  }
  .mile-1-sub-1 {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .mile-1-inner-2,
  .mile-1-inner-3 {
    border-left: 1.5px solid #0067d0;
    padding-left: 30px;
    padding-bottom: 20px;
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .mile-1-inner-3 {
    border-left: 1.5px solid #1018281a;
  }
  .all-mile {
    padding: 20px;
  }
  .propose {
    color: #0067d0;
    font-size: 14px;
    font-weight: 500;
    border: none;
  }
  .propose-header h4 {
    color: #101828;
    font-size: 16px;
    font-weight: 600;
  }
  .propose-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background: #f7f7f7;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    border-bottom: 1px solid #1018281a;
  }
  .input-divs label {
    color: #667085;
    font-size: 15px;
    font-weight: 400;
  }
  .input-divs select,
  .input-divs input {
    border: 1px solid #1018281a;
    border-radius: 10px;
    width: 358px;
    height: 48px;
    padding: 0px 10px;
  }
  .input-divs {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .propose-body button {
    border-style: none;
    background: #0067d0;
    width: 358px;
    height: 47px;
    border-radius: 10px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
  }
  .propose-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .propose-body p {
    color: #667085;
    line-height: 19px;
    font-size: 14px;
    font-weight: 400;
    max-width: 342px;
  }
  .propose-body h4 {
    color: #EA5455;
    font-size: 12px;
    font-weight: 400;
    background: #F9EFEF;
    padding: 10px 20px;
    width: 358px;
    border-radius: 5px;
  }
  .btns {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 10px;
  }
  .cancel-btn, .confirm-btn {
    background: #1018281A !important;
    width: 173px !important;
    height: 47px !important;
    border-radius: 10px !important;
    color: #667085 !important;
    font-size: 16px !important;
    font-weight: 600 !important;
  }
  .confirm-btn {
    background: #0067D0 !important;
    color: #ffffff !important;

  }
  .propose-div {
    background: #ffffff;
    border-radius: 6px;
    width: fit-content;
    border-radius: 6px;
  }
  @media (max-width: 1024px) {
    .detail-2 {
      flex-direction: column;
    }
    .detail-2-left,
    .detail-2-right {
      width: 100%;
    }
  }
  @media (max-width: 678px) {
    .detail-1-sub-2-inner {
      border: none;
    }
    .detail-1-right {
      flex-wrap: wrap;
    }
  }
  @media (max-width: 470px) {
    .inner-detail-1 {
      flex-wrap: wrap;
    }
    .inner-detail-1 p {
      border: none;
    }
  }
`;

const ArtisanDetail = () => {
  const navigate = useNavigate();
    useEffect(() => {
      const token = localStorage.getItem("artisanToken");
      if (!token) {
        navigate("/artisanAuth/login/Artisan");
      }
    }, [navigate]);
  const [activeLink, setActiveLink] = useState("details");
  const [propose, setPropose] = useState(false);
  const [completePop, setCompletePop] = useState(false)

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleDropPropose = () => {
    setPropose(!propose);
  };
const handleCompleteDrop = () => {
  setCompletePop(!completePop)
}
  const moveBack = () => {
    navigate("/artisan/jobs");
  };
  return (
    <DetailRap>
      <div className="containary all-detail ">
        <div className="detail-1">
          <div className="detail-i-left">
            <div onClick={moveBack} className="back-div">
              <Icon
                className="icon"
                width="16px"
                height="16px"
                icon="formkit:arrowleft"
                style={{ color: "#101828" }}
              />
            </div>
            <div className="detail-1-sub-1">
              <h2>Job ID: OZTM42K3992</h2>
              <div className="inner-detail-1">
                <p>
                  Client: <span>Bluecollar</span>
                </p>
                <p>Nov 20, 2024</p>
                <h6>In progress</h6>
              </div>
            </div>
          </div>
          <div className="detail-1-right">
            <div className="detail-1-sub-2-inner">
              <p>Project Price</p>
              <h4>₦200k</h4>
            </div>
            <div className="detail-1-sub-2-inner">
              <p>Milestone Paid</p>
              <h4>₦50k</h4>
            </div>
            <div className="detail-1-sub-2-inner no-border">
              <p>Milestone Remaining</p>
              <h4>₦150k</h4>
            </div>
          </div>
        </div>
        <div className="detail-2">
          <div className="detail-2-left">
            <div className="left-header">
              <Link
                className={`link ${activeLink === "details" ? "active" : ""}`}
                onClick={() => handleLinkClick("details")}
              >
                Job Details
              </Link>
              <Link
                className={`link ${activeLink === "milestone" ? "active" : ""}`}
                onClick={() => handleLinkClick("milestone")}
              >
                Milestone Timeline
              </Link>
            </div>
            {activeLink === "details" && (
              <div className="left-body">
                <div className="left-body-inner">
                  <h4>Description</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Sed in gravida a
                    platea lectus. Aenean facilisi id sit porta vestibulum
                    bibendum interdum dolor. Nec mi interdum euismod at aliquam
                    amet donec. Laoreet morbi arcu pellentesque malesuada. Odio
                    quam imperdiet dignissim mi cursus eu venenatis. Tortor sed
                    nibh enim rutrum. Dis tellus aliquam lacinia amet urna
                    posuere. Gravida consectetur etiam amet maecenas quam.
                  </p>
                  <p>
                    Platea et ac neque aliquam consectetur odio. Hendrerit elit
                    nec vel tempus consectetur eget neque. Amet orci odio risus
                    risus consectetur tellus. Eleifend cursus risus volutpat
                    volutpat facilisis purus consectetur bibendum.{" "}
                  </p>
                </div>
                <div className="left-body-inner">
                  <h4>Duration</h4>
                  <p>45 Weeks (140 days)</p>
                </div>
                <div className="left-body-inner">
                  <h4>Job ID</h4>
                  <p>XYM-7649795</p>
                </div>
                <div className="left-body-inner">
                  <h4>Priority</h4>
                  <p>High</p>
                </div>
              </div>
            )}
            {activeLink === "milestone" && (
              <>
                <div className="all-mile">
                  <div>
                    <div className="mile-1-inner-1">
                      <img src="/images/icon-21.png" alt="" />
                      <h4>Equipment Purchase</h4>
                    </div>
                    <div className="mile-1-inner-2">
                      <div className="mile-1-sub-1">
                        <h5>₦200k</h5>
                        <h6>Paid</h6>
                      </div>
                      <div className="mile-1-sub-1">
                        <img src="/images/icon-22.png" alt="" />
                        <p>Nov 20, 2024</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mile-1-inner-1">
                      <img src="/images/icon-21.png" alt="" />
                      <h4>Payment Milestone</h4>
                    </div>
                    <div className="mile-1-inner-3">
                      <div className="mile-1-sub-1">
                        <h5>₦200k</h5>
                        <h6>Paid</h6>
                      </div>
                      <div className="mile-1-sub-1">
                        <img src="/images/icon-22.png" alt="" />
                        <p>Nov 20, 2024</p>
                      </div>
                    </div>
                  </div>
                  <div className="mile-1-inner-1">
                    <img src="/images/icon-23.png" alt="" />
                    <button onClick={handleDropPropose} className="propose">
                      Propose new milestone
                    </button>
                  </div>

                  {propose ? (
                    <div className="dropdown-container">
                      <div className="propose-div">
                        <div className="propose-header">
                          <h4>Create payment millstone</h4>
                          <Icon
                            onClick={handleDropPropose}
                            className="icon"
                            width="16px"
                            height="16px"
                            icon="prime:times"
                            style={{ color: "#667085" }}
                          />
                        </div>
                        <div className="propose-body">
                          <div className="input-divs">
                            <label>Payment Title</label>
                            <select>
                              <option value="">Select</option>
                              <option>Equipment purchase</option>
                              <option>Payment millstone</option>
                              <option>Others</option>
                            </select>
                          </div>
                          <div className="input-divs">
                            <label>Amount</label>
                            <input type="text" placeholder="₦0.00" />
                          </div>
                          <button>Create milestone</button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </>
            )}
          </div>
          <div className="detail-2-right">
            <div className="right-header">
              <h4>Messages</h4>
              <button onClick={handleCompleteDrop} className="complete-job">Complete Job</button>
            </div>
            <div className="right-body">
              <div className="right-body-div"></div>
              <div className="right-down">
                <p>Type your message…</p>
                <div className="right-down-icon">
                  <img src="/images/icon-19.png" alt="" />
                  <img src="/images/icon-20.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {completePop ? (<>
        <div className="dropdown-container">
                      <div className="propose-div">
                        <div className="propose-header">
                          <h4>Confirm Job Completion</h4>
                          <Icon
                            onClick={handleCompleteDrop}
                            className="icon"
                            width="16px"
                            height="16px"
                            icon="prime:times"
                            style={{ color: "#667085" }}
                          />
                        </div>
                        <div className="propose-body">
                          <p>Are you sure you want to confirm that this job as been fully completed and that 
                            the client is satisfied?</p>
                          <h4>NB: Please note that this action is not reversible!</h4>
                          <div className="btns">
                              <button  onClick={handleCompleteDrop} className="cancel-btn">Cancel</button>
                              <button className="confirm-btn">Confirm</button>

                          </div>
                        </div>
                      </div>
                    </div>
      </>): ""}
    </DetailRap>
  );
};

export default ArtisanDetail;
