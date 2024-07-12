import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Register() {
  const [showPassword1, setShowPassword1] = useState(false);

  const togglePassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const handleRegister = () => {
    // Logic đăng ký của bạn ở đây
    console.log("Registering...");
    // Bạn có thể thêm logic để gửi dữ liệu đăng ký tới server
  };

  return (
    <div>
      <header>
        <h2 className="logo text-3xl font-bold mb-4 text-center">
          Welcome to MangCut Shop
        </h2>
      </header>
      <div className="wrapper">
        <div className="form-box register">
          <h2 className="text-center font-bold text-2xl">Registration</h2>
          <br />
          <form action="/">
            <div className="input-box">
              <span className="icon">
                <i className="fas fa-user"></i>
              </span>
              <input
                id="new_username"
                type="text"
                required
                className="input-field"
              />
              <label htmlFor="new_username">Username</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                id="new_email"
                type="email"
                required
                className="input-field"
              />
              <label htmlFor="new_email">Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <i className="fas fa-lock"></i>
              </span>
              <input
                id="new_password"
                type={showPassword1 ? "text" : "password"}
                required
                className="input-field"
              />
              <label htmlFor="new_password">Password</label>
            </div>
            <div className="agree">
              <label htmlFor="showPassword1">
                <input
                  type="checkbox"
                  id="showPassword1"
                  onChange={togglePassword1}
                />
                Show Password
              </label>
            </div>
            <button onClick={handleRegister} type="button" className="btn">
              Register
            </button>
            <div className="login-register">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="login-link">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
