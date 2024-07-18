import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar h-screen w-1/2 pl-24">
      <div className="sidebar-container sticky top-0">
        <h1 style={{ color: "red" }}>Đặt hàng, giao hàng từ 20 phút.</h1>
        <div className="search-bar">
          <input placeholder="Tìm địa điểm, món ăn,..." spellCheck={false} />
          <button className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button className="loading">
            <i className="fa-solid fa-spinner"></i>
          </button>
          <button className="clear">
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
          <div className="separator"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
