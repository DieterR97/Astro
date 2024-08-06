import React from 'react';
import { Banner } from './Components/Banner';
import styles from './Overview.module.scss';

const Overview = () => {
  return (
    <div className={styles.overview} >
      <Banner />
    </div>
  )
}

export default Overview
