import React from "react";
import { useProductContext } from "../../store/ProductContext";
import ProductList from "../../components/ProductList";
import styles from "./Home.module.scss";
import classNames from "classnames";

const cx = classNames.bind(styles);

const Home = () => {
  const { state } = useProductContext();
  const { loading, products, error } = state;

  return (
    <div className={cx("container")}>
      <div className={cx("home")}>
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
      <div className={cx("map-container")}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.330828267009!2d105.7859720291946!3d20.979371746126944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accdd8a1ad71%3A0xa2f9b16036648187!2zSOG7jWMgdmnhu4duIEPDtG5nIG5naOG7hyBCxrB1IGNow61uaCB2aeG7hW4gdGjDtG5n!5e0!3m2!1svi!2s!4v1722846778438!5m2!1svi!2s"
          title="Bản đồ vị trí học viện Công nghệ Bưu chính viễn thông"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
