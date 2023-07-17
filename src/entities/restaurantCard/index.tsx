import * as React from "react";
import { Product } from "../types";
import styles from "./index.module.scss";

import iconAdd from "../../shared/assets/img/iconAdd.svg";
import iconDelete from "../../shared/assets/img/iconDelete.svg";

interface Props {
    product: Product;
    productCount?: number;
    addToBasket: (item: Product, idx: number) => void;
    deleteToBasket: (item: Product, idx: number | undefined) => void;
}

export const RestaurantCard: React.FC<Props> = ({
    product,
    productCount,
    addToBasket,
    deleteToBasket,
}) => {
    return (
        <div className={styles.card}>
            <img
                src={`https://crm.kod06.ru${product.image}`}
                alt={product.name}
            />
            <div>
                <div className={styles.card_price}>{product.price}₽</div>
                <div className={styles.card_name}>{product.name}</div>
                <div className={styles.card_weight}>{product.weight}</div>
            </div>

            {productCount === 0 ? (
                <div className={styles.btn_div}>
                    <button onClick={() => addToBasket(product, 0)}>
                        Добавить
                    </button>
                </div>
            ) : (
                <div className={styles.card_count}>
                    <img
                        src={iconDelete}
                        alt="iconDelete"
                        onClick={() => deleteToBasket(product, productCount)}
                    />
                    <div className={styles.counter}>{productCount}</div>
                    <img
                        src={iconAdd}
                        alt="iconAdd"
                        onClick={() => addToBasket(product, 1)}
                    />
                </div>
            )}
        </div>
    );
};
