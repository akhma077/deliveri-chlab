import * as React from "react";
import styles from "./index.module.scss";
import { Product } from "..";

import iconAdd from "../../shared/assets/img/iconAdd.svg";
import iconDelete from "../../shared/assets/img/iconDelete.svg";
import iconBasketDelete from "../../shared/assets/img/iconBasketDelete.svg";

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
            <div className={styles.sup_cont}>
                <div className={styles.cont}>
                    <img src={product.image} alt={product.name} />
                    <div className={styles.content}>
                        <div className={styles.content_name}>
                            {product.name}
                        </div>
                        <div className={styles.content_price}>
                            {product.price}₽
                        </div>
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
                {fullCard && <div className={styles.summ}>{summ}₽</div>}
                {fullCard && (
                    <img
                        className={styles.icon_basket_delete}
                        src={iconBasketDelete}
                        alt="iconBasketDelete"
                        onClick={() => deleteProductArray(product, index)}
                    />
                )}
            </div>
            {/* <div className={styles.sub_content}>
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
            </div> */}
        </div>
    );
};
