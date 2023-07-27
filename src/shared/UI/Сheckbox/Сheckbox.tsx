import * as React from 'react';
import classNames from 'classnames';
import { ReactComponent as CheckboxIcon } from '../../assets/img/Checkbox.svg';

import styles from './index.module.scss';

type BaseProps = React.ComponentPropsWithoutRef<'input'>;
interface CheckboxProps extends BaseProps {
  isChecked?: boolean;
  onChange?: any;
  value?: string;
}

export const СheckboxInput = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ onChange, isChecked = undefined, value, ...props }, ref) => {
    const [checked, setChecked] = React.useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked);
      onChange?.(e);
    };
    return (
      <div
        className={classNames(styles.root, {
          [styles.root__checkboxChecked]: isChecked ?? checked,
        })}
      >
        {(isChecked ?? checked) && <CheckboxIcon className={styles.root__checkboxIcon} />}
        <input
          type="radio"
          ref={ref}
          onChange={handleChange}
          checked={isChecked ?? checked}
          name="fff"
          value={value}
          className={styles.root__checkboxInput}
          {...props}
        />
      </div>
    );
  },
);
