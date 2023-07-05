import * as React from "react";
import styles from "./index.module.scss";
import iconCart from "../../../shared/assets/img/iconCart.svg";

interface Props {
    summ: number;
    count: number;
    onClick?: () => void;
}

export const BasketSumm: React.FC<Props> = ({ summ, count, onClick }) => {
    return (
        <div className={styles.bask} onClick={onClick}>
            <button>
                <div>{summ}₽</div>
                <div>
                    <img src={iconCart} alt="iconCart" /> {count}
                </div>
            </button>
        </div>
    );
};
