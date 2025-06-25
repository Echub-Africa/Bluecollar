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

const AdminInvoice = () => {
  const [invoiceForm, setInvoiceForm] = useState({
    jobId: "",
    description: "",
    quantity: "",
    unitPrice: "",
    dueDate: "",
    invoiceId: "",
  });

  const navigate = useNavigate();
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [error, setError] = useState("");


const handleInputChange = (e) => {
  const { name, value } = e.target;
  setInvoiceForm((prev) => ({ ...prev, [name]: value }));
};

  // Fetch invoices from API
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
const fetchInvoices = async () => {
  try {
    const response = await fetch(
      "https://blucolar-be.onrender.com/api/admin/invoices",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    console.log("Raw API response:", data); // ✅ Add this
  setInvoices(data || []);

  } catch (error) {
    console.error("Failed to fetch invoices:", error);
  } finally {
    setLoading(false);
  }
};

    fetchInvoices();
  }, []);

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
      invoiceId: "",
    }); // reset form
  } catch (err) {
    console.error(err);
    setError(err.message || "An unexpected error occurred.");
  }
};


  // Toggle dropdown
  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };
  const handleGoToDetail = (id) => {
    navigate(`/admin/invoice/${id}`);
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <RequestRap>
      <div className="containary">
        <div className="request">
          <div className="request-1">
            <h2>Invoice </h2>
            <button onClick={handleDropdown}>Create invoice</button>
          </div>
          <div className="request-2">
            <div className="search-div">
              <input type="text" placeholder="Enter invoice ID..." />
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
                      <th>INVOICE ID</th>
                      <th>JOB ID</th>
                      <th>CLIENT</th>
                      <th> PROJECT</th>
                      <th> AMOUNT</th>
                      <th> DATE</th>
                      <th>STATUS</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>

{loading ? (
  <tr>
    <td colSpan="8">Loading...</td>
  </tr>
) : invoices.length > 0 ? (
  invoices.map((item, index) => {
   
    return (
      <tr key={item._id} onClick={() => handleGoToDetail(item._id)}>
        <td>{index + 1}</td>
  <td>{item.project?.invoiceId || "N/A"}</td>
  <td>{item.project?.jobId || "N/A"}</td>
  <td>{item.client?.firstName + " " + item.client?.lastName || "N/A"}</td>
  <td>{item.project?.projectType || "N/A"}</td>
  <td>{item.unitPrice * item.quantity || "N/A"}</td>
  <td>{new Date(item.createdAt).toLocaleString()}</td>
        <td>
          <div
            style={{
              background:
                item.status === "Pending" ? "#FBF1E7" : "#D8F4E8",
              color: item.status === "Pending" ? "#FF8C1A" : "#027A48",
              borderRadius: "100px",
              padding: "5px 12px",
              width: "fit-content",
            }}
          >
            {item.status}
          </div>
        </td>
        <td>
          <div style={{ position: "relative" }}>
            <span
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown(item._id);
              }}
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
    );
  })
) : (
  <tr>
    <td colSpan="8" className="no-case">
      <img src="/images/mask_img.png" alt="" />
      <h3>No Invoices Found.</h3>
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
    </RequestRap>
  );
};

export default AdminInvoice;
