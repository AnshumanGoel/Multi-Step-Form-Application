import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    file: null,
    multiFiles: [],
    geolocationStatus: "Not captured",
    formSubmitted: false,
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const navigate = useNavigate();
  const nav = () => {
    navigate("/");
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({ ...prevState, file }));
  };

  const handleMultiFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevState) => ({ ...prevState, multiFiles: files }));
  };

  const handleGeolocationCapture = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setFormData((prevState) => ({
          ...prevState,
          geolocationStatus: `Captured - Latitude: ${latitude}, Longitude: ${longitude}`,
        }));
      },
      (error) => {
        console.error("Error capturing geolocation:", error);
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({ ...prevState, formSubmitted: true }));
  };

  return (
    <div className="page-container">
      <h1> Multi - Step Form </h1>
      {/* Progress bar */}
      <div className="progress-bar">
        <div
          className="step-indicator"
          style={{ width: `${(step / 5) * 100}%` }}
        ></div>{" "}
      </div>{" "}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {" "}
          {step === 1 && (
            <div>
              <h2> Step 1: Basic Details </h2>{" "}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="step1-inputs"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="step1-inputs"
              />
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="step1-inputs"
              />
              <div className="button-container">
                <button
                  type="button"
                  onClick={handleNext}
                  className="next-button"
                >
                  Next{" "}
                </button>{" "}
              </div>{" "}
            </div>
          )}{" "}
          {step === 2 && (
            <div>
              <h2> Step 2: Address </h2>{" "}
              <input
                type="text"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
                placeholder="Address Line 1"
                className="step2-inputs"
              />
              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
                placeholder="Address Line 2"
                className="step2-inputs"
              />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="step2-inputs"
              />
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                className="step2-inputs"
              />
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Pincode"
                className="step2-inputs"
              />
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
                className="step2-inputs"
              />
              <div className="button-container">
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="previous-button"
                >
                  Previous{" "}
                </button>{" "}
                <button
                  type="button"
                  onClick={handleNext}
                  className="next-button"
                >
                  Next{" "}
                </button>{" "}
              </div>{" "}
            </div>
          )}{" "}
          {step === 3 && (
            <div>
              <h2> Step 3: File Upload </h2>{" "}
              <input
                type="file"
                accept=".png,.pdf"
                onChange={handleFileUpload}
              />{" "}
              <div className="button-container">
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="previous-button"
                >
                  Previous{" "}
                </button>{" "}
                <button
                  type="button"
                  onClick={handleNext}
                  className="next-button"
                >
                  Next{" "}
                </button>{" "}
              </div>{" "}
            </div>
          )}{" "}
          {step === 4 && (
            <div>
              <h2> Step 4: Multi File Upload </h2>{" "}
              <input
                type="file"
                accept=".png,.pdf"
                multiple
                onChange={handleMultiFileUpload}
              />{" "}
              <button type="button" onClick={handleGeolocationCapture}>
                Capture Geolocation{" "}
              </button>{" "}
              <p> Geolocation Status: {formData.geolocationStatus} </p>{" "}
              <div className="button-container">
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="previous-button"
                >
                  Previous{" "}
                </button>{" "}
                <button
                  type="submit"
                  onClick={handleNext}
                  className="submit-button"
                >
                  Submit{" "}
                </button>{" "}
              </div>{" "}
            </div>
          )}{" "}
          {step === 5 && (
            <div>
              <h2> Step 5: Status </h2> <p> Form Submitted </p>{" "}
              <button type="button" onClick={nav} className="next-button">
                Log Out{" "}
              </button>{" "}
            </div>
          )}{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};

export default MultiStepForm;
