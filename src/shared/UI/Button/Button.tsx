import classNames from "classnames";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { ButtonSize, ButtonVariant } from "./button.types";

import styles from "./button.module.css";

interface ButtonProps
    extends Omit<
        Props<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
        "disabled"
    > {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isFullWidth?: boolean;
    isLoading?: boolean;
    isDisabled?: boolean;
    isRounded?: boolean;
    onlyIcon?: boolean;
    IconRight?: SVGFC;
    IconLeft?: SVGFC;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            variant = ButtonVariant.Primary,
            size = ButtonSize.Large,
            isFullWidth = false,
            isLoading = false,
            isDisabled = false,
            isRounded = false,
            onlyIcon = false,
            IconLeft,
            IconRight,
            type = "button",
            className,
            ...props
        },
        ref
    ) => {
        const isButtonDisabled = isLoading || isDisabled;

        return (
            <button
                {...props}
                ref={ref}
                type={type}
                disabled={isButtonDisabled}
                className={classNames(styles.button, className, {
                    [styles.buttonPrimaryVariant]:
                        variant === ButtonVariant.Primary,
                    [styles.buttonSecondaryVariant]:
                        variant === ButtonVariant.Secondary,
                    [styles.buttonClearVariant]:
                        variant === ButtonVariant.Clear,
                    [styles.buttonLargeSize]: size === ButtonSize.Large,
                    [styles.buttonMediumSize]: size === ButtonSize.Medium,
                    [styles.buttonDisabled]: isButtonDisabled,
                    [styles.buttonFullWidth]: isFullWidth,
                    [styles.buttonRounded]: isRounded,
                    [styles.buttonOnlyIcon]: onlyIcon,
                })}
            >
                {/* TODO: реализовать isLoading */}
                <>
                    {IconLeft !== undefined && (
                        <IconLeft className={styles.buttonIcon} />
                    )}
                    {!onlyIcon && children}
                    {!onlyIcon && IconRight !== undefined && (
                        <IconRight className={styles.buttonIcon} />
                    )}
                </>
            </button>
        );
    }
);
