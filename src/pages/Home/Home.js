import React from "react";
import { useProductContext } from "../../store/ProductContext";
import ProductList from "../../components/ProductList/ProductList";
import "./Home.css";

const Home = () => {
  const { state } = useProductContext();
  const { loading, products, error } = state;

  return (
    <div className="home">
      <main>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ProductList products={products} />
        )}
      </main>
    </div>
  );
};

export default Home;
