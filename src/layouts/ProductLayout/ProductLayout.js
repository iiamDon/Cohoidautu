import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductList from "../../components/ProductList";
import LoadingSpinner from "../../components/LoadingSpinner";
import styles from "./ProductLayout.module.scss";
import classNames from "classnames";

const cx = classNames.bind(styles);

const ProductLayout = ({ apiEndpoint, title }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Gọi API để lấy dữ liệu
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [apiEndpoint]);

  return (
    <div className={cx("container")}>
      <div className={cx("product-layout")}>
        <h1>{title}</h1>
        <main>
          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <p>{error}</p>
          ) : (
            <ProductList products={products} />
          )}
        </main>
      </div>
    </div>
  );
};

ProductLayout.propTypes = {
  apiEndpoint: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductLayout;
