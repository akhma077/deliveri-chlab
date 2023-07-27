import * as React from "react";
import styles from "./index.module.scss";
import { ModaleOne } from "../../../shared";
import { selectBasket, useActions } from "../../../shared/config";
import { useSelector } from "react-redux";
interface Props {}

export const BasketHead: React.FC<Props> = ({}) => {
    const [modal, setModal] = React.useState(false);
    const { basket } = useSelector(selectBasket);
    const { deleteAllProductsToBasket } = useActions();
    return (
        <div className={styles.root}>
            <div className={styles.basket_head}>
                <h2>Корзина</h2>
                <button onClick={() => setModal(true)}>Очистить</button>
            </div>
            {modal && basket.length > 0 && (
                <ModaleOne
                    title="Вы уверены?"
                    description="Вы точно хотите удалить все продукты из корзины?"
                    clickNo={() => setModal(false)}
                    clickYes={() => {
                        deleteAllProductsToBasket();
                        setModal(false);
                    }}
                />
            )}
        </div>
    );
};
