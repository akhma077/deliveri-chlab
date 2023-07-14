import React from "react";
import styles from "./index.module.scss";
import { RestarauntHeader } from "./../RestarauntHeader";
import { RestaurantContent } from "../../features";
import { Product } from "../../entities";
import { Categories } from "..";

interface Props {
    data: any;
    categoriesData: any;
}

export const RestarauntContent: React.FC<Props> = ({
    data,
    categoriesData,
}) => {
    return (
        <div className={styles.content}>
            <RestarauntHeader />

            <div className={styles.restaurantContent}>
                <div className={styles.content__categories}>
                    <Categories data={categoriesData} />
                </div>
                <RestaurantContent title="Суши" data={data} />
                <RestaurantContent title="Негры" data={data} />
            </div>
        </div>
    );
};
