import { useSelector } from "react-redux";
import { Product } from "../../entities";
import { selectBasket } from "../config";

export const useBasketData = () => {
    const { basket } = useSelector(selectBasket);
    let count = 0;
    let summ = 0;

    basket.map((ars: Product[]) => {
        count += ars.length;
        ars.map((item) => (summ += item.price));
    });

    return { summ, count };
};
