import * as React from "react";
import styles from "./index.module.scss";
import {
    BasketContent,
    BasketHead,
    BasketModal,
    BasketSumm,
} from "../../features";
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
    const [basketModal, setBasketModal] = React.useState<boolean>(true);
    const [basketSumm, setBasketSumm] = React.useState<number>(0);
    const [basketCount, setBasketCount] = React.useState<number>(0);

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

    const handleClickMiniBasket = () => {
        console.log("mini basket");
    };

    console.log(basketData);

    React.useEffect(() => {
        let summ = 0;
        let count = 0;
        if (basketData.length > 0) {
            basketData.map((arrs: Product[]) => {
                arrs.map((elem) => (summ += elem.price));
                count += arrs.length;
                setBasketSumm(summ);
                setBasketCount(count);
            });
        } else {
            setBasketSumm(0);
            setBasketCount(0);
        }
    }, [basketData]);

    return (
        <>
            {false && (
                <BasketModal
                    closeModal={() => setBasketModal(false)}
                    delivery={delivery}
                    setDelivery={setDelivery}
                    setModalActive={setModalActive}
                    setResetCount={setResetCount}
                    data={basketData}
                    setData={setBasketData}
                />
            )}

            <div className={styles.basket}>
                {modalActive && (
                    <ModaleOne
                        title={"Вы уверены?"}
                        description="Вы  точно хотите очистить все?"
                        clickNo={() => setModalActive(false)}
                        clickYes={() => handleClickClearBasket()}
                    />
                )}
                <BasketHead setModalActive={setModalActive} />

                <BasketContent
                    setResetCount={setResetCount}
                    data={basketData}
                    setData={setBasketData}
                />
                <BasketSumm summ={basketSumm} count={basketCount} />
            </div>
        </>
    );
};
