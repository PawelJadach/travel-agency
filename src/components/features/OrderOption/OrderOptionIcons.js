import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';
import formatPrice from '../../../utils/formatPrice';//

const OrderOptionIcon = (props) => {
  //console.log(props.required);
  return (
    <div>
      {props.required === true ? null : (
        <div className={props.currentValue == '' ? styles.iconActive : styles.icon} onClick={() => {
          props.setOptionValue('');
        }}>
          <Icon name='times-circle'/>
          none
        </div>
      )}
      {props.values.map(value => {
        //console.log(value);
        return (
          <div key={value.id} className={value.id === props.currentValue ? styles.iconActive : styles.icon} onClick={() => {
            props.setOptionValue(value.id);
            //console.log(value.id);
          }}>
            <Icon name={value.icon}/>
            {value.name}
            {formatPrice(value.price)}
          </div>
        );
      })}
    </div>
  );
};

OrderOptionIcon.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.array,
  defaultValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  required: PropTypes.node,
};

export default OrderOptionIcon;
