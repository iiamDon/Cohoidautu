import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Logic đăng nhập của bạn ở đây
    console.log("Logging in...");
    // Bạn có thể thêm logic để gửi dữ liệu đăng nhập tới server
  };

  return (
    <div>
      <header>
        <h2 className="logo text-3xl font-bold mb-4 text-center">
          Welcome to MangCut Shop
        </h2>
      </header>

      <div className="wrapper">
        <div className="form-box login">
          <h2 className="text-center font-bold text-2xl">Login</h2>
          <br />
          <form action="/">
            <div className="input-box">
              <span className="icon">
                <i className="fas fa-user"></i>
              </span>
              <input id="text" type="text" required className="input-field" />
              <label htmlFor="text">Username</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <i className="fas fa-lock"></i>
              </span>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                className="input-field"
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="remember-forgot">
              <label htmlFor="showPassword">
                <input
                  type="checkbox"
                  id="showPassword"
                  onChange={togglePassword}
                />
                Show Password
              </label>
              <Link to="/recover" className="register-link">
                Forgot Password?
              </Link>
            </div>
            <button onClick={handleLogin} type="button" className="btn">
              Login
            </button>
            <div className="login-register">
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="register-link">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
