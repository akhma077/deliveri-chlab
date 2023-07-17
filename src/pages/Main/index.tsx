import * as React from "react";

import styles from "./index.module.scss";
import { RestarauntBlock } from "../../widgets";
import { useQuery } from "react-query";
import {
    fetchCategories,
    getAllRestaurants,
} from "../../shared/API/API.service";
import { LoaderUsual } from "../../shared";
import LoaderIcon from "../../shared/assets/img/Group 24.svg";

export const Restaurant: React.FC = () => {
    const { data } = useQuery("restaurants", getAllRestaurants);
    const { data: categoriesData } = useQuery("restaurants", fetchCategories);

    return (
        <main className={styles.main}>
            <h2 className={styles.main__title}>Pестораны </h2>
            <div className={styles.main__block}>
                {data?.length > 0 ? (
                    <RestarauntBlock data={data} />
                ) : (
                    <div
                        style={{
                            height: "70vh",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <LoaderUsual
                            size={"large"}
                            weightVariant={"large"}
                            title="Mecviho"
                            animationVariant="primary"
                            iconVariant={"medium"}
                            iconLeft={LoaderIcon}
                        />
                    </div>
                )}
            </div>
        </main>
    );
};
