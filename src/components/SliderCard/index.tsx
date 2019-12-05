import React from 'react';
import css from './index.module.scss';
import { ProductInfo } from '../../consts';
import { Tag } from '../Tag';
import { HeroPrice } from '../HeroPrice';
import { RoundedButton } from '../RoundedButton';

// TODO: better semantics
export const SliderCard = (product: ProductInfo) => (
  <div className={css.container}>
    <div className={css.info_container}>
      <div className={css.top_section}>
        <p className={css.title}>{product.title}</p>
        <div className={css.details}>
          {product.tags.map(tag => <Tag key={tag} value={tag} />)}
          {product.releaseDate}
        </div>
      </div>
      <div className={css.bottom_section}>
        <p>{product.description}</p>
        <RoundedButton title="Read more" />
      </div>
    </div>
    <div className={css.hero_container}>
      <img
        src={product.imageUrl}
        alt={product.title}
        className={css.hero_image}
      />
      <div className={css.hero_price}>
        <HeroPrice value={product.price[0] as any} />
      </div>
    </div>
  </div>
);