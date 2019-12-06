import React, { ButtonHTMLAttributes, ReactNode, useState } from 'react';
import css from './index.module.scss';
import { StepButton } from '../StepButton';

interface CarouselProps<T> {
  elements: T[]
  renderElement: (element: T) => ReactNode
}

export function Carousel<T>(props: CarouselProps<T>) {
  const [activeIndex, setIndex] = useState(0);
  const { length } = props.elements;
  const maxIndex = length - 1;
  const AL = '<';
  const AR = '>';

  const handleIndexIncrement = () => {
    if (activeIndex === maxIndex) {
      setIndex(0);
    } else {
      setIndex(activeIndex + 1);
    }
  }

  const handleIndexDecrement = () => {
    if (activeIndex === 0) {
      setIndex(maxIndex);
    } else {
      setIndex(activeIndex - 1);
    }
  }

  return (
    <>
      <div className={css.stage_container}>
        <button onClick={handleIndexDecrement}>{AL}</button>
        {props.renderElement(props.elements[activeIndex])}
        <button onClick={handleIndexIncrement}>{AR}</button>
      </div>
      <ul className={css.buttons_container}>
        {props.elements.map((_, index) => (
          <li key={index} className={css.button}>
            <StepButton
              onClick={() => setIndex(index)}
              isActive={index === activeIndex}
            />
          </li>
        ))}
      </ul>
    </>
  );
}