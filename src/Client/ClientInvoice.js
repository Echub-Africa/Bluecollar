import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

  .upper-invoice h4 {
    color: #101828;
    font-size: 18px;
    font-weight: 600;
  }
  .upper-invoice {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px;
    border-bottom: 1px solid #1018281a;
  }
  .detail-1 p {
    color: #667085;
    font-weight: 400;
    font-size: 14px;
  }
  .detail-1 span {
    color: #eda928;
    font-weight: 500;
    font-size: 14px;
  }
  .detail-1 {
    display: flex;
    align-items: center;
    gap: 5px;
    padding-bottom: 10px;
    border-bottom: 1px solid #1018281a;
  }
  .detail-2 h3 {
    color: #101828;
    font-size: 20px;
    font-weight: 600;
  }
  .detail-2 img {
    width: 99px;
    height: 29px;
  }
  .detail-2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid #1018281a;
  }
  .detail-3-sub p {
    color: #101828;
    font-size: 14px;
    font-weight: 500;
  }
  .detail-3-sub h6 {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
  }
  .detail-3-sub {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .detail-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }
  .table-div {
    min-width: 500px !important;
  }
  .table-div th,
  .table-div td {
    /* border: none; */
  }
  .table-bottom-line {
    border-bottom: 1px solid #1018281a !important;
  }
  .table-div th {
    color: #667085;
    font-size: 12px;
    font-weight: 400;
    text-align: start;
    padding: 5px 10px;
  }
  .table-div td {
    color: #101828;
    font-size: 14px;
    font-weight: 500;
    padding: 5px 0px;
  }
 .table-div  thead {
    background: #f7f7f7;
  }
  .table-color {
    color: #667085;
  }
  .all-invoice {
    background: #ffffff;
    border: 1px solid #1018281a;
    border-radius: 8px;
  }
  .invoice-body {
    padding: 20px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .detail-4 button {
    width: 169px;
    height: 47px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 600;
  }
  .btn-1 {
    background: #1018280f;
    border-style: none;
    color: #667085;
  }
  .btn-2 {
    border: 1px solid #0067d0;
    color: #0067d0;
  }
  .btn-3 {
    background: #0067d0;
    border-style: none;
    color: #ffffff;
    
  }
  .detail-4 {
    display: flex;
    gap: 15px;
    justify-content: flex-end;
  }
  .upper-invoice {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const ClientInvoice = () => {
   const navigate = useNavigate();
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [detailDrop, setDetailDrop] = useState(false);
  const [dropdown, setDropdown] = useState(false);
const [selectedInvoice, setSelectedInvoice] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("home-ownerToken");
    if (!token) {
      navigate("/clientAuth/login");
    }
  }, [navigate]);

  // Toggle dropdown
const handleGoToDetail = (id) => {
  const found = invoices.find((inv) => inv._id === id);
  setSelectedInvoice(found);
  setDetailDrop(true);
};

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

    // Fetch invoices using native fetch
  useEffect(() => {
    const token = localStorage.getItem("home-ownerToken");

    const fetchInvoices = async () => {
      try {
        const response = await fetch("https://blucolar-be.onrender.com/api/client/invoices", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        setInvoices(data || []);
      } catch (error) {
        console.error("Failed to fetch invoices:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInvoices();
  }, []);

    const {
    quantity,
    unitPrice,
  } = selectedInvoice || {};

const t = 1000;

  const total = unitPrice * quantity;
  const tax = t;
  const grandTotal = total + tax;


   const [searchTerm, setSearchTerm] = useState("");

   const filteredJobs = invoices?.filter((item) =>
  item?.invoiceId?.toLowerCase().includes(searchTerm.toLowerCase())
);
  
  return (
    <RequestRap>
      <div className="containary">
        <div className="request">
          <div className="request-1">
            <h2>Invoice </h2>
            {/* <button onClick={handleDropdown}>Create invoice</button> */}
          </div>
          <div className="request-2">
            <div className="search-div">
                  <input
                    type="text"
                    placeholder="Enter Invoice ID..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                  />
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
                      <th>INVOICE ID</th>
                      <th>CLIENT</th>
                      <th>PROJECT TITLE</th>
                      <th>AMOUNT</th>
                      <th>DATE</th>
                      <th>STATUS</th>
                      <th></th>
                    </tr>
                  </thead>
       <tbody>
  {loading ? (
    <tr>
      <td colSpan="7">Loading...</td>
    </tr>
  ) : filteredJobs.length > 0 ? (
    filteredJobs.map((item, index) => (
<tr
  key={item?._id}
  style={{ cursor: "pointer" }}
  onClick={() => handleGoToDetail(item?._id)}
>

        <td>{index + 1}</td>
        <td>{item.invoiceId}</td>
        <td>{item.clientEmail}</td>
        <td>{item.project?.projectType || "N/A"}</td>
        <td>₦{(item.unitPrice * item.quantity).toLocaleString()}</td>
        <td>{new Date(item.createdAt).toLocaleDateString()}</td>
        <td>
          <span
            style={{
              background: item.status === "pending" ? "#FBF1E7" : "#D8F4E8",
              color: item.status === "pending" ? "#FF8C1A" : "#027A48",
              borderRadius: "100px",
              padding: "5px 12px",
              fontSize: "13px",
              textTransform: "capitalize"
            }}
          >
            {item.status}
          </span>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7">No invoices found.</td>
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
                Invoice ID
                <input type="text" placeholder="" />
              </label>
              <label>
                Project
                <input type="text" placeholder="" />
              </label>
              <label>
                Biled To
                <input type="text" placeholder="" />
              </label>
              <label>
                Currency
                <input type="text" placeholder="" />
              </label>
              <label>
                Due Date
                <input type="text" placeholder="" />
              </label>
              <button>Continue</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {detailDrop && selectedInvoice ? (
        <>
          <div className="dropdown-container">
                <div className="all-invoice">
                  <div className="upper-invoice">
                   
                    <h4>Invoice Details</h4>
                    <Icon
                      onClick={handleGoToDetail}
                      className="icon"
                      width="18px"
                      height="18px"
                      icon="humbleicons:times"
                      style={{ color: "#667085" }}
                    />
                  </div>
                  <div className="invoice-body">
                     <div className="detail-1">
              <p>Status:</p>
              <span>{selectedInvoice?.status || "N/A"}</span>
            </div>
                    <div className="detail-2">
                      <h3>{selectedInvoice?.invoiceId}</h3>
                      <img src="/images/sign-blue.png" alt="" />
                    </div>
                    <div className="detail-3">
                      <div className="detail-3-sub">
                        <h6>Due date</h6>
                        <p>  {new Date(selectedInvoice?.dueDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}</p>
                      </div>
                      <div className="detail-3-sub">
                        <h6>Project</h6>
                        <p>{selectedInvoice?.project?.projectType || "N/A"}</p>
                      </div>
                       <div className="detail-3-sub">
                        <h6>Project Description</h6>
                        <p>{selectedInvoice?.project?.description || "N/A"}</p>
                      </div>
                      <div
                       className="detail-3-sub">
                        <h6>Billed to</h6>
                        <p>{selectedInvoice?.clientEmail || "N/A"}</p>
                      </div>
                      <div className="detail-3-sub">
                        <h6>Currency</h6>
                        <p>Naira (NGN)</p>
                      </div>
                      <div className="detail-3-sub">
                        <h6>Date Created</h6>
                        <p>{new Date(selectedInvoice?.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}</p>
                      </div>
                    </div>
                    <div>
                      <table>
                        <table className="table-div">
                          <thead>
                            <tr>
                              <th>DESCRIPTION</th>
                              <th>QUANTITY</th>
                              <th>UNIT PRICE</th>
                              <th> AMOUNT</th>
                            </tr>
                          </thead>
                          <tbody>
                    <tr className="table-bottom-line">
                      <td className="table-bottom-line">
                        {selectedInvoice?.description || "N/A"}
                      </td>
                      <td className="table-bottom-line">{selectedInvoice?.quantity || "N/A"}</td>
                      <td className="table-bottom-line">{selectedInvoice?.unitPrice || "N/A"}</td>
                      <td className="table-bottom-line">₦{total || "N/A"}</td>
                    </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td className="table-color">Sub-total</td>
                               <td>₦{total || "N/A"}</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td className="table-color">Tax</td>
                              <td>₦{t}</td>
                            </tr>
                            <tr>
                              <td className="table-bottom-line"></td>
                              <td className="table-bottom-line"></td>
                              <td className="table-bottom-line table-color">
                                Discount
                              </td>
                              <td className="table-bottom-line">₦0.00</td>
                            </tr>
                            <tr>
                              <td className="table-bottom-line"></td>
                              <td className="table-bottom-line"></td>
                              <td className="table-bottom-line">Total</td>
                              <td className="table-bottom-line">₦{grandTotal || "N/A"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </table>
                    </div>
                    <div className="detail-4">
                      {/* <button className="btn-1">Pay Now</button>
                      <button className="btn-2">Cancel Invoice</button> */}
                      <button className="btn-3">Pay Now</button>
                    </div>
                  </div>
                </div>
              </div>
        </>
      ): null}

    </RequestRap>
  );
};

export default ClientInvoice;
