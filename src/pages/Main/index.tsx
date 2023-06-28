import * as React from 'react';

import styles from './index.module.scss';
import { RestarauntBlock } from '../../widgets';

export const Restaurant: React.FC = () => {
  return (
    <main className={styles.main}>
      <h2 className={styles.main__title}>Pестораны </h2>

      <div className={styles.main__block}>
        <RestarauntBlock />
      </div>
    </main>
  );
};
