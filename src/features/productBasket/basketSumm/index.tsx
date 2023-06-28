import * as React from "react";
import styles from "./index.module.scss";
interface Props {
    summ: number;
    count: number;
}

export const BasketSumm: React.FC<Props> = ({ summ, count }) => {
    return (
        <div className={styles.bask}>
            <button>
                <div>{summ}₽</div>
                <div>{count}</div>
            </button>
        </div>
    );
};
