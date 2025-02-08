import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SigninSection() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="col-12 col-md-5 p-3 p-md-5 rounded"
      style={{
        backgroundColor: "#eef7f1",
        maxWidth: "400px", // reduced from 500px for a narrower look
        width: "100%",
        margin: "auto",
      }}
    >
      <div className="text-center mb-3">
        <h4
          className="d-inline"
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            color: "#333",
            marginRight: "20px",
          }}
        >
          Sign In
        </h4>
        <h4 className="d-inline text-muted" style={{ cursor: "pointer" }}>
          Join In
        </h4>
      </div>

      <hr />

      <div className="text-center">
        <button
          className="btn btn-lg d-flex align-items-center w-100 mb-2"
          style={{
            color: "black",
            border: "2px solid #2d6a4f",
            backgroundColor: "white",
            padding: "8px 12px",
            height: "auto",
          }}
        >
          <img
            src="./google.png"
            alt="Google logo"
            style={{ height: "24px", width: "24px" }}
            className="me-2"
          />
          <span
            className="flex-grow-1 text-center"
            style={{ fontSize: "0.9rem" }}
          >
            Continue with Google
          </span>
        </button>

        <button
          className="btn btn-lg d-flex align-items-center w-100 mb-2"
          style={{
            color: "black",
            border: "2px solid #2d6a4f",
            backgroundColor: "white",
            padding: "8px 12px",
            height: "auto",
          }}
        >
          <img
            src="./fb.png"
            alt="Facebook logo"
            style={{ height: "24px", width: "24px" }}
            className="me-2"
          />
          <span
            className="flex-grow-1 text-center"
            style={{ fontSize: "0.9rem" }}
          >
            Continue with Facebook
          </span>
        </button>
      </div>

      <p className="text-center mt-3 text-secondary">Or connect with</p>

      <form>
        <div className="form-group">
          <label htmlFor="email" className="text-dark small">
            Email
          </label>
          <input
            type="email"
            className="form-control form-control-lg"
            id="email"
            placeholder="Enter your email"
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "#f8f9fa",
              fontSize: "0.9rem",
              padding: "8px 12px",
            }}
          />
        </div>

        {/* Password Field with Visibility Toggle */}
        <div className="form-group position-relative">
          <label htmlFor="password" className="text-dark small">
            Password
          </label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control form-control-lg"
              id="password"
              placeholder="Enter your password"
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "#f8f9fa",
                fontSize: "0.9rem",
                padding: "8px 12px",
              }}
            />
            <span
              className="input-group-text bg-transparent border-0"
              style={{ cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </span>
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="d-flex justify-content-between align-items-center mt-2">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label text-dark" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <span className="text-dark">Forgot password?</span>
        </div>

        {/* Continue Button */}
        <div className="mt-3">
          <button
            type="submit"
            className="btn btn-lg w-100"
            style={{
              backgroundColor: "#2d6a4f",
              color: "white",
              border: "2px solid #1b4d3e",
              marginTop: "10px",
            }}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
