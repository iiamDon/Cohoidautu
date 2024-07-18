import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header sticky top-0">
      <div className="header-content">
        <a href="/">
          <img src="/logo.png" className="h-11 w-23" alt="logo" />
        </a>
        <Link to="/">
          <button className="text-black-500 hover:text-red-500">
            <p>Trang chủ</p>
          </button>
        </Link>

        <Link to="/">
          <button className="text-black-500 hover:text-red-500">
            <p>Đồ ăn</p>
          </button>
        </Link>

        <Link to="/">
          <button className="text-black-500 hover:text-red-500">
            <p>Thực phẩm</p>
          </button>
        </Link>

        <Link to="/">
          <button className="text-black-500 hover:text-red-500">
            <p>Hoa</p>
          </button>
        </Link>

        <Link to="/">
          <button className="text-black-500 hover:text-red-500">
            <p>Siêu thị</p>
          </button>
        </Link>

        <Link to="/">
          <button className="text-black-500 hover:text-red-500">
            <p>Giỏ hàng</p>
          </button>
        </Link>

        <Link to="/login">
          <button className="login-button">
            <p>Login</p>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
