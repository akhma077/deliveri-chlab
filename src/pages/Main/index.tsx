import * as React from "react";

import styles from "./index.module.scss";
import { RestarauntBlock } from "../../widgets";
import { useQuery } from "react-query";
import { getAllRestaurants } from "../../shared/API/API.service";
import { LoaderUsual } from "../../shared";

export const Restaurant: React.FC = () => {
    const { data } = useQuery("restaurants", getAllRestaurants);

    return (
        <main className={styles.main}>
            <h2 className={styles.main__title}>Pестораны </h2>
            <div className={styles.main__block}>
                {data ? (
                    <>
                        {data?.length > 0 ? (
                            <RestarauntBlock data={data} />
                        ) : (
                            <div
                                style={{
                                    width: "50vw",
                                    height: "70vh",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                Нет данных
                            </div>
                        )}
                    </>
                ) : (
                    <div
                        style={{
                            width: "50vw",
                            height: "70vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <LoaderUsual
                            size={"large"}
                            weightVariant={"large"}
                            title="Mecviho"
                            animationVariant="primary"
                            iconVariant={"medium"}
                        />
                    </div>
                )}
            </div>
        </main>
    );
};
