import React from 'react';
import { NAVBAR_LINKS } from '../../consts';

export const Navbar = () => {
  return (
    <div>
      <ul>
        {NAVBAR_LINKS.map(link => (
          <li key={link}>
            <a href="/" title={link}>
              {link}
            </a>
          </li>
        ))}
      </ul>
      <input type="text" />
    </div>
  );
}