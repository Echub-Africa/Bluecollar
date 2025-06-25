import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SignRap = styled.div`
  .sign-1 h2 {
    color: #101828;
    font-size: 28px;
    font-weight: 600;
    max-width: 394px;
    line-height: 35px;
  }
  .sign-1-sub p {
    color: #101828;
    font-size: 16px;
    font-weight: 400;
  }
  .sign-1-sub {
    display: flex;
    align-items: center;
    gap: 30px;
    padding-bottom: 25px;
    border-bottom: 1px solid #1018281a;
  }
  .start-btn {
    text-decoration: none;
    background: #0067d0;
    border-radius: 10px;
    width: 237px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
  }
  .sign-1 {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .sign-2 p {
    max-width: 316px;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    color: #101828;
  }
  .sign-2-sub h4 {
    color: #101828;
    font-size: 16px;
    font-weight: 500;
  }
  .sign-2-sub p {
    color: #667085;
    font-size: 16px;
    font-weight: 400;
  }
  .sign-2-sub {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
  }
  .sign-2 img {
    width: 100px;
    height: 100px;
  }
  .sign-2 {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    border: 1px solid #1018281a;
    width: 394px;
    border-radius: 12px;
  }
  .all-sign {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90vh;
  }
`;
const SliderWrapper = styled.div`
  overflow: hidden;
`;

const Slide = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  animation: fade 0.7s ease-in-out;
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const Text = styled.p`
  max-width: 316px;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  color: #101828;
`;

const SubWrapper = styled.div``;

const Name = styled.h4`
  color: #101828;
  font-size: 16px;
  font-weight: 500;
`;

const SubText = styled.p`
  color: #667085;
  font-size: 16px;
  font-weight: 400;
`;

const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#007BFF" : "#ccc")};
  cursor: pointer;
`;

const SignUpOwner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const info = [
    {
      id: 1,
      image: "/images/img-7.png",
      text: "Bluecollar has enabled me to increase my income while living a life I love and constantly developing new skills.",
      name: "Eng. Felix Durotoye",
      subText: "Construction Engineer",
    },
    {
      id: 2,
      image: "/images/img-8.png",
      text: "Bluecollar has enabled me to increase my income while living a life I love and constantly developing new skills.",
      name: "Eng. Felix Durotoye",
      subText: "Construction Engineer",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % info.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [info.length]);

    const firstName = localStorage.getItem("artisanFirstName");
  const lastName = localStorage.getItem("artisanLastName");

  return (
    <SignRap>
      <div className="all-sign containery">
        <div className="sign-1">
          <h2>Hi {firstName} {lastName}, Ready for your next big opportunity?</h2>
          <div className="sign-1-sub">
            <img src="/images/icon-13.png" alt="" />
            <p>Answer a few questions and start building your profile</p>
          </div>
          <div className="sign-1-sub">
            <img src="/images/icon-14.png" alt="" />
            <p>Apply for open roles or list services for home owners to buy</p>
          </div>
          <div className="sign-1-sub">
            <img src="/images/icon-14.png" alt="" />
            <p>Get paid safely and know we’re there to help</p>
          </div>
          <Link to="/artisanAuth/ownerOnboarding" className="start-btn">Start onboarding</Link>
        </div>
        <SliderWrapper>
          {/* Slider Content */}
          {info.map((item, index) => (
            <Slide key={item.id} active={index === currentIndex}>
              <div className="sign-2">
                <Image src={item.image} alt={item.name} />
                <Text>{item.text}</Text>
                <SubWrapper className="sign-2-sub">
                  <Name>{item.name}</Name>
                  <SubText>{item.subText}</SubText>
                </SubWrapper>
              </div>
            </Slide>
          ))}

          {/* Dots */}
          <DotsWrapper>
            {info.map((_, index) => (
              <Dot
                key={index}
                active={index === currentIndex}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </DotsWrapper>
        </SliderWrapper>
      </div>
    </SignRap>
  );
};

export default SignUpOwner;
