import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.css";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
