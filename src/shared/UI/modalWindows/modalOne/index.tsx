import * as React from 'react';
import styles from './index.module.scss';

import { ReactComponent as IconClose } from '../../../assets/img/X.svg';

interface Props {
  title: string;
  description: string;
  clickNo: () => void;
  clickYes: () => void;
}

export const ModaleOne: React.FC<Props> = ({ title, description, clickNo, clickYes }) => {
  return (
    <div className={styles.modal}>
      <div>
        <div className={styles.head}>
          <div>{title}</div>
          {/* <IconClose onClick={clickNo} /> */}
          <div onClick={clickNo} className={styles.iconClose}>
            <IconClose />
          </div>
        </div>
        <div className={styles.content}>{description}</div>
        <div className={styles.buttons}>
          <button onClick={clickNo}>Отмена</button>
          <button onClick={clickYes}>Очистить</button>
        </div>
      </div>
    </div>
  );
};
