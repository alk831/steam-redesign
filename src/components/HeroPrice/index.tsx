import React from 'react';
import css from './index.module.scss';

interface HeroPriceProps {
  value: number
}

export const HeroPrice = (props: HeroPriceProps) => {
  const [decimal, float = '00'] = String(props.value).split('.');

  return (
    <div className={css.container}>
      <span className={css.price_decimal}>
        {decimal}
      </span>
      <div className={css.float_container}>
        <span className={css.price_float}>
          {float}
        </span>
        <span className={css.currency}>
          USD
        </span>
      </div>
    </div>
  );
}