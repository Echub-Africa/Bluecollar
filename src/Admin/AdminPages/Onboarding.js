import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import QuestionForm from "../Question";

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
    .request-btns {
    gap: 10px;
    display: flex;}
`;

const AdminJobs = () => {
  const [formData, setFormData] = useState({
    name: "",
  });

  // Inside your component:
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quickShow, setQuickShow] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [recentJobs, setRecentJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const [dropdown, setDropdown] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle dropdown

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  const handleGoToDetail = (id) => {
    navigate(`/admin/jobs/details/${id}`);
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !event.target.closest(".dropdown-button") &&
        !event.target.closest(".table-side-drop")
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name) {
    setErrorMessage("Please fill in required fields.");
    return;
  }

  const token = localStorage.getItem("adminToken");
  if (!token) {
    alert("Admin not authenticated. Please log in.");
    return;
  }

  setIsSubmitting(true);

  try {
    const response = await fetch(
      "https://blucolar-be.onrender.com/api/onboarding/profession",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: formData.name,
        }),
      }
    );

    const result = await response.json();

    if (response.ok) {
      setSuccessMessage("✅ Profession Created successfully!");
      console.log("✅ Profession Created:", result);

      setFormData({
        name: "",
      });

      setQuickShow(false);
      setShowSuccessModal(true);
      setErrorMessage("");
    } else {
      const message =
        result.message ||
        (Array.isArray(result.errors) ? result.errors[0]?.msg : "Unknown error.");
      setErrorMessage("Submission failed: " + message);
      console.error("❌ Error:", message);
    }
  } catch (error) {
    setErrorMessage("Network error. Please try again.");
    console.error("❌ Network error:", error);
  } finally {
    setIsSubmitting(false);
  }
};


  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    const fetchRecentData = async () => {
      try {
        const response = await fetch(
          "https://blucolar-be.onrender.com/api/onboarding/questions/id",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();

        // Format recent jobs
        const formattedJobs = Array.from(
          new Map(
            (data.recentJobs || []).map((job) => [
              job._id,
              {
                client: `${job.client.firstName} ${job.client.lastName}`,
                clientmail: `${job.client.email}`,
                id: job._id,
                name: job.projectType || "Untitled",
                amount: job.budget || "N/A",
                jobId: job.jobId || "N/A",
                status: job.status || "Pending",
              },
            ])
          ).values()
        );

        setRecentJobs(formattedJobs);
      } catch (err) {
        console.error("Error fetching recent data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentData();
  }, []);

  const handleAction = async (action, id) => {
    console.log(`Action: ${action}, Job ID: ${id}`);

    if (action === "open") {
      navigate(`/admin/jobs/details/${id}`);
    } else if (action === "approve" || action === "delete") {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        alert("Admin not authenticated.");
        return;
      }

      const endpoint =
        action === "approve"
          ? `https://blucolar-be.onrender.com/api/admin/${id}/approve`
          : `https://blucolar-be.onrender.com/api/admin/${id}/reject`;

      try {
        const response = await fetch(endpoint, {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();

        if (response.ok) {
          alert(
            action === "approve"
              ? "Job approved successfully."
              : "Job rejected successfully."
          );

          // Optionally update the job status in UI
          setRecentJobs((prev) =>
            prev.map((job) =>
              job.id === id
                ? {
                    ...job,
                    status: action === "approve" ? "Approved" : "Rejected",
                  }
                : job
            )
          );
        } else {
          alert(
            `Failed to ${action === "approve" ? "approve" : "reject"} job: ${
              result.message || "Unknown error"
            }`
          );
        }
      } catch (error) {
        console.error(`Error during ${action}:`, error);
        alert(`Something went wrong while trying to ${action} the job.`);
      }
    }
  };


  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  return (
    <RequestRap>
      <div className="containary">
        <div className="request">
          <div className="request-1">
            <h2>Onboarding Profession & Questions</h2>
            <div className="request-btns">
            <button  onClick={handleDropdown}>Create Profession</button> 
             <QuestionForm />
             </div>
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
            <div className="filter-div">
              <p>Status All</p>
              <Icon
                width="16px"
                height="16px"
                icon="ep:arrow-down-bold"
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
                      <th> CLIENT</th>
                      <th> PROJECT</th>
                      <th> AMOUNT</th>
                      <th>CLIENT EMAIL</th>
                      <th>STATUS</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentJobs?.length > 0 ? (
                      recentJobs.map((items, index) => (
                        <tr
                          key={items?.id}
                          style={{ cursor: "pointer" }}
                          onClick={() => handleGoToDetail(items?.id)}
                        >
                          <td>{index + 1}</td>
                          <td>{items?.jobId}</td>
                          <td>{items?.client}</td>
                          <td>{items?.name}</td>

                          <td>{items?.amount}</td>
                          <td>{items?.clientmail}</td>
                          <td>
                            <div
                              style={{
                                background:
                                  items.status === "pending"
                                    ? "grey"
                                    : items.status === "approved"
                                    ? "green"
                                    : items.status === "rejected"
                                    ? "red"
                                    : "#E0E0E0", // fallback
                                color:
                                  items.status === "pending"
                                    ? "white"
                                    : items.status === "approved"
                                    ? "white"
                                    : items.status === "rejected"
                                    ? "white"
                                    : "#333",
                                borderRadius: "9999px",
                                padding: "6px 14px",
                                width: "fit-content",
                                fontWeight: 500,
                                fontSize: "14px",
                                textTransform: "capitalize",
                              }}
                            >
                              {items?.status || "Pending"}
                            </div>
                          </td>

                          <td>
                            <div style={{ position: "relative" }}>
                              <button
                                className="dropdown-button"
                                style={{ cursor: "pointer" }}
                                onClick={(e) => {
                                  e.stopPropagation(); // Prevent bubbling
                                  toggleDropdown(items.id);
                                }}
                              >
                                Edit
                              </button>

                              {openDropdown === items.id && (
                                <div className="table-side-drop">
                                  <p
                                    onClick={() =>
                                      handleAction("open", items.id)
                                    }
                                  >
                                    Open
                                  </p>
                                  <p
                                    onClick={() =>
                                      handleAction("approve", items.id)
                                    }
                                  >
                                    Approve
                                  </p>
                                  <p
                                    onClick={() =>
                                      handleAction("delete", items.id)
                                    }
                                  >
                                    Delete
                                  </p>
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
                          <h3>No Request.</h3>
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
      {dropdown ? (
        <div className="dropdown-container">
          <div className="dropdown-div">
            <div className="drop-header">
              <h4>Create a Profession</h4>
              <Icon
                onClick={handleDropdown}
                className="icon"
                width="18px"
                height="18px"
                icon="humbleicons:times"
                style={{ color: "#667085" }}
              />
            </div>
            {successMessage && (
  <p style={{ color: "green", fontSize: "14px" }}>{successMessage}</p>
)}

<form onSubmit={handleSubmit}>
  <div className="drop-body">
    <label htmlFor="name">Profession</label>
    <input
      id="name"
      type="text"
      name="name"
      placeholder="Enter Profession Name"
      value={formData.name}
      onChange={handleChange}
    />

    {errorMessage && (
      <p style={{ color: "red", fontSize: "14px" }}>{errorMessage}</p>
    )}

    <button type="submit" disabled={isSubmitting}>
      {isSubmitting ? "Creating..." : "Create Profession"}
    </button>
  </div>
</form>



          </div>
        </div>
      ) : (
        ""
      )}
    </RequestRap>
  );
};

export default AdminJobs;
