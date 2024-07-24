import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function MenuItem({ data }) {
  return (
    <Link to={data.to} className={cx("menu-item-link")}>
      <button className={cx("menu-item")}>
        <div className={cx("menu-item-content")}>
          {data.icon}
          <span>{data.title}</span>
        </div>
      </button>
    </Link>
  );
}

export default MenuItem;
