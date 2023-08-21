import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BasketHeaderIcon } from "../../shared/assets/img/BasketHEaderIcon.svg";
import { ReactComponent as LogoIcon } from "../../shared/assets/img/headerLogo2.svg";
import { ReactComponent as UserLogoIcon } from "../../shared/assets/img/header_user_logo.svg";
import { ReactComponent as BurgerMenuIcon } from "../../shared/assets/img/burgerMenu.svg";

import style from "./index.module.scss";
import { Button, ButtonVariant } from "../../shared/UI/Button";
import { useSelector } from "react-redux";
import { selectBasket, useActions } from "../../shared/config";
import { Product } from "../../entities";
import { useQuery } from "react-query";
import { getUserData } from "../../shared/API";
import { ModalMobileNavigation } from "../../shared/UI";
import classNames from "classnames";
import { useBasketData } from "../../shared";

export const Header: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();

    const { count } = useBasketData();
    const { setUser } = useActions();

    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [isHeaderFixed, setIsHeaderFixed] = React.useState(false);

    const { data } = useQuery("users", getUserData, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });

    React.useEffect(() => {
        setUser(data);
    }, [data]);

    const shouldHideButtons = () => {
        return (
            location.pathname === "/register" || location.pathname === "/login"
        );
    };

    const handleScroll = () => {
        let scrollPosition = window.scrollY;

        if (scrollPosition >= 440) {
            setIsHeaderFixed(true);
        } else {
            setIsHeaderFixed(false);
        }
    };

    const openModal = () => {
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = "";
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={classNames(style.header, {
                [style.headerFixed]: isHeaderFixed,
            })}
        >
            <Link to="/">
                <div className={style.header__logo}>
                    <LogoIcon />
                </div>
            </Link>

            <section className={style.header__section}>
                {shouldHideButtons() ? (
                    ""
                ) : (
                    <>
                        {count > 0 ? (
                            <div
                                className={style.header__basketSumm}
                                onClick={() => navigate("/basket")}
                            >
                                <BasketHeaderIcon />
                                {count}
                            </div>
                        ) : (
                            ""
                        )}
                        {data ? (
                            <div
                                className={style.header__avatar}
                                onClick={() =>
                                    navigate(`/restarauntAccaunt/${id}`)
                                }
                            >
                                <UserLogoIcon />
                            </div>
                        ) : (
                            <div className={style.header__signIn}>
                                <Button
                                    variant={ButtonVariant.SignInHeader}
                                    onClick={() => navigate("/login")}
                                >
                                    Войти
                                </Button>
                            </div>
                        )}
                        <div
                            className={style.header__burgerMenu}
                            onClick={openModal}
                        >
                            <BurgerMenuIcon />
                        </div>

                        <div className={style.header__isOpen}>
                            {isOpen && (
                                <ModalMobileNavigation
                                    isOpen={isOpen}
                                    handleCloseModal={closeModal}
                                    handleOpenModal={openModal}
                                />
                            )}
                        </div>
                    </>
                )}
            </section>
        </header>
    );
};
