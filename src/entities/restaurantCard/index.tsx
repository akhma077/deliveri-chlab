import * as React from "react";
import { Product } from "../types";
import styles from "./index.module.scss";

import { ReactComponent as IconAdd } from "../../shared/assets/img/PlusF.svg";
import { ReactComponent as IconDelete } from "../../shared/assets/img/MinusF.svg";
import classNames from "classnames";
import { CardButton, image_api } from "../../shared";

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
            <img src={`${image_api}/${product.image}`} alt={product.name} />
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
                    <CardButton
                        onClick={() => deleteToBasket(product, productCount)}
                    >
                        -
                    </CardButton>
                    <div className={styles.counter}>{productCount}</div>

                    <CardButton onClick={() => addToBasket(product, 1)}>
                        +
                    </CardButton>
                </div>
            )}
        </div>
    );
};
