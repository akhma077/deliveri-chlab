import * as React from 'react';
import { Button, ButtonVariant } from '../../shared/UI/Button';
import { ReactComponent as CheckMarkIcon } from '../../shared/assets/img/checkmark_icon_128476.svg';

import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';

export const Success: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.root}>
      <div className={styles.root__container}>
        <div className={styles.root__container__icon}>
          <CheckMarkIcon />
        </div>
        <h2 className={styles.root__container__title}> Ваш заказ успешно принят </h2>

        <span className={styles.root__container__description}>
          И в ближайшее время курьер выедет на доставку!
        </span>

        <Button variant={ButtonVariant.Base} onClick={() => navigate('/')}>
          На главную
        </Button>
      </div>
    </div>
  );
};
