import * as React from "react";
import styles from "./index.module.scss";
import { BasketContent, BasketHead } from "..";

interface Props {
    closeModal: () => void;
    delivery: string;
    setDelivery: (arg: string) => void;
    setModalActive: (arg: boolean) => void;
    data: any;
    setData: any;
    setResetCount: (arg: any) => void;
}

export const BasketModal: React.FC<Props> = ({
    closeModal,
    delivery,
    setDelivery,
    setModalActive,
    data,
    setData,
    setResetCount,
}) => {
    const handleClickContent = (e: any) => {
        e.stopPropagation();
    };

    return (
        <div className={styles.basket} onClick={closeModal}>
            <div onClick={handleClickContent}></div>
        </div>
    );
};
