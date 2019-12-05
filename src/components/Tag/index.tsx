import React from 'react';
import css from './index.module.scss';

interface TagProps {
  value: string
}

export const Tag = (props: TagProps) => (
  <span className={css.container}>
    {props.value}
  </span>
);