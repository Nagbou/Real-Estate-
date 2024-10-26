import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import OAuth from "../components/OAuth";
import "./SignIn.css"; // Import the external CSS file

export default function Signin() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h1 className="signin-header">Welcome Back! 🎉</h1>
        <form onSubmit={handleSubmit} className="signin-form">
          <input
            type="email"
            className="signin-input"
            placeholder="Your e-mail"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            className="signin-input mb-3"
            placeholder="Your password"
            id="password"
            onChange={handleChange}
          />
          <div className="signin-links">
            <small
              className="signin-link"
              onClick={() => navigate("/forgot-password")}
            >
              Forget password?
            </small>
            <small
              className="signin-link ms-4"
              onClick={() => navigate("/signup")}
            >
              Create an account?
            </small>
          </div>
          <button
            className="signin-button"
            id="submit_btn"
            disabled={loading}
          >
            {loading ? "Loading..." : "Log In"}
          </button>
        </form>
        <OAuth />
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}
