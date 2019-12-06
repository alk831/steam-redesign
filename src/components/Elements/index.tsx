import React, { ReactNode } from 'react';
import css from './index.module.scss';

interface TitleProps {
  tag?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
}

export const Title = ({
  tag: TitleTag = 'span',
  ...props
}: TitleProps) => (
  <TitleTag className={css.title}>
    {props.children}
  </TitleTag>
);