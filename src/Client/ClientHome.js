import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const UploadWrapper = styled.div`
  border: 1px solid #1018281a;
  border-radius: 10px;
  background: #f7f7f7;
  height: 108px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f1f5f9;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const Text = styled.p`
  color: #0067d0;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  gap: 5px;
  margin-top: 10px;
`;

const SubText = styled.p`
  color: #667085;
  font-size: 14px;
  font-weight: 400;
`;

// const FileName = styled.p`
//   margin-top: 12px;
//   color: #10b981;
//   font-weight: 600;
//   font-size: 14px;
// `;

// const UploadIcon = styled.div`
//   svg {
//     height: 48px;
//     width: 48px;
//     color: #9ca3af;
//   }
// `;

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
  .new-dash-2-card img {
    width: 50px;
    height: 50px;
  }
  .new-dash-2-card h4 {
    color: #101828;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    max-width: 129px;
  }
  @media screen and (max-width: 767px) {
    .new-dash-2-card h4 {
      font-size: 17px;
    }
  }
  .new-dash-2-card p {
    color: #667085;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    max-width: 184px;
  }
  @media screen and (max-width: 767px) {
    .new-dash-2-card p {
      font-size: 15px;
    }
  }
  .new-dash-2-card button {
    background: transparent;
    width: 90px;
    height: 34px;
    border-radius: 8px;
    border: 1px solid #1018281a;
    color: #101828;
    font-size: 12px;
    font-weight: 500;
  }
  @media screen and (max-width: 767px) {
    .new-dash-2-card button {
      font-size: 15px;
      padding: 10px 10px;
      width: max-content;
    }
  }
  .new-dash-2-card {
    border: 1px solid #1018281a;
    background: #ffffff;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    cursor: pointer;
    flex-direction: column;
    gap: 20px;
  }
  @media screen and (max-width: 767px) {
    .new-dash-2-card {
      width: 100%;
    }
  }
  .new-dash-3-left h3 {
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
    max-width: 237px;
    line-height: 23px;
  }
  .new-dash-3-left p {
    color: #ffffffbf;
    font-size: 13px;
    font-weight: 400;
  }

  .new-dash-3-left {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .new-dash-3-right {
    position: relative;
    width: 250px;
    height: 188px;
  }
  .the-image-1 {
    width: 100%;
    height: 100%;
    padding-top: 60px;
  }
  .image-preview-container {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 10px;
    width: 240px;
  }

  .image-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image-preview {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 6px;
    border: 1px solid #ccc;
    cursor: pointer;
  }

  .image-preview-container button {
    background-color: #ff4d4f;
    color: white;
    border: none;
    padding: 4px 8px;
    margin-top: 5px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    width: 70px;
    height: 30px;
  }

  .the-image-2 {
    height: 161px;
    width: 127px;
    position: absolute;
    right: 25%;
    bottom: 0px;
  }
  .new-dash-3 {
    background: #101828;
    border: 1px solid #1018281a;
    padding-left: 27px;
    padding-right: 27px;
    display: flex;
    border-radius: 8px;
    align-items: center;
    justify-content: space-between;
  }
  .new-dash-2 {
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }
  @media screen and (max-width: 767px) {
    .new-dash-2 {
      flex-direction: column;
      gap: 10px;
      align-items: center;
    }
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
    width: 115px;
    height: 28px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 5px;
  }
  .verify p {
    color: #27a549;
    font-size: 12px;
    font-weight: 500;
  }
  .dash-3 {
    background: #ffffff;
    width: 280px;
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
    width: 280px;
    height: 100%;
    border-radius: 8px;
    background: #ffffff;
  }
  .dash-left {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .dash-right {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 20%;
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
  .dropdown-show {
    background: #ffffff;
    border-top: 1px solid #1018281a;
    border-radius: 6px;
    max-height: 550px;
    overflow-y: auto;
  }
  .dropdown-show-header h4 {
    color: #101828;
    font-size: 16px;
    font-weight: 600;
  }
  .dropdown-show-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #1018281a;
    background: #f7f7f7;
  }
  .timeline-show-dropdown p {
    color: #101828;
    font-size: 14px;
    font-weight: 400;
  }
  .timeline-show-dropdown {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 8px;
    background: #ffffff;
    position: absolute;
    width: 358px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5); /* ← this adds the shadow */
  }

  .timeline-div p {
    color: #66708580;
    font-size: 14px;
    font-weight: 400;
  }
  .timeline-div {
    border: 1px solid #1018281a;
    border-radius: 10px;
    width: 358px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 15px;
  }
  .dropdown-show-body label {
    color: #667085;
    font-size: 15px;
    font-weight: 400;
  }
  .dropdown-show-body select,
  .dropdown-show-body input,
  .dropdown-show-body textarea {
    border: 1px solid #1018281a;
    width: 358px;
    height: 48px;
    border-radius: 10px;
    padding-left: 10px;
  }
  .dropdown-show-body textarea {
    height: 84px;
  }
  .dropdown-show-body .winch {
    background: #0067d0 !important;
    width: 358px;
    height: 48px;
    border-radius: 10px;
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    border: none;
  }
  .dropdown-show-body {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
  }
  .select-blur {
    color: #66708580 !important;
    font-size: 14px;
    font-weight: 400;
  }
  .category-div-sub {
    display: flex;
    flex-direction: column;
    gap: 10px;
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
  .success-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }

  .success-modal-content {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    width: 90%;
    max-width: 400px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .success-modal-content h3 {
    margin-top: 1rem;
    color: #10b981;
  }

  .success-modal-content p {
    margin: 0.5rem 0 1.5rem;
    color: #4b5563;
  }

  .close-btn {
    background-color: #0067d0;
    color: white;
    padding: 0.5rem 1.25rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
    /* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(16, 24, 40, 0.5); /* Dark translucent background */
  backdrop-filter: blur(3px); /* Optional: blurred background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* Modal Content */
.modal-content {
  background-color: #fff;
  padding: 30px 25px;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.3s ease-in-out;
}

.modal-content h3 {
  margin-bottom: 10px;
  font-size: 20px;
  color: #101828;
}

.modal-content p {
  margin-bottom: 20px;
  color: #667085;
  font-size: 14px;
}

.modal-content button {
  padding: 10px 20px;
  background-color: #0067d0;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.modal-content button:hover {
  background-color: #004ea3;
}

/* Optional: Fade In Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

`;

const ClientHome = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
   const [loading, setLoading] = useState(true);
   const location = useLocation();
  const [timelineShow, setTimelineShow] = useState(false);

  const fileInputRef = useRef(null);
  const secondFileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    projectType: "",
    address: "",
    description: "",
    start: "",
    end: "",
    budget: "",
    images: [], // ✅ array of File objects
  });

  const [fileName, setFileName] = useState("");
  const [fileNameSecond, setFileNameSecond] = useState("");
  const [quickShow, setQuickShow] = useState(false);
  const [projectShow, setProjectShow] = useState(false);
  const [consultationShow, setConsultationShow] = useState(false);
  const [notifyPop, setNotifyPop] = useState(false);
  const [optionDrop, setOptionDrop] = useState(false);

   const modalRef = useRef(null);
  const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
    const isOutsideModal = modalRef.current && !modalRef.current.contains(event.target);
    const isOutsideDropdown = dropdownRef.current && !dropdownRef.current.contains(event.target);
    if (isOutsideModal && isOutsideDropdown) {
      setQuickShow(false);
      setProjectShow(false);
      setConsultationShow(false);
    }
  };

    useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [selectedTimelineSecond, setSelectedTimelineSecond] =
    useState("Select timeline");
  const [selectedTimelineThird, setSelectedTimelineThird] =
    useState("Select timeline");
    
    useEffect(() => {
  const query = new URLSearchParams(location.search);
  const tokenFromUrl = query.get("token");

  if (tokenFromUrl) {
    localStorage.setItem("home-ownerToken", tokenFromUrl);
    // Clean the URL so the token isn't visible anymore
    window.history.replaceState({}, document.title, "/client");
  }
}, [location]);



  useEffect(() => {
    const token = localStorage.getItem("home-ownerToken");

    if (!token) {
      navigate("/clientAuth/login");
    } else {
      setLoading(false); // token exists
    }
  }, [navigate]);

  // if (loading) {
  //   return <p>Loading dashboard...</p>;
  // }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("home-ownerToken");
    if (!token) {
      alert("User  not authenticated. Please log in.");
      return;
    }

    const form = new FormData();
    form.append("projectType", formData.projectType);
    form.append("description", formData.description);
    form.append("address", formData.address);
    form.append("start", formData.start);
    form.append("end", formData.end);
    form.append("budget", formData.budget);

    formData.images.forEach((file, index) => {
      form.append("images", file); // Not images[index]
    });

    try {
      const response = await fetch(
        "https://blucolar-be.onrender.com/api/client/project/create",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: form,
        }
      );

      const result = await response.json();

      if (response.ok) {
        console.log("✅ Success:", result);

        // Reset form
        setFormData({
          projectType: "",
          description: "",
          address: "",
          start: "",
          end: "",
          budget: "",
          images: [],
        });

        // Close dropdown and show success modal
        setQuickShow(false);
        setShowSuccessModal(true);
        setErrorMessage(""); // Clear previous error
      } else {
        setErrorMessage(
          "Submission failed: " + (result.message || "Unknown error.")
        );
        console.error("❌ Error:", result.message);
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again.");
      console.error("❌ Network error:", error);
    }
  };
  const handleQuickShow = () => {
    setQuickShow(true); // Open modal
  };
  const handleProjectShow = () => {
    setProjectShow(true); // Open modal
  };
  const handleConsultationShow = () => {
    setConsultationShow(true); // Open modal
  };

  const handleTimelineShow = () => setTimelineShow((prev) => !prev);

  const handleTimelineSelect = (value) => {
    setFormData((prev) => ({ ...prev, jobTimeline: value }));
    setTimelineShow(false);
  };

  const handleTimelineSelectSecond = (value) => {
    setSelectedTimelineSecond(value);
    setTimelineShow(false);
  };

  const handleTimelineSelectThird = (value) => {
    setSelectedTimelineSecond(value);
    setTimelineShow(false);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setFormData((prev) => ({ ...prev, file }));
    }
  };

  const handleFileChangeSecond = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));

    setPreviewUrls((prev) => [...prev, ...urls]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files).filter((file) =>
      file.type.startsWith("image/")
    );
    const urls = files.map((file) => URL.createObjectURL(file));

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
    setPreviewUrls((prev) => [...prev, ...urls]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const triggerFileInput = () => fileInputRef.current.click();
  const triggerFileInputSecond = () => secondFileInputRef.current.click();

  const firstName = localStorage.getItem("home-ownerFirstName");
  const lastName = localStorage.getItem("home-ownerLastName");
  const Email = localStorage.getItem("home-ownerEmail");

  const [startDropdown, setstartDropdown] = useState(false);
  const [finishTimeDropdown, setFinishTimeDropdown] = useState(false);

  const handlestartSelect = (value) => {
    setFormData((prev) => ({ ...prev, start: value }));
    setstartDropdown(false);
  };

  const handleFinishTimeSelect = (value) => {
    setFormData((prev) => ({ ...prev, finishTime: value }));
    setFinishTimeDropdown(false);
  };

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [previewUrls, setPreviewUrls] = useState([]);
  const handleRemoveImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const [data, setData] = useState([]);
  const url = "https://blucolar-be.onrender.com/api/client/client-dashboard";
  // Replace with your actual token
  useEffect(() => {
 const token = localStorage.getItem("home-ownerToken");

  const yourToken = token;

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

    const [user, setUser] = useState(null);

useEffect(() => {
  const fetchUser = async () => {
    const token = localStorage.getItem("home-ownerToken");
    if (!token) return;

    try {
      const response = await fetch("https://blucolar-be.onrender.com/api/users/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setUser(data.user); // Save the user object (e.g., with lastName)
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  fetchUser();
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
                Hi {user ? `${user.firstName}` : "Guest"}, <br /> Welcome back.
              </h3>
            </div>
            <div className="dash-1-sub-2">
              <div className="inner-dash-1">
                <p>Total Expenses</p>
                <h4>₦0.00</h4>
              </div>
              <div className="inner-dash-1">
                <p>Jobs in progress</p>
                <h4>{data.openJobs || 0}</h4>
              </div>
              <div className="inner-dash-1 no-border">
                <p>Completed Jobs</p>
                <h4>{data.completedJobs || 0}</h4>
              </div>
            </div>
          </div>
          <div className="new-dash-2">
            <div onClick={handleQuickShow} className="new-dash-2-card">
              <img src="/images/dash-10.png" alt="" />
              <h4>Quick Fixes & Maintenance</h4>
              <p>
                Electrical, plumbing, carpentry, painting, general handyman.
              </p>
              <button>Requst</button>
            </div>
            <div onClick={handleProjectShow} className="new-dash-2-card">
              <img src="/images/dash-10.png" alt="" />
              <h4>Projects</h4>
              <p>
                Corporates, developers, construction firms, and planning major
                projects.
              </p>
              <button>Request</button>
            </div>
            <div onClick={handleConsultationShow} className="new-dash-2-card">
              <img src="/images/dash-10.png" alt="" />
              <h4>Consultation & Advisory Services</h4>
              <p>
                Electrical, plumbing, carpentry, painting, general handyman.
              </p>
              <button>Request</button>
            </div>
          </div>
          <div className="new-dash-3">
            <div className="new-dash-3-left">
              <h3>Hire a professional for all your home needs.</h3>
              <p>Find well-vetted and skilled workers</p>
            </div>
            <div className="new-dash-3-right">
              <img className="the-image-1" src="/images/blue-bg.png" alt="" />
              <img className="the-image-2" src="/images/image-15.png" alt="" />
            </div>
          </div>
        </div>
        <div className="dash-right">
          <div className="dash-3">
            <img src="/images/img-10.png" alt="" />
            <div className="info">
              <h4>
                {user ? `${user.firstName} ${user.lastName}` : "Guest"}
              </h4>
              <p>{user ? `${user.email}` : "Guest"}</p>
            </div>
            <div className="verify">
              <img src="/images/icon-18.png" alt="" />

              <p>Email Verified</p>
            </div>
          </div>
          <div className="dash-4">
            <div className="dash-4-header">
              <h4>Profile</h4>
            </div>
            <div className="dash-4-body">
              <div className="dash-4-inner">
                <h6>Availability Badge:</h6>
                <p>{user ? `${user.status}` : "Guest"}</p>
              </div>
              <div className="dash-4-inner">
                <h6>Email Address:</h6>
                <p>{user ? `${user.email}` : "Guest"}</p>
              </div>
                 <div className="dash-4-inner">
                <h6>Role</h6>
                <p>{user ? `${user.role}` : "Guest"}</p>
              </div>
                 <div className="dash-4-inner">
                <h6>Type</h6>
                <p>{user ? `${user.type}` : "Guest"}</p>
              </div>
              {/* <div className="dash-4-inner">
                        <h6>Phone Number:</h6>
                        <p>08066091125</p>
                    </div>
                    <div className="dash-4-inner">
                        <h6>Industry:</h6>
                        <p>Electrical</p>
                    </div> */}
            </div>
          </div>
        </div>
      </div>
{quickShow ? (
  <div ref={modalRef} className="dropdown-container">
    <div className="dropdown-show">
      <div className="dropdown-show-header">
        <h4>Quick Fixes & Maintenance</h4>
        <Icon
         onClick={() => setQuickShow(false)}
          className="icon"
          width="18px"
          height="18px"
          icon="humbleicons:times"
          style={{ color: "#667085" }}
        />
      </div>
       <form onSubmit={handleSubmit}>
                   <div className="dropdown-show-body">
                     <div className="category-div-sub">
                       <label>Service Type <span className="wo">*</span></label>
                       <select
                         name="projectType"
                         value={formData.projectType}
                         onChange={handleInputChange}
                         required
                       >
                         <option value="">Select</option>
                         <option value="Electrical">Electrical</option>
                         <option value="Carpentry">Carpentry</option>
                         <option value="Painting">Painting</option>
                         <option value="Flooring">Flooring</option>
      <option value="Woodwork & Carpentry">Woodwork & Carpentry</option>
      <option value="Plumbing">Plumbing</option>
                          <option value="Masonry & Construction">Masonry & Construction</option>
                           <option value="Smart Homes">Smart Homes</option>
                            <option value="HVAC & Cooling Systems">HVAC & Cooling Systems</option>
                             <option value="Painting">Painting</option>
                              <option value="Roofing">Roofing</option>
                              <option value="Metalwork & Welding">Metalwork & Welding</option>
                              <option value="General Maintenance">General Maintenance</option>
     
                       </select>
                     </div>
     
                     <div className="category-div-sub">
                       <label>
                         Location <span>Saved address <span className="wo">*</span></span>
                       </label>
                       <input
                         type="text"
                         name="address"
                         placeholder="Enter address"
                         value={formData.address}
                         onChange={handleInputChange}
                       required />
                     </div>
     
                     <div className="category-div-sub">
                       <label>Additional details (Please a detailed description on the work you want done min 2 paragraphs) <span className="wo">*</span></label>
                       <textarea
                         name="description"
                         placeholder="Enter additional details"
                         value={formData.description}
                         onChange={handleInputChange}
                       required ></textarea>
                     </div>
     
                     <div className="category-div-sub">
                       <label>images upload (min 3 images) <span className="wo">*</span></label>
                       <UploadWrapper
                         onDrop={handleDrop}
                         onDragOver={handleDragOver}
                         onClick={triggerFileInput}
                         required
                       >
                         <HiddenInput
                           type="file"
                           ref={fileInputRef}
                           onChange={handleFileChangeSecond}
                           accept="image/*"
                           multiple
                         />
                         <img src="/images/file-icon.png" alt="" />
                         <Text>
                           Click to upload <SubText>or drag and drop</SubText>
                         </Text>
                       </UploadWrapper>
     
                       {previewUrls.map((url, index) => (
                         <div key={index} className="image-preview-container">
                           <img
                             src={url}
                             alt={`Preview ${index}`}
                             className="image-preview"
                           />
                           <button onClick={() => handleRemoveImage(index)}>
                             Remove
                           </button>
                         </div>
                       ))}
                     </div>
     
                     <div className="category-div-sub">
                       <label>Start Date (when you want the work to begin) <span className="wo">*</span></label>
                       <div style={{ position: "relative" }}>
                         <input
                           type="date"
                           value={formData.start}
                           onChange={(e) =>
                             setFormData((prev) => ({
                               ...prev,
                               start: e.target.value,
                             }))
                           }
                           className="timeline-date-input"
                         required />
                       </div>
                     </div>
     
                     <div className="category-div-sub">
                       <label>Finish Date (when you want the work to be concluded) <span className="wo">*</span></label>
                       <div style={{ position: "relative" }}>
                         <input
                           type="date"
                           value={formData.end || ""}
                           onChange={(e) =>
                             setFormData((prev) => ({
                               ...prev,
                               end: e.target.value,
                             }))
                           }
                           className="timeline-date-input"
                          required />
                       </div>
                     </div>
     
                     <div className="category-div-sub">
                       <label>Budget <span className="wo">*</span></label>
                       <input
                         type="text"
                         name="budget"
                         placeholder="please input plain amount without comma eg 100000"
                         value={formData.budget}
                         onChange={handleInputChange}
                       required />
                     </div>
                     {errorMessage && (
                       <div style={{ color: "red", marginBottom: "1rem" }}>
                         {errorMessage}
                       </div>
                     )}
                     {showSuccessModal && (
                       <div className="success-modal">
                         <div className="success-modal-content">
                           <Icon
                             icon="mdi:check-circle-outline"
                             width="32"
                             height="32"
                             style={{ color: "#10B981" }}
                           />
                           <h3>Project Created Successfully!</h3>
                           <p>
                             Your project has been submitted. Await Admin
                             verification once approved the work would comence.
                           </p>
                           <button
                             className="close-btn"
                             onClick={() => setShowSuccessModal(false)}
                           >
                             Close
                           </button>
                         </div>
                       </div>
                     )}
     
                     <button className="winch" type="submit">
                       Create request
                     </button>
                   </div>
                 </form>
    </div>
  </div>
) : (
  ""
)}


      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Request Created Successfully!</h3>
            <p>Your maintenance request has been submitted.</p>
            <button onClick={() => setShowSuccessModal(false)}>Close</button>
          </div>
        </div>
      )}

      {projectShow ? (
        <div ref={modalRef} className="dropdown-container">
          <div className="dropdown-show">
            <div className="dropdown-show-header">
              <h4>Projects</h4>
              <Icon
                onClick={() => setProjectShow(false)}
                className="icon"
                width="18px"
                height="18px"
                icon="humbleicons:times"
                style={{ color: "#667085" }}
              />
            </div>
            <form onSubmit={handleSubmit}>
                        <div className="dropdown-show-body">
                          <div className="category-div-sub">
                            <label>Service Type <span className="wo">*</span></label>
                            <select
                              name="projectType"
                              value={formData.projectType}
                              onChange={handleInputChange}
                              required
                            >
                              <option value="">Select</option>
                              <option value="Electrical">Electrical</option>
                              <option value="Carpentry">Carpentry</option>
                              <option value="Painting">Painting</option>
                              <option value="Flooring">Flooring</option>
           <option value="Woodwork & Carpentry">Woodwork & Carpentry</option>
           <option value="Plumbing">Plumbing</option>
                               <option value="Masonry & Construction">Masonry & Construction</option>
                                <option value="Smart Homes">Smart Homes</option>
                                 <option value="HVAC & Cooling Systems">HVAC & Cooling Systems</option>
                                  <option value="Painting">Painting</option>
                                   <option value="Roofing">Roofing</option>
                                   <option value="Metalwork & Welding">Metalwork & Welding</option>
                                   <option value="General Maintenance">General Maintenance</option>
          
                            </select>
                          </div>
          
                          <div className="category-div-sub">
                            <label>
                              Location <span>Saved address <span className="wo">*</span></span>
                            </label>
                            <input
                              type="text"
                              name="address"
                              placeholder="Enter address"
                              value={formData.address}
                              onChange={handleInputChange}
                            required />
                          </div>
          
                          <div className="category-div-sub">
                            <label>Additional details (Please a detailed description on the work you want done min 2 paragraphs) <span className="wo">*</span></label>
                            <textarea
                              name="description"
                              placeholder="Enter additional details"
                              value={formData.description}
                              onChange={handleInputChange}
                            required ></textarea>
                          </div>
          
                          <div className="category-div-sub">
                            <label>images upload (min 3 images) <span className="wo">*</span></label>
                            <UploadWrapper
                              onDrop={handleDrop}
                              onDragOver={handleDragOver}
                              onClick={triggerFileInput}
                              required
                            >
                              <HiddenInput
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChangeSecond}
                                accept="image/*"
                                multiple
                              />
                              <img src="/images/file-icon.png" alt="" />
                              <Text>
                                Click to upload <SubText>or drag and drop</SubText>
                              </Text>
                            </UploadWrapper>
          
                            {previewUrls.map((url, index) => (
                              <div key={index} className="image-preview-container">
                                <img
                                  src={url}
                                  alt={`Preview ${index}`}
                                  className="image-preview"
                                />
                                <button onClick={() => handleRemoveImage(index)}>
                                  Remove
                                </button>
                              </div>
                            ))}
                          </div>
          
                          <div className="category-div-sub">
                            <label>Start Date (when you want the work to begin) <span className="wo">*</span></label>
                            <div style={{ position: "relative" }}>
                              <input
                                type="date"
                                value={formData.start}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    start: e.target.value,
                                  }))
                                }
                                className="timeline-date-input"
                              required />
                            </div>
                          </div>
          
                          <div className="category-div-sub">
                            <label>Finish Date (when you want the work to be concluded) <span className="wo">*</span></label>
                            <div style={{ position: "relative" }}>
                              <input
                                type="date"
                                value={formData.end || ""}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    end: e.target.value,
                                  }))
                                }
                                className="timeline-date-input"
                               required />
                            </div>
                          </div>
          
                          <div className="category-div-sub">
                            <label>Budget <span className="wo">*</span></label>
                            <input
                              type="text"
                              name="budget"
                              placeholder="please input plain amount without comma eg 100000"
                              value={formData.budget}
                              onChange={handleInputChange}
                            required />
                          </div>
                          {errorMessage && (
                            <div style={{ color: "red", marginBottom: "1rem" }}>
                              {errorMessage}
                            </div>
                          )}
                          {showSuccessModal && (
                            <div className="success-modal">
                              <div className="success-modal-content">
                                <Icon
                                  icon="mdi:check-circle-outline"
                                  width="32"
                                  height="32"
                                  style={{ color: "#10B981" }}
                                />
                                <h3>Project Created Successfully!</h3>
                                <p>
                                  Your project has been submitted. Await Admin
                                  verification once approved the work would comence.
                                </p>
                                <button
                                  className="close-btn"
                                  onClick={() => setShowSuccessModal(false)}
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          )}
          
                          <button className="winch" type="submit">
                            Create request
                          </button>
                        </div>
                      </form>
          </div>
        </div>
      ) : (
        ""
      )}

      {consultationShow ? (
         <div ref={modalRef} className="dropdown-container">
          <div className="dropdown-show">
            <div className="dropdown-show-header">
              <h4>Consultation & Advisory Services</h4>
              <Icon
                onClick={() => setConsultationShow(false)}
                className="icon"
                width="18px"
                height="18px"
                icon="humbleicons:times"
                style={{ color: "#667085" }}
              />
            </div>
            <form onSubmit={handleSubmit}>
                        <div className="dropdown-show-body">
                          <div className="category-div-sub">
                            <label>Service Type <span className="wo">*</span></label>
                            <select
                              name="projectType"
                              value={formData.projectType}
                              onChange={handleInputChange}
                              required
                            >
                              <option value="">Select</option>
                              <option value="Electrical">Electrical</option>
                              <option value="Carpentry">Carpentry</option>
                              <option value="Painting">Painting</option>
                              <option value="Flooring">Flooring</option>
           <option value="Woodwork & Carpentry">Woodwork & Carpentry</option>
           <option value="Plumbing">Plumbing</option>
                               <option value="Masonry & Construction">Masonry & Construction</option>
                                <option value="Smart Homes">Smart Homes</option>
                                 <option value="HVAC & Cooling Systems">HVAC & Cooling Systems</option>
                                  <option value="Painting">Painting</option>
                                   <option value="Roofing">Roofing</option>
                                   <option value="Metalwork & Welding">Metalwork & Welding</option>
                                   <option value="General Maintenance">General Maintenance</option>
          
                            </select>
                          </div>
          
                          <div className="category-div-sub">
                            <label>
                              Location <span>Saved address <span className="wo">*</span></span>
                            </label>
                            <input
                              type="text"
                              name="address"
                              placeholder="Enter address"
                              value={formData.address}
                              onChange={handleInputChange}
                            required />
                          </div>
          
                          <div className="category-div-sub">
                            <label>Additional details (Please a detailed description on the work you want done min 2 paragraphs) <span className="wo">*</span></label>
                            <textarea
                              name="description"
                              placeholder="Enter additional details"
                              value={formData.description}
                              onChange={handleInputChange}
                            required ></textarea>
                          </div>
          
                          <div className="category-div-sub">
                            <label>images upload (min 3 images) <span className="wo">*</span></label>
                            <UploadWrapper
                              onDrop={handleDrop}
                              onDragOver={handleDragOver}
                              onClick={triggerFileInput}
                              required
                            >
                              <HiddenInput
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChangeSecond}
                                accept="image/*"
                                multiple
                              />
                              <img src="/images/file-icon.png" alt="" />
                              <Text>
                                Click to upload <SubText>or drag and drop</SubText>
                              </Text>
                            </UploadWrapper>
          
                            {previewUrls.map((url, index) => (
                              <div key={index} className="image-preview-container">
                                <img
                                  src={url}
                                  alt={`Preview ${index}`}
                                  className="image-preview"
                                />
                                <button onClick={() => handleRemoveImage(index)}>
                                  Remove
                                </button>
                              </div>
                            ))}
                          </div>
          
                          <div className="category-div-sub">
                            <label>Start Date (when you want the work to begin) <span className="wo">*</span></label>
                            <div style={{ position: "relative" }}>
                              <input
                                type="date"
                                value={formData.start}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    start: e.target.value,
                                  }))
                                }
                                className="timeline-date-input"
                              required />
                            </div>
                          </div>
          
                          <div className="category-div-sub">
                            <label>Finish Date (when you want the work to be concluded) <span className="wo">*</span></label>
                            <div style={{ position: "relative" }}>
                              <input
                                type="date"
                                value={formData.end || ""}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    end: e.target.value,
                                  }))
                                }
                                className="timeline-date-input"
                               required />
                            </div>
                          </div>
          
                          <div className="category-div-sub">
                            <label>Budget <span className="wo">*</span></label>
                            <input
                              type="text"
                              name="budget"
                              placeholder="please input plain amount without comma eg 100000"
                              value={formData.budget}
                              onChange={handleInputChange}
                            required />
                          </div>
                          {errorMessage && (
                            <div style={{ color: "red", marginBottom: "1rem" }}>
                              {errorMessage}
                            </div>
                          )}
                          {showSuccessModal && (
                            <div className="success-modal">
                              <div className="success-modal-content">
                                <Icon
                                  icon="mdi:check-circle-outline"
                                  width="32"
                                  height="32"
                                  style={{ color: "#10B981" }}
                                />
                                <h3>Project Created Successfully!</h3>
                                <p>
                                  Your project has been submitted. Await Admin
                                  verification once approved the work would comence.
                                </p>
                                <button
                                  className="close-btn"
                                  onClick={() => setShowSuccessModal(false)}
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          )}
          
                          <button className="winch" type="submit">
                            Create request
                          </button>
                        </div>
                      </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </HomeRap>
  );
};

export default ClientHome;
