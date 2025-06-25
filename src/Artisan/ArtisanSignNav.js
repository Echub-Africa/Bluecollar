import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const ArtisanNavRap = styled.div`
.art-nav img {
    width: 99px;
    height: 29px;
}
.help p {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
}
.help {
    display: flex;
    align-items: center;
    gap: 10px;
}
.contact  {
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    color: #0067D0;

}
.art-nav {
    display: flex;
    justify-content: space-between;
    padding: 18px 50px;
    border-bottom: 1px solid #1018281A;
    width: 100%;
}
`

const ArtisanSignNav = () => {
    return (
        <ArtisanNavRap>
            <div className="art-nav">
                <img src="/images/sign-blue.png" alt="" />
                <div className="help">
                    <p>Need help?</p>
                    <Link className="contact">Contact us</Link>
                </div>
            </div>
    </ArtisanNavRap>
    )
}

export default ArtisanSignNav