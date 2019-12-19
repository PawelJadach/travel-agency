import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';
import calculateTotal from '../../../utils/calculateTotal';
import formatPrice from '../../../utils/formatPrice';
// import pricing from '../../../data/pricing.json';

const OrderSummary = ({ cost, opt }) => {
  // console.log(cost);
  const totalPrice = calculateTotal(formatPrice(cost), opt);
  return (
    <h2 className={styles.component}>Total: <strong>{totalPrice}</strong></h2>
  );
};

OrderSummary.propTypes = {
  cost: PropTypes.string,
  opt: PropTypes.Node,
};

export default OrderSummary;
