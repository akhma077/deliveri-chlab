import * as React from "react";
import styles from "./index.module.scss";
import { Product, RestaurantCard } from "../../entities";

interface Props {
    data: Product[];
    resetCount: any;
    setResetCount: (arg: any) => void;
    basketData: any;
    setBasketData: any;
}

export const RestaurantContent: React.FC<Props> = ({
    data,
    resetCount,
    setResetCount,
    basketData,
    setBasketData,
}) => {
    // Добавление продуктов в коризну
    const handleClickAdd = (item: Product, idx: number) => {
        if (idx === 0) {
            setBasketData((prev: any) => [...prev, [item]]);
        } else {
            basketData.map((elem: any, index: number) => {
                if (elem[0].id === item.id)
                    setBasketData((prev: any) => {
                        prev[index].push(item);
                        return [...prev];
                    });
            });
        }
    };

    // Удаление продуктов из корзины
    const handleClickDelete = (item: Product, idx: number) => {
        basketData.map((elem: any, index: number) => {
            if (elem[0].id === item.id && elem.length === 1) {
                setBasketData(
                    [...basketData].filter(
                        (elemFil: any, indexFil: number) =>
                            elemFil[0].id !== elem[0].id
                    )
                );
            }
            if (elem[0].id === item.id && elem.length !== 1) {
                setBasketData((prev: any) => {
                    prev[index].pop();
                    return [...prev];
                });
            }
        });
    };

    return (
        <div className={styles.content}>
            {data.map((item) => (
                <RestaurantCard
                    product={item}
                    resetCount={resetCount}
                    setResetCount={setResetCount}
                    basketData={basketData}
                    key={item.id}
                    addToBasket={handleClickAdd}
                    deleteToBasket={handleClickDelete}
                />
            ))}
        </div>
    );
};
