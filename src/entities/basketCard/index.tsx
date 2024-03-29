import * as React from "react";
import styles from "./index.module.scss";
import { Product } from "..";
import { CardButton, image_api } from "../../shared";

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
                <div className={styles.info}>
                    <img
                        src={`${image_api}/${product.image}`}
                        alt={product.name}
                    />
                    <div
                        className={styles.content}
                        style={{ width: fullCard ? "80%" : 110 }}
                    >
                        <div className={styles.content_name}>
                            {product.name}
                        </div>
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
                </div>
                <div className={styles.counter}>
                    <CardButton onClick={() => deleteProduct(product, count)}>
                        -
                    </CardButton>
                    <span>{count}</span>
                    <CardButton onClick={() => addProduct(product, 1)}>
                        +
                    </CardButton>
                </div>
            </div>
        </div>
    );
};
