import React from 'react';
import css from './index.module.scss';
import { ProductInfo } from '../../consts';
import { SliderCard } from '../SliderCard';
import { Carousel } from '../Carousel';

interface SliderProps {
  products: ProductInfo[]
}

export const Slider = (props: SliderProps) => {
  return (
    <div>
      <Carousel
        elements={props.products}
        renderElement={product => <SliderCard {...product} />}
      />
    </div>
  );
}