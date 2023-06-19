import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      const url = `https://x8ki-letl-twmt.n7.xano.io/apidoc:XooRuQbs/`;
      const response = await fetch(url);

      if (response.ok) {
        console.log("Login successful.");
        navigate("multi-step-form");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const navigateToForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4"> Login Page </h1>{" "}
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
            <div className="form-group">
              <label htmlFor="password"> Password: </label>{" "}
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>{" "}
            <button type="submit" className="btn btn-primary">
              Login{" "}
            </button>{" "}
            <button
              type="button"
              className="btn btn-link"
              onClick={navigateToForgotPassword}
            >
              Forgot Password ?
            </button>{" "}
          </form>{" "}
          {loginStatus && (
            <p className="mt-3 text-center text-success"> {loginStatus} </p>
          )}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default LoginPage;
