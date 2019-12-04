import React from 'react';
import { HEADER_LINKS } from '../../consts';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          {HEADER_LINKS.map(link => (
            <li key={link.title}>
              <a href={link.path} title={link.title}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <button>Login</button>
        <button>Install Steam</button>
      </div>
    </header>
  );
}