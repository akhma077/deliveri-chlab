import * as React from "react";
import styles from "./index.module.scss";
interface Props {
    size?: string;
    weightVariant?: string;
    title?: string;
    animationVariant?: string;
    iconVariant?: string;
    iconLeft?: any;
    iconRight?: any;
}

export const LoaderUsual: React.FC<Props> = ({
    size = "small",
    weightVariant = "small",
    title = "Загрузка...",
    animationVariant = "primary",
    iconVariant = "small",
    iconLeft,
    iconRight,
}) => {
    return (
        <div
            className={
                styles.loader +
                " " +
                styles[size] +
                " " +
                styles[weightVariant + "_weight"] +
                " " +
                styles[animationVariant + "_animation"]
            }
        >
            {iconLeft && (
                <img
                    className={
                        styles.icon + " " + styles["icon_" + iconVariant]
                    }
                    style={{ marginInlineEnd: title ? 12 : 0 }}
                    src={iconLeft}
                />
            )}
            {title}
            {iconRight && (
                <img
                    className={
                        styles.icon + " " + styles["icon_" + iconVariant]
                    }
                    style={{ marginInlineStart: title ? 12 : 0 }}
                    src={iconRight}
                />
            )}
        </div>
    );
};
