import React from "react";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Search from "../Search";

const cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <div className={cx("sidebar", "h-screen", "w-1/2", "pl-24")}>
      <div className={cx("sidebar-container", "sticky", "top-0")}>
        <h1 style={{ color: "red" }}>Đặt hàng, giao hàng từ 20 phút.</h1>
        <Search />
      </div>
    </div>
  );
};

export default Sidebar;
