import * as React from "react";
import styles from "./index.module.scss";
import { BasketContent, BasketHead } from "../../features";
import { ModaleOne, useBasketData } from "../../shared";
import { useNavigate } from "react-router-dom";

export const ProductBasket = ({}) => {
    const navigate = useNavigate();
    const { summ } = useBasketData();
    const [modalActive, setModalActive] = React.useState<boolean>(false);

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
                <div
                    className={styles.basket_summ}
                    onClick={() => navigate("/checkoutPage")}
                >
                    <button>{summ}₽ - Оплатить</button>
                </div>
            </div>
        </>
    );
};
