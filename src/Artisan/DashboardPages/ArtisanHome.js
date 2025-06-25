import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeRap = styled.div`
  padding-bottom: 50px;
  padding-top: 50px;

  .dash-1-sub-1 h5 {
    color: #101828;
    font-size: 16px;
    font-weight: 500;
  }
  .dash-1-sub-1 h3 {
    color: #101828;
    font-size: 24px;
    font-weight: 600;
    max-width: 236px;
    line-height: 25px;
  }
  .dash-1-sub-1,
  .inner-dash-1 {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .inner-dash-1 p {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
  }
  .inner-dash-1 h4 {
    color: #101828;
    font-size: 24px;
    font-weight: 600;
  }
  .inner-dash-1 {
    border-right: 1px solid #1018281a;
    padding-right: 50px;
  }
  .no-border {
    border: none !important;
  }
  .dash-1-sub-2 {
    display: flex;
    background: #f7f7f7;
    border-radius: 8px;
    padding: 30px;
    gap: 20px;
  }
  .dash-1 {
    border: 1px solid #1018281a;
    background: #ffffff;
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: space-between;
    border-radius: 8px;
    padding: 20px;
  }
  .sub-dash-2 h6 {
    color: #667085;
    font-size: 12px;
    font-weight: 400;
  }
  .sub-dash-2 h4 {
    color: #101828;
    font-size: 16px;
    font-weight: 500;
  }
  .sub-dash-2 h5 {
    color: #27a549;
    font-size: 14px;
    font-weight: 500;
  }
  .sub-dash-2 p {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    max-width: 692px;
  }
  .category-div p {
    background: #1018280b;
    padding: 6px 12px;
    border-radius: 100px;
    color: #667085;
    font-size: 12px !important;
    font-weight: 400;
  }
  .category-div {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .job-div p {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
  }
  .address-div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .job-div span {
    color: #27a549;
  }
  .job-div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .dash-2-header h3 {
    font-size: 16px;
    font-weight: 500;
    color: #101828;
  }
  .dash-2-header button {
    border: none;
    color: #0067d0;
    font-size: 14px;
    font-weight: 600;
    background: #ffffff;
    cursor: pointer;
  }
  .dash-2-header {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid #1018281a;
  }
  .dash-2 {
    background: #ffffff;
    border: 1px solid #1018281a;
    border-radius: 8px;
  }
  .sub-dash-2 {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
  }
  .info h4 {
    color: #101828;
    font-size: 18px;
    font-weight: 500;
  }
  .info p {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
  .verify {
    background: #27a5491f;
    width: max-content;
    height: 28px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 0 10px;
  }
  .verify p {
    color: #27a549;
    font-size: 12px;
    font-weight: 500;
  }
  .dash-3 {
    background: #ffffff;
    width: 310px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 40px 40px;
    border: 1px solid #1018281a;
  }
  .dash-4-header h4 {
    color: #101828;
    font-size: 16px;
    font-weight: 500;
  }
  .dash-4-header {
    padding: 20px;
    border-bottom: 1px solid #1018281a;
  }
  .dash-4-inner h6 {
    color: #667085;
    font-size: 16px;
    font-weight: 400;
  }
  .dash-4-inner p {
    color: #101828;
    font-size: 16px;
    font-weight: 400;
  }
  .dash-4-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  .dash-4-body {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
  .dash-4 {
    border: 1px solid #1018281a;
    width: 310px;
    border-radius: 8px;
    background: #ffffff;
  }
  .dash-left {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .dash-right {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 30%;
  }
  .all-dash {
    display: flex;
    gap: 20px;
  }
  .no-job-div p {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    max-width: 277px;
    text-align: center;
  }
  .no-job-div img {
    width: 76px;
    height: 77px;
  }
  .no-job-div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 350px;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  @media (max-width: 1030px) {
    .all-dash {
      flex-direction: column;
    }
    .dash-left {
      width: 100%;
    }
    .dash-right {
      width: 50%;
    }
    .dash-3,
    .dash-4 {
      width: 100% !important;
    }
  }
  @media (max-width: 768px) {
    .dash-right {
      width: 70%;
    }
    .dash-1 {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  @media (max-width: 600px) {
    .dash-right {
      width: 100%;
    }
    .dash-1-sub-2 {
      flex-wrap: wrap;
    }
    .inner-dash-1 {
      border: none;
      padding-right: 20px !important;
    }
    .category-div,
    .job-div {
      flex-wrap: wrap;
    }
  }
    .onboard {
    background:rgb(129, 113, 244);
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    color: #ffffff;
    pointer: cursor;
    font-size: 16px;
    }
    .onboard:hover {
    background: rgb(129, 113, 244, 0.8);
}
`;

const ArisanHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("artisanToken");
    if (!token) {
      navigate("/artisanAuth/login/Artisan");
    }
  }, [navigate]);

  const firstName = localStorage.getItem("artisanFirstName");
  const lastName = localStorage.getItem("artisanLastName");
  const Email = localStorage.getItem("artisanEmail");
  const role = localStorage.getItem("artisanRole");
  const type = localStorage.getItem("artisanType");

  const [showAll, setShowAll] = useState(false);
 const [jobs, setJobs] = useState([]);
  const [visibleJobs, setVisibleJobs] = useState([]);
  const [error, setError] = useState("");


  const getGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

 useEffect(() => {
    const fetchCompletedJobs = async () => {
      const token = localStorage.getItem("artisanToken"); // Or adminToken, depending on your setup

      if (!token) {
        setError("You must be logged in to view jobs.");
        return;
      }

      try {
        const response = await fetch("https://blucolar-be.onrender.com/api/users/project/my/assigned", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const data = await response.json();
        console.log("Fetched jobs:", data);

        const completedJobs = data.filter(
          (job) => job.status?.toLowerCase() === "completed"
        );

        setJobs(completedJobs);
        setVisibleJobs(completedJobs.slice(0, 3));
      } catch (err) {
        console.error("Error fetching completed jobs:", err.message);
        setError("Something went wrong while fetching jobs.");
      }
    };

    fetchCompletedJobs();
  }, []);

  const handleShowMore = () => {
    if (showAll) {
      setVisibleJobs(jobs.slice(0, 3)); // Collapse back to 3
    } else {
      setVisibleJobs(jobs); // Show all
    }
    setShowAll(!showAll);
  };

  return (
    <HomeRap>
      <div className="containary all-dash">
        <div className="dash-left">
          <div className="dash-1">
            <div className="dash-1-sub-1">
              <h5>
                {new Date().toLocaleDateString("en-NG", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </h5>
              <h3>
                {getGreeting()}, {firstName} {lastName}
              </h3>
            </div>
            <div className="dash-1-sub-2">
              <div className="inner-dash-1">
                <p>Earnings</p>
                <h4>₦0.00</h4>
              </div>
              <div className="inner-dash-1">
                <p>Open Jobs</p>
                <h4>0</h4>
              </div>
              <div className="inner-dash-1 no-border">
                <p>Completed Jobs</p>
                <h4>0</h4>
              </div>
            </div>
          </div>
        <Link to="/artisanAuth/signUpOwner">  <div className="onboard">
            <p>Complete Onboarding</p>
          </div></Link>

        <div
      style={{
        maxHeight: showAll ? "100%" : "430px",
        overflow: "hidden",
        transition: "max-height 0.3s ease-in-out",
      }}
      className="dash-2"
    >
      <div className="dash-2-header">
        <h3>Recent jobs</h3>
        <button onClick={handleShowMore}>
          {showAll ? "See less" : "See all"}
        </button>
      </div>

      {jobs && jobs.length > 0 ? (
        <>
          {visibleJobs.map((job, index) => (
            <div key={index} className="sub-dash-2">
              <h6>{job.datePosted}</h6>
              <h4>{job.name}</h4>
              <h5>Amount: {job.amount}</h5>
              <p>{job.description}</p>
              <div className="category-div">
                <p>{job.category?.one}</p>
                <p>{job.category?.two}</p>
                <p>{job.category?.three}</p>
              </div>
              <div className="job-div">
                <p>Job ID: {job.jobId}</p>
                <p className="address-div">{job.address}</p>
                <p>
                  Status: <span>{job.status}</span>
                </p>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="no-job-div">
          <img src="/images/img-11.png" alt="" />
          <p>
            No available jobs at the moment, you will be notified once a job is available
          </p>
        </div>
      )}
    </div>

        </div>
        <div className="dash-right">
          <div className="dash-3">
            <img src="/images/img-10.png" alt="" />
            <div className="info">
              <h4>
                {firstName} {lastName}
              </h4>
              <p>Electrical Engineer</p>
            </div>
            <div className="verify">
              <img src="/images/icon-18.png" alt="" />

              <p>Email Verified </p>
            </div>
          </div>
          <div className="dash-4">
            <div className="dash-4-header">
              <h4>Profile</h4>
            </div>
            <div className="dash-4-body">
              <div className="dash-4-inner">
                <h6>Availability Badge:</h6>
                <p>Available</p>
              </div>
              <div className="dash-4-inner">
                <h6>Email Address:</h6>
                <p>{Email}</p>
              </div>
              <div className="dash-4-inner">
                <h6>Phone Number:</h6>
                <p>08066091125</p>
              </div>
              <div className="dash-4-inner">
                <h6>Industry:</h6>
                <p>Electrical</p>
              </div>
              <div className="dash-4-inner">
                <h6>Role:</h6>
                <p>{role}</p>
              </div>
              <div className="dash-4-inner">
                <h6>Type:</h6>
                <p>{type}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeRap>
  );
};

export default ArisanHome;
