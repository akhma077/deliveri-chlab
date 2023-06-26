import React from "react";
import styles from "./index.module.scss";
import { RestarauntHeader } from "./../RestarauntHeader";
import { RestaurantContent } from "../../features";
import { Product } from "../../entities";

interface Props {
    data: Product[];
    resetCount: any;
    setResetCount: (arg: any) => void;
    basketData: any;
    setBasketData: any;
}

export const RestarauntContent: React.FC<Props> = ({
    data,
    resetCount,
    setResetCount,
    basketData,
    setBasketData,
}) => {
    return (
        <div className={styles.content}>
            <RestarauntHeader />
            <RestaurantContent
                data={data}
                resetCount={resetCount}
                setResetCount={setResetCount}
                basketData={basketData}
                setBasketData={setBasketData}
            />
        </div>
    );
};
