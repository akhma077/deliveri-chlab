import * as React from 'react';

import styles from './index.module.scss';

type Props = {
  children?: JSX.Element | string | any;
};

export const FormLabel: React.FC<Props> = ({ children }) => {
  return (
    <label htmlFor="" className={styles.root}>
      {children}
    </label>
  );
};
