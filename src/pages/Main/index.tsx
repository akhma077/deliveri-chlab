import * as React from 'react';

import styles from './index.module.scss';
import { RestarauntBlock } from '../../widgets';

export const Restaurant: React.FC = () => {
  return (
    <main className={styles.main}>
      <h2 className={styles.main__title}>Все рестораны </h2>

      <RestarauntBlock />
    </main>
  );
};
