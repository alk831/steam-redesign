import React from 'react';
import { HEADER_LINKS } from '../../consts';
import css from './index.module.scss';

export const Header = () => {
  return (
    <header className={css.container}>
      <nav>
        <ul className={css.links_container}>
          {HEADER_LINKS.map(link => (
            <li key={link.title}>
              <a className={css.link} href={link.path} title={link.title}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={css.action_buttons_container}>
        <a className={css.action_button}>
          Login
        </a>
        <a className={css.action_button}>
          Install Steam
        </a>
      </div>
    </header>
  );
}