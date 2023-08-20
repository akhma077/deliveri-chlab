import React from "react";
import styles from "./index.module.scss";
import { useSelector } from "react-redux";
import { selectBasket } from "../../shared/config";
import { Product } from "../../entities";
import { useNavigate } from "react-router";
import { useBasketData } from "../../shared";

interface Props {}

export const BasketFooterPanel: React.FC<Props> = ({}) => {
    const { count, summ } = useBasketData();

    const [basketCountTitle, setBasketCountTitle] =
        React.useState<string>("Количество");

    const navigate = useNavigate();

    const screenWidth = window.screen.width;
    React.useEffect(() => {
        if (screenWidth < 500) setBasketCountTitle("Кол-во");
    }, [screenWidth]);

    return (
        <div className={styles.root}>
            <div className={styles.basket}>
                <div className={styles.summ}>Сумма: {summ}₽</div>
                <div className={styles.count}>
                    {basketCountTitle}: {count}
                </div>
                <button
                    className={styles.basket__btn}
                    onClick={() => navigate("/checkoutPage")}
                >
                    Оплатить
                </button>
            </div>
        </div>
    );
};
