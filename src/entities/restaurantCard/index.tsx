import * as React from "react";
import { Product } from "../types";
import styles from "./index.module.scss";

import iconAdd from "../../shared/assets/img/iconAdd.svg";
import iconDelete from "../../shared/assets/img/iconDelete.svg";

interface Props {
    product: Product;
    resetCount: any;
    setResetCount: (arg: any) => void;
    basketData: any;
    addToBasket: (item: Product, idx: number) => void;
    deleteToBasket: (item: Product, idx: number) => void;
}

export const RestaurantCard: React.FC<Props> = ({
    product,
    resetCount,
    setResetCount,
    basketData,
    addToBasket,
    deleteToBasket,
}) => {
    const [productCount, setProductCount] = React.useState<number>(0);

    React.useEffect(() => {
        basketData.map((elem: any) => {
            if (elem[0].id === product.id) {
                console.log(elem.length, "element - length");
                setProductCount(elem.length);
            }
        });
        if (resetCount[product.id]) setProductCount(0);
    }, [basketData]);

    const handleClickCounter = (type: string) => {
        if (type === "+") {
            addToBasket(product, 1);
            setProductCount((prev) => (prev += 1));
        } else {
            deleteToBasket(product, 1);
            setProductCount((prev) => (prev -= 1));
        }
    };

    const addProductToBasket = () => {
        addToBasket(product, 0);
        setProductCount((prev) => (prev += 1));
        setResetCount((prev: any) => ({ ...prev, [product.id]: false }));
    };

    return (
        <div className={styles.card}>
            <img src={product.image} alt={product.name} />
            <div>
                <div className={styles.card_price}>{product.price}₽</div>
                <div className={styles.card_name}>{product.name}</div>
                <div className={styles.card_weight}>{product.weight}</div>
            </div>

            {productCount === 0 ? (
                <button onClick={addProductToBasket}>+ Добавить</button>
            ) : (
                <div className={styles.card_count}>
                    <img
                        src={iconDelete}
                        alt="iconDelete"
                        onClick={() => handleClickCounter("-")}
                    />
                    <div className={styles.counter}>{productCount}</div>
                    <img
                        src={iconAdd}
                        alt="iconAdd"
                        onClick={() => handleClickCounter("+")}
                    />
                </div>
            )}
        </div>
    );
};
