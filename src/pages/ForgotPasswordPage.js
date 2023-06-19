import React, { useState } from "react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [resetStatus, setResetStatus] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setResetStatus("Password reset email sent successfully");
    } catch (error) {
      console.error("Error:", error);
      setResetStatus("Failed to send reset password email");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4"> Forgot Password </h1>{" "}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email"> Email: </label>{" "}
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>{" "}
            <button type="submit" className="btn btn-primary">
              {" "}
              Reset Password{" "}
            </button>{" "}
          </form>{" "}
          {resetStatus && (
            <p className="mt-3 text-center"> {resetStatus} </p>
          )}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default ForgotPasswordPage;
