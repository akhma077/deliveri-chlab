import * as React from "react";
import styles from "./index.module.scss";
import { BasketContent, BasketHead } from "../../features";
import testImage from "../../shared/assets/img/b524370421f7498ff97f82f4fe3922ac.jpeg";
import iconArrowTop from "../../shared/assets/img/iconArrowTop.svg";
import { Product } from "../../entities";

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
        ],
    ]);

    const [basketSumm, setBasketSumm] = React.useState<number>(0);
    const [basketCount, setBasketCount] = React.useState<number>(0);
    const [resetCount, setResetCount] = React.useState({});

    React.useEffect(() => {
        let summ = 0;
        let count = 0;
        if (basketData.length > 0) {
            basketData.map((arrs: Product[]) => {
                arrs.map((elem) => (summ += elem.price));
                count += arrs.length;
                setBasketCount(count);
                setBasketSumm(summ);
            });
        } else {
            setBasketSumm(0);
            setBasketCount(0);
        }
    }, [basketData]);

    const [basketOn, setBasketOn] = React.useState<boolean>(false);
    const [contentOn, setContentOn] = React.useState<boolean>(false);

    const handleClickPayment = () => {
        let timesOut: any;
        if (contentOn) {
            timesOut = setTimeout(() => {
                setContentOn((prev) => !prev);
            }, 1000);
        } else {
            setContentOn(true);
        }

        setBasketOn((prev) => !prev);
        () => clearTimeout(timesOut);
    };

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
                <div
                    className={
                        styles.top_ele +
                        " " +
                        (basketOn ? styles.basket_active : "")
                    }
                >
                    <div
                        className={
                            styles.icon_btn +
                            " " +
                            (basketOn ? styles.icon_btn_active : "")
                        }
                    >
                        <img
                            onClick={handleClickPayment}
                            src={iconArrowTop}
                            alt=""
                        />
                    </div>

                    <div
                        className={
                            styles.content +
                            " " +
                            (basketOn ? styles.content_active : "")
                        }
                        style={{ display: contentOn ? "block" : "none" }}
                    >
                        How to blur background image using CSS ? - GeeksforGeeks
                        geeksforgeeks.org›how…blur-background-image…css/ Меню
                        CSS allows for easy customization of a web page’s color,
                        font, spacing, and other elements to make it a crucial
                        tool for creating professional-looking and functional
                        websites. To blur a background image using CSS, you can
                        use the filter property. Читать ещёCSS allows for easy
                        customization of a web page’s color, font, spacing, and
                        other elements to make it a crucial tool for creating
                        professional-looking and functional websites. To blur a
                        background image using CSS, you can use the filter
                        property. The filter property is used to set the visual
                        effect of an element. Syntax Скрыть Не найдено: размытый
                    </div>

                    <div className={styles.head}>
                        <div className={styles.summ}>Сумма: {basketSumm}₽</div>
                        <div className={styles.count}>
                            Количество: {basketCount}
                        </div>
                        <button onClick={handleClickPayment}>Оплатить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
