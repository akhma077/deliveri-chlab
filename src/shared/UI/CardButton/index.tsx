import { PropsWithChildren } from "react";
import styles from "./index.module.scss";
interface Props {
    onClick: () => void;
}
export const CardButton: React.FC<PropsWithChildren<Props>> = ({
    children,
    onClick,
}) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
};
