import * as React from "react";
import styles from "./index.module.scss";
import { Product } from "..";

import { ReactComponent as IconAdd } from "../../shared/assets/img/iconAdd.svg";
import { ReactComponent as IconDelete } from "../../shared/assets/img/iconDelete.svg";
import { ReactComponent as IconBasketDelete } from "../../shared/assets/img/iconBasketDelete.svg";

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
            <div className={styles.sup_cont}>
                <div className={styles.cont}>
                    <img
                        src={`https://crm.kod06.ru${product.image}`}
                        alt={product.name}
                    />
                    <div className={styles.content}>
                        <div className={styles.content_name}>
                            {product.name}
                        </div>
                        <div className={styles.content_price}>
                            {product.price}₽
                        </div>
                    </div>
                    <div className={styles.counter}>
                        <IconDelete
                            className={styles.count_btn}
                            onClick={() => deleteProduct(product, count)}
                        />
                        <div>{count}</div>
                        <IconAdd
                            className={styles.count_btn}
                            onClick={() => addProduct(product, 1)}
                        />
                    </div>
                </div>

                {fullCard && (
                    <IconBasketDelete
                        className={styles.icon_basket_delete}
                        onClick={() => deleteProduct(product, 1)}
                    />
                )}
            </div>
        </div>
    );
};
