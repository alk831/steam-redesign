import React, { useContext } from 'react';
import css from './index.module.scss';
import { CurrencyContext } from '../../context/currency';

interface HeroPriceProps {
  value: number
}

export const HeroPrice = (props: HeroPriceProps) => {
  const [decimal, float = '00'] = String(props.value).split('.');
  const { currency } = useContext(CurrencyContext);

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
          {currency}
        </span>
      </div>
    </div>
  );
}