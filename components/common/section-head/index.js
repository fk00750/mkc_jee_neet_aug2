import React from 'react';
import styles from './index.module.css';

function SectionHead({ subTitle, title, position }) {
  return (
    <div className={styles.section_head}>
      <h6 className={position === 'center' ? 'text-center text-primary' : 'text-primary'}>{subTitle}</h6>
      <h1 className={position === 'center' ? 'text-center' : ''}>{title}</h1>
    </div>
  );
}

export default SectionHead;
