import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
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
  const request = [
    {
      id: 1,
      reqId: "REQ-789500",
      name: "Micheal Soyombo",
      project: "Construction Dev.",
      budject: "₦500,000.00",
      date: "24 Jan, 2024 - 5:30PM",
      status: "Pending",
    },
    {
      id: 2,
      reqId: "REQ-789500",
      name: "Micheal Soyombo",
      project: "Construction Dev.",
      budject: "₦500,000.00",
      date: "24 Jan, 2024 - 5:30PM",
      status: "Pending",
    },
    {
      id: 3,
      reqId: "REQ-789500",
      name: "Micheal Soyombo",
      project: "Construction Dev.",
      budject: "₦500,000.00",
      date: "24 Jan, 2024 - 5:30PM",
      status: "Paid",
    },
    {
      id: 4,
      reqId: "REQ-789500",
      name: "Micheal Soyombo",
      project: "Construction Dev.",
      budject: "₦500,000.00",
      date: "24 Jan, 2024 - 5:30PM",
      status: "Paid",
    },
    {
      id: 5,
      reqId: "REQ-789500",
      name: "Micheal Soyombo",
      project: "Construction Dev.",
      budject: "₦500,000.00",
      date: "24 Jan, 2024 - 5:30PM",
      status: "Paid",
    },
    {
      id: 6,
      reqId: "REQ-789500",
      name: "Micheal Soyombo",
      project: "Construction Dev.",
      budject: "₦500,000.00",
      date: "24 Jan, 2024 - 5:30PM",
      status: "Paid",
    },
    {
      id: 7,
      reqId: "REQ-789500",
      name: "Micheal Soyombo",
      project: "Construction Dev.",
      budject: "₦500,000.00",
      date: "24 Jan, 2024 - 5:30PM",
      status: "Pending",
    },
  ];
  const navigate = useNavigate();

  const [dropdown, setDropdown] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [detailDrop, setDetailDrop] = useState(false);
  const [invoiceId, setInoviceId] = useState(null);
  // Toggle dropdown
  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };
  const handleGoToDetail = (id) => {
   setInoviceId(id);
   setDetailDrop(!detailDrop);
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
            {/* <button onClick={handleDropdown}>Create invoice</button> */}
          </div>
          <div className="request-2">
            <div className="search-div">
              <input type="text" placeholder="Enter invoice iID..." />
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
                      <th>CUSTOMER</th>
                      <th> PROJECT</th>
                      <th> AMOUNT</th>
                      <th> DATE</th>
                      <th>STATUS</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {request?.length > 0 ? (
                      request.map((items, index) => (
                        <tr
                          key={items?.id}
                          style={{ cursor: "pointer" }}
                          onClick={() => handleGoToDetail(items?.id)}
                        >
                          <td>{index + 1}</td>
                          <td>{items?.reqId}</td>
                          <td>{items?.name}</td>
                          <td>{items?.project}</td>
                          <td>{items?.budject}</td>
                          <td>{items?.date}</td>
                          <td>
                            <div
                              style={{
                                background:
                                  items.status === "Pending"
                                    ? "#FBF1E7"
                                    : "#D8F4E8",
                                color:
                                  items.status === "Pending"
                                    ? "#FF8C1A"
                                    : "#027A48",
                                borderRadius: "100px",
                                padding: "5px 12px",
                                width: "fit-content",
                              }}
                            >
                              {items?.status}
                            </div>
                          </td>
                          <td>
                            <div style={{ position: "relative" }}>
                              <span
                                style={{ cursor: "pointer" }}
                                onClick={() => toggleDropdown(items.id)}
                              >
                                ...
                              </span>

                              {/* Dropdown Menu */}
                              {openDropdown === items.id && (
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
      {detailDrop ? (
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
                    
                    <div className="detail-2">
                      <h3>INV256 - 87-560</h3>
                      <img src="/images/sign-blue.png" alt="" />
                    </div>
                    <div className="detail-3">
                      <div className="detail-3-sub">
                        <h6>Due date</h6>
                        <p>24 January, 2024</p>
                      </div>
                      <div className="detail-3-sub">
                        <h6>Project</h6>
                        <p>Construction Development</p>
                      </div>
                      <div className="detail-3-sub">
                        <h6>Client</h6>
                        <p>Michael Solomon</p>
                      </div>
                      <div className="detail-3-sub">
                        <h6>Billed to</h6>
                        <p>John Smith</p>
                        <p>company@yahoo.com</p>
                      </div>
                      <div className="detail-3-sub">
                        <h6>Currency</h6>
                        <p>Naira (NGN)</p>
                      </div>
                      <div className="detail-3-sub">
                        <h6>Date</h6>
                        <p>20 January, 2024</p>
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
                                Part payment for project
                              </td>
                              <td className="table-bottom-line">1</td>
                              <td className="table-bottom-line">₦500,000</td>
                              <td className="table-bottom-line">₦500,000</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td className="table-color">Sub-total</td>
                              <td>₦500,000</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td className="table-color">Tax</td>
                              <td>₦80,000</td>
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
                              <td className="table-bottom-line">₦580,000</td>
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
      ): ""}
    </RequestRap>
  );
};

export default ClientInvoice;
