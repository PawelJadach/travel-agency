import React, { Component } from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';

class HappyHourAd extends Component {

  render (){
    const { title } = this.props;
    return (
      <>
        <h3 className={styles.title}>{ title }</h3>
        <div className={styles.promoDescription}></div>
      </>
    );
  }
}

HappyHourAd.propTypes = {
  title: PropTypes.string,
};

export default HappyHourAd;