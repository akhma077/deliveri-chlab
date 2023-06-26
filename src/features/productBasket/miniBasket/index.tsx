import styles from "./index.module.scss";
import iconBasket from "../../../shared/assets/img/iconBasket.svg";
import { MiniBasketCard, Product } from "../../../entities";

interface Props {
    data: any;
    setData: any;
    setResetCount: (arg: any) => void;
}

export const MiniBasket: React.FC<Props> = ({ data }) => {
    return (
        <div className={styles.mini_basket}>
            <div className={styles.head}>
                <div>120</div>
                <img src={iconBasket} alt="" />
            </div>
            <div className={styles.content}>
                {data.map((products: Product[], index: number) => {
                    return products[0] ? (
                        <MiniBasketCard
                            data={products[0]}
                            count={products.length}
                        />
                    ) : (
                        <div>Error</div>
                    );
                })}
            </div>
        </div>
    );
};
