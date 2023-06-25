import * as React from "react";
import styles from "./index.module.scss";
import { BasketCard, Product } from "../../../entities";

interface Props {
    data: any;
    setData: any;
    setResetCount: (arg: any) => void;
}

export const BasketContent: React.FC<Props> = ({
    data,
    setData,
    setResetCount,
}) => {
    // Добавление продуктов в коризну
    const handleClickAdd = (item: Product, idx: number) => {
        setData((prev: any) => {
            prev[idx].push(item);
            return [...prev];
        });
    };
    // Удаление продуктов из корзины
    const handleClickDelete = (item: Product, idx: number) => {
        if (data[idx].length === 1) {
            setData((prev: any) => {
                return [
                    ...prev.filter((elem: any, index: number) => index !== idx),
                ];
            });
            setResetCount((prev: any) => ({ ...prev, [item.id]: true }));
        } else {
            setData((prev: any) => {
                prev[idx].pop();
                return [...prev];
            });
        }
    };

    return (
        <div className={styles.content}>
            {data.map((products: Product[], index: number) => {
                return products[0] ? (
                    <BasketCard
                        product={products[0]}
                        count={products.length}
                        index={index}
                        addProduct={handleClickAdd}
                        deleteProduct={handleClickDelete}
                        key={index}
                    />
                ) : (
                    <div>asd</div>
                );
            })}
        </div>
    );
};
