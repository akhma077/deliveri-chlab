import * as React from 'react';

import styles from './index.module.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

interface BaseProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

export const ModalMobileNavigation: React.FC<BaseProps> = ({ isOpen, handleCloseModal }) => {
  return (
    <div
      className={classNames(styles.modalOverlay, {
        [styles.active]: isOpen,
      })}
      onClick={handleCloseModal}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <NavLink to={'/login'}>
          <p>Войти</p>
        </NavLink>
      </div>
    </div>
  );
};
