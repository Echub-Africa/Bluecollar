import { Icon } from "@iconify/react/dist/iconify.js";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailRap = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
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
    padding-top: 20px;
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
    padding-top: 20px;
  }
  table {
    width: 100%;
  }
  th,
  td {
    /* border: none; */
  }
  .table-bottom-line {
    border-bottom: 1px solid #1018281a !important;
  }
  th {
    color: #667085;
    font-size: 12px;
    font-weight: 400;
    text-align: start;
    padding: 5px 10px;
  }
  td {
    color: #101828;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 0px;
  }
  thead {
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
    padding-left: 200px;
    padding-right: 200px;
    display: flex;
    flex-direction: column;
    gap: 25px;
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
  }
`;

const InvoiceDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleGoToInvoice = () => {
    navigate("/admin/invoice");
  };

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    const fetchInvoice = async () => {
      try {
        const res = await fetch(
          "https://blucolar-be.onrender.com/api/admin/invoices",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();
        const selected = data.find((inv) => inv._id === id); // `id` from useParams()

        if (!selected) throw new Error("Invoice not found");
        setInvoice(selected);
      } catch (err) {
        console.error("Error fetching invoice:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchInvoice();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!invoice) return <p>Invoice not found.</p>;

  const {
    status,
    invoiceId,
    createdAt,
    dueDate,
    description,
    quantity,
    unitPrice,
    client,
    project,
    clientEmail,
  } = invoice;
const t = 1000;

  const total = unitPrice * quantity;
  const tax = t ;
  const grandTotal = total + tax;

  return (
    <DetailRap>
      <div className="containary">
        <div className="all-invoice">
          <div className="upper-invoice">
            <Icon
              onClick={handleGoToInvoice}
              className="icon"
              width="18px"
              height="18px"
              icon="solar:arrow-left-outline"
              style={{ color: "#667085" }}
            />
            <h4>Invoice Details</h4>
          </div>
          <div className="invoice-body">
            <div className="detail-1">
              <p>Status:</p>
              <span>{status || "N/A"}</span>
            </div>
            <div className="detail-2">
              <h3>{invoiceId || "N/A"}</h3>
              <img src="/images/sign-blue.png" alt="" />
            </div>
            <div className="detail-3">
              <div className="detail-3-sub">
                <h6>Due date</h6>
                <p>
                  {new Date(dueDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className="detail-3-sub">
                <h6>Project</h6>
                <p>{project.projectType || "N/A"}</p>
              </div>
              <div className="detail-3-sub">
                <h6>Client</h6>
                <p>{client?.firstName + " " + client?.lastName || "N/A"}</p>
              </div>
              <div className="detail-3-sub">
                <h6>Billed to</h6>
                <p>{client?.firstName + " " + client?.lastName || "N/A"}</p>
                <p>{client.email || "N/A"}</p>
              </div>
              <div className="detail-3-sub">
                <h6>Currency</h6>
                <p>Naira (NGN)</p>
              </div>
              <div className="detail-3-sub">
                <h6>Date Created</h6>
                <p>
                  {new Date(createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
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
                        {description || "N/A"}
                      </td>
                      <td className="table-bottom-line">{quantity || "N/A"}</td>
                      <td className="table-bottom-line">{unitPrice || "N/A"}</td>
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
                      <td className="table-bottom-line"> ₦{grandTotal || "N/A"}</td>
                    </tr>
                  </tbody>
                </table>
              </table>
            </div>
            <div className="detail-4">
              
              <button className="btn-2">Cancel Invoice</button>
              <button className="btn-3">Confirm Invoice</button>
            </div>
          </div>
        </div>
      </div>
    </DetailRap>
  );
};

export default InvoiceDetails;
