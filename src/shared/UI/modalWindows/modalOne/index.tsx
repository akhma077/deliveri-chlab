import * as React from "react";
import styles from "./index.module.scss";

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
