import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as BasketHeaderIcon } from '../../shared/assets/img/BasketHEaderIcon.svg';
import { ReactComponent as LogoIcon } from '../../shared/assets/img/headerLogo2.svg';
import { ReactComponent as UserLogoIcon } from '../../shared/assets/img/header_user_logo.svg';
import { ReactComponent as BurgerMenuIcon } from '../../shared/assets/img/burgerMenu.svg';

import style from './index.module.scss';
import { Button, ButtonVariant } from '../../shared/UI/Button';
import { useSelector } from 'react-redux';
import { selectBasket } from '../../shared/config';
import { Product } from '../../entities';
import { useQuery } from 'react-query';
import { getUserData } from '../../shared/API';
import { ModalMobileNavigation } from '../../shared/UI';
import classNames from 'classnames';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const { basket } = useSelector(selectBasket);

  const { data } = useQuery('users', getUserData, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const location = useLocation();

  const shouldHideButtons = () => {
    return location.pathname === '/register' || location.pathname === '/login';
  };

  const funcReturnBasketCount = () => {
    let count = 0;
    basket.map((ars: Product[]) => {
      count += ars.length;
    });
    return count;
  };

  const count = funcReturnBasketCount();

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setIsOpen(!isOpen);
  };
  const [isHeaderFixed, setIsHeaderFixed] = React.useState(true);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const screenWidth = window.screen.width;

    if (screenWidth <= 1024) {
      setIsHeaderFixed(scrollPosition <= 300);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
          ''
        ) : (
          <>
            {count > 0 ? (
              <div className={style.header__basketSumm} onClick={() => navigate('/basket')}>
                <BasketHeaderIcon />
                {count}
              </div>
            ) : (
              ''
            )}
            {data ? (
              <div className={style.header__avatar}>
                {/* <span>{data.email[0].toUpperCase()}</span>{' '} */}
                <UserLogoIcon />
              </div>
            ) : (
              <div className={style.header__signIn}>
                <Button variant={ButtonVariant.SignInHeader} onClick={() => navigate('/login')}>
                  Войти
                </Button>
              </div>
            )}
            <div className={style.header__burgerMenu} onClick={handleCloseModal}>
              <BurgerMenuIcon />
            </div>

            {isOpen && (
              <ModalMobileNavigation isOpen={isOpen} handleCloseModal={handleCloseModal} />
            )}
          </>
        )}
      </section>
    </header>
  );
};
