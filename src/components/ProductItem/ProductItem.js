import React from "react";
import styles from "./ProductItem.module.scss";
import classNames from "classnames";

const cx = classNames.bind(styles);

const ProductItem = ({ product }) => {
  return (
    <div className={cx("product-item")}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price} VND</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
