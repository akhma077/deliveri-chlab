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
        {
            id: 122367867,
            name: "Суши 4",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 1223342112,
            name: "Суши 4",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 1223324236,
            name: "Суши 4",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 122312556,
            name: "Суши 4",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 12233334,
            name: "Суши 4",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 12233333333,
            name: "Суши 4",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 122325555,
            name: "Суши 4",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 12121313423,
            name: "Суши 4",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 12232143,
            name: "Суши 4",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 1223452135,
            name: "Суши 4",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 1223222,
            name: "Суши 4",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 12212341243,
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
                <div className={styles.categories_plug}>
                    <div className={styles.categories}>
                        <Categories />
                    </div>
                </div>
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
                <div className={styles.basket_plug}>
                    <div className={styles.basket}>
                        <ProductBasket
                            setResetCount={setResetCount}
                            basketData={basketData}
                            setBasketData={setBasketData}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
