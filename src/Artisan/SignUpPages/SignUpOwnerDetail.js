import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import {  useNavigate } from "react-router-dom";

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

  .react-calendar__navigation button {
  }
  /* .select-head {
    color: #667085 !important;
  } */
  button {
    width: 440px;
    height: 45px;
    border-radius: 10px;
    border-style: none;
    color: rgb(0, 0, 0);
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
  /* .agreement-input {
    border: 2px solid #10182833;
    width: 50px !important;
    height: 50px !important;
    border-radius: 7px;
    padding: 10px;
  } */
  .agreement {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;



const SignUpOwnerDetail = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("personal");
  const [showCalendar, setShowCalendar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [profession, setProfession] = useState("");
  const [showElectric, setShowElectric] = useState(false);
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
    ElectricalInfo: {
      voltage: "",
      color: "",
      device: "",
      naturalWire: "",
      unit: "",
      purpose: "",
      parallel: "",
      rcd: "",
      liveWire: "",
      tool: "",
      firstStep: "",
      current: "",
      threePhase: "",
      mainCause: "",
      insulator: "",
    },
  });

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

  const elecValid =
    formData.ElectricalInfo.voltage !== "" &&
    formData.ElectricalInfo.color !== "" &&
    formData.ElectricalInfo.device !== "" &&
    formData.ElectricalInfo.naturalWire !== "" &&
    formData.ElectricalInfo.unit !== "" &&
    formData.ElectricalInfo.purpose !== "" &&
    formData.ElectricalInfo.parallel !== "" &&
    formData.ElectricalInfo.rcd !== "" &&
    formData.ElectricalInfo.liveWire !== "" &&
    formData.ElectricalInfo.tool !== "" &&
    formData.ElectricalInfo.firstStep !== "" &&
    formData.ElectricalInfo.current !== "" &&
    formData.ElectricalInfo.threePhase !== "" &&
    formData.ElectricalInfo.mainCause !== "" &&
    formData.ElectricalInfo.insulator !== "";

  const isValid =
    formData.firstName !== "" &&
    formData.lastName !== "" &&
    formData.email !== "" &&
    formData.phone !== "" &&
    formData.dob !== "" &&
    formData.gender !== "" &&
    formData.address !== "" &&
    formData.city !== "" &&
    formData.country !== "";

  const proValid = profession !== "";

  const handleDateChange = (date) => {
    setSelectedDate(date);
setFormData({
  ...formData,
  dob: date.toISOString().split("T")[0], // Set dob in YYYY-MM-DD format
});


    setShowCalendar(false); // Close calendar on date selection
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the field belongs to the `ElectricalInfo` object
    if (name.includes("ElectricalInfo.")) {
      const fieldName = name.split(".")[1]; // Extract the nested field name

      setFormData((prevFormData) => ({
        ...prevFormData,
        ElectricalInfo: {
          ...prevFormData.ElectricalInfo,
          [fieldName]: value,
        },
      }));
    } else {
      // For fields at the top level
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
    phone: formData.phone.startsWith("+") ? formData.phone : `+234${formData.phone.slice(1)}`,
    gender: formData.gender.toLowerCase(),
    dob: formData.dob, // Ensure this is a valid date string like "1990-01-01"
    address: formData.address,
    city: formData.city, // This must be included in your form
    country: formData.country,
     ElectricalInfo: {
      voltage: formData.ElectricalInfo.voltage,
      color: formData.ElectricalInfo.color,
      device: formData.ElectricalInfo.device,
      naturalWire: formData.ElectricalInfo.naturalWire,
      unit: formData.ElectricalInfo.unit,
      purpose: formData.ElectricalInfo.purpose,
      parallel: formData.ElectricalInfo.parallel,
      rcd: formData.ElectricalInfo.rcd,
      liveWire: formData.ElectricalInfo.liveWire,
      tool: formData.ElectricalInfo.tool,
      firstStep: formData.ElectricalInfo.firstStep,
      current: formData.ElectricalInfo.current,
      threePhase: formData.ElectricalInfo.threePhase,
      mainCause: formData.ElectricalInfo.mainCause,
      insulator: formData.ElectricalInfo.insulator,
    },
  };

  console.log("🚀 Payload to backend:", payload);

  
  try {

      const token = localStorage.getItem("artisanToken");
    const res = await fetch("https://blucolar-be.onrender.com/api/users/onboarding", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

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



  const handleClick = () => {
    setActiveLink("work");
  };

  const handleClickAgree = () => {
    setActiveLink("agreement");
  };
  const handleClickElectrical = () => {
    if (profession === "Electrical") {
      setShowElectric(true);
    }
  }


    useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      firstName: localStorage.getItem("artisanFirstName") || "",
      lastName: localStorage.getItem("artisanLastName") || "",
      email: localStorage.getItem("artisanEmail") || "",
      phone: localStorage.getItem("phone") || "",
    }));
  }, []);

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
          {activeLink === "personal" && (
            <>
              <div className="personal">
                <div className="person-input-div">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    placeholder="First Name"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    placeholder="Last Name"
                    onChange={handleChange}
                  />
                </div>
                <div className="person-input-div">
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    placeholder="Email Address"
                    onChange={handleChange}
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
                      {/* Display the selected date or "Date of Birth" */}
               <p>
  {formData.dob
    ? new Date(formData.dob).toLocaleDateString()
    : "Date of Birth"}
</p>


                      {/* Calendar Icon */}
                      <Icon
                        onClick={() => setShowCalendar((prev) => !prev)}
                        className="icon"
                        width="20px"
                        height="20px"
                        icon="solar:calendar-linear"
                      />
                    </div>

                    {/* Calendar Popup */}
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
                    name="gender" // Matches the `gender` property in formData
                    value={formData.gender} // Controlled input
                    onChange={handleChange}
                    className="gender-select"
                  >
                    <option className="select-head" value="" disabled>
                      Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>{" "}
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
                    name="city" // Matches the `gender` property in formData
                    value={formData.city} // Controlled input
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
                  onClick={handleClick}
                  disabled={!isValid}
                  style={{
                    backgroundColor: isValid ? "#0067D0" : "#abc7e3",
                    cursor: !isValid ? "not-allowed" : "pointer",
                  }}
                >
                  Continue
                </button>
              </div>
            </>
          )}

          {activeLink === "work" && (
            <>
              <div>
                <div className="work-1">
                  <label>Select Profession </label>
                  <select
                    name="gender" // Matches the `gender` property in formData
                    onChange={(e) => setProfession(e.target.value)}
                    className="gender-select"
                    value={profession}
                  >
                    <option className="select-head" value="" disabled>
                      Select
                    </option>
                    <option value="Electrical">Electrical</option>
                    <option value="Carpenters / Woodwork">
                      Carpenters / Woodwork
                    </option>
                    <option value="Plumbers">Plumbers</option>

                    <option value="Masons">Masons</option>
                    <option value="HVAC Technicians">HVAC Technicians</option>
                  </select>
                  {!showElectric ? (
                    <button
                     onClick={handleClickElectrical}
                      disabled={!proValid}
                      style={{
                        backgroundColor: proValid ? "#0067D0" : "#abc7e3",
                        cursor: !proValid ? "not-allowed" : "pointer",
                      }}
                    >
                      Continue
                    </button>
                  ) : (
                    ""
                  )}
                </div>
                {showElectric ? (
                  <>
                    <div className="all-electric">
                      <div className="work-1">
                        <label>
                          What is the standard voltage for residential buildings
                          in Nigeria?{" "}
                        </label>
                        <select
                          name="ElectricalInfo.voltage" // Matches the `gender` property in formData
                          className="gender-select"
                          onChange={handleChange}
                          value={formData.ElectricalInfo.voltage}
                        >
                          <option className="select-head" value="" disabled>
                            Select
                          </option>
                          <option value="120V">120V</option>
                          <option value="220V">220V</option>
                          <option value="440V">440V</option>

                          <option value="110V">110V</option>
                        </select>
                      </div>
                      <div className="work-1">
                        <label>
                          Which color is used for the earth wire in standard
                          installations?{" "}
                        </label>
                        <select
                          name="ElectricalInfo.color" // Matches the `gender` property in formData
                          onChange={handleChange}
                          className="gender-select"
                          value={formData.ElectricalInfo.color}
                        >
                          <option className="select-head" value="" disabled>
                            Select
                          </option>
                          <option value="White">White</option>
                          <option value="Black">Black</option>
                        </select>
                      </div>
                      <div className="work-1">
                        <label>
                          What device protects circuits from overload?{" "}
                        </label>
                        <select
                          name="ElectricalInfo.device" // Matches the `gender` property in formData
                          className="gender-select"
                          onChange={handleChange}
                          value={formData.ElectricalInfo.device}
                        >
                          <option className="select-head" value="" disabled>
                            Select
                          </option>
                          <option value="Capacitor">Capacitor</option>
                        </select>
                      </div>
                      <div className="work-1">
                        <label>
                          True or False: The neutral wire carries current in a
                          balanced circuit.{" "}
                        </label>
                        <select
                          name="ElectricalInfo.naturalWire" // Matches the `gender` property in formData
                          className="gender-select"
                          onChange={handleChange}
                          value={formData.ElectricalInfo.naturalWire}
                        >
                          <option className="select-head" value="" disabled>
                            Select
                          </option>
                          <option value="True">True</option>
                          <option value="False">False</option>
                        </select>
                      </div>
                      <div className="work-1">
                        <label>
                          What is the unit of electrical resistance?{" "}
                        </label>
                        <select
                          name="ElectricalInfo.unit" // Matches the `gender` property in formData
                          className="gender-select"
                          onChange={handleChange}
                          value={formData.ElectricalInfo.unit}
                        >
                          <option className="select-head" value="" disabled>
                            Select
                          </option>
                          <option value="Volt">Volt</option>
                        </select>
                      </div>
                      <div className="work-1">
                        <label>
                          What is the purpose of a fuse in a circuit?{" "}
                        </label>
                        <select
                          name="ElectricalInfo.purpose" // Matches the `gender` property in formData
                          className="gender-select"
                          onChange={handleChange}
                          value={formData.ElectricalInfo.purpose}
                        >
                          <option className="select-head" value="" disabled>
                            Select
                          </option>
                          <option value="ElectrTo reduce voltageical">
                            To reduce voltage
                          </option>
                          <option value="To increase voltage">
                            To increase voltage
                          </option>
                        </select>
                      </div>
                      <div className="work-1">
                        <label>
                          True or False: Parallel circuits have the same voltage
                          across all branches.{" "}
                        </label>
                        <select
                          name="ElectricalInfo.parallel" // Matches the `gender` property in formData
                          className="gender-select"
                          onChange={handleChange}
                          value={formData.ElectricalInfo.parallel}
                        >
                          <option className="select-head" value="" disabled>
                            Select
                          </option>
                          <option value="True">True</option>
                          <option value="False">False</option>
                        </select>
                      </div>
                      <div className="work-1">
                        <label>
                          What does an RCD (Residual Current Device) protect
                          against?{" "}
                        </label>
                        <select
                          name="ElectricalInfo.rcd" // Matches the `gender` property in formData
                          className="gender-select"
                          onChange={handleChange}
                          value={formData.ElectricalInfo.rcd}
                        >
                          <option className="select-head" value="" disabled>
                            Select
                          </option>
                          <option value="OverVoltage">OverVoltage</option>
                          <option value="LowVoltage">LowVoltage</option>
                        </select>
                      </div>
                      <div className="work-1">
                        <label>
                          The live wire in standard installations is usually:{" "}
                        </label>
                        <select
                          name="ElectricalInfo.liveWire" // Matches the `gender` property in formData
                          className="gender-select"
                          onChange={handleChange}
                          value={formData.ElectricalInfo.liveWire}
                        >
                          <option className="select-head" value="" disabled>
                            Select
                          </option>
                          <option value="Blue">Blue</option>
                        </select>
                      </div>
                      <div className="work-1">
                        <label>
                          Which of these tools is used to test voltage?{" "}
                        </label>
                        <select
                          name="ElectricalInfo.tool" // Matches the `gender` property in formData
                          className="gender-select"
                          onChange={handleChange}
                          value={formData.ElectricalInfo.tool}
                        >
                          <option className="select-head" value="" disabled>
                            Select
                          </option>
                          <option value="Screwdriver">Screwdriver</option>
                        </select>
                      </div>
                      <div className="work-1">
                        <label>
                          What is the first step in electrical troubleshooting?{" "}
                        </label>
                        <select
                          name="ElectricalInfo.firstStep" // Matches the `gender` property in formData
                          className="gender-select"
                          onChange={handleChange}
                          value={formData.ElectricalInfo.firstStep}
                        >
                          <option className="select-head" value="" disabled>
                            Select
                          </option>
                          <option value="Check voltage with a meter">
                            Check voltage with a meter
                          </option>
                        </select>
                      </div>
                      <div className="work-1">
                        <label>
                          True or False: Current is measured in watts.{" "}
                        </label>
                        <select
                          name="ElectricalInfo.current" // Matches the `gender` property in formData
                          className="gender-select"
                          onChange={handleChange}
                          value={formData.ElectricalInfo.current}
                        >
                          <option className="select-head" value="" disabled>
                            Select
                          </option>
                          <option value="True">True</option>
                          <option value="False">False</option>
                        </select>
                      </div>
                      <div className="work-1">
                        <label>
                          What does a three-phase power system consist of?{" "}
                        </label>
                        <select
                          name="ElectricalInfo.threePhase" // Matches the `gender` property in formData
                          className="gender-select"
                          onChange={handleChange}
                          value={formData.ElectricalInfo.threePhase}
                        >
                          <option className="select-head" value="" disabled>
                            Select
                          </option>
                          <option value="Four wires">Four wires</option>
                        </select>
                      </div>
                      <div className="work-1">
                        <label>
                          What is the main cause of a short circuit?{" "}
                        </label>
                        <select
                          name="ElectricalInfo.mainCause" // Matches the `gender` property in formData
                          className="gender-select"
                          onChange={handleChange}
                          value={formData.ElectricalInfo.mainCause}
                        >
                          <option className="select-head" value="" disabled>
                            Select
                          </option>
                          <option value="Open connections">
                            Open connections
                          </option>
                        </select>
                      </div>
                      <div className="work-1">
                        <label>
                          True or False: Insulators are materials that allow the
                          flow of electricity.{" "}
                        </label>
                        <select
                          name="ElectricalInfo.insulator" // Matches the `gender` property in formData
                          className="gender-select"
                          onChange={handleChange}
                          value={formData.ElectricalInfo.insulator}
                        >
                          <option className="select-head" value="" disabled>
                            Select
                          </option>
                          <option value="True">True</option>
                          <option value="False">False</option>
                        </select>
                      </div>
                      <button
                        onClick={handleClickAgree}
                        disabled={!elecValid}
                        style={{
                          backgroundColor: elecValid ? "#0067D0" : "#abc7e3",
                          cursor: !elecValid ? "not-allowed" : "pointer",
                        }}
                      >
                        Continue
                      </button>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </>
          )}
          {activeLink === "agreement" && (
            <>
              <div className="agreement">
                <label>
                  <input type="checkbox" />
                  Lorem ipsum dolor sit amet consectetur. Ridiculus quis est
                  eget at interdum quam arcu elementum. Dictum tincidunt semper
                  nulla enim nulla. Mattis fermentum quam interdum viverra
                  feugiat fames. Id curabitur.
                </label>
                <label>
                  <input className="agreement-input " type="checkbox" />
                  Amet consectetur. Id mauris ut mauris quam. Ipsum orci tempus
                  justo metus aenean urna. Dictum vitae tristique urna volutpat
                  eu at auctor. Sagittis eu dictumst duis urna tristique enim
                  viverra consequat duis. Commodo sagittis ac vel consectetur.
                  Aliquet porttitor sapien viverra ullamcorper quam pharetra
                  cras.
                </label>
                <button
                  onClick={handleSubmit}
                  disabled={!isValid}
                  style={{
                   backgroundColor: isValid ? "#0067D0" : "#abc7e3",
                   cursor: !isValid ? "not-allowed" : "pointer",
                    background: "#0067D0",
                  }}
                >
                  Continue
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </SignDetail>
  );
};

export default SignUpOwnerDetail;
