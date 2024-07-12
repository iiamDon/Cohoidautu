import React from "react";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price} VND</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
