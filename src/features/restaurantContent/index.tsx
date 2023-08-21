import * as React from "react";
import styles from "./index.module.scss";
import { Product, RestaurantCard } from "../../entities";
import { selectBasket, useActions } from "../../shared/config";
import { useSelector } from "react-redux";

interface Props {
    title: string;
    titleId: number;
    data: Product[];
}

export const RestaurantContent = React.forwardRef<HTMLDivElement, Props>(
    ({ title, titleId, data }, ref) => {
        const { basket } = useSelector(selectBasket);
        const {
            addFirstProductToBasket,
            addProductToBasket,
            deleteFirstProductToBasket,
            deleteProductToBasket,
        } = useActions();

        // Добавление продуктов в коризну
        const handleClickAdd = (item: Product, idx: number) => {
            if (idx === 0) {
                addFirstProductToBasket(item);
            } else {
                addProductToBasket(item);
            }
        };

        // Удаление продуктов из корзины
        const handleClickDelete = (item: Product, idx: number | undefined) => {
            if (idx === 1) {
                deleteFirstProductToBasket(item);
            } else {
                deleteProductToBasket(item);
            }
        };
        // Количество этих продуктов в корзине
        const funcReturnBasketCount = (item: Product) => {
            let count = 0;
            basket.map((ars: Product[]) => {
                if (ars[0] && ars[0].id === item.id) {
                    count = ars.length;
                }
            });
            return count;
        };

        return (
            <>
                <div className={styles.head} id={`scroll-to-${titleId}`}>
                    {title}
                </div>
                <div className={styles.content} id="fuuuuu">
                    {data.map((item) => (
                        <RestaurantCard
                            product={item}
                            key={item.id}
                            productCount={funcReturnBasketCount(item)}
                            addToBasket={handleClickAdd}
                            deleteToBasket={handleClickDelete}
                        />
                    ))}
                </div>
            </>
        );
    }
);
