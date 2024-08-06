import React from "react";
import ProductLayout from "../../layouts/ProductLayout";

const Sauces = () => {
  return (
    <ProductLayout apiEndpoint="http://localhost:3001/sauces" title="Sauces" />
  );
};

export default Sauces;
