import React from 'react';
import css from './index.module.scss';

interface InputSearcherProps extends
  React.InputHTMLAttributes<HTMLInputElement> {}

export const InputSearcher = (props: InputSearcherProps) => {
  return (
    <div>
      <input 
        type="text"
        className={css.input}
        {...props}
      />
    </div>
  );
}