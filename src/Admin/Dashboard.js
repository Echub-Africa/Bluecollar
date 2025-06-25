import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const DashboardRap = styled.div`

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

  padding-top: 50px;
  padding-bottom: 50px;
  .dash-1 h4 {
    color: #667085;
    font-weight: 400;
    font-size: 14px;
  }
  .dash-1 h2 {
    color: #101828;
    font-size: 30px;
    font-weight: 600;
  }
  .dash-1 {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .upper-dash-1 button {
    background: #0067d0;
    width: 140px;
    height: 42px;
    border-style: none;
    border-radius: 10px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
  }
  .upper-dash-1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .dash-2 h4 {
    color: #667085;
    font-weight: 400;
    font-size: 14px;
  }
  .dash-2-inner h5 {
    color: #101828;
    font-size: 20px;
    font-weight: 600;
  }
  .dash-2-small p {
    color: #027a48;
    font-weight: 400;
    font-size: 14px;
  }
  .dash-2-small {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .dash-2-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .dash-2 {
    border: 1px solid #1018281a;
    width: 238px;
    height: 113px;
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .upper-dash-2 {
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }
  .upper-dash {
    width: 100%;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 36px;
    padding: 36px;
    border-radius: 8px;
  }
  .dash-3 h4 {
    color: #101828;
    font-size: 16px;
    font-weight: 600;
    padding: 10px;
  position: sticky;
  }
  .dash-3 {
    background: #ffffff;
    border: 1px solid #1018281a;
    border-radius: 8px;
    height: 300px;
    overflow: hidden;
    overflow-y: auto;
  }
  .down-dash {
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    gap: 20px;
  }
`;

