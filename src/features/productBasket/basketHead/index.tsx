import * as React from 'react';
import styles from './index.module.scss';

interface Props {
  setModalActive: (arg: boolean) => void;
}

export const BasketHead: React.FC<Props> = ({ setModalActive }) => {
  return (
    <div className={styles.root}>
      <div className={styles.basket_head}>
        <h2>Корзина</h2>
        <button onClick={() => setModalActive(true)}>Очистить</button>
      </div>
    </div>
  );
};
