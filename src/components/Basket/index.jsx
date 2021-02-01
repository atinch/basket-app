import React from "react";
import { useSelector } from "react-redux";

import BasketItem from "../BasketItem/index";
import BasketFooter from "../BasketFooter";

import styles from "./Basket.module.scss";

const Basket = () => {
  const products = useSelector(state => state.products);

  if (products.length === 0) {
    return <div className={styles.emptyBasket}>No Items found...</div>;
  }

  const renderBasketItems = () => {
    return products.map(product => (
      <BasketItem {...product} key={product.id} />
    ));
  };

  return (
    <div className={styles.wrapper}>
      {renderBasketItems()}
      <BasketFooter />
    </div>
  );
};

export default Basket;
