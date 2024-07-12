import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container bg-blue-200">
        <h1>Đặt hàng, giao hàng từ 20 phút.</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
