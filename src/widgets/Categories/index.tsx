import React from "react";
import styles from "./index.module.scss";

export const Categories: React.FC = () => {
    const [activeIdx, setActiveIdx] = React.useState<number>(0);
    const categories: string[] = [
        "Комбо",
        "Новинки",
        "Говядина",
        "Рыба",
        "Соусы",
    ];

    const handleClick = (idx: number) => {
        setActiveIdx(idx);
    };

    return (
        <div className={styles.categories}>
            <h2 className={styles.categories__title}>Меню</h2>
            <ul className={styles.categories__list}>
                {categories.map((item, idx) => (
                    <li
                        key={idx}
                        className={activeIdx === idx ? styles.active : ""}
                        onClick={() => handleClick(idx)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
