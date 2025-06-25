import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const UserDetailRap = styled.div`
padding-top: 50px;
padding-bottom: 50px;
.all-details {
    background: #FFFFFF;
    border: 1px solid #1018281A;
    border-radius: 8px;
}
  .upper-detail h4 {
    color: #101828;
    font-size: 18px;
    font-weight: 600;
  }
  .upper-detail {
    display: flex;
    align-items: center;
    gap: 15px;
    border-bottom: 1px solid #1018281a;
    padding: 20px;
  }
  .link {
    color: #667085;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
  }
  .link.active {
    color: #101828;
    border-bottom: 2px solid #101828;
    padding-bottom: 20px;
  }
  .link-contain {
    display: flex;
    gap: 20px;
    border-bottom: 1px solid #1018281a;
    padding: 20px;
    padding-bottom: 0px;
  }
  .profile-1-inner p {
    color: #101828;
    font-size: 14px;
    font-weight: 400;
  }
  .profile-1-inner h6 {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
  }
  .profile-1-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .profile-1-sub {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .profile-1 h3 {
    color: #101828;
    font-size: 14px;
    margin-bottom: 20px;

    font-weight: 500;
    text-align: center;
  }
  .profile-1-down button {
    height: 40px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
  }
  .btn-1 {
    border: 1px solid #0067D0;
    color: #0067D0;
    background: transparent;
    width: 134px;
  }
  .btn-2 {
    border: none;
    background: #0067D0;
    color: #ffffff;
    width: 133px;
  }
  .btn-3 {
    border: none;
    color: #ffffff;
    width: 282px;
    background: #27A549;

  }
  .profile-1-btns {
    display: flex;
    gap: 20px;
  }
  .profile-1-down {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
  }
  .profile-2 h3 {
    color: #101828;
    font-size: 14px;
    margin-bottom: 20px;

    font-weight: 500;
    text-align: center;
  }
  .profile-2 img {
    width: 177px;
    height: 187px;
  }
.profile-3-inner p {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    max-width: 291px;
}
.profile-3 h3 {
    color: #101828;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;
}
.profile-3-inner h6 {
    color: #101828;
    font-size: 14px;
    font-weight: 400;
    border: 1px solid #1018281F;
    padding-left: 15px;
    height: 40px;
    width: 291px;
    display: flex;
    align-items: center;
    border-radius: 10px;
}
.profile-3-inner {
    display: flex;
    flex-direction: column;
    gap: 7px;
}
.profile-3-sub {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.profile {
    display: flex;
    justify-content: space-between;
    padding: 20px;
}
  .profile-2 {
    border-left: 1px solid #1018281F;
    border-right: 1px solid #1018281F;
    padding: 0px 40px;
    margin:0px 40px;

  }
  .back-div {
    background: #1018280d;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  td {
    color: #667085 !important;

  }
`;

