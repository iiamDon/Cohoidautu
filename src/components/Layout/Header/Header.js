import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <a href="/">
          <img src="/logo.png" className="h-11 w-23" alt="logo" />
        </a>
        <Link to="/">
          <button>
            <strong>Trang chủ</strong>
          </button>
        </Link>

        <Link to="/">
          <button>
            <strong>Đồ ăn</strong>
          </button>
        </Link>

        <Link to="/">
          <button>
            <strong>Thực phẩm</strong>
          </button>
        </Link>

        <Link to="/">
          <button>
            <strong>Hoa</strong>
          </button>
        </Link>

        <Link to="/">
          <button>
            <strong>Siêu thị</strong>
          </button>
        </Link>

        <Link to="/">
          <button>
            <strong>Giỏ hàng</strong>
          </button>
        </Link>

        <Link to="/login">
          <button className="login-button">
            <strong>Login</strong>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
