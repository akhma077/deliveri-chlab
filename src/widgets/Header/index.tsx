import React from 'react';

import style from './index.module.scss';
import { Link } from 'react-router-dom';
// import { BasketSumm } from '../../features';

export const Header: React.FC = () => {
  //   const navigate = useNavigate();
  //   const handleClickBasketSumm = () => {
  //     navigate('/basket');
  //   };
  return (
    <header className={style.header}>
      <Link to="/">
        <h1 className={style.header__title}>Delivery Chlab </h1>
      </Link>
    </header>
  );
};