const AdminUserDetails = () => {
      const navigate = useNavigate();
        const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
    const [error, setError] = useState(null);
    
    const jobs = [
        {
          id: 1,
          reqId: "JOB-789500",
          name: "Micheal Soyombo",
          project: "Construction Dev.",
          budject: "₦500,000.00",
          date: "4 Weeks",
          status: "Pending",
        },
        {
          id: 2,
          reqId: "JOB-789500",
          name: "Micheal Soyombo",
          project: "Construction Dev.",
          budject: "₦500,000.00",
          date: "4 Weeks",
          status: "Pending",
        },
        {
          id: 3,
          reqId: "JOB-789500",
          name: "Micheal Soyombo",
          project: "Construction Dev.",
          budject: "₦500,000.00",
          date: "4 Weeks",
          status: "Completed",
        },
        {
          id: 4,
          reqId: "JOB-789500",
          name: "Micheal Soyombo",
          project: "Construction Dev.",
          budject: "₦500,000.00",
          date: "4 Weeks",
          status: "Completed",
        },
        {
          id: 5,
          reqId: "JOB-789500",
          name: "Micheal Soyombo",
          project: "Construction Dev.",
          budject: "₦500,000.00",
          date: "4 Weeks",
          status: "Completed",
        },
        {
          id: 6,
          reqId: "JOB-789500",
          name: "Micheal Soyombo",
          project: "Construction Dev.",
          budject: "₦500,000.00",
          date: "4 Weeks",
          status: "Completed",
        },
        {
          id: 7,
          reqId: "JOB-789500",
          name: "Micheal Soyombo",
          project: "Construction Dev.",
          budject: "₦500,000.00",
          date: "4 Weeks",
          status: "Pending",
        },
      ];
      const invoice = [
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
  const [activeLink, setActiveLink] = useState("profile");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const moveBack = () => {
    navigate("/admin/users");
  };

  useEffect(() => {
      const token = localStorage.getItem("adminToken");
    const fetchUser = async () => {
      try {
       const response = await fetch("https://blucolar-be.onrender.com/api/admin/recent-activity", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
        const data = await response.json();
        const found = data?.recentUsers?.find(u => u._id === id);

        if (found) {
          setUser(found);
        } else {
          setError("User not found.");
        }
      } catch (err) {
        setError("Failed to load user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <UserDetailRap>
      <div  className="containary">
        <div className="all-details">
          <div className="upper-detail">
             <div onClick={moveBack} className="back-div">
                          <Icon
                            className="icon"
                            width="16px"
                            height="16px"
                            icon="formkit:arrowleft"
                            style={{ color: "#101828" }}
                          />
                        </div>
            <h4>User Details</h4>
          </div>
          <div className="detail-body">
            <div className="link-contain">
              <Link
                className={`link ${activeLink === "profile" ? "active" : ""}`}
                onClick={() => handleLinkClick("profile")}
              >
                Profile
              </Link>
              <Link
                className={`link ${activeLink === "jobs" ? "active" : ""}`}
                onClick={() => handleLinkClick("jobs")}
              >
                Jobs
              </Link>
              <Link
                className={`link ${activeLink === "invoice" ? "active" : ""}`}
                onClick={() => handleLinkClick("invoice")}
              >
                Invoice
              </Link>
            </div>
            {activeLink==="profile" && (
                <>
                <div className="profile">
                    <div className="profile-1">
                        <h3>User Info</h3>
                        <div className="profile-1-sub">
                            <div className="profile-1-inner">
                                <h6>First Name</h6>
                                <p>{user.firstName} </p>
                            </div>
                            <div className="profile-1-inner">
                                <h6>Last Name</h6>
                                <p>{user.lastName}</p>
                            </div>
                            <div className="profile-1-inner">
                                <h6>Email</h6>
                                <p>{user.email}</p>
                            </div>
                           
                            <div className="profile-1-inner">
                                <h6>Account Type</h6>
                                <p>{user.type}</p>
                            </div>
                            <div className="profile-1-inner">
                                <h6>Status</h6>
                                <p></p>
                            </div>
                            <div className="profile-1-inner">
                                <h6>Sing up date</h6>
                                <p>14 February, 2025</p>
                            </div>
                            <div className="profile-1-inner">
                                <h6>Address</h6>
                                <p>1 Falomo, Ikoyi Lagos</p>
                            </div>
                        </div>
                        <div className="profile-1-down">
                            <div className="profile-1-btns">
                                <button className="btn-1">Suspend User</button>
                                <button className="btn-2">Block User</button>
                            </div>
                            <button className="btn-3">Approve User</button>
                        </div>
                    </div>
                    <div className="profile-2">
                        <h3>Profile Photo</h3>
                        <img src="/images/img-13.png" alt="" />
                    </div>
                    <div className="profile-3">
                        <h3>Registration Questionaire</h3>
                        <div className="profile-3-sub">
                            <div className="profile-3-inner">
                                <p>Select Profession</p>
                                <h6>Electrical</h6>
                            </div>
                            <div className="profile-3-inner">
                                <p>What is the standard voltage for residential 
                                    buildings in Nigeria?</p>
                                <h6>120V</h6>
                            </div>
                            <div className="profile-3-inner">
                                <p>Which color is used for the earth wire in standard
                                     installations?</p>
                                <h6>Yellow/Green</h6>
                            </div>
                            <div className="profile-3-inner">
                                <p>What device protects circuits from overload?</p>
                                <h6>Circuit breaker</h6>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            )}
            {activeLink==="jobs" && (
                <>
                 <div className="table-container">
            <div className="new-table-scroll">
              <div className="table-div-con">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>JOB ID</th>
                      <th>CLIENT</th>
                      <th> PROJECT</th>
                      <th> AMOUNT</th>
                      <th> TIMELINE</th>
                      <th>STATUS</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs?.length > 0 ? (
                      jobs.map((items, index) => (
                        <tr
                          key={items?.id}
                          style={{ cursor: "pointer" }}
                          
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
                              >
                                ...
                              </span>

                              
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
                </>
            )}

            {activeLink==="invoice" && (
                <>
                 <div className="table-container">
            <div className="new-table-scroll">
              <div className="table-div-con">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>INVOICE ID</th>
                      <th>CLIENT</th>
                      <th> PROJECT</th>
                      <th> AMOUNT</th>
                      <th> DATE</th>
                      <th>STATUS</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoice?.length > 0 ? (
                      invoice.map((items, index) => (
                        <tr
                          key={items?.id}
                          style={{ cursor: "pointer" }}
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
                              >
                                ...
                              </span>

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
                </>
            )}
          </div>
        </div>
      </div>
    </UserDetailRap>
  );
};

export default AdminUserDetails;
