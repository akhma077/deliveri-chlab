import * as React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

interface Props {
  message?: string;
  isError?: boolean;
}

export const HelperText: React.FC<Props> = ({ message, isError }) => {
  return (
    <p
      className={classNames(styles.root, {
        [styles.root__helperTextError]: isError,
      })}
    >
      {message}
    </p>
  );
};
