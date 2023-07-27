import React from "react";

import styles from "./index.module.scss";
import { Link } from "react-router-dom";

interface Props {
    data: any;
}

export const RestarauntBlock: React.FC<Props> = ({ data }) => {
    return (
        <div className={styles.root}>
            {data.map((obj: any, idx: any) => (
                <Link to={`/restaraunt/${obj.id}`} key={idx}>
                    <div
                        className={styles.root__bg_image}
                        style={{
                            backgroundImage: `url(https://crm.kod06.ru${obj.image})`,
                        }}
                    >
                        <div className={styles.root__delivery_time_block}>
                            <span>25 - 30 мин.</span>
                        </div>
                    </div>
                    <h3 className={styles.root__title}>{obj.name}</h3>
                </Link>
            ))}
        </div>
    );
};
