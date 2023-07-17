import * as React from "react";
import styles from "./index.module.scss";
import { BasketContent, BasketHead } from "../../features";
import { useNavigate } from "react-router-dom";
import { useDetectClickOutside } from "react-detect-click-outside";
import { BasketFooterPanel } from "../../widgets";

export const Basket = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.root}>
            <div>
                <button
                    onClick={() => navigate(-1)}
                    className={styles.categories__btn}
                >
                    <svg
                        width="1.4em"
                        height="1.4em"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m7.8 11 5.246-5.246a.5.5 0 0 0 0-.708l-.692-.692a.5.5 0 0 0-.708 0L4 12l7.646 7.646a.5.5 0 0 0 .708 0l.692-.692a.5.5 0 0 0 0-.708L7.8 13h11.7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H7.8Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </button>
                <BasketHead />
                <BasketContent fullCard={true} />
                <BasketFooterPanel />
                <div style={{ height: 100 }}></div>
            </div>
        </div>
    );
};
