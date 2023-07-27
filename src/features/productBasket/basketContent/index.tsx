import * as React from 'react';
import styles from './index.module.scss';
import { BasketCard, Product } from '../../../entities';
import { useSelector } from 'react-redux';
import { selectBasket, useActions } from '../../../shared/config';

interface Props {
  fullCard?: boolean;
  onlyScroll?: boolean;
}

export const BasketContent: React.FC<Props> = ({ fullCard, onlyScroll }) => {
  const { basket } = useSelector(selectBasket);

  const {
    addFirstProductToBasket,
    addProductToBasket,
    deleteFirstProductToBasket,
    deleteProductToBasket,
  } = useActions();

  // Добавление продуктов в коризну
  const handleClickAdd = (item: Product, idx: number) => {
    if (idx === 0) {
      addFirstProductToBasket(item);
    } else {
      addProductToBasket(item);
    }
  };

  // Удаление продуктов из корзины
  const handleClickDelete = (item: Product, idx: number | undefined) => {
    if (idx === 1) {
      deleteFirstProductToBasket(item);
    } else {
      deleteProductToBasket(item);
    }
  };
  // Количество этих продуктов в корзине
  const funcReturnBasketCount = (item: Product) => {
    let count = 0;
    basket.map((ars: Product[]) => {
      if (ars[0] && ars[0].id === item.id) {
        count = ars.length;
      }
    });
    return count;
  };

  return (
    <div className={styles.content + ' ' + (onlyScroll ? styles.content_scroll : '')}>
      {basket.map((products: Product[], index: number) => {
        return products[0] ? (
          <BasketCard
            fullCard={fullCard}
            product={products[0]}
            count={funcReturnBasketCount(products[0])}
            addProduct={handleClickAdd}
            deleteProduct={handleClickDelete}
            key={index}
            summ={300}
          />
        ) : (
          <div>Возникла ошибка</div>
        );
      })}
    </div>
  );
};
