import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const JobRap = styled.div`
padding-bottom: 50px;
padding-top: 50px;
  .job-1-sub-1 h4 {
    color: #101828;
    font-size: 30px;
    font-weight: 600;
  }
  .job-1-sub-1 p {
    font-size: 18px;
    font-weight: 500;
    color: #101828;
  }
  .job-1-sub-1 span {
    color: #27a549;
  }
  .job-1-sub-1 {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .withdraw-btn {
    text-decoration: none;
    background: #0067d0;
    width: 144px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 47px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
  }
  .job-1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
    flex-wrap: wrap;
    border-radius: 8px;
    padding: 20px;
    background: #ffffff;
    border: 1px solid #1018281a;
  }
  .job-2-header h4 {
    color: #101828;
    font-size: 16px;
    font-weight: 500;
  }
  .job-2-header {
    padding: 20px;
    border-bottom: 1px solid #1018281a;
  }
  .job-links {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-left: 20px;
    padding-top: 20px;
    border-bottom: 1px solid #1018281a;
  }
  .link {
    color: #667085;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    padding-bottom: 20px;

  }
  .link.active {
    border-bottom: 2px solid #0067d0;
    color: #0067d0;
  }
  .all-inner-job h5 {
    color: #101828;
    font-size: 16px;
    font-weight: 500;
  }
  .all-inner-job h6 {
    color: #667085B2;
    font-size: 14px;
    font-weight: 500;
  }
  .all-inner-job  {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .inner-job P {
    color: #667085;
    font-size: 14px;
    font-weight: 500;
    padding-right: 15px;
    border-right: 1.5px solid #10182826;
  }
  .inner-job  span {
    color: #27A549;
    font-size: 16px;
    font-weight: 500;
    padding-right: 15px;
    border-right: 1.5px solid #10182826;
  }
  .inner-job  h6 {
    font-style: italic;
    color: #667085B2;
    font-size: 14px;
    font-weight: 500;
  }
  .inner-job {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .update-btn {
    border: 1px solid #1018281A;
    border-radius: 10px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 105px;
    height: 36px;
    color: #667085;
    font-size: 14px;
    font-weight: 500;
  }
  .job-4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
    border-bottom: 1px solid #1018281A;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
  .no-jobs-now p {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
  }
  .no-jobs-now h4 {
    color: #101828;
    font-size: 16px;
    font-weight: 500;
  }
  .no-jobs-now img {
    width: 76px;
    height: 76px;

  }
  .job-2 {
    border: 1px solid #1018281A;
    width: 100%;
    background: #FFFFFF;
    border-radius: 8px;
  }
  .no-jobs-now  {
    height: 350px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
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
    background: #27A5491F;
    width: 94px;
    height: 28px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  .verify p {
    color: #27A549;
    font-size: 12px;
    font-weight: 500;
  }
  .dash-3 {
    background: #FFFFFF;
    width: 310px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 40px 40px;
    border: 1px solid #1018281A;
  }
  .dash-4-header h4 {
    color: #101828;
    font-size: 16px;
    font-weight: 500;
  }
  .dash-4-header {
    padding: 20px;
    border-bottom: 1px solid #1018281A;
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
    border: 1px solid #1018281A;
    width: 310px;
    border-radius: 8px;
    background: #FFFFFF;

  }
  .job-left {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 70%;
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
 
  .all-progress {
    padding: 20px;
    max-height: 400px;
    overflow-y: auto;
  }
  @media (max-width: 1030px) {
    .all-dash {
        flex-direction: column;
    }
    .job-left {
        width: 100%;
    }
    .dash-right {
        width: 50%;
    }
    .dash-3, .dash-4 {
        width: 100% !important;
    }
  }
  @media (max-width: 768px) {
    .dash-right {
        width: 70%;
    }
    .dash-1  {
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
    .category-div, .job-div {
        flex-wrap: wrap;
    }
    .inner-job {
      flex-wrap: wrap;
    }
  }
`;

