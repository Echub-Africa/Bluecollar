import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BlogDetailRap = styled.div`
  background: #f2f2f2;

  .detail-1 h2 {
    color: #101828;
    font-size: 45px;
    font-weight: 600;
    line-height: 54px;
    max-width: 802px;
  }
  .detail-1 p {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #0067d0;
    font-size: 16px;
    font-weight: 500;
  }
  .detail-1 {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 100px;
    padding-bottom: 40px;
    margin-bottom: 40px;
    border-bottom: 1px solid #1018281a;
  }
  .detail-2-left p {
    color: #666d7b;
    font-size: 16px;
    font-weight: 400;
    max-width: 680px;
    line-height: 24px;
  }
  .detail-2-left h4 {
    color: #101828;
    font-size: 24px;
    line-height: 28px;
    font-weight: 600;
    max-width: 492px;
  }
  .detail-2-left {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .sub-detail-1 h6 {
    color: #666d7b;
    font-size: 14px;
    font-weight: 400;
  }
  .sub-detail-1 p {
    color: #101828;
    font-size: 16px;
    font-weight: 500;
  }
  .sub-detail-1 {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .share-icon {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .sub-detail-2 h4 {
    color: #101828;
    font-size: 18px;
    font-weight: 500;
    max-width: 198px;
    line-height: 22px;
  }
  .sub-detail-2 p {
    color: #666d7b;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    max-width: 217px;
  }
  .subscribe-btn {
    background: #101828;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 116px;
    height: 33px;
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
  }
  .sub-detail-2 {
    background: #4254660D;
    border-radius: 8px;
    width: 278px;
    padding: 20px;
  }
  .detail-2-right {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .detail-2 {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }
  .detail-3 h3 {
    color: #101828;
    font-size:30px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .product-update p {
    color: #666d7b;
    font-weight: 16px;
    font-weight: 400;
  }
  .product-update span {
    background: #d9d9d9;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
  .product-update {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .inner-sub-blog-2 h4 {
    color: #101828;
    font-size: 24px;
    font-weight: 600;
    max-width: 411px;
  }
  .inner-sub-blog-2 {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .blog-2-sub {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .smaller-inner h4 {
    font-size: 20px !important;
    font-weight: 600 !important;
  }
  .detail-3-sub {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .detail-3 {
    padding-top: 60px;
    padding-bottom: 100px;
    margin-top: 100px;
    border-top: 1px solid #1018281A;
  }
  @media (max-width: 1130px) {
    .detail-3-sub {
        flex-wrap: wrap;
    }
  }
  @media (max-width: 768px) {
    .detail-2-left {
    width: 600px;
    }
  }
  @media (max-width: 650px) {
    .detail-2-left {
    width: 500px;
    }
  }
  @media (max-width: 550px) {
    .detail-2-left {
    width: 400px;
    }
  }
  @media (max-width: 450px) {
    .detail-2-left {
    width: 300px;
    }
  }
  @media (max-width: 360px)  {
    .blog-2-sub img {
        width: 250px;
    }
  }
  @media (max-width: 350px) {
    .detail-2-left {
    width: 250px;
    }
  }
`;

const BlogDetail = () => {
  return (
    <BlogDetailRap>
      <div className="detail-1 containery">
        <Link to="/blog" style={{ textDecoration: "none" }}>
      
          <p>   <Icon
                width="24px"
                height="24px"
                icon="iconamoon:arrow-left-2"
                style={{ color: "#0067d0" }}
              />Explore Blog</p>
        </Link>
        <h2>Introducing triggers: Build Wealth doing the things you love</h2>
      </div>
      <div className="detail-2 containery">
        <div className="detail-2-left">
          <img src="/images/image-14.png" alt="" />
          <p>
            IAM for CX is the Docusign Intelligent Agreement Management (IAM)
            application for organizations looking to meet modern customer
            expectations in today’s highly competitive business landscape.
          </p>
          <p>
            We designed this application to streamline the customer journey by
            eliminating many of the redundant interactions and manual processes
            commonly found in customer agreement workflows. 
          </p>
          <h4>A clunky customer experience threatens your bottom line</h4>
          <p>
            We’ve all been there as customers: Painstakingly inputting all of
            our personal data, often redundantly, from one form to the next —
            all in a desperate bid to get the product or service we need. Not
            only is this frustrating for customers, it’s also frustrating for
            you as a business, as there are often manual, redundant processes
            rife with errors
          </p>
          <p>
            Expecting your customers to just put up with this poor experience is
            a surefire way to frustrate and ultimately lose them down the line,
            especially if the competition has a more streamlined, user-friendly
            agreement process.
          </p>
          <p>
            And all those errors? They lead to delays as you send back documents
            for correction, which inevitably adds to your cost of acquisition
            and causes further frustration and possible abandonment from your
            customers. Deloitte released a new report that identifies the costly
            and negative impacts of poor agreement processes and tools on
            customer experience. It shows that inefficient agreement management
            processes lead to a nearly $2 trillion loss in annual global
            economic value with 66% of customer support survey respondents
            reporting inefficient agreement workflows as a driver for negative
            customer satisfaction.
          </p>
        </div>
        <div className="detail-2-right">
          <div className="sub-detail-1">
            <h6>AUTHOR</h6>
            <p>Admin</p>
          </div>
          <div className="sub-detail-1">
            <h6>PUBLISHED</h6>
            <p>Feb 5, 2025</p>
          </div>
          <div className="sub-detail-1">
            <h6>SHARE POST</h6>
            <div className="share-icon">
              <Icon
                width="24px"
                height="24px"
                icon="mdi:facebook"
                style={{ color: "#666d7b" }}
              />
              <Icon
                className="icon"
                width="24px"
                height="24px"
                icon="prime:twitter"
                style={{ color: "#666d7b" }}
              />
              <Icon
                className="icon"
                width="24px"
                height="24px"
                icon="mdi:instagram"
                style={{ color: "#666d7b" }}
              />
            </div>
          </div>
          <div className="sub-detail-2">
            <h4>Get the latest news and insights from us</h4>
            <p>Join our newsletter to receive latest insights and tips</p>
            <Link className="subscribe-btn">Subscribe</Link>
          </div>
        </div>
      </div>
      <div className="containery">
      <div className="detail-3 ">
        <h3>Related post</h3>
        <div className="detail-3-sub">
            <div className="blog-2-sub">
            <img src="/images/blog-7.png" alt="" />
            <div className="inner-sub-blog-2 smaller-inner">
                <div className="product-update">
                <p>Product updates</p>
                <span></span>
                <p>5 min</p>
                </div>
                <h4>
                Introducing Rooms, a collaborative space for faster, easier deals            </h4>
            </div>
            </div>
            <div className="blog-2-sub">
            <img src="/images/blog-6.png" alt="" />
            <div className="inner-sub-blog-2 smaller-inner">
                <div className="product-update">
                <p>Product updates</p>
                <span></span>
                <p>5 min</p>
                </div>
                <h4>
                Introducing Rooms, a collaborative space for faster, easier deals            </h4>
            </div>
            </div>
            <div className="blog-2-sub">
            <img src="/images/blog-3.png" alt="" />
            <div className="inner-sub-blog-2 smaller-inner">
                <div className="product-update">
                <p>Product updates</p>
                <span></span>
                <p>5 min</p>
                </div>
                <h4>
                Introducing Rooms, a collaborative space for faster, easier deals            </h4>
            </div>
            </div>
            </div>
      </div>
      </div>
    </BlogDetailRap>
  );
};

export default BlogDetail;
