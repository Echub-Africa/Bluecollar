import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  const [activeLink, setActiveLink] = useState("progress");
  const [inProgressJob, setInProgressJob] = useState([]);
  const [completedJob, setCompletedJob] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

   useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/client/project/my/assigned");
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const data = await response.json();

        // Assuming the response structure includes a `status` field to determine job status
        const progress = data.filter(job => job.status?.toLowerCase() === "job in progress");
        const completed = data.filter(job => job.status?.toLowerCase() === "completed");

        setInProgressJob(progress);
        setCompletedJob(completed);
      } catch (error) {
        console.error("Error fetching jobs:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);
  
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
                In Progress ({inProgressJob?.length || 0})
              </Link>
              <Link
                className={`link ${activeLink === "completed" ? "active" : ""}`}
                onClick={() => handleLinkClick("completed")}
              >
                Completed ({completedJob?.length || 0})
              </Link>
            </div>

            <div className="all-progress">
              {isLoading ? (
                <div className="no-jobs-now">
                  <h4>Loading...</h4>
                </div>
              ) : activeLink === "progress" && inProgressJob.length > 0 ? (
                inProgressJob.map((job, index) => (
                  <div key={index} className="job-4">
                    <div className="all-inner-job">
                      <h5>{job.name}</h5>
                      <h6>{job.date || "N/A"}</h6>
                      <div className="inner-job">
                        <p>Job ID: {job.jobId}</p>
                        <span>{job.amount}</span>
                        <h6>{job.status}</h6>
                      </div>
                    </div>
                    <Link to="/artisan/jobs/details" className="update-btn">Update Job</Link>
                  </div>
                ))
              ) : activeLink === "completed" && completedJob.length > 0 ? (
                completedJob.map((job, index) => (
                  <div key={index} className="job-4">
                    <div className="all-inner-job">
                      <h5>{job.name}</h5>
                      <h6>{job.date || "N/A"}</h6>
                      <div className="inner-job">
                        <p>Job ID: {job.jobId}</p>
                        <span>{job.amount}</span>
                        <h6>{job.status}</h6>
                      </div>
                    </div>
                    <Link to="/artisan/jobs/details" className="update-btn">Update Job</Link>
                  </div>
                ))
              ) : (
                <div className="no-jobs-now">
                  <img src="/images/img-11.png" alt="" />
                  <h4>No {activeLink === "progress" ? "Active" : "Completed"} Jobs</h4>
                  <p>Jobs you’re {activeLink === "progress" ? "actively working on" : "done with"} will appear here.</p>
                </div>
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

