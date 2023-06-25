import React from 'react';

import styles from './restHeader.module.scss';

export const RestarauntHeader: React.FC = () => {
  return (
    <div className={styles.restHeader}>
      <div className={styles.root}>
        <div className={styles.root__desc}>
          <h2 className={styles.root__desc__title}>Бургер Кинг</h2>
          <section className={styles.root__desc__section}>
            <div className={styles.root__desc__section__rating}>rating 4.7</div>
            <div className={styles.root__desc__section__info}>info</div>
          </section>
        </div>
      </div>
    </div>
  );
};
