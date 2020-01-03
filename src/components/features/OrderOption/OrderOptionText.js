import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = (props) => {
  //console.log(props);
  return (
    <input className={styles.input} type='text' value={props.currentValue} onChange={(e) => props.setOptionValue(e.target.value)}/>
  );
};

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
