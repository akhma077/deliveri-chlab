import * as React from 'react';
import styles from './index.module.scss';
import { Product } from '..';

import { ReactComponent as IconAdd } from '../../shared/assets/img/PlusF.svg';
import { ReactComponent as IconDelete } from '../../shared/assets/img/MinusF.svg';

interface Props {
  fullCard?: boolean;
  product: Product;
  count: number;
  addProduct: (item: Product, idx: number) => void;
  deleteProduct: (item: Product, idx: number) => void;
}

export const BasketCard: React.FC<Props> = ({
  fullCard,
  product,
  count,
  addProduct,
  deleteProduct,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cont}>
        <img src={`https://95.163.235.15/${product.image}`} alt={product.name} />
        <div className={styles.content}>
          <div className={styles.content_name}>{product.name}</div>
          {fullCard ? '' : <div className={styles.content_price}>{product.price}₽</div>}
          {fullCard && <div className={styles.summ}>{product.price} ₽</div>}
        </div>
        <div className={styles.counter}>
          <div onClick={() => deleteProduct(product, count)}>
            <IconDelete className={styles.iconDelete} />
          </div>
          <span>{count}</span>
          <div onClick={() => addProduct(product, 1)}>
            <IconAdd />
          </div>
        </div>
      </div>
    </div>
  );
};
