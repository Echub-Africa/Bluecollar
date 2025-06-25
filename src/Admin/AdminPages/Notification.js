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
  .body-with {
    max-width: 460px;
    line-height: 19px;
  }
`;

const AdminNotification = () => {
  const request = [
    {
      id: 1,
      title: "Welcome to blucollar",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in culpa qui officia deserunt mollit anim id est laborum...",
      date: "24 Jan, 2024 - 5:30PM",
    },
    {
      id: 2,
      title: "Welcome to blucollar",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in culpa qui officia deserunt mollit anim id est laborum...",
      date: "24 Jan, 2024 - 5:30PM",
    },
    {
      id: 3,
      title: "Welcome to blucollar",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in culpa qui officia deserunt mollit anim id est laborum...",
      date: "24 Jan, 2024 - 5:30PM",
    },
    {
      id: 4,
      title: "Welcome to blucollar",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in culpa qui officia deserunt mollit anim id est laborum...",
      date: "24 Jan, 2024 - 5:30PM",
    },
    {
      id: 5,
      title: "Welcome to blucollar",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in culpa qui officia deserunt mollit anim id est laborum...",
      date: "24 Jan, 2024 - 5:30PM",
    },
    {
      id: 6,
      title: "Welcome to blucollar",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in culpa qui officia deserunt mollit anim id est laborum...",
      date: "24 Jan, 2024 - 5:30PM",
    },
    {
      id: 7,
      title: "Welcome to blucollar",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in culpa qui officia deserunt mollit anim id est laborum...",
      date: "24 Jan, 2024 - 5:30PM",
    },
  ];
  const navigate = useNavigate();

  const [dropdown, setDropdown] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle dropdown
  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };
  const handleGoToDetail = (id) => {
    navigate(`/admin/invoice/details/${id}`);
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <RequestRap>
      <div className="containary">
        <div className="request">
          <div className="request-1">
            <h2>Notification</h2>
            <button onClick={handleDropdown}>Create email</button>
          </div>
          {/* <div className="request-2">
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
          </div> */}
          <div className="table-container">
            <div className="new-table-scroll">
              <div className="table-div-con">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>TITLE</th>
                      <th>BODY COPY</th>
                      <th> LAST UPDATE</th>
                      
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
                          <td>{items?.title}</td>
                          <td >
                            <p className="body-with">{items?.body}</p></td>
                          <td>{items?.date}</td>
                       
                         
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
              <h4>Create email</h4>
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
                Title
                <input type="text" placeholder="Enter title" />
              </label>
              <label>
                Description
                <input type="text" placeholder="" />
              </label>
              <label>
                Footer
                <input type="text" placeholder="Enter footer" />
              </label>
             
             
              <button>Create email</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </RequestRap>
  );
};

export default AdminNotification;
