import * as React from "react";
import styles from "./index.module.scss";
import testImage from "../../shared/assets/img/b524370421f7498ff97f82f4fe3922ac.jpeg";

import { Categories, ProductBasket, RestarauntContent } from "../../widgets";
import { BasketSumm } from "../../features";
import { useNavigate } from "react-router-dom";
import { Product } from "../../entities";
import { useSelector } from "react-redux";
import { selectBasket } from "../../shared/config";
import { fetchCategories } from "../../shared";
import { useQuery } from "react-query";

export const RestaurantPage: React.FC = () => {
    const { basket } = useSelector(selectBasket);
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
    ];

    const { data: categoriesData } = useQuery("categories", fetchCategories);

    const navigate = useNavigate();

    // Количество этих продуктов в корзине
    const funcReturnBasketCount = () => {
        let count = 0;
        basket.map((ars: Product[]) => {
            count += ars.length;
        });
        return count;
    };

    return (
        <div className={styles.page}>
            <div>
                <div className={styles.categories_plug}>
                    <div className={styles.categories}>
                        <Categories data={categoriesData} />
                        {/* <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />

                        <button onClick={handleClick}>gotovo</button> */}
                    </div>
                </div>

                <RestarauntContent
                    data={data}
                    categoriesData={categoriesData}
                />

                <div className={styles.basket_plug}>
                    <div className={styles.basket}>
                        <ProductBasket />
                    </div>
                </div>
            </div>
            <div className={styles.basketSum}>
                <BasketSumm
                    summ={200}
                    count={funcReturnBasketCount()}
                    onClick={() => navigate("/basket")}
                />
            </div>
        </div>
    );
};