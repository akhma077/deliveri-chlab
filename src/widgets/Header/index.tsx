import React from "react";
import { Link } from "react-router-dom";
import { BasketSumm } from "../../features";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BasketHeaderIcon } from "../../shared/assets/img/BasketHEaderIcon.svg";
import { ReactComponent as LogoIcon } from "../../shared/assets/img/headerLogo2.svg";

import style from "./index.module.scss";
import { Button, ButtonVariant } from "../../shared/UI/Button";
import { useSelector } from "react-redux";
import { selectBasket } from "../../shared/config";
import { Product } from "../../entities";

export const Header: React.FC = () => {
    const { basket } = useSelector(selectBasket);

    const funcReturnBasketCount = () => {
        let count = 0;
        basket.map((ars: Product[]) => {
            count += ars.length;
        });
        return count;
    };

    const navigate = useNavigate();
    return (
        <header className={style.header}>
            <Link to="/">
                <div className={style.header__logo}>
                    <LogoIcon />
                </div>
            </Link>

            <section className={style.header__section}>
                <div
                    className={style.header__basketSumm}
                    onClick={() => navigate("/basket")}
                >
                    <BasketHeaderIcon />
                    {funcReturnBasketCount()}
                </div>
                <div className={style.header__signIn}>
                    <Button
                        variant={ButtonVariant.SignInHeader}
                        onClick={() => navigate("/login")}
                    >
                        Войти
                    </Button>
                </div>
            </section>
        </header>
    );
};
