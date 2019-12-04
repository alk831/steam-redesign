import React from 'react';
import { CATEGORY_LINKS } from '../../consts';

export const SideMenu = () => {
  return (
    <nav>
      {CATEGORY_LINKS.map((([title, links]) => (
        <li key={title}>
          {title}
          <ul>
            {(links as any).map((link: any) => (
              <li key={link}>
                <a href="/" title={link}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </li>
      )))}
    </nav>
  );
}