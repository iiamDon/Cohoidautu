import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function MenuItem({ data }) {
  const Component = data.to ? Link : "button";

  return (
    <>
      {data.separate && <div className={cx("separator")}></div>}
      <Component to={data.to} className={cx("menu-item-link")}>
        <div className={cx("menu-item")}>
          <div className={cx("menu-item-content")}>
            {data.icon}
            <span>{data.title}</span>
          </div>
        </div>
      </Component>
    </>
  );
}

export default MenuItem;
