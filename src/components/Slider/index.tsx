import React from 'react';
import css from './index.module.scss';
import { ProductInfo } from '../../consts';
import { SliderCard } from '../SliderCard';

interface SliderProps {
  products: ProductInfo[]
}

export const Slider = (props: SliderProps) => {
  return (
    <div>
      <ul>
        {props.products.map(product => (
          <li key={product.title}>
            <SliderCard {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
}