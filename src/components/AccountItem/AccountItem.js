import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/07/pho-ha-noi-1.jpg"
        alt="hình ảnh minh hoạ"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Ten mon an</span>
        </h4>
        <span className={cx("address")}>Dia chi</span>
      </div>
    </div>
  );
}

export default AccountItem;
