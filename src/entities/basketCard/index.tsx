import * as React from 'react';
import styles from './index.module.scss';
import { Product } from '..';

// import { ReactComponent as IconBasketDelete } from '../../shared/assets/img/IconBasketDelete.svg';

interface Props {
  fullCard: boolean;
  product: Product;
  count: number;
  addProduct: (item: Product, idx: number) => void;
  deleteProduct: (item: Product, idx: number) => void;
  deleteProductArray: (item: Product, idx: number) => void;
  index: number;
  summ?: number;
}

export const BasketCard: React.FC<Props> = ({
  fullCard,
  product,
  count,
  addProduct,
  deleteProduct,
  deleteProductArray,
  index,
  summ,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cont}>
        <img src={product.image} alt={product.name} />
        <div className={styles.content}>
          <div className={styles.content_name}>{product.name}</div>
          {fullCard ? '' : <div className={styles.content_price}>{product.price}₽</div>}
          {fullCard && <div className={styles.summ}>{summ}₽</div>}
        </div>
        <div className={styles.counter}>
          {/* <img src={'iconDelete'} alt="iconDelete" onClick={() => deleteProduct(product, index)} /> */}

          <div onClick={() => deleteProduct(product, index)}> - </div>
          <span>{count}</span>
          <div onClick={() => addProduct(product, index)}> + </div>
        </div>
      </div>
      {fullCard && (
        // <IconBasketDelete
        //   className={styles.icon_basket_delete}
        //   onClick={() => deleteProductArray(product, index)}
        // />

        <div className={styles.icon_basket_delete}>+</div>
      )}
    </div>
  );
};
