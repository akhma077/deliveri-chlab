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
                {data?.length > 0 ? (
                    <>
                        {data.map((item: any) => (
                            <RestaurantContent
                                title={item.name}
                                titleId={item.id}
                                data={item.products}
                            />
                        ))}
                    </>
                ) : (
                    <div style={{ textAlign: "center", marginTop: 100 }}>
                        Нет данных
                    </div>
                )}
            </div>
        </div>
    );
};
