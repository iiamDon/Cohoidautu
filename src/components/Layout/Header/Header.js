import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
<<<<<<< HEAD
    <header className="header sticky top-0">
=======
    <header className="header">
>>>>>>> 7d747a155fbac383f008aaef4efa392750c7d34e
      <div className="header-content">
        <a href="/">
          <img src="/logo.png" className="h-11 w-23" alt="logo" />
        </a>
        <Link to="/">
<<<<<<< HEAD
          <button className="text-black-500 hover:text-red-500">
            <p>Trang chủ</p>
=======
          <button>
            <strong>Trang chủ</strong>
>>>>>>> 7d747a155fbac383f008aaef4efa392750c7d34e
          </button>
        </Link>

        <Link to="/">
<<<<<<< HEAD
          <button className="text-black-500 hover:text-red-500">
            <p>Đồ ăn</p>
=======
          <button>
            <strong>Đồ ăn</strong>
>>>>>>> 7d747a155fbac383f008aaef4efa392750c7d34e
          </button>
        </Link>

        <Link to="/">
<<<<<<< HEAD
          <button className="text-black-500 hover:text-red-500">
            <p>Thực phẩm</p>
=======
          <button>
            <strong>Thực phẩm</strong>
>>>>>>> 7d747a155fbac383f008aaef4efa392750c7d34e
          </button>
        </Link>

        <Link to="/">
<<<<<<< HEAD
          <button className="text-black-500 hover:text-red-500">
            <p>Hoa</p>
=======
          <button>
            <strong>Hoa</strong>
>>>>>>> 7d747a155fbac383f008aaef4efa392750c7d34e
          </button>
        </Link>

        <Link to="/">
<<<<<<< HEAD
          <button className="text-black-500 hover:text-red-500">
            <p>Siêu thị</p>
=======
          <button>
            <strong>Siêu thị</strong>
>>>>>>> 7d747a155fbac383f008aaef4efa392750c7d34e
          </button>
        </Link>

        <Link to="/">
<<<<<<< HEAD
          <button className="text-black-500 hover:text-red-500">
            <p>Giỏ hàng</p>
=======
          <button>
            <strong>Giỏ hàng</strong>
>>>>>>> 7d747a155fbac383f008aaef4efa392750c7d34e
          </button>
        </Link>

        <Link to="/login">
          <button className="login-button">
<<<<<<< HEAD
            <p>Login</p>
=======
            <strong>Login</strong>
>>>>>>> 7d747a155fbac383f008aaef4efa392750c7d34e
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
