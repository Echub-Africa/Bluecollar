import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RequestRap = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  .request-1 h2 {
    color: #101828;
    font-weight: 600;
    font-size: 18px;
  }
  .request {
    border: 1px solid #1018281a;
    background: #ffffff;
    border-radius: 8px;
  }
  .request-1 {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #1018281a;
  }
  .request-1 button {
    background: #0067d0;
    width: 128px;
    height: 35px;
    border-radius: 8px;
    border-style: none;
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
  }
  .search-div {
    width: 296px;
    height: 40px;
    position: relative;
  }
  .search-div input {
    width: 296px;
    height: 40px;
    border: 1px solid #1018281a;
    border-radius: 100px;
    padding-left: 15px;
  }
  .filter-div {
    width: 126px;
    height: 40px;
    border: 1px solid #1018281a;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  .request-2 {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .search-icon {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .custom-table tbody td {
    color: #667085 !important;
  }
  .table-side-drop {
    position: absolute;
    background: #ffffff;
    border: 1px solid #1018281a;
    box-shadow: 0px 8px 20px -4px #00000014;
    padding: 10px 0px;
    width: 119px;
    right: 10px;
    border-radius: 12px;
    z-index: 1000;
  }
  .table-side-drop p {
    color: #101828;
    font-size: 14px;
    font-weight: 400;
    padding: 5px 10px;
  }
  .table-side-drop p:hover {
    background: #f7f7f7;
  }
  .dropdown-div {
    border-top: 1px solid #1018281a;
    background: #ffffff;
    border-radius: 6px;
  }
  .drop-header h4 {
    color: #101828;
    font-size: 16px;
    font-weight: 600;
  }
  .drop-header {
    background: #f7f7f7;
    border-bottom: 1px solid #1018281a;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  label {
    color: #667085;
    font-size: 15px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .drop-body input {
    border: 1px solid #1018281a;
    width: 356px;
    height: 48px;
    border-radius: 10px;
    padding-left: 15px;
  }
  .drop-body button {
    width: 356px;
    height: 48px;
    border-radius: 10px;
    background: #0067d0;
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    border-style: none;
  }
  .drop-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const ClientJobs = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dropdown, setDropdown] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

         useEffect(() => {
      const token = localStorage.getItem("companyToken");
      if (!token) {
        navigate("/companyAuth/login");
      }
    }, [navigate]);


  // Toggle dropdown
  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };
  const handleGoToDetail = (id) => {
    navigate(`/company/jobs/details/${id}`);
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const fetchProjects = async () => {
    const token = localStorage.getItem("companyToken");
    try {
      const response = await fetch(
        "https://blucolar-be.onrender.com/api/client/project/my/projects",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Add token if necessary:
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setRequests(data?.projects || []); // Adjust this depending on the API's structure
    } catch (err) {
      setError("Failed to fetch project data.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

const companyName = localStorage.getItem("companyfirstName");
const companyNamee = localStorage.getItem("companylastName") ;

  return (
    <RequestRap>
      <div className="containary">
        <div className="request">
          <div className="request-1">
            <h2>Projects</h2>
          </div>
          <div className="request-2">
            <div className="search-div">
              <input type="text" placeholder="Enter Job ID..." />
              <Icon
                className="search-icon"
                width="16px"
                height="16px"
                icon="material-symbols:search-rounded"
                style={{ color: "#667085" }}
              />
            </div>
          
          </div>
          <div className="table-container">
            <div className="new-table-scroll">
              <div className="table-div-con">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>S/N</th>

                      <th>JOB ID</th>
                      <th>PROJECT TITLE</th>
                      <th>AMOUNT</th>
                      <th>TIMELINE (Start)</th>
                      <th>TIMELINE (End)</th>
                      <th>STATUS</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan="10">Loading projects...</td>
                      </tr>
                    ) : error ? (
                      <tr>
                        <td colSpan="10">{error}</td>
                      </tr>
                    ) : requests?.length > 0 ? (
                      requests.map((item, index) => (
                        <tr
                          key={item._id}
                          style={{ cursor: "pointer" }}
                          onClick={() => handleGoToDetail(item._id)}
                        >
                          <td>{index + 1}</td>
                          <td>{item.jobId}</td>
                          <td>{item.projectType || "Untitled Project"}</td>
                          <td>{item.budget || "₦0.00"}</td>
                          <td>
                            {item.timeline?.start
                              ? new Date(item.timeline.start)
                                  .toISOString()
                                  .slice(0, 10)
                              : "N/A"}
                          </td>
                          <td>
                            {item.timeline?.end
                              ? new Date(item.timeline.end)
                                  .toISOString()
                                  .slice(0, 10)
                              : "N/A"}
                          </td>

                          <td>
                            <div
                              style={{
                                background:
                                  item.status === "pending"
                                    ? "grey"
                                    : item.status === "approved"
                                    ? "green"
                                    : item.status === "rejected"
                                    ? "red"
                                    : "#E0E0E0", // fallback
                                color:
                                  item.status === "pending"
                                    ? "white"
                                    : item.status === "approved"
                                    ? "white"
                                    : item.status === "rejected"
                                    ? "white"
                                    : "#333",
                                borderRadius: "100px",
                                padding: "5px 12px",
                                width: "fit-content",
                              }}
                            >
                              {item.status || "Unknown"}
                            </div>
                          </td>
                          <td>
                            <div style={{ position: "relative" }}>
                              <span
                                style={{ cursor: "pointer" }}
                                onClick={() => toggleDropdown(item._id)}
                              >
                                ...
                              </span>
                              {openDropdown === item._id && (
                                <div className="table-side-drop">
                                  <p>Open</p>
                                  <p>Approve</p>
                                  <p>Delete</p>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="10" className="no-case">
                          <img src="/images/mask_img.png" alt="" />
                          <h3>No Projects Found.</h3>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RequestRap>
  );
};

export default ClientJobs;
