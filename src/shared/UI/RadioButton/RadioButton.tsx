import * as React from 'react';

import styles from './index.module.scss';

interface RadioButtonProps {
  label: string;
  value: string;
  name: string;
  checked: boolean;
  onChange: (value: string) => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  value,
  name,
  onChange,
  checked,
  label,
}) => {
  const handleClick = () => {
    onChange(value);
  };

  return (
    <div className={styles.customRadio}>
      <input
        type="radio"
        value={value}
        name={name}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <span
        className={`${styles.checkmark} ${checked ? styles.checked : ''}`}
        onClick={handleClick}
      ></span>
      {label}
    </div>
  );
};
