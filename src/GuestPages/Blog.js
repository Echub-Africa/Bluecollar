import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const BlogRap = styled.div`
  background: #f2f2f2;

  .blog-1 h1 {
    color: #101828;
    font-size: 42px;
    font-weight: 600;
  }
  .blog-1 p {
    color: #666d7b;
    font-size: 16px;
    font-weight: 400;
    max-width: 241px;
    line-height: 22px;
  }
  .blog-1 {
    border-bottom: 1px solid #1018281a;
    padding-bottom: 50px;
    padding-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }
  .link {
    background: #1018280d;
    padding: 5px 15px;
    border-radius: 100px;
    color: #666d7b;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
  }
  .link.active {
    background: #101828;
    color: #ffffff;
  }
  .link-container {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-bottom: 60px;
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
    cursor: pointer;
    flex-direction: column;
    gap: 20px;
  }
  .blog-2-right {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .blog-2 {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }
  .smaller-inner h4 {
    font-size: 20px !important;
    font-weight: 500 !important;
  }
  .blog-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    border-top: 1px solid #1018281A;
    border-bottom: 1px solid #1018281A;
    padding-top: 40px;
    padding-bottom: 60px;
    margin-top: 100px;
  }
  .learn-btn {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0067D0;
    width: 150px;
    height: 45px;
    border-radius: 100px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 600;
  }
  .blog-4  {
    padding-top: 70px;
    padding-bottom: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1100px) {
    .blog-3  {
        grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 750px) {
    .blog-3  {
        grid-template-columns: repeat(1, 1fr);
    }
  }
  @media (max-width: 630px) {
    .blog-2-sub img {
        width: 500px;
    }
  }
  @media (max-width: 550px) {
    .blog-2-sub img {
        width: 350px;
    }
  }
  @media (max-width: 450px) {
    .link-container{
        flex-wrap: wrap;
    }
  }
  @media (max-width: 400px) {
    .blog-2-sub img {
        width: 300px;
    }
  }
  @media (max-width: 350px) {
    .blog-2-sub img {
        width: 250px;
    }
  }
  `

const Blog = () => {
  const [activeLink, setActiveLink] = useState("all");

  const navigate = useNavigate()

const handleClick = () => {
  navigate("/blogDetails")
}

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <BlogRap>
      <div className="blog-1 containery">
        <h1>News & Articles</h1>
        <p>Stories and insights to enhance your financial growth journey.</p>
      </div>
      <div className="link-container containery">
        <Link
          className={`link ${activeLink === "all" ? "active" : ""}`}
          to="#"
          onClick={() => handleLinkClick("all")}
        >
          All
        </Link>
        <Link
          className={`link ${activeLink === "company" ? "active" : ""}`}
          to="#"
          onClick={() => handleLinkClick("company")}
        >
          Company
        </Link>
        <Link
          className={`link ${activeLink === "technology" ? "active" : ""}`}
          to="#"
          onClick={() => handleLinkClick("technology")}
        >
          Technology
        </Link>
        <Link
          className={`link ${activeLink === "other" ? "active" : ""}`}
          to="#"
          onClick={() => handleLinkClick("other")}
        >
          Others
        </Link>
      </div>
      <div className="blog-2 containery">
        <div onClick={handleClick} className="blog-2-sub">
          <img src="/images/blog-1.png" alt="" />
          <div className="inner-sub-blog-2">
            <div className="product-update">
              <p>Product updates</p>
              <span></span>
              <p>5 min</p>
            </div>
            <h4>
              Introducing Triggers 🎉: Build Wealth Doing the Things You Love
            </h4>
          </div>
        </div>
        <div className="blog-2-right">
          <div className="blog-2-sub">
            <img src="/images/blog-2.png" alt="" />
            <div className="inner-sub-blog-2">
              <div className="product-update">
                <p>Product updates</p>
                <span></span>
                <p>5 min</p>
              </div>
              <h4>
              Streakonomics - 5 interesting Money insights to inspire you              </h4>
            </div>
          </div>
          <div className="blog-2-sub">
            <img src="/images//blog-3.png" alt="" />
            <div className="inner-sub-blog-2">
              <div className="product-update">
                <p>Product updates</p>
                <span></span>
                <p>5 min</p>
              </div>
              <h4>
              Introducing Rooms, a collaborative space for faster, easier deals              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-3 containery">
        <div className="blog-2-sub">
          <img src="/images/blog-4.png" alt="" />
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
          <img src="/images/blog-5.png" alt="" />
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
          <img src="/images/blog-8.png" alt="" />
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
      <div className="blog-4 containery">
        <Link className="learn-btn">Learn more</Link>
      </div>
    </BlogRap>
  );
};

export default Blog;
