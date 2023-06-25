import * as React from "react";
import styles from "./index.module.scss";

import testImage from "../../shared/assets/img/b524370421f7498ff97f82f4fe3922ac.jpeg";
import { RestaurantContent } from "../../features";

import { Categories, ProductBasket, RestarauntHeader } from "../../widgets";

export const RestaurantPage: React.FC = () => {
    const data = [
        {
            id: 123,
            name: "Суши",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 12324,
            name: "Суши 1",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 122113,
            name: "Суши 2",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 124443,
            name: "Суши 3",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 1223,
            name: "Суши 4",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
    ];

    const [basketData, setBasketData] = React.useState([]);
    const [resetCount, setResetCount] = React.useState({});

    React.useEffect(() => {
        data.map((elem) =>
            setResetCount((prev: any) => ({ ...prev, [elem.id]: false }))
        );
    }, []);

    return (
        <div className={styles.page}>
            <div>
                <RestarauntHeader />
                <Categories />
                <RestaurantContent
                    data={data}
                    resetCount={resetCount}
                    setResetCount={setResetCount}
                    basketData={basketData}
                    setBasketData={setBasketData}
                />
                <div className={styles.basket}>
                    <ProductBasket
                        setResetCount={setResetCount}
                        basketData={basketData}
                        setBasketData={setBasketData}
                    />
                </div>
            </div>
        </div>
    );
};
