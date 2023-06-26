import React from 'react';

import style from './index.module.scss';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <Link to="/">
        <h1 className={style.header__title}>Delivery Chlab </h1>
      </Link>
    </header>
  );
};
