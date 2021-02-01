import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAllItems } from "../../redux/actions";

import styles from './BasketFooter.module.scss'

const CheckoutFooter = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    if (!products.length) {
      return 0;
    }
    return products
      .reduce((acc, p) => acc + p.quantity * parseInt(p.price), 0)
      .toFixed(2);
  };

  const handleDeleteAllItems = () => {
    dispatch(deleteAllItems());
  };

  return (
    <div className={styles['footer-container']}>
      <div>
        <span>Total : $ {getTotalPrice()}</span>
      </div>
      <div>
        <a onClick={handleDeleteAllItems}>Clear</a>
        <button onClick={handleDeleteAllItems}>Checkout ></button>
      </div>
    </div>
  );
};

export default CheckoutFooter;
