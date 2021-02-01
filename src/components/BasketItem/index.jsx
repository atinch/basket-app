import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { changeQuantity } from "../../redux/actions";
import Quantity from "./Quantity";

import styles from "./BasketItem.module.scss";

const BasketItem = React.memo(props => {
  const dispatch = useDispatch();

  const handleUserChange = quantity => {
    dispatch(changeQuantity(props.id, quantity));
  };

  const totalPrice = (props.price * props.quantity).toFixed(2);

  return (
    <div className={styles.container} id='row'>
      <div className={styles.product}>
        <h3>{props.name}</h3>${props.price}
      </div>
      <div className={styles.quantity}>
        <Quantity quantity={props.quantity} onUserChange={handleUserChange} />
      </div>
      <div className={styles.price}>
        <strong> ${totalPrice}</strong>
        <button onClick={() => handleUserChange(0)}>X</button>
      </div>
    </div>
  );
});

BasketItem.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};
export default BasketItem;
