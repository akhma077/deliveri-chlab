import * as React from "react";
import styles from "./index.module.scss";
import { Product } from "..";

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
                <img
                    src={`https://95.163.235.15/${product.image}`}
                    alt={product.name}
                />
                <div className={styles.content}>
                    <div className={styles.content_name}>{product.name}</div>
                    {fullCard ? (
                        ""
                    ) : (
                        <div className={styles.content_price}>
                            {product.price}₽
                        </div>
                    )}
                    {fullCard && (
                        <div className={styles.summ}>{product.price} ₽</div>
                    )}
                </div>
                <div className={styles.counter}>
                    <div onClick={() => deleteProduct(product, count)}>-</div>
                    <span>{count}</span>
                    <div onClick={() => addProduct(product, 1)}>+</div>
                </div>
            </div>
        </div>
    );
};
