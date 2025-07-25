import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
    background: rgb(129, 113, 244);
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
      .all-progress {
    padding: 20px;
    max-height: 400px;
    overflow-y: auto;
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
`;

const ArisanHome = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
   const location = useLocation();

    useEffect(() => {
  const query = new URLSearchParams(location.search);
  const tokenFromUrl = query.get("token");

  if (tokenFromUrl) {
    localStorage.setItem("artisanToken", tokenFromUrl);
    // Clean the URL so the token isn't visible anymore
    window.history.replaceState({}, document.title, "/artisan");
  }
}, [location]);

  useEffect(() => {
    const token = localStorage.getItem("artisanToken");
    if (!token) {
      navigate("/artisanAuth/login/Artisan");
    }else {
      setLoading(false); // token exists
    }
  }, [navigate]);

  const firstName = localStorage.getItem("artisanFirstName");
  const lastName = localStorage.getItem("artisanLastName");
  const Email = localStorage.getItem("artisanEmail");
  const role = localStorage.getItem("artisanRole");
  const type = localStorage.getItem("artisanType");


    const [user, setUser] = useState(null);



  const [showAll, setShowAll] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [visibleJobs, setVisibleJobs] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
    const fetchJobs = async () => {
      const token = localStorage.getItem("artisanToken");

      if (!token) {
        setError("You must be logged in to view jobs.");
        return;
      }
      try {
        const response = await fetch(
          "https://blucolar-be.onrender.com/api/client/project/my/assigned",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
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
          console.error(
            "Expected an array of projects but got:",
            data.projects
          );
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

  const handleShowMore = () => {
    if (showAll) {
      setVisibleJobs(jobs.slice(0, 3)); // Collapse back to 3
    } else {
      setVisibleJobs(jobs); // Show all
    }
    setShowAll(!showAll);
  };

  const [data, setData] = useState([]);
  const url =
    "https://blucolar-be.onrender.com/api/client/project/artisan-dashboard";

  const token = localStorage.getItem("artisanToken");

  const yourToken = token; // Replace with your actual token
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${yourToken}`, // Include your token here
            "Content-Type": "application/json",
          },
          // Include credentials for CORS
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


    useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('artisanToken'); // Get token from localStorage

      if (!token) {
        setError('No auth token found');
        return;
      }

      try {
        const response = await fetch('https://blucolar-be.onrender.com/api/users/me', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setUser(data.user);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUserData();
  }, []);


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
                {getGreeting()}, {user ? `${user.firstName} ${user.lastName}`  : "Guest"}, 
              </h3>
            </div>
            <div className="dash-1-sub-2">
              <div className="inner-dash-1">
                <p>Earnings</p>
                <h4>₦0.00</h4>
              </div>
              <div className="inner-dash-1">
                <p>Open Jobs</p>
                <h4>{data.assignedJobs || 0}</h4>
              </div>
              <div className="inner-dash-1 no-border">
                <p>Completed Jobs</p>
                <h4>{data.completedJobs || 0}</h4>
              </div>
            </div>
          </div>
          {user && (!user.firstName || !user.lastName || !user.email || !user.address || !user.phone) && (
  <Link to="/artisanAuth/signUpOwner">
    <div className="onboard">
      <p>Complete Onboarding</p>
    </div>
  </Link>
)}

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
            <span>₦{job.budget || "N/A"}</span> {/* Ensure budget exists */}
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
        <div className="dash-right">
          <div className="dash-3">
            <img src="/images/img-10.png" alt="" />
            <div className="info">
              <h4>
               {user ? `${user.firstName} ${user.lastName}`  : "Guest"}
              </h4>
              {/* <p>Electrical Engineer</p> */}
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
                <h6>Availability badge:</h6>
                <p>{user?.status || 'N/A'}</p>
              </div>
              <div className="dash-4-inner">
                <h6>Email Address:</h6>
                <p>{user?.email || 'N/A'}</p>
              </div>
              <div className="dash-4-inner">
                <h6>Phone Number:</h6>
             <p>{user?.phone || 'N/A'}</p>
              </div>
               <div className="dash-4-inner">
                <h6>Address:</h6>
             <p>{user?.address || 'N/A'}</p>
              </div>
               <div className="dash-4-inner">
                <h6>Country:</h6>
             <p>{user?.country || 'N/A'}</p>
              </div>
                <div className="dash-4-inner">
                <h6>State:</h6>
             <p>{user?.city || 'N/A'}</p>
              </div>
               <div className="dash-4-inner">
                <h6>Gender:</h6>
             <p>{user?.gender || 'N/A'}</p>
              </div>
              <div className="dash-4-inner">
                <h6>Industry:</h6>
                <p>Electrical</p>
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
