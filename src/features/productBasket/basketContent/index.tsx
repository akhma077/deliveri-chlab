import * as React from 'react';
import styles from './index.module.scss';
import { BasketCard, Product } from '../../../entities';

interface Props {
  data: any;
  setData: any;
  setResetCount: (arg: any) => void;
  fullCard?: boolean;
  onlyScroll?: boolean;
}

export const BasketContent: React.FC<Props> = ({
  data,
  setData,
  setResetCount,
  fullCard,
  onlyScroll,
}) => {
  // Добавление продуктов в коризну
  const handleClickAdd = (item: Product, idx: number) => {
    setData((prev: any) => {
      console.log(prev);
      prev[idx].push(item);
      return [...prev];
    });
  };
  // Удаление продуктов из корзины
  const handleClickDelete = (item: Product, idx: number) => {
    if (data[idx].length === 1) {
      setData((prev: any) => {
        return [...prev.filter((elem: any, index: number) => index !== idx)];
      });
      setResetCount((prev: any) => ({ ...prev, [item.id]: true }));
    } else {
      setData((prev: any) => {
        prev[idx].pop();
        return [...prev];
      });
    }
  };

  const handleClickDeleteArray = (item: Product, idx: number) => {
    setData((prev: any) => {
      return [...prev.filter((elem: any, index: number) => index !== idx)];
    });
  };

  const funcSumm = (arrs: Product[]) => {
    let summ = 0;
    arrs.map((item) => (summ += item.price));
    return summ;
  };

  return (
    <div className={styles.content + ' ' + (onlyScroll ? styles.content_scroll : '')}>
      {data.map((products: Product[], index: number) => {
        return products[0] ? (
          <BasketCard
            summ={funcSumm(products)}
            fullCard={fullCard}
            product={products[0]}
            count={products.length}
            index={index}
            addProduct={handleClickAdd}
            deleteProduct={handleClickDelete}
            deleteProductArray={handleClickDeleteArray}
            key={index}
          />
        ) : (
          <div>asd</div>
        );
      })}
    </div>
  );
};
