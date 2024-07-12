import React, { useState, useRef } from "react";
import "./Login.css";

function Recover() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [checked, setChecked] = useState(null);

  const usernameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (checked === "username") {
      console.log("Username:", username);
    } else if (checked === "email") {
      console.log("Email:", email);
    }
  };

  const handleFocus = (field) => {
    setChecked(field);
    if (field === "username") {
      usernameRef.current.focus();
    } else if (field === "email") {
      emailRef.current.focus();
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="form-box login">
          <h2 className="text-center font-bold text-2xl">Thay đổi mật khẩu</h2>
          <br />
          <p className="text-xs">
            Vui lòng điền tên hoặc email bạn sử dụng để đăng nhập
          </p>
          <br />

          <form onSubmit={handleSubmit}>
            <div>
              <div className="input-box flex items-center">
                <input
                  type="radio"
                  checked={checked === "username"}
                  onChange={() => handleFocus("username")}
                  className="mr-2"
                />
                <input
                  ref={usernameRef}
                  id="username"
                  type="text"
                  required
                  className="input-field"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onFocus={() => handleFocus("username")}
                />
                <label htmlFor="username">Username</label>
              </div>
              <div className="input-box flex items-center">
                <input
                  type="radio"
                  checked={checked === "email"}
                  onChange={() => handleFocus("email")}
                  className="mr-2"
                />
                <input
                  ref={emailRef}
                  id="email"
                  type="email"
                  required
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => handleFocus("email")}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Recover;
