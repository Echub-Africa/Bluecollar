import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const MessageRap = styled.div`
padding-top: 50px;
padding-bottom: 70px;
.message-head h4 {
    color: #101828;
    font-size: 16px;
    font-weight: 600;
}
.message-head {
    background: #FFFFFF;
    width: 100%;
    padding: 15px;
    border-bottom: 1px solid #1018281A;
}
.search-div  {
    width: 244px;
    position: relative;
}
.search-icon {
    position: absolute;
    right: 13px;
    top: 15px;
}
 

.search-div input {
    border: 1px solid #1018281A;
    padding: 0px 10px;
    width: 244px;
    height: 45px;
    border-radius: 100px;
}
.message-1-sub {
    padding: 15px;
    border-bottom: 1px solid #1018281A;

}
.no-mess p {
    color: #667085;
    font-weight: 400;
    font-size: 12px;

}
.no-mess {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100% !important;
    height: 87.5vh;
}
.message-1 {
    background: #FFFFFF;
    width: fit-content;
}
.left-message {
    width: 100%;
    background: #F7F7F7;
    border: 1px solid #1018281A;
    border-radius: 8px;
    height: 100vh;

}
.right-message {
    background: #FFFFFF;
    border: 1px solid #1018281A;
    width: 30%;
    border-radius: 8px;
    height: 100vh;
}
.all-message {
    display: flex;
    gap: 20px;
}
@media (max-width: 992px) {
.all-message  {
    flex-direction: column;
}
.left-message, .right-message {
    width: 100%;
}
}
`


const ClientMessage = () => {
 const navigate = useNavigate();
      useEffect(() => {
    const token = localStorage.getItem("home-ownerToken");
    if (!token) {
      navigate("/clientAuth/login");
    }
  }, [navigate]);


    return (
        <MessageRap>
            <div className="all-message containary">
                <div className="left-message">
                    <div className="message-head">
                        <h4>Messages</h4>
                    </div>
                    <div className="message-1">
                    <div className="message-1-sub">
                        <div className="search-div">
                            <input type="text" placeholder="Search messages.." />
                                <Icon
                                            className="search-icon"
                                            width="16px"
                                            height="16px"
                                            icon="material-symbols:search-rounded"
                                            style={{ color: "#66708580" }}
                                          />
                        </div>
                        
                    </div>
                    <div className="no-mess">
                            <p>No message</p>
                        </div>
                        </div>
                </div>
               
            </div>
        </MessageRap>
    )
}

export default ClientMessage