import React from "react";
import { Link } from "react-router-dom";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import Menu from "../../components/Popper/Menu";

const cx = classNames.bind(styles);

const currentUser = true;

const handleMenuChange = (menuItem) => {
  switch (menuItem.type) {
    case "language":
      // Handle change language
      break;
    default:
  }
};

const MENU_ITEMS = [
  {
    icon: <i className="fa-solid fa-circle-question"></i>,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <i className="fa-solid fa-moon"></i>,
    title: "Light/Dark mode",
  },
  {
    icon: <i className="fa-solid fa-cog"></i>,
    title: "Settings",
    to: "/setting",
  },
];

const userMenu = [
  {
    icon: <i className="fa-solid fa-user"></i>,
    title: "View profile",
    to: "/user",
  },
  ...MENU_ITEMS,
  {
    icon: <i className="fa-solid fa-right-from-bracket"></i>,
    title: "Logout",
    to: "/logout",
    separate: true,
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

        <Link to="/pizza">
          <button className={cx("btn-ds")}>
            <p>Pizza</p>
          </button>
        </Link>

        <Link to="/drinks">
          <button className={cx("btn-ds")}>
            <p>Đồ uống</p>
          </button>
        </Link>

        <Link to="/sauces">
          <button className={cx("btn-ds")}>
            <p>Nước sốt</p>
          </button>
        </Link>

        <Link to="/salads">
          <button className={cx("btn-ds")}>
            <p>Salads</p>
          </button>
        </Link>

        <Link to="/cart">
          <button className={cx("btn-ds")}>
            <p>Giỏ hàng</p>
          </button>
        </Link>

        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <button>
                <i className="fa-solid fa-bell"></i>
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className={cx("login-button")}>
                  <p>Login</p>
                </button>
              </Link>
            </>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <img
                className={cx("user-avatar")}
                src="https://i.pinimg.com/736x/bc/43/98/bc439871417621836a0eeea768d60944.jpg"
                alt="Tên người dùng"
              />
            ) : (
              <button className={cx("more-button")}>
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
