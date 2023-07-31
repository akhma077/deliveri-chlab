import React from 'react';
import styles from './index.module.scss';
import { useSelector } from 'react-redux';
import { selectBasket } from '../../shared/config';
import { Product } from '../../entities';
import { useNavigate } from 'react-router';

interface Props {}

export const BasketFooterPanel: React.FC<Props> = ({}) => {
  const { basket } = useSelector(selectBasket);

  const [basketCountTitle, setBasketCountTitle] = React.useState<string>('Количество');

  const navigate = useNavigate();

  const screenWidth = window.screen.width;
  React.useEffect(() => {
    if (screenWidth < 500) setBasketCountTitle('Кол-во');
  }, [screenWidth]);

  const funcReturnBasketCountOrSumm = (type: string) => {
    let count = 0;
    let summ = 0;

    switch (type) {
      case 'count':
        basket.map((ars: Product[]) => {
          count += ars.length;
        });
        return count;
        break;
      case 'summ':
        basket.map((ars: Product[]) => {
          ars.map((item) => (summ += item.price));
        });
        return summ;
        break;

      default:
        return 0;
        break;
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.basket}>
        <div className={styles.summ}>Сумма: {funcReturnBasketCountOrSumm('summ')}₽</div>
        <div className={styles.count}>
          {basketCountTitle}: {funcReturnBasketCountOrSumm('count')}
        </div>
        <button className={styles.basket__btn} onClick={() => navigate('/checkoutPage')}>
          Оплатить
        </button>
      </div>
    </div>
  );
};
