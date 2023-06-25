import * as React from "react";
import styles from "./index.module.scss";
import { Product } from "..";

import iconAdd from "../../shared/assets/img/iconAdd.svg";
import iconDelete from "../../shared/assets/img/iconDelete.svg";

interface Props {
    product: Product;
    count: number;
    addProduct: (item: Product, idx: number) => void;
    deleteProduct: (item: Product, idx: number) => void;
    index: number;
}

export const BasketCard: React.FC<Props> = ({
    product,
    count,
    addProduct,
    deleteProduct,
    index,
}) => {
    return (
        <div className={styles.card}>
            <img src={product.image} alt={product.name} />
            <div className={styles.content}>
                <div className={styles.content_name}>{product.name}</div>
                <div className={styles.content_price}>{product.price}₽</div>
            </div>
            <div className={styles.counter}>
                <img
                    src={iconDelete}
                    alt="iconDelete"
                    onClick={() => deleteProduct(product, index)}
                />
                <div>{count}</div>
                <img
                    src={iconAdd}
                    alt="iconAdd"
                    onClick={() => addProduct(product, index)}
                />
            </div>
        </div>
    );
};