const ArtisanJobs = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("progress");
  const [jobs, setJobs] = useState([]); // Single state for all jobs
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("artisanToken");
    if (!token) {
      navigate("/artisanAuth/login/Artisan");
    }
  }, [navigate]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const fetchJobs = async () => {
      const token = localStorage.getItem("artisanToken");

      if (!token) {
        setError("You must be logged in to view jobs.");
        return;
      }
      try {
        const response = await fetch("https://blucolar-be.onrender.com/api/client/project/my/assigned", {
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
        console.log("Fetched data:", data); // Log the entire response

        // Set jobs to the projects array from the response
        if (data.projects && Array.isArray(data.projects)) {
          setJobs(data.projects); // Set the jobs state to the projects array
          console.log("Jobs set:", data.projects); // Log the jobs being set
        } else {
          console.error("Expected an array of projects but got:", data.projects);
          setJobs([]); // Set to empty array if the structure is not as expected
        }
      } catch (error) {
        console.error("Error fetching jobs:", error.message);
        setJobs([]); // Set to empty array on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    // Calculate counts whenever jobs change
    const inProgress = jobs.filter(job => job.status?.toLowerCase().trim() === "approved").length;
    const completed = jobs.filter(job => job.status?.toLowerCase().trim() === "completed").length;
    setInProgressCount(inProgress);
    setCompletedCount(completed);
  }, [jobs]);

  return (
    <JobRap>
      <div className="containary all-dash">
        <div className="job-left">
          <div className="job-1">
            <div className="job-1-sub-1">
              <h4>My Jobs</h4>
              <p>
                Earnings available now: 
                <span> ₦85,000</span>
              </p>
            </div>
            <Link className="withdraw-btn">Withdraw</Link>
          </div>

       <div className="job-2">
  <div className="job-2-header">
    <h4>All Jobs</h4>
  </div>

<div className="job-links">
              <Link
                className={`link ${activeLink === "progress" ? "active" : ""}`}
                onClick={() => handleLinkClick("progress")}
              >
                In Progress ({inProgressCount})
              </Link>
              <Link
                className={`link ${activeLink === "completed" ? "active" : ""}`}
                onClick={() => handleLinkClick("completed")}
              >
                Completed ({completedCount})
              </Link>
            </div>

<div className="all-progress">
  {isLoading ? (
    <div className="no-jobs-now">
      <h4>Loading...</h4>
    </div>
  ) : jobs.length === 0 ? (
    <div className="no-jobs-now">
      <h4>No jobs available.</h4>
    </div>
  ) : (
    jobs.map((job, index) => (
      <div key={index} className="job-4">
        <div className="all-inner-job">
          <h5>{job.description || "No description"}</h5> {/* Use description or another property */}
          <h6>{new Date(job.createdAt).toLocaleString("en-NG", { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit', 
    hour: 'numeric', 
    minute: 'numeric', 
    hour12: true 
}) || "N/A"}</h6> {/* Adjust based on your data structure */}
          <div className="inner-job">
            <p>Job ID: {job.jobId || job._id}</p> {/* Use jobId or _id */}
            <span>{job.budget || "N/A"}</span> {/* Ensure budget exists */}
            <h6>{job.status || "N/A"}</h6> {/* Display project status */}
          </div>
        </div>
        <Link to={`/artisan/jobs/details/${job._id}`} className="update-btn">View Job</Link>
      </div>
    ))
  )}
</div>

</div>

        </div>
        {/* DASHBOARD SIDEBAR - You can keep this as is */}
        <div className="dash-right">
          <div className="dash-3">
            <img src="/images/img-10.png" alt="" />
            <div className="info">
              <h4>Ikechukwu Mmbadiwe</h4>
              <p>Electrical Engineer</p>
            </div>
            <div className="verify">
              <img src="/images/icon-18.png" alt="" />
              <p>Verify</p>
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
                <p>Public</p>
              </div>
              <div className="dash-4-inner">
                <h6>Phone Number:</h6>
                <p>08066091125</p>
              </div>
              <div className="dash-4-inner">
                <h6>Industry:</h6>
                <p>Electrical</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </JobRap>
  );
};

export default ArtisanJobs;
