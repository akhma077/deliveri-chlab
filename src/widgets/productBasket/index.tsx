import * as React from "react";
import styles from "./index.module.scss";
import { BasketContent } from "../../features";
import { Product } from "../../entities";
import { ModaleOne } from "../../shared";

interface Props {
    setResetCount: (arg: any) => void;
    basketData: any;
    setBasketData: any;
}

export const ProductBasket: React.FC<Props> = ({
    setResetCount,
    basketData,
    setBasketData,
}) => {
    const [modalActive, setModalActive] = React.useState<boolean>(false);
    const [delivery, setDelivery] = React.useState<string>("delivery");
    const handleClickClearBasket = () => {
        setBasketData([]);
        setResetCount((prev: any) => {
            let newReset: any = {};
            Object.keys(prev).forEach((elem) => (newReset[elem] = true));
            return newReset;
        });
        setModalActive(false);
    };

    return (
        <div className={styles.basket}>
            {modalActive && (
                <ModaleOne
                    title={"Вы уверены?"}
                    description="Вы  точно хотите очистить все?"
                    clickNo={() => setModalActive(false)}
                    clickYes={() => handleClickClearBasket()}
                />
            )}

            <div className={styles.basket_head}>
                <h2>Корзина</h2>
                <button onClick={() => setModalActive(true)}>Очистить</button>
            </div>
            <div className={styles.basket_delivery}>
                <div
                    className={
                        delivery === "delivery" ? styles.title_active : ""
                    }
                    onClick={() => setDelivery("delivery")}
                >
                    Доставка
                </div>
                <div className={styles.desk}>Выберите</div>
                <div
                    className={
                        delivery === "takeaway" ? styles.title_active : ""
                    }
                    onClick={() => setDelivery("takeaway")}
                >
                    Навынос
                </div>
            </div>
            {/* content */}
            <BasketContent
                setResetCount={setResetCount}
                data={basketData}
                setData={setBasketData}
            />
        </div>
    );
};
