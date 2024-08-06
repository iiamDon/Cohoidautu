import React from "react";
import ProductLayout from "../../layouts/ProductLayout";

const Drinks = () => {
  return (
    <ProductLayout apiEndpoint="http://localhost:3001/drinks" title="Drinks" />
  );
};

export default Drinks;
