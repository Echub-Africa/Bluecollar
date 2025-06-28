import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";

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

const FileName = styled.p`
  margin-top: 12px;
  color: #10b981;
  font-weight: 600;
  font-size: 14px;
`;

const UploadIcon = styled.div`
  svg {
    height: 48px;
    width: 48px;
    color: #9ca3af;
  }
`;

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
    .new-dash-2-card h4{
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
    .new-dash-2-card p{
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
    cursor: pointer;
    font-weight: 500;
  }
     .new-dash-2-card button:hover {
     background:rgb(157, 204, 251);
     color: black;
  }
  @media screen and (max-width: 767px) {
    .new-dash-2-card button{
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
    width: 94px;
    height: 28px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
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
  .dropdown-show-body button {
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
`;


const ClientHome = () => {
   const navigate = useNavigate(); 
  const [fileName, setFileName] = useState("");
  const [fileNameSecond, setFileNameSecond] = useState("");
  const fileInputRef = useRef();
  const [showAll, setShowAll] = useState(false);
  const [quickShow, setQuickShow] = useState(false);
  const [projectShow, setProjectShow] = useState(false);
  const [consultationShow, setConsultationShow] = useState(false);
  const [timelineShow, setTimelineShow] = useState(false);
  const [selectedTimeline, setSelectedTimeline] = useState("Select timeline");
  const [selectedTimelineSecond, setSelectedTimelineSecond] = useState("Select timeline");
  const [selectedTimelineThird, setSelectedTimelineThird] = useState("Select timeline");
  
         useEffect(() => {
      const token = localStorage.getItem("companyToken");
      if (!token) {
        navigate("/companyAuth/login");
      }
    }, [navigate]);

  const handleQuickShow = () => {
    setQuickShow(!quickShow);
  };
  const handleProjectShow = () => {
    setProjectShow(!projectShow);
  };
  const handleConsultationShow = () => {
    setConsultationShow(!consultationShow);
  };

  const handleTimelineShow = () => {
    setTimelineShow((prev) => !prev);
  };

  const handleTimelineSelect = (value) => {
    setSelectedTimeline(value);
    setTimelineShow(false);
  };
  const handleTimelineSelectSecond = (value) => {
    setSelectedTimelineSecond(value);
    setTimelineShow(false);
  };
  const handleTimelineSelectThird = (value) => {
    setSelectedTimelineThird(value);
    setTimelineShow(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      console.log("Dropped file:", file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      console.log("Selected file:", file);
    }
  };
  const handleFileChangeSecond = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileNameSecond(file.name);
      console.log("Selected file:", file);
    }
  };

  const handleDragOver = (e) => e.preventDefault();
  const triggerFileInput = () => fileInputRef.current.click();

const companyName = localStorage.getItem("companyfirstName");
const companyNamee = localStorage.getItem("companylastName") ;
const Email = localStorage.getItem("companyEmail") ;
const role = localStorage.getItem("companyRole") ;
const type = localStorage.getItem("companyType") ;

  return (
    <HomeRap>
      <div className="containary all-dash">
        <div className="dash-left">
          <div className="dash-1">
            <div className="dash-1-sub-1">
              <h5>{new Date().toLocaleDateString("en-NG", { weekday: "long", month: "long", day: "numeric" })}</h5>
              <h3>
                Hello {companyNamee}, <br /> Welcome back.
              </h3>
            </div>
            <div className="dash-1-sub-2">
              <div className="inner-dash-1">
                <p>Total Expenses</p>
                <h4>₦0.00</h4>
              </div>
              <div className="inner-dash-1">
                <p>Open Jobs</p>
                <h4>0</h4>
              </div>
              <div className="inner-dash-1 no-border">
                <p>Completed Jobs</p>
                <h4>0</h4>
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
              <button>Request Job</button>
            </div>
            <div onClick={handleProjectShow} className="new-dash-2-card">
              <img src="/images/dash-10.png" alt="" />
              <h4>Projects</h4>
              <p>
                Corporates, developers, construction firms, and planning major
                projects.
              </p>
              <button>Request Job</button>
            </div>
            <div onClick={handleConsultationShow} className="new-dash-2-card">
              <img src="/images/dash-10.png" alt="" />
              <h4>Consultation & Advisory Services</h4>
              <p>
                Electrical, plumbing, carpentry, painting, general handyman.
              </p>
              <button>Request Job</button>
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
              <h4>{companyName} {companyNamee} </h4>
              <p>{Email}</p>
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
                        <p>Available</p>
                    </div>
                    <div className="dash-4-inner">
                        <h6>Email Address:</h6>
                        <p>{Email}</p>
                    </div>
                    {/* <div className="dash-4-inner">
                        <h6>Phone Number:</h6>
                        <p>08066091125</p>
                    </div> */}
                    <div className="dash-4-inner">
                        <h6>Role:</h6>
                        <p>{role}</p>
                    </div>
                </div>
          </div>
        </div>
      </div>
      {quickShow ? (
        <div className="dropdown-container">
          <div className="dropdown-show">
            <div className="dropdown-show-header">
              <h4>Quick fixes & maintenance</h4>
              <Icon
                onClick={handleQuickShow}
                className="icon"
                width="18px"
                height="18px"
                icon="humbleicons:times"
                style={{ color: "#667085" }}
              />
            </div>
            <div className="dropdown-show-body">
              <div className="category-div-sub">
                <label>Service Type</label>
                <select>
                  <option className="select-blur" value="">
                    Select
                  </option>
                  <option value="Plumbing">Electrical</option>
                  <option value="Carpentry">Carpentry</option>
                  <option value="Painting">Painting</option>
                  <option value="General Handyman">General Handyman</option>
                </select>
              </div>
              <div className="category-div-sub">
                <label>Urgency Type</label>
                <select>
                  <option className="select-blur" value="">
                    Select
                  </option>
                  <option value="Plumbing">Emergency</option>
                  <option value="Carpentry">Immediately</option>
                  <option value="Painting">Later</option>
                </select>
              </div>
              <div className="category-div-sub">
                <label>
                  Location
                  <span>Saved address</span>
                </label>
                <input type="text" placeholder="Enter address" />
              </div>
              <div className="category-div-sub">
                <label>Additional details</label>
                <textarea type="text" placeholder="Enter address"></textarea>
              </div>
              <div className="category-div-sub">
                <label>File upload</label>
                <UploadWrapper
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onClick={triggerFileInput}
                >
                  <HiddenInput
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
                  <img src="/images/file-icon.png" alt="" />
                  <Text>
                    Click to upload <SubText>or drag and drop</SubText>
                  </Text>
                  {fileName && <FileName>Uploaded: {fileName}</FileName>}
                </UploadWrapper>
              </div>
              <div className="category-div-sub">
                <label>Job Timeline</label>
                <div style={{ position: "relative" }}>
                  <div onClick={handleTimelineShow} className="timeline-div">
                    <p>{selectedTimeline}</p>
                    <Icon
                className="icon"
                width="18px"
                height="18px"
                icon="simple-line-icons:calender"
                style={{ color: "#667085" }}
              />
                  </div>
                  {timelineShow && (
                    <div className="timeline-show-dropdown">
                      {["1 hour", "1 day", "7 days", "14 days", "1 month"].map(
                        (item) => (
                          <p
                            key={item}
                            onClick={() => handleTimelineSelect(item)}
                          >
                            {item}
                          </p>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="category-div-sub">
                <label>Budget</label>
                <input type="text" placeholder="0.00" />
              </div>

              <button>Create request</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {projectShow ? (
        <div className="dropdown-container">
          <div className="dropdown-show">
            <div className="dropdown-show-header">
              <h4>Project</h4>
              <Icon
                onClick={handleProjectShow}
                className="icon"
                width="18px"
                height="18px"
                icon="humbleicons:times"
                style={{ color: "#667085" }}
              />
            </div>
            <div className="dropdown-show-body">
              <div className="category-div-sub">
                <label>Project type selection</label>
                <select>
                  <option className="select-blur" value="">
                    Select
                  </option>
                  <option value="Plumbing">Electrical</option>
                  <option value="Carpentry">Carpentry</option>
                  <option value="Painting">Painting</option>
                  <option value="General Handyman">General Handyman</option>
                </select>
              </div>
              <div className="category-div-sub">
              <label>Description</label>
              <textarea
                type="text"
                placeholder="Enter project details"
              ></textarea>
            </div>
            <div className="category-div-sub">
              <label>
                Location
                <span>Saved address</span>
              </label>
              <input type="text" placeholder="Enter address" />
            </div>
            <div className="category-div-sub">
              <label>Project Timeline</label>
              <div style={{ position: "relative" }}>
                <div onClick={handleTimelineShow} className="timeline-div">
                  <p>{selectedTimelineSecond}</p>
                  <Icon
                className="icon"
                width="18px"
                height="18px"
                icon="simple-line-icons:calender"
                style={{ color: "#667085" }}
              />
                </div>
                {timelineShow && (
                  <div className="timeline-show-dropdown">
                    {["1 hour", "1 day", "7 days", "14 days", "1 month"].map(
                      (item) => (
                        <p
                          key={item}
                          onClick={() => handleTimelineSelectSecond(item)}
                        >
                          {item}
                        </p>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="category-div-sub">
              <label>Document upload</label>
              <UploadWrapper
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={triggerFileInput}
              >
                <HiddenInput
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChangeSecond}
                />
                <img src="/images/file-icon.png" alt="" />
                <Text>
                  Click to upload <SubText>or drag and drop</SubText>
                </Text>
                {fileName && <FileName>Uploaded: {fileNameSecond}</FileName>}
              </UploadWrapper>
            </div>
            <div className="category-div-sub">
              <label>Budget</label>
              <input type="text" placeholder="0.00" />
            </div>
            <button>Create request</button>
            </div>
           

          </div>
        </div>
      ) : (
        ""
      )}


       {consultationShow ? (
        <div className="dropdown-container">
          <div className="dropdown-show">
            <div className="dropdown-show-header">
              <h4>Consultation & Advisory Services</h4>
              <Icon
                onClick={handleConsultationShow}
                className="icon"
                width="18px"
                height="18px"
                icon="humbleicons:times"
                style={{ color: "#667085" }}
              />
            </div>
            <div className="dropdown-show-body">
              <div className="category-div-sub">
                <label>Consultation type </label>
                <select>
                  <option className="select-blur" value="">
                    Select
                  </option>
                  <option value="Plumbing">Electrical</option>
                  <option value="Carpentry">Carpentry</option>
                  <option value="Painting">Painting</option>
                  <option value="General Handyman">General Handyman</option>
                </select>
              </div>
              <div className="category-div-sub">
              <label>Description</label>
              <textarea
                type="text"
                placeholder="Enter project details"
              ></textarea>
            </div>
            <div className="category-div-sub">
              <label>
                Consultation Method
              </label>
              <input type="text" placeholder="Enter address" />
            </div>
            <div className="category-div-sub">
              <label>Availability Selection</label>
              <div style={{ position: "relative" }}>
                <div onClick={handleTimelineShow} className="timeline-div">
                  <p>{selectedTimelineThird}</p>
                  <Icon
                className="icon"
                width="18px"
                height="18px"
                icon="simple-line-icons:calender"
                style={{ color: "#667085" }}
              />
                </div>
                {timelineShow && (
                  <div className="timeline-show-dropdown">
                    {["1 hour", "1 day", "7 days", "14 days", "1 month"].map(
                      (item) => (
                        <p
                          key={item}
                          onClick={() => handleTimelineSelectThird(item)}
                        >
                          {item}
                        </p>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>

           
          
            <button>Create request</button>
            </div>
           

          </div>
        </div>
      ) : (
        ""
      )}
    </HomeRap>
  );
};

export default ClientHome;
