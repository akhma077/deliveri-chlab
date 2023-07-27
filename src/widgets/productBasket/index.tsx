import * as React from "react";
import styles from "./index.module.scss";
import { BasketContent, BasketHead } from "../../features";
import { ModaleOne } from "../../shared";
import { useSelector } from "react-redux";
import { selectBasket } from "../../shared/config";
import { Product } from "../../entities";

export const ProductBasket = ({}) => {
    const [modalActive, setModalActive] = React.useState<boolean>(false);
    const { basket } = useSelector(selectBasket);

    const funcReturnBasketSumm = () => {
        let summ = 0;
        basket.map((ars: Product[]) => {
            ars.map((item) => (summ += item.price));
        });
        return summ;
    };

    return (
        <>
            <div className={styles.basket}>
                {modalActive && (
                    <ModaleOne
                        title={"Вы уверены?"}
                        description="Вы  точно хотите очистить все?"
                        clickNo={() => setModalActive(false)}
                        clickYes={() => console.log()}
                    />
                )}
                <BasketHead />
                <BasketContent onlyScroll />
                <div className={styles.basket_summ}>
                    <button>{funcReturnBasketSumm()}₽ - Оплатить</button>
                </div>
            </div>
        </>
    );
};
