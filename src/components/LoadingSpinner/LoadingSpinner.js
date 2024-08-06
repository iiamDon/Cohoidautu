import React from "react";
import styles from "./LoadingSpinner.module.scss";
import classNames from "classnames";

const cx = classNames.bind(styles);

const LoadingSpinner = () => {
  return <div className={styles.spinner}>Loading...</div>;
};

export default LoadingSpinner;
