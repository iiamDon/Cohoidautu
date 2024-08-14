import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import zaloIcon from "../../assets/images/zalo-icon.png";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx("footer")}>
      <div className={cx("map-container")}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.330828267009!2d105.7859720291946!3d20.979371746126944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accdd8a1ad71%3A0xa2f9b16036648187!2zSOG7jWMgdmnhu4duIEPDtG5nIG5naOG7hyBCxrB1IGNow61uaCB2aeG7hW4gdGjDtG5n!5e0!3m2!1svi!2s!4v1722846778438!5m2!1svi!2s"
          title="Bản đồ vị trí học viện Công nghệ Bưu chính viễn thông"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
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
