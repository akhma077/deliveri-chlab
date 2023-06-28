import * as React from "react";
import styles from "./index.module.scss";
import { BasketContent, BasketHead } from "../../features";
import testImage from "../../shared/assets/img/b524370421f7498ff97f82f4fe3922ac.jpeg";

export const Basket = () => {
    const [modal, setModal] = React.useState<boolean>(false);
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
            id: 12324444444,
            name: "Суши 1",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 122114443,
            name: "Суши 2",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 124441233,
            name: "Суши 3",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 122245153,
            name: "Суши 4",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 12236782467,
            name: "Суши 4",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 12233411112112,
            name: "Суши 4",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 121234424236,
            name: "Суши 4",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 3,
            name: "Суши",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 1,
            name: "Суши 1",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 113,
            name: "Суши 2",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 1443,
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
            id: 12,
            name: "Суши 4",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 12334,
            name: "Суши 4",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
        {
            id: 1224236,
            name: "Суши 4",
            image: testImage,
            price: 300,
            discount: 1,
            weight: 199,
            description: "Лучшие суши на свете",
        },
    ];

    const [basketData, setBasketData] = React.useState([
        [
            {
                id: 1224236,
                name: "Суши 4",
                image: testImage,
                price: 300,
                discount: 1,
                weight: 199,
                description: "Лучшие суши на свете",
            },
            {
                id: 122423226,
                name: "Суши 4",
                image: testImage,
                price: 300,
                discount: 1,
                weight: 199,
                description: "Лучшие суши на свете",
            },
        ],
        [
            {
                id: 12,
                name: "Суши 4",
                image: testImage,
                price: 300,
                discount: 1,
                weight: 199,
                description: "Лучшие суши на свете",
            },
            {
                id: 314226,
                name: "Суши 4",
                image: testImage,
                price: 300,
                discount: 1,
                weight: 199,
                description: "Лучшие суши на свете",
            },
        ],
    ]);
    const [resetCount, setResetCount] = React.useState({});

    return (
        <div className={styles.root}>
            <div>
                <BasketHead setModalActive={setModal} />
                <BasketContent
                    setResetCount={setResetCount}
                    data={basketData}
                    setData={setBasketData}
                    fullCard
                />
            </div>
        </div>
    );
};
