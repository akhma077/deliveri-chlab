import React, { useRef, useEffect } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";

export const Road: React.FC = () => {
    const roadRef = useRef<HTMLDivElement>(null);
    const bike1Ref = useRef<HTMLDivElement>(null);
    const bike2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const road = roadRef.current;
        const bike1 = bike1Ref.current;
        const bike2 = bike2Ref.current;

        if (!road || !bike1 || !bike2) return;

        const lines = road.querySelectorAll(".line");
        const totalLines = lines.length;
        let currentIndex1 = 0;
        let currentIndex2 = totalLines / 2; // Начинаем со второй половины линий, чтобы получить разделение в 13px
        // let isAnimationRunning = true;

        const moveBike1 = () => {
            if (currentIndex1 === totalLines || currentIndex1 < 0) {
                currentIndex1 = 0;
            }

            const currentLine1 = lines[currentIndex1] as HTMLDivElement;

            if (!currentLine1) return;

            const roadLeft = road.offsetLeft;
            const currentLineLeft1 = currentLine1.offsetLeft;
            const bikeWidth = bike1.getBoundingClientRect().width;

            const bikeX1 =
                currentLineLeft1 +
                currentLine1.clientWidth / 2 -
                bikeWidth / 2 -
                roadLeft;

            bike1.style.transform = `translateX(${bikeX1}px)`;

            currentIndex1++;

            requestAnimationFrame(moveBike1);
        };

        const moveBike2 = () => {
            if (currentIndex2 === totalLines || currentIndex2 < 0) {
                currentIndex2 = 0;
            }

            const currentLine2 = lines[currentIndex2] as HTMLDivElement;

            if (!currentLine2) return;

            const roadLeft = road.offsetLeft;
            const currentLineLeft2 = currentLine2.offsetLeft;
            const bikeWidth = bike2.getBoundingClientRect().width;

            const bikeX2 =
                currentLineLeft2 +
                currentLine2.clientWidth / 2 -
                bikeWidth / 2 -
                roadLeft;

            bike2.style.transform = `translateX(${bikeX2}px)`;

            currentIndex2++;

            requestAnimationFrame(moveBike2);
        };

        moveBike1();
        moveBike2();

        // Остановить анимацию, если компонент будет размонтирован
        return () => {
            // isAnimationRunning = false;
        };
    }, []);
    return (
        <div className={styles.road} ref={roadRef}>
            <div className={styles.lines}>
                {Array.from({ length: 20 }).map((_, index) => (
                    <div key={index} className={styles.line}></div>
                ))}
            </div>
            <div
                className={classNames(styles.bike, styles.bike1)}
                ref={bike1Ref}
            ></div>
            <div
                className={classNames(styles.bike, styles.bike2)}
                ref={bike2Ref}
            ></div>
        </div>
    );
};
