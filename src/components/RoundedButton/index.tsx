import React, { AnchorHTMLAttributes } from 'react';
import css from './index.module.scss';

interface RoundedButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  type?: 'anchor' | 'button'
  title: string
  children?: string
}

export const RoundedButton = ({
  type = 'anchor',
  title,
  children = title,
  ...props
}: RoundedButtonProps) => (
  <a {...props} className={css.container}>
    {children}
  </a>
);