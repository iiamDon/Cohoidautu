import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <div className="company-info">
            <h3>MangCut Shop</h3>
            <p>Số điện thoại: 0348057181</p>
            <p>Email: AnhNVT.B20VT031@stu.ptit.edu.vn</p>
          </div>
          <div className="legal">
            <p>Quy chế hoạt động</p>
            <p>Chính sách bảo mật</p>
          </div>
        </div>
        <div className="footer-links">
          <div className="services">
            <h4>Dịch Vụ</h4>
            <ul>
              <li>
                <a href="/giaodoan">Giao đồ ăn</a>
              </li>
              <li>
                <a href="/dicho">Đi chợ</a>
              </li>
            </ul>
          </div>
          <div className="partnerships">
            <h4>Hợp tác</h4>
            <ul>
              <li>
                <a href="/store">Mở cửa hàng</a>
              </li>
              <li>
                <a href="/hoptac">Hợp tác về Marketing</a>
              </li>
              <li>
                <a href="/tuyendung">Tuyển dụng</a>
              </li>
            </ul>
          </div>
          <div className="regions">
            <h4>Khu vực</h4>
            <ul>
              <li>
                <a href="/regions">Hồ Chí Minh</a>
              </li>
              <li>
                <a href="/regions">Hà Nội</a>
              </li>
              <li>
                <a href="/regions">Đà Nẵng</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <h4>Kết nối với chúng tôi</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/mangcutt.02"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/tuan.anh02/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://zalo.me" target="_blank" rel="noopener noreferrer">
              <img src="/zalo-icon.png" alt="Zalo" className="zalo-icon" />
            </a>
          </div>
          <div className="language-selector">
            <select>
              <option value="vi">Vietnamese</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
      <p style={{ textAlign: "center" }}>
        &copy; 2024 MangCut Shop. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
