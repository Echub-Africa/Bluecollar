import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect} from "react";


const DetailRequestRap =  styled.div`
padding-top: 50px;
padding-bottom: 50px;
.detail-div {
    border: 1px solid #1018281A;
    background: #FFFFFF;
    border-radius: 8px;
  
}
.detail-upper h4 {
    color: #101828;
    font-weight: 600;
    font-size: 18px;
}
.detail-upper {
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    border-bottom: 1px solid #1018281A;
}
.detail-upper-left {
    display: flex;
    align-items: center;
    gap: 10px;
}
.detail-upper-right p {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
}
.detail-upper-right span {
    color: #EDA928;
    font-size: 14px;
    font-weight: 400;
}
.detail-upper-right {
    display: flex;
    align-items: center;
    gap: 5px;
}
.detail-down h5 {
    color: #101828;
    font-weight: 500;
    font-size: 18px;
}
.detail-down  {
    padding: 30px;
    padding-right: 100px;
}
.deatil-1 p {
    color: #101828;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.deatil-1 span {
    color: #667085;
    font-weight: 400;
    font-size: 14px;
}
.deatil-1 {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.deatil-1-sub-1 {
    display: flex;
    justify-content: space-between;
}
.detail-left-sub-1 h6, .detail-left-sub-2 h6 {
    color: #101828;
    font-weight: 500;
    font-size: 14px;
}
.detail-left-sub-1 p {
    font-weight: 400;
    font-size: 14px;
    color: #667085;
    line-height: 19px;
    max-width: 518px;
}
.detail-left-sub-2, .detail-left-sub-1 {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.detail-left-img img {
    width: 149px;
    height: 91px;
}
.detail-left-img {
    display: flex;
    gap: 10px;
}
.detail-left-1 {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.detail-right button {
    width: 229px;
    height: 40px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
}
.bt-1 {
    border: 1px solid #0067D0;
    background: transparent;
    color: #0067D0;
}
.bt-2 {
    border: none;
    background: #0067D0;
    color: #ffffff;
}
.bt-3 {
    background: #027A48;
    border: none;
    color: #ffffff;
}
.detail-right {
    display: flex;
    gap: 20px;
    flex-direction: column;
}
.detail-down-inner {
    display: flex;
    justify-content: space-between;
}
`

const ClientRequestDetail = () => {
    const navigate = useNavigate()
         useEffect(() => {
      const token = localStorage.getItem("companyToken");
      if (!token) {
        navigate("/companyAuth/login");
      }
    }, [navigate]);
    const handleGoToRequest = () => {
navigate("/client/request")
    }

    return (
        <DetailRequestRap>
            <div className="containary">
                <div className="detail-div">
                    
                    <div className="detail-upper">
                        <div className="detail-upper-left">
                               <Icon onClick={handleGoToRequest}
                                className="icon"
                                              width="18px"
                                              height="18px"
                                              icon="solar:arrow-left-outline"
                                             style={{color: "#667085"}}
                                            />
                        <h4>Request Details</h4>
                        </div>
                        <div className="detail-upper-right">
                            <p>Status:</p>
                            <span> Waiting Acceptance</span>
                        </div>
                    </div>
                    <div className="detail-down">
                    <h5>Quick Fixes & Maintenance</h5>
                        <div className="detail-down-inner">
                           <div className="detail-left">
                                <div className="detail-left-1">
                                    <div className="deatil-1">
                                        <div className="deatil-1-sub-1">
                                            <p> Request ID <span>BL-1750006478</span></p>
                                            <p>Job Timeline <span>7 Days</span></p>
                                        </div>
                                        <div className="deatil-1-sub-1">
                                        <p> Service Type <span>Plumbing</span></p>
                                        <p>Budget <span>₦150,000</span></p>
                                        </div>
                                        <p> Urgency Type <span>Emergency</span></p>
                                        <p> Location <span>284 Allen Avenue Ikeja, Lagos</span></p>
                                    </div>
                                    <div className="detail-left-sub-1">
                                        <h6>Additional Details</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur. Sed in gravida a platea lectus. Aenean facilisi id sit porta vestibulum bibendum interdum dolor. Nec mi interdum euismod at aliquam amet donec. Laoreet morbi arcu pellentesque malesuada. Odio quam imperdiet dignissim mi cursus eu venenatis. Tortor sed nibh enim rutrum. Dis tellus aliquam lacinia amet urna posuere. Gravida consectetur 
                                            etiam amet maecenas quam.</p>
                                    </div>
                                    <div className="detail-left-sub-2">
                                        <h6>Images</h6>
                                        <div className="detail-left-img">
                                        <img src="/images/admin-1.png" alt="" />
                                        <img src="/images/admin-1.png" alt="" />
                                        </div>

                                    </div>
                                </div>
                           </div>
                           <div className="detail-right">
                            <button className="bt-1">Cancel request</button>
                            <button className="bt-2">Send Message</button>
                            {/* <button className="bt-3">Approve Request</button> */}
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </DetailRequestRap>
    )
}

export default ClientRequestDetail