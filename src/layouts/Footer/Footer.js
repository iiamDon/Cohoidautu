import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import zaloIcon from "../../assets/images/zalo-icon.png";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx("footer")}>
      <div className={cx("footer-container")}>
        <div className={cx("footer-info")}>
          <div className={cx("company-info")}>
            <h3>MangCut Shop</h3>
            <p>Số điện thoại: 0348057181</p>
            <p>Email: AnhNVT.B20VT031@stu.ptit.edu.vn</p>
          </div>
          <div className={cx("legal")}>
            <p>Quy chế hoạt động</p>
            <p>Chính sách bảo mật</p>
          </div>
        </div>
        <div className={cx("footer-links")}>
          <div className={cx("services")}>
            <h4>Dịch Vụ</h4>
            <ul>
              <li>
                <a href="/delivery">Giao đồ ăn</a>
              </li>
              <li>
                <a href="/goshoping">Đi chợ</a>
              </li>
            </ul>
          </div>
          <div className={cx("partnerships")}>
            <h4>Hợp tác</h4>
            <ul>
              <li>
                <a href="/openstore">Mở cửa hàng</a>
              </li>
              <li>
                <a href="/coop">Hợp tác về Marketing</a>
              </li>
              <li>
                <a href="/hire">Tuyển dụng</a>
              </li>
            </ul>
          </div>
          <div className={cx("regions")}>
            <h4>Khu vực</h4>
            <ul>
              <li>
                <a href="/hochiminh">Hồ Chí Minh</a>
              </li>
              <li>
                <a href="/hanoi">Hà Nội</a>
              </li>
              <li>
                <a href="/danang">Đà Nẵng</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={cx("footer-social")}>
          <h4>Kết nối với chúng tôi</h4>
          <div className={cx("social-icons")}>
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
              <img
                src={zaloIcon} // Sử dụng ảnh đã import
                alt="Zalo"
                className={cx("zalo-icon")}
              />
            </a>
          </div>
          <div className={cx("language-selector")}>
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
