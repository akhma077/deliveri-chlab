import React from "react";
import styles from "./index.module.scss";
import { RestarauntHeader } from "./../RestarauntHeader";
import { RestaurantContent } from "../../features";
import { Categories } from "..";

import classNames from "classnames";

interface Props {
    data: any;
}

export const RestarauntContent: React.FC<Props> = ({ data }) => {
    const [isCategoriesBlockFixed, setCategoriesBlockFixed] =
        React.useState(false);

    const targetBlockRef = React.useRef<any>(null);

    const handleScroll = () => {
        const targetBlockOffsetTop = targetBlockRef.current?.offsetTop || 0;

        setCategoriesBlockFixed(window.scrollY >= targetBlockOffsetTop);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={styles.content}>
            <RestarauntHeader />
            <div className={styles.restaurantContent} ref={targetBlockRef}>
                <div
                    className={classNames(styles.content__categories, {
                        [styles.fixed]: isCategoriesBlockFixed,
                    })}
                >
                    <div>
                        <Categories data={data} />
                    </div>
                </div>
                {data?.length > 0 ? (
                    <>
                        {data.map((item: any, index: number) => (
                            <div
                                key={item.id}
                                id={`category-container-${index}`}
                            >
                                <RestaurantContent
                                    title={item.name}
                                    titleId={item.id}
                                    data={item.products}
                                />
                            </div>
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
