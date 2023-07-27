import React from "react";
import styles from "./index.module.scss";
import { Product } from "../types";

interface Props {
    data: Product;
    count: number;
}

export const MiniBasketCard: React.FC<Props> = ({ data, count }) => {
    return (
        <div className={styles.mini_card}>
            <img src={data.image} alt="" />
            <div>{count}</div>
        </div>
    );
};
