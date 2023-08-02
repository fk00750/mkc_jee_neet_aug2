import React from 'react';
import styles from './index.module.css';

function HeroHead({ subTitle, title, position }) {
  return (
    <div className={styles.hero_head}>
      <h1 className={position === 'center' ? 'text-center' : ''}>{title}</h1>
      <h6 className={position === 'center' ? 'text-center' : 'text-secondary'}>{subTitle}</h6>
    </div>
  );
}

export default HeroHead;
