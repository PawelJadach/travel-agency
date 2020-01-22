import React, { Component } from 'react';
import styles from './HappyHourAd.scss';

class HappyHourAd extends Component {

  render (){
    return (
      <>
        <h3 className={styles.title}></h3>
        <div className={styles.promoDescription}></div>
      </>
    );
  }
}

export default HappyHourAd;