import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductList.module.scss";
import classNames from "classnames";

const cx = classNames.bind(styles);

const ProductList = ({ products }) => {
  return (
    <div className={cx("product-list")}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