const AdminDashboard = () => {
    const [invoiceForm, setInvoiceForm] = useState({
      jobId: "",
      description: "",
      quantity: "",
      unitPrice: "",
      dueDate: "",
   
    });
  
    const navigate = useNavigate();
    const [invoices, setInvoices] = useState([]);
  
    const [dropdown, setDropdown] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

const [recentUser, setRecentUser] = useState([]);
const [recentJobs, setRecentJobs] = useState([]);
const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const [summaryData, setSummaryData] = useState(null);

  const fetchProjects = async () => {
    const token = localStorage.getItem("adminToken");
    try {
      const response = await fetch(
        "https://blucolar-be.onrender.com/api/admin/summary",
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
      setSummaryData(data); // save the full summary object
      // Adjust this depending on the API's structure
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


useEffect(() => {
  const token = localStorage.getItem("adminToken");

  const fetchRecentData = async () => {
    try {
      const response = await fetch("https://blucolar-be.onrender.com/api/admin/recent-activity", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch data");

      const data = await response.json();

      // Format recent users
      const formattedUsers = (data.recentUsers || []).map((user) => ({
        id: user._id,
        name: `${user.firstName} ${user.lastName}`,
        accType: user.type || "N/A",
        date: user.createdAt
          ? new Date(user.createdAt).toLocaleDateString()
          : "N/A",
        status: "Approved", // Or dynamic if available
      }));

      // Format recent jobs
      const formattedJobs = (data.recentJobs || []).map((job) => ({
        id: job._id,
        name: job.projectType
 || "Untitled",
        amount: job.budget || "N/A",
        jobId: job.jobId || "N/A",
        status: job.status || "Pending", // Adjust if status is available
      }));

      setRecentUser(formattedUsers);
      setRecentJobs(formattedJobs);
    } catch (err) {
      console.error("Error fetching recent data:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchRecentData();
}, []);

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setInvoiceForm((prev) => ({ ...prev, [name]: value }));
};


const handleCreateInvoice = async () => {
  const token = localStorage.getItem("adminToken");
  setError(""); // reset error
  try {
    const response = await fetch(
      "https://blucolar-be.onrender.com/api/admin/invoice",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(invoiceForm),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to create invoice");
    }

    setInvoices((prev) => [...prev, data.data]); // append new
    setDropdown(false); // close modal
    setInvoiceForm({
      jobId: "",
      description: "",
      quantity: "",
      unitPrice: "",
      dueDate: "",
    }); // reset form
  } catch (err) {
    console.error(err);
    setError(err.message || "An unexpected error occurred.");
  }
};

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <DashboardRap>
      <div className="containary">
        <div className="upper-dash">
          <div className="upper-dash-1">
            <div className="dash-1">
              <h4>Total Revenue</h4>
              <h2>#2,250,000</h2>
            </div>
            <button onClick={handleDropdown}>Create Invoice</button>
          </div>
          <div className="upper-dash-2">
            <div className="dash-2">
              <h4>Total Users</h4>
              <div className="dash-2-inner">
                <h5>{summaryData?.totalUsers?.count || 0}</h5>
                <div className="dash-2-small">
                  <p
                    style={{
                      color:
                        summaryData?.totalUsers?.change > 0
                          ? "#027A48" // Green for positive
                          : summaryData?.totalUsers?.change < 0
                          ? "#D92D20" // Red for negative
                          : "#667085", // Grey for exactly 0
                      fontWeight: "500",
                    }}
                  >
                    {summaryData?.totalUsers?.change || 0}%
                  </p>
                </div>
              </div>
            </div>
             <div className="dash-2">
              <h4>New Users this month</h4>
              <div className="dash-2-inner">
                <h5>{summaryData?.totalUsers?.newThisMonth
 || 0}</h5>
              </div>
            </div>
            <div className="dash-2">
              <h4>Completed Jobs</h4>
              <div className="dash-2-inner">
                <h5>{summaryData?.completedJobs?.count || 0}</h5>
                <div className="dash-2-small">
                  <p
                    style={{
                      color:
                        summaryData?.completedJobs?.change > 0
                          ? "#027A48" // Green for positive
                          : summaryData?.completedJobs?.change < 0
                          ? "#D92D20" // Red for negative
                          : "#667085", // Grey for exactly 0
                      fontWeight: "500",
                    }}
                  >
                    {summaryData?.completedJobs?.change || 0}%
                  </p>
                </div>
              </div>
            </div>
            <div className="dash-2">
              <h4>Open Jobs</h4>
              <div className="dash-2-inner">
                <h5>{summaryData?.openJobs?.count || 0}</h5>
                <div className="dash-2-small">
                  <p
                    style={{
                      color:
                        summaryData?.openJobs?.change > 0
                          ? "#027A48" // Green for positive
                          : summaryData?.openJobs?.change < 0
                          ? "#D92D20" // Red for negative
                          : "#667085", // Grey for exactly 0
                      fontWeight: "500",
                    }}
                  >
                    {summaryData?.openJobs?.change || 0}%
                  </p>
                </div>
              </div>
            </div>
            <div className="dash-2">
              <h4>New Request</h4>
              <div className="dash-2-inner">
                <h5>{summaryData?.newRequests?.count || 0}</h5>
                <div className="dash-2-small">
                  <p
                    style={{
                      color:
                        summaryData?.newRequests?.change > 0
                          ? "#027A48" // Green for positive
                          : summaryData?.newRequests?.change < 0
                          ? "#D92D20" // Red for negative
                          : "#667085", // Neutral/grey for 0
                      fontWeight: "500",
                    }}
                  >
                    {summaryData?.newRequests?.change || 0}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="down-dash">
          <div className="dash-3">
            <h4>Recently Signup User</h4>
            <div className="table-container">
              <div className="new-table-scroll">
                <div className="table-div-con">
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>NAME</th>
                        <th>SIGNUP DATE</th>
                        <th>ACC TYPE</th>
                      
                      </tr>
                    </thead>
                    <tbody>
                      {recentUser?.length > 0 ? (
                        recentUser.map((items, index) => (
                          <tr key={items?.id} style={{ cursor: "pointer" }}>
                            <td>{index + 1}</td>
                            <td>{items?.name}</td>
                            <td style={{ color: "#667085" }}>{items?.date}</td>
                            <td>{items?.accType}</td>
                           
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="10" className="no-case">
                            <img src="/images/mask_img.png" alt="" />
                            <h3>No Recent Users.</h3>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="dash-3">
            <h4>Recent Jobs</h4>
            <div className="table-container">
              <div className="new-table-scroll">
                <div className="table-div-con">
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>JOB TITLE</th>
                        <th>AMOUNT</th>
                        <th>JOB ID</th>
                        <th>STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentJobs?.length > 0 ? (
                        recentJobs.map((items, index) => (
                          <tr key={items?.id} style={{ cursor: "pointer" }}>
                            <td>{index + 1}</td>
                            <td>{items?.name}</td>
                            <td style={{ color: "#667085" }}>
                              {items?.amount}
                            </td>
                            <td>{items?.jobId}</td>
                            <td>
                              <div
                                style={{
                                  background:
                                    items.status === "Pending"
                                      ? "#E3F0FC"
                                      : "#D8F4E8",
                                  color:
                                    items.status === "Pending"
                                      ? "#0067D0"
                                      : "#027A48",
                                  borderRadius: "100px",
                                  padding: "5px 12px",
                                  width: "fit-content",
                                }}
                              >
                                {items?.status}
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="10" className="no-case">
                            <img src="/images/mask_img.png" alt="" />
                            <h3>No Recent Job.</h3>
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
      </div>
         {dropdown ? (
              <div className="dropdown-container">
                <div className="dropdown-div">
                  <div className="drop-header">
                    <h4>Create Invoice</h4>
                    <Icon
                      onClick={handleDropdown}
                      className="icon"
                      width="18px"
                      height="18px"
                      icon="humbleicons:times"
                      style={{ color: "#667085" }}
                    />
                  </div>
                  <div className="drop-body">
                    <label>
                      Job ID
                      <input
                        type="text"
                        name="jobId"
                        value={invoiceForm.jobId}
                        onChange={handleInputChange}
                        placeholder=""
                      />
                    </label>
                    <label>
                      Description
                      <input
                        type="text"
                        name="description"
                        value={invoiceForm.description}
                        onChange={handleInputChange}
                        placeholder=""
                      />
                    </label>
                    <label>
                      Quantity
                      <input
                        type="number"
                        name="quantity"
                        value={invoiceForm.quantity}
                        onChange={handleInputChange}
                        placeholder=""
                      />
                    </label>
                    <label>
                      Unit Price
                      <input
                        type="number"
                        name="unitPrice"
                        value={invoiceForm.unitPrice}
                        onChange={handleInputChange}
                        placeholder=""
                      />
                    </label>
                    <label>
                      Due Date
                      <input
                        type="date"
                        name="dueDate"
                        value={invoiceForm.dueDate}
                        onChange={handleInputChange}
                        placeholder=""
                      />
                    </label>
                    {error && (
        <div style={{ color: "red", marginBottom: "10px" }}>
          {error}
        </div>
      )}
      
                   <button onClick={handleCreateInvoice}>Continue</button>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
    </DashboardRap>
  );
};

export default AdminDashboard;
