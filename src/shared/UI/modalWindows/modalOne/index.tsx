import * as React from "react";
import styles from "./index.module.scss";
import iconClose from "../../../assets/img/iconClose.svg";

interface Props {
    title: string;
    description: string;
    clickNo: () => void;
    clickYes: () => void;
}

export const ModaleOne: React.FC<Props> = ({
    title,
    description,
    clickNo,
    clickYes,
}) => {
    return (
        <div className={styles.modal}>
            <div>
                <div className={styles.head}>
                    <div>{title}</div>
                    <img src={iconClose} alt="" onClick={clickNo} />
                </div>
                <div className={styles.content}>{description}</div>
                <div className={styles.buttons}>
                    <button onClick={clickNo}>Отмена</button>
                    <button onClick={clickYes}>Очистить</button>
                </div>
            </div>
        </div>
    );
};
