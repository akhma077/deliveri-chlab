import * as React from "react";

import styles from "./index.module.scss";
import { ReactComponent as LoaderIcon } from "./Loader.svg";
import { Road } from "..";

export const Loader: React.FC = () => {
    return (
        <div className={styles.root}>
            <LoaderIcon />
            <Road />
        </div>
    );
};
