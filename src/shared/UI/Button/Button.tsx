import classNames from "classnames";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { ButtonSize, ButtonVariant } from "./button.types";

import styles from "./button.module.scss";

type BaseProps = ComponentPropsWithoutRef<"button">;
interface ButtonProps extends Omit<BaseProps, "disabled"> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isFullWidth?: boolean;
    isLoading?: boolean;
    isDisabled?: boolean;
    type?: any;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            variant = ButtonVariant.Black,
            isFullWidth,
            size,
            type = "button",
            ...props
        },
        ref
    ) => {
        // const isButtonDisabled = isLoading || isDisabled;

        return (
            <button
                {...props}
                ref={ref}
                type={type}
                // disabled={isButtonDisabled}
                className={classNames(styles.button, {
                    // [styles.buttonClearVariant]: variant === ButtonVariant.lear,
                    [styles.buttonAddProdVariant]:
                        variant === ButtonVariant.AddProd,
                    [styles.buttonBlackVariant]:
                        variant === ButtonVariant.Black,
                    [styles.buttonSizeMedium]: size === ButtonSize.Medium,
                    [styles.buttonSignInHeaderVariant]:
                        variant === ButtonVariant.SignInHeader,
                    [styles.buttonBaseVariant]: variant === ButtonVariant.Base,
                })}
            >
                {children}
            </button>
        );
    }
);
