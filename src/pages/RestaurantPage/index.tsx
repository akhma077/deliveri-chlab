import * as React from "react";
import styles from "./index.module.scss";
import { Categories, ProductBasket, RestarauntContent } from "../../widgets";
import { BasketSumm } from "../../features";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../../entities";
import { useSelector } from "react-redux";
import { selectBasket } from "../../shared/config";
import { getAllRestaurantProducts } from "../../shared";
import { useQuery } from "react-query";
import { Loader } from "../../widgets/Loader";

export const RestaurantPage: React.FC = () => {
    const { basket } = useSelector(selectBasket);
    const { id } = useParams();
    const { data } = useQuery(["products", id], getAllRestaurantProducts);

    const navigate = useNavigate();

    // Количество этих продуктов в корзине
    const funcReturnBasketCount = () => {
        let count = 0;
        basket.map((ars: Product[]) => {
            count += ars.length;
        });
        return count;
    };

    console.log(data);

    return (
        <div className={styles.page}>
            <div>
                <div className={styles.categories_plug}>
                    <div className={styles.categories}>
                        <Categories data={data} />
                    </div>
                </div>

                {data ? (
                    <>
                        {data?.length > 0 ? (
                            <RestarauntContent
                                data={data}
                                categoriesData={data}
                            />
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
                                К сожалению тут пусто(
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
                        <Loader />
                    </div>
                )}
                <div className={styles.basket_plug}>
                    <div className={styles.basket}>
                        <ProductBasket />
                    </div>
                </div>
            </div>
            <div className={styles.basketSum}>
                <BasketSumm
                    count={funcReturnBasketCount()}
                    onClick={() => navigate("/basket")}
                />
            </div>
        </div>
    );
};
