import React from "react";
import { Link } from "react-router-dom";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import Menu from "../../Popper/Menu";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <i className="fa-solid fa-circle-question"></i>,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <i className="fa-solid fa-keyboard"></i>,
    title: "Keyboard shortcut",
  },
  {
    icon: <i className="fa-solid fa-cog"></i>,
    title: "Settings",
  },
];

const Header = () => {
  return (
    <header className={cx("header")}>
      <div className={cx("header-content")}>
        <a href="/">
          <img src="/logo.png" className="h-11 w-23" alt="logo" />
        </a>

        <Link to="/">
          <button className={cx("btn-ds")}>
            <p>Trang chủ</p>
          </button>
        </Link>

        <Link to="/">
          <button className={cx("btn-ds")}>
            <p>Đồ ăn</p>
          </button>
        </Link>

        <Link to="/">
          <button className={cx("btn-ds")}>
            <p>Thực phẩm</p>
          </button>
        </Link>

        <Link to="/">
          <button className={cx("btn-ds")}>
            <p>Hoa</p>
          </button>
        </Link>

        <Link to="/">
          <button className={cx("btn-ds")}>
            <p>Siêu thị</p>
          </button>
        </Link>

        <Link to="/">
          <button className={cx("btn-ds")}>
            <p>Giỏ hàng</p>
          </button>
        </Link>

        <Link to="/login">
          <button className={cx("login-button")}>
            <p>Login</p>
          </button>
        </Link>

        <Menu items={MENU_ITEMS}>
          <button className={cx("more-button")}>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </button>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
