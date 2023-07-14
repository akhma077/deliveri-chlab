import * as React from 'react';
import styles from './index.module.scss';
// import iconCart from '../../../shared/assets/img/iconCart.svg';
import { useNavigate } from 'react-router-dom';

// import { ReactComponent as Icon } from '../../../shared/assets/img/BasketIcon.svg';

interface Props {
  summ?: number;
  count?: number;
  onClick?: () => void;
}

export const BasketSumm: React.FC<Props> = ({ summ, count, onClick }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.bask} onClick={() => navigate('/basket')}>
      <div>
        <span> {count}</span>
      </div>
      <button>Icon</button>
    </div>
  );
};
