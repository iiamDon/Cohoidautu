import { useEffect, useState } from "react";
import React from "react";
import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";

import styles from "./Sidebar.module.scss";
import { Wrapper as PopperWrapper } from "../Popper";
import AccountItem from "../AccountItem";

const cx = classNames.bind(styles);

const Sidebar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (searchInput.trim()) {
      setTimeout(() => {
        setSearchResult([1]);
      }, 200);
    } else {
      setSearchResult([]);
    }
  }, [searchInput]);

  return (
    <div className={cx("sidebar", "h-screen", "w-1/2", "pl-24")}>
      <div className={cx("sidebar-container", "sticky", "top-0")}>
        <h1 style={{ color: "red" }}>Đặt hàng, giao hàng từ 20 phút.</h1>
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div
              className={cx("search-result")}
              tabIndex="-1"
              {...attrs}
              data-placement="bottom"
            >
              <PopperWrapper>
                <h4 className={cx("search-title")}>Kết quả</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search-bar")}>
            <input
              placeholder="Tìm địa điểm, món ăn,..."
              spellCheck={false}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className={cx("search-btn")}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className={cx("loading")}>
              <i className="fa-solid fa-spinner"></i>
            </button>
            <button className={cx("clear")}>
              <i className="fa-solid fa-circle-xmark"></i>
            </button>
            <div className={cx("separator")}></div>
          </div>
        </Tippy>
      </div>
    </div>
  );
};

export default Sidebar;
