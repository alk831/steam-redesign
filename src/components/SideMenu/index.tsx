import React from 'react';
import { CATEGORY_LINKS } from '../../consts';
import css from './index.module.scss';
import { Title } from '../Elements';

export const SideMenu = () => {
  return (
    <nav>
      <ul className={css.categories_container}>
        {CATEGORY_LINKS.map((([title, links]) => (
          <li key={title} className={css.category_container}>
            <Title>{title}</Title>
            <ul className={css.links_container}>
              {(links as any).map((link: any) => (
                <li key={link}>
                  <a
                    href="/"
                    title={link}
                    className={css.category_link}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        )))}
      </ul>
    </nav>
  );
}