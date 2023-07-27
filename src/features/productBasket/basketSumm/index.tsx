import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as BasketIcon } from '../../../shared/assets/img/BasketIcon.svg';

import classNames from 'classnames';

import styles from './index.module.scss';

interface Props {
  summ?: number;
  count?: number;
  onClick?: () => void;
  basketInMobile?: boolean;
}

export const BasketSumm: React.FC<Props> = ({ count, basketInMobile, summ }) => {
  const navigate = useNavigate();
  return (
    <div
      className={classNames(styles.basketInHeader, {
        [styles.bask]: basketInMobile,
      })}
      onClick={() => navigate('/basket')}
    >
      <div
        className={classNames(styles.basketCount, {
          [styles.basketCountMobile]: basketInMobile,
        })}
      >
        <span>{count}</span>
      </div>

      <button
        className={classNames(styles.basketInHeaderButton, {
          [styles.basketIcon]: basketInMobile,
        })}
      >
        {basketInMobile && <BasketIcon />}
      </button>
    </div>
  );
};
