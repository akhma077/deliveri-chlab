import * as React from "react";

import { ReactComponent as BasketHeaderIcon } from "../../../shared/assets/img/BasketHEaderIcon.svg";

import styles from "./index.module.scss";

interface Props {
    summ?: number;
    count?: number;
    onClick?: () => void;
}

export const BasketSumm: React.FC<Props> = ({ count, onClick }) => {
    const isValidCount = count !== undefined && count > 0;
    return (
        <>
            {isValidCount ? (
                <div className={styles.bask} onClick={onClick}>
                    <div>
                        <span>{count}</span>
                    </div>
                    <button>
                        <BasketHeaderIcon />
                    </button>
                </div>
            ) : (
                ""
            )}
        </>
    );
};
