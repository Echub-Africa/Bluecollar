import React, { useState } from "react";




const QuestionFormModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    professionId: "",
    question: "",
    answer: "",
    options: ["", ""], // Start with 2 options
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...formData.options];
    newOptions[index] = value;
    setFormData((prev) => ({
      ...prev,
      options: newOptions,
    }));
  };

  const addOption = () => {
    if (formData.options.length < 4) {
      setFormData((prev) => ({
        ...prev,
        options: [...prev.options, ""],
      }));
    }
  };

  const removeOption = (index) => {
    const newOptions = formData.options.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      options: newOptions,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { professionId, question, answer, options } = formData;

    if (!professionId || !question || !answer || options.length < 2) {
      setErrorMessage("Please fill all required fields and at least 2 options.");
      return;
    }

    const token = localStorage.getItem("adminToken");
    if (!token) {
      alert("Admin not authenticated.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch(
        "https://blucolar-be.onrender.com/api/onboarding/question",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage("✅ Question created successfully!");
        setFormData({
          professionId: "",
          question: "",
          answer: "",
          options: ["", ""],
        });
        setShowModal(false);
      } else {
        const message =
          result.message ||
          (Array.isArray(result.errors) ? result.errors[0]?.msg : "Unknown error.");
        setErrorMessage("❌ Submission failed: " + message);
      }
    } catch (error) {
      console.error("❌ Network error:", error);
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Create Question</button>

      {showModal && (
        <div className="dropdown-container">
          <div className="dropdown-div">
            <div className="drop-header">
              <h4>Create New Question</h4>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="drop-body">
                <label>
                  Profession ID
                  <input
                    type="text"
                    name="professionId"
                    value={formData.professionId}
                    onChange={handleChange}
                    required
                  />
                </label>
             

              <label>
                Question
                <input
                  type="text"
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Answer
                <input
                  type="text"
                  name="answer"
                  value={formData.answer}
                  onChange={handleChange}
                  required
                />
              </label>

              <div>
                <label>Options:</label>
                {formData.options.map((option, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => handleOptionChange(index, e.target.value)}
                      required
                    />
                    {formData.options.length > 2 && (
                      <button
                        type="button"
                        onClick={() => removeOption(index)}
                      >
                        ❌
                      </button>
                    )}
                  </div>
                ))}
                {formData.options.length < 4 && (
                  <button type="button" onClick={addOption}>
                    ➕ Add Option
                  </button>
                )}
              </div>

              {errorMessage && (
                <p style={{ color: "red", fontSize: "14px" }}>{errorMessage}</p>
              )}
              {successMessage && (
                <p style={{ color: "green", fontSize: "14px" }}>{successMessage}</p>
              )}

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Question"}
              </button>
              <button type="button" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionFormModal;
