import * as React from 'react';

import styles from './index.module.scss';
import classNames from 'classnames';
import { NavLink, useParams } from 'react-router-dom';
import { ReactComponent as CloseIcon } from '../../../assets/img/X.svg';

interface BaseProps {
  isOpen: boolean;
  handleCloseModal: () => void;
  handleOpenModal: () => void;
}

export const ModalMobileNavigation: React.FC<BaseProps> = ({
  isOpen,
  handleCloseModal,
  handleOpenModal,
}) => {
  const { id } = useParams();

  return (
    <div
      className={classNames(styles.modalOverlay, {
        [styles.active]: isOpen,
      })}
      onClick={handleOpenModal}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <ul className={styles.modalContent__list}>
          <li>
            <NavLink to={'/login'} onClick={handleCloseModal}>
              Войти
            </NavLink>
          </li>
          <li>
            <NavLink to={`/restarauntAccaunt/${id}`} onClick={handleCloseModal}>
              Личный кабинет
            </NavLink>
          </li>
        </ul>

        <div className={styles.modalContent__icons}>
          <CloseIcon onClick={handleCloseModal} />
        </div>
      </div>
    </div>
  );
};
