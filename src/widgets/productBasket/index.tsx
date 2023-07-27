import * as React from 'react';
import styles from './index.module.scss';
import { BasketContent, BasketHead, BasketSumm } from '../../features';
import { ModaleOne } from '../../shared';

export const ProductBasket = ({}) => {
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
                <BasketHead setModalActive={setModalActive} />
                <BasketContent onlyScroll />
            </div>
        </>
    );
};
