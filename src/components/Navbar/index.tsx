import React from 'react';
import { NAVBAR_LINKS } from '../../consts';
import css from './index.module.scss';
import { InputSearcher } from '../InputSearcher';

export const Navbar = () => {
  return (
    <div className={css.container}>
      <ul className={css.links_container}>
        {NAVBAR_LINKS.map(link => (
          <li key={link}>
            <a href="/" title={link} className={css.link}>
              {link}
            </a>
          </li>
        ))}
      </ul>
      <InputSearcher />
    </div>
  );
}