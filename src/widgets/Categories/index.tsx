import React from "react";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { ScrollTo } from "react-scroll-to";

type Categories = {
    id: number;
    name: string;
};

interface Props {
    data: Categories[];
}

export const Categories: React.FC<Props> = ({ data }) => {
    const [activeIdx, setActiveIdx] = React.useState<number>(1);
    const navigate = useNavigate();

    const handleClick = (item: any) => {
        setActiveIdx(item.id);

        // scroll({
        //     y:
        //         windowWight > 900
        //             ? elementScrollTop?.offsetTop - 100
        //             : elementScrollTop?.offsetTop + 330,
        //     smooth: true,
        // });
    };

    return (
        <div className={styles.categories}>
            <button
                onClick={() => navigate(-1)}
                className={styles.categories__btn}
            >
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="m7.8 11 5.246-5.246a.5.5 0 0 0 0-.708l-.692-.692a.5.5 0 0 0-.708 0L4 12l7.646 7.646a.5.5 0 0 0 .708 0l.692-.692a.5.5 0 0 0 0-.708L7.8 13h11.7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H7.8Z"
                        fill="currentColor"
                    ></path>
                </svg>
                <span> Вернуться назад</span>
            </button>
            <h2 className={styles.categories__title}>Меню</h2>

            <ul className={styles.categories__list}>
                {data?.map((item) => (
                    <ScrollTo>
                        {({}) => (
                            <li
                                key={item.id}
                                className={
                                    activeIdx === item.id ? styles.active : ""
                                }
                                onClick={() => handleClick(item)}
                            >
                                {item.name}
                            </li>
                        )}
                    </ScrollTo>
                ))}
            </ul>
        </div>
    );
};
