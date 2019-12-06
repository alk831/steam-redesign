import React, { ButtonHTMLAttributes } from 'react';
import css from './index.module.scss';
import { useCss } from '../../utils';

interface StepButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean
}

export const StepButton = ({ isActive, ...buttonProps }: StepButtonProps) => (
  <button 
    {...buttonProps}
    {...useCss(css.container, isActive && css.active)}
  >
  </button>
);