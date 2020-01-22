import React, { Component } from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';

class HappyHourAd extends Component {

  render (){
    const { title, promoDescription } = this.props;
    return (
      <>
        <h3 className={styles.title}>{ title }</h3>
        <div className={styles.promoDescription}>{ promoDescription }</div>
      </>
    );
  }
}

HappyHourAd.propTypes = {
  title: PropTypes.string,
  promoDescription: PropTypes.string,
};

export default HappyHourAd;