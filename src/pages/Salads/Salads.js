import React from "react";
import ProductLayout from "../../layouts/ProductLayout";

const Pizza = () => {
  return (
    <ProductLayout apiEndpoint="http://localhost:3001/salads" title="Pizza" />
  );
};

export default Pizza;
