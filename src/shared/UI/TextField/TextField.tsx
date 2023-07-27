import * as React from 'react';
import { forwardRef } from 'react';

import { isDefined } from '../..';
import { FormLabel, HelperText } from '..';

import styles from './index.module.scss';

type ContainerProps = React.ComponentProps<'div'>;
type BaseProps = React.ComponentPropsWithoutRef<'input'>;
interface TextFieldProps extends BaseProps {
  isError?: boolean;
  helperText?: string;
  containerProps?: ContainerProps;
  label?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ type = 'text', isError = false, helperText, label, containerProps, ...props }, ref) => {
    return (
      <div {...containerProps}>
        <FormLabel>{label}</FormLabel>
        <input {...props} type={type} className={styles.root} ref={ref} autoComplete="none" />
        {isDefined(helperText) && <HelperText isError={isError} message={helperText} />}
      </div>
    );
  },
);
