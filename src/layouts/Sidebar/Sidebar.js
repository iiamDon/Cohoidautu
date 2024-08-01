import React from "react";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Search from "../../components/Search";

const cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <div className={cx("sidebar")}>
      <div className={cx("sidebar-container")}>
        <h1 className={cx("title")}>Đặt hàng, giao hàng từ 20 phút.</h1>
        <Search />
      </div>
    </div>
  );
};

export default Sidebar;
