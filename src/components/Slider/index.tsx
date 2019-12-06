import React from 'react';
import css from './index.module.scss';
import { ProductInfo } from '../../consts';
import { SliderCard } from '../SliderCard';
import { Carousel } from '../Carousel';
import { Title } from '../Elements';

interface SliderProps {
  products: ProductInfo[]
}

export const Slider = (props: SliderProps) => {
  return (
    <article>
      <Title tag="h1">Featured & Recommended</Title>
      <Carousel
        elements={props.products}
        renderElement={product => <SliderCard {...product} />}
        keyExtractor="title"
      />
    </article>
  );
}