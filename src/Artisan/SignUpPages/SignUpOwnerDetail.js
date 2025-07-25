import React, { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(16, 24, 40, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  text-align: center;
`;

const SignDetail = styled.div`
  .link h4 {
    border: 1px solid #1018281f;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: #667085;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    margin: 0px;
  }
  .link.active h4 {
    background: #0067d0;
    color: #ffffff;
  }
  .link p {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
    margin: 0px;
  }
  .link.active p {
    color: #0067d0;
  }
  .link {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
  .straight-line {
    background: #1018281a;
    height: 1px;
    width: 80px;
    margin-top: 20px;
  }
  .straight-line.active {
    background: #0067d0;
  }
  .detail-1 {
    display: flex;
    gap: 15px;
  }
  .all-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    margin-top: 50px;
  }
  h2 {
    color: #101828;
    font-size: 28px;
    font-weight: 600;
    max-width: 394px;
    line-height: 35px;
    text-align: center;
  }
  .personal input,
  .personal select,
  .date-div-input {
    border: 1px solid #1018281a;
    border-radius: 10px;
    width: 214px;
    height: 47px;
    color: black;
    font-size: 14px;
    font-weight: 400;
    padding: 0px 15px;
  }
  .date-div-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: black;
  }

  .readonly {
    background: #f7f7f7;
  }
  .full-lenght {
    width: 440px !important;
  }
  .person-input-div {
    display: flex;
    gap: 10px;
  }
  .personal {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .all-calendar {
    position: relative;
    color: rgb(0, 0, 0);
  }
  .calendar-popup {
    position: absolute;
    color: black;
  }
  .react-calendar {
    border: none;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .react-calendar__tile--active {
    background-color: #4a90e2;
    border-radius: 50%;
  }

  button {
    width: 440px;
    height: 45px;
    border-radius: 10px;
    border-style: none;
    color: black;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .work-1 label {
    color: #667085;
    font-size: 16px;
    font-weight: 400;
    margin: 10px 0px;
    max-width: 440px;
    line-height: 19px;
  }
  .work-1 select {
    border: 1px solid #1018281f;
    width: 440px;
    height: 47px;
    border-radius: 10px;
    padding-left: 10px;
  }
  .work-1,
  .all-electric {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .agreement label {
    display: flex;
    gap: 20px;
    max-width: 440px;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    color: #667085;
    align-items: flex-start;
  }
  .agreement {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .why {
    color: white;
  }
  
  .no-questions-message {
    color: #667085;
    font-size: 16px;
    text-align: center;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    margin: 20px 0;
  }
  
  .questions-container {
    margin-top: 20px;
  }
  
  .questions-header {
    color: #101828;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .loading-message {
    color: #667085;
    font-size: 14px;
    text-align: center;
    padding: 20px;
  }
`;

const SignUpOwnerDetail = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("personal");
  const [showCalendar, setShowCalendar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    gender: "",
    address: "",
    city: "",
    country: "",
    ElectricalInfo: {},
  });

  // Profession and Questions state
  const [professions, setProfessions] = useState([]);
  const [selectedProfessionId, setSelectedProfessionId] = useState("");
  const [selectedProfessionName, setSelectedProfessionName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [questionAnswers, setQuestionAnswers] = useState({});
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [questionsError, setQuestionsError] = useState("");

  // Fetch user data on mount
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("artisanToken");
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
        const user = data.user;

        setFormData((prev) => ({
          ...prev,
          firstName: user.firstName || "",
          lastName: user.lastName || "",
          email: user.email || "",
        }));
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUser();
  }, []);

  // Load countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://countriesnow.space/api/v0.1/countries/positions"
        );
        const data = await res.json();
        if (data?.data) {
          setCountries(data.data.map((c) => c.name));
        }
      } catch (err) {
        console.error("Error loading countries", err);
      }
    };

    fetchCountries();
  }, []);

  // Fetch states when a country is selected
  useEffect(() => {
    const fetchStates = async () => {
      if (formData.country) {
        try {
          const res = await fetch(
            "https://countriesnow.space/api/v0.1/countries/states",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ country: formData.country }),
            }
          );
          const data = await res.json();
          if (data?.data?.states) {
            setStates(data.data.states.map((s) => s.name));
          }
        } catch (err) {
          console.error("Error loading states", err);
        }
      }
    };

    fetchStates();
  }, [formData.country]);

  // Fetch professions on component mount
  useEffect(() => {
    const fetchProfessions = async () => {
      try {
        const response = await fetch(
          "https://blucolar-be.onrender.com/api/onboarding/profession"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch professions");
        }
        const data = await response.json();
        setProfessions(data);
      } catch (error) {
        console.error("Error fetching professions:", error);
      }
    };

    fetchProfessions();
  }, []);

  // Validation checks
  const isPersonalValid =
    formData.firstName !== "" &&
    formData.lastName !== "" &&
    formData.email !== "" &&
    formData.phone !== "" &&
    formData.dob !== "" &&
    formData.gender !== "" &&
    formData.address !== "" &&
    formData.city !== "" &&
    formData.country !== "";

  const isProfessionValid = selectedProfessionId !== "";

  const areQuestionsValid = () => {
    if (questions.length === 0) return true; // No questions means valid
    return questions.every((_, index) => questionAnswers[`question-${index}`]);
  };

  // Handle profession selection
  const handleProfessionChange = async (e) => {
    const selectedProfession = professions.find(
      (prof) => prof.name === e.target.value
    );

    if (selectedProfession) {
      setSelectedProfessionId(selectedProfession._id);
      setSelectedProfessionName(selectedProfession.name);
      setQuestions([]);
      setQuestionAnswers({});
      setQuestionsError("");
      
      // Fetch questions for the selected profession
      await fetchQuestionsForProfession(selectedProfession._id);
    } else {
      setSelectedProfessionId("");
      setSelectedProfessionName("");
      setQuestions([]);
      setQuestionAnswers({});
      setQuestionsError("");
    }
  };

  // Fetch questions for a specific profession
  const fetchQuestionsForProfession = async (professionId) => {
    setLoadingQuestions(true);
    setQuestionsError("");

    try {
      const response = await fetch(
        `https://blucolar-be.onrender.com/api/onboarding/questions/${professionId}`
      );
      
      if (!response.ok) {
        throw new Error("Failed to fetch questions");
      }
      
      const data = await response.json();
      
      if (data && data.length > 0) {
        setQuestions(data);
      } else {
        setQuestions([]);
        setQuestionsError(`No questions available for this profession.`);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
      setQuestions([]);
      setQuestionsError("Failed to load questions. Please try again.");
    } finally {
      setLoadingQuestions(false);
    }
  };

  // Handle question answers
  const handleQuestionAnswerChange = (e) => {
    const { name, value } = e.target;
    setQuestionAnswers(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFormData({
      ...formData,
      dob: date.toISOString().split("T")[0],
    });
    setShowCalendar(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("ElectricalInfo.")) {
      const fieldName = name.split(".")[1];
      setFormData((prevFormData) => ({
        ...prevFormData,
        ElectricalInfo: {
          ...prevFormData.ElectricalInfo,
          [fieldName]: value,
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async () => {
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone.startsWith("+")
        ? formData.phone
        : `+234${formData.phone.slice(1)}`,
      gender: formData.gender.toLowerCase(),
      dob: formData.dob,
      address: formData.address,
      city: formData.city,
      country: formData.country,
      profession: selectedProfessionName,
      questionAnswers: questionAnswers,
    };

    console.log("🚀 Payload to backend:", payload);

    try {
      const token = localStorage.getItem("artisanToken");
      const res = await fetch(
        "https://blucolar-be.onrender.com/api/users/onboarding",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Signup failed");
      }

      const data = await res.json();
      console.log("✅ Signup successful:", data);

      // Store in localStorage
      localStorage.setItem("artisanPhone", payload.phone);
      localStorage.setItem("artisanGender", payload.gender);
      localStorage.setItem("artisanDob", payload.dob);
      localStorage.setItem("artisanAddress", payload.address);
      localStorage.setItem("artisanCity", payload.city);
      localStorage.setItem("artisanCountry", payload.country);

      navigate("/artisanAuth/signUpArtisan/ConfirmEmail");
    } catch (err) {
      console.error("❌ Signup failed:", err);
      setErrorMessage(err.message || "Signup failed. Please try again.");
    }
  };

  const handlePersonalContinue = () => {
    setActiveLink("work");
  };

  const handleWorkContinue = () => {
    setActiveLink("agreement");
  };

  return (
    <SignDetail>
      <div className="all-detail">
        <h2>Complete onboarding and starts earning with Bluecollar</h2>
        <div className="detail-1">
          <div
            className={`link ${
              activeLink === "personal" ||
              activeLink === "work" ||
              activeLink === "agreement"
                ? "active"
                : ""
            }`}
          >
            <h4>01</h4>
            <p>Personal info</p>
          </div>
          <div
            className={`straight-line ${
              activeLink === "work" || activeLink === "agreement"
                ? "active"
                : ""
            }`}
          ></div>
          <div
            className={`link ${
              activeLink === "work" || activeLink === "agreement"
                ? "active"
                : ""
            }`}
          >
            <h4>02</h4>
            <p>Work info</p>
          </div>
          <div
            className={`straight-line ${
              activeLink === "agreement" ? "active" : ""
            }`}
          ></div>
          <div className={`link ${activeLink === "agreement" ? "active" : ""}`}>
            <h4>03</h4>
            <p>Agreement</p>
          </div>
        </div>

        <div>
          {/* Personal Information Section */}
          {activeLink === "personal" && (
            <div className="personal">
              <div className="person-input-div">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  placeholder="First Name"
                  onChange={handleChange}
                  readOnly
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  placeholder="Last Name"
                  onChange={handleChange}
                  readOnly
                />
              </div>
              <div className="person-input-div">
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  placeholder="Email Address"
                  onChange={handleChange}
                  readOnly
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="person-input-div">
                <div className="all-calendar">
                  <div className="date-div-input">
                    <p>
                      {formData.dob
                        ? new Date(formData.dob).toLocaleDateString()
                        : "Date of Birth"}
                    </p>
                    <Icon
                      onClick={() => setShowCalendar((prev) => !prev)}
                      className="icon"
                      width="20px"
                      height="20px"
                      icon="solar:calendar-linear"
                    />
                  </div>
                  {showCalendar && (
                    <div className="calendar-popup">
                      <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                      />
                    </div>
                  )}
                </div>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="gender-select"
                >
                  <option className="select-head" value="" disabled>
                    Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="person-input-div">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option className="select-head" value="" disabled>
                    Country
                  </option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  disabled={!formData.country}
                >
                  <option className="select-head" value="" disabled>
                    State
                  </option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <label>
                <input
                  className="full-lenght"
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </label>
              {errorMessage && (
                <div style={{ color: "red", marginBottom: "1rem" }}>
                  {errorMessage}
                </div>
              )}
              <button
                type="button"
                className="why"
                onClick={handlePersonalContinue}
                disabled={!isPersonalValid}
                style={{
                  backgroundColor: isPersonalValid ? "#0067D0" : "#abc7e3",
                  cursor: !isPersonalValid ? "not-allowed" : "pointer",
                  color: "white",
                }}
              >
                Continue
              </button>
            </div>
          )}

          {/* Work Information Section */}
          {activeLink === "work" && (
            <div>
              <div className="work-1">
                <label>Select Profession</label>
                <select
                  name="profession"
                  value={selectedProfessionName}
                  onChange={handleProfessionChange}
                  className="gender-select"
                >
                  <option className="select-head" value="" disabled>
                    Select Profession
                  </option>
                  {professions.map((prof) => (
                    <option key={prof._id} value={prof.name}>
                      {prof.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Questions Section */}
              {selectedProfessionId && (
                <div className="questions-container">
                  {loadingQuestions && (
                    <div className="loading-message">
                      Loading questions for {selectedProfessionName}...
                    </div>
                  )}

                  {!loadingQuestions && questionsError && (
                    <div className="no-questions-message">
                      {questionsError}
                    </div>
                  )}

                  {!loadingQuestions && !questionsError && questions.length > 0 && (
                    <div className="all-electric">
                      <div className="questions-header">
                        Questions for {selectedProfessionName}
                      </div>
                      {questions.map((question, index) => (
                        <div key={index} className="work-1">
                          <label>{question.question}</label>
                          <select
                            name={`question-${index}`}
                            value={questionAnswers[`question-${index}`] || ""}
                            onChange={handleQuestionAnswerChange}
                            className="gender-select"
                          >
                            <option className="select-head" value="" disabled>
                              Select an answer
                            </option>
                            {question.options.map((option, idx) => (
                              <option key={idx} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <button
                onClick={handleWorkContinue}
                className="why"
                disabled={!isProfessionValid || !areQuestionsValid()}
                style={{
                  backgroundColor: (isProfessionValid && areQuestionsValid()) ? "#0067D0" : "#abc7e3",
                  cursor: (!isProfessionValid || !areQuestionsValid()) ? "not-allowed" : "pointer",
                  color: "white",
                  marginTop: "20px"
                }}
              >
                Continue
              </button>
            </div>
          )}

          {/* Agreement Section */}
          {activeLink === "agreement" && (
            <div className="agreement">
              <label>
                <input type="checkbox" />
                Lorem ipsum dolor sit amet consectetur. Ridiculus quis est
                eget at interdum quam arcu elementum. Dictum tincidunt semper
                nulla enim nulla. Mattis fermentum quam interdum viverra
                feugiat fames. Id curabitur.
              </label>
              <label>
                <input className="agreement-input" type="checkbox" />
                Amet consectetur. Id mauris ut mauris quam. Ipsum orci tempus
                justo metus aenean urna. Dictum vitae tristique urna volutpat
                eu at auctor. Sagittis eu dictumst duis urna tristique enim
                viverra consequat duis. Commodo sagittis ac vel consectetur.
                Aliquet porttitor sapien viverra ullamcorper quam pharetra
                cras.
              </label>
              <button
                onClick={handleSubmit}
                className="why"
                style={{
                  backgroundColor: "#0067D0",
                  color: "white",
                }}
              >
                Complete Registration
              </button>
            </div>
          )}
        </div>
      </div>
    </SignDetail>
  );
};

export default SignUpOwnerDetail;