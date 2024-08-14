import React from "react";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Search from "../../components/Search";
import backgroundImage from "../../assets/images/background.png"; // Import hình nền

const cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <div
      className={cx("sidebar")}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover", // Đảm bảo hình nền phủ kín phần tử
        backgroundPosition: "center", // Căn giữa hình nền
        backgroundRepeat: "no-repeat", // Không lặp lại hình nền
      }}
    >
      <div className={cx("sidebar-container")}>
        <h1 className={cx("title")}>Đặt hàng, giao hàng từ 20 phút.</h1>
        <Search />
      </div>
    </div>
  );
};

export default Sidebar;
