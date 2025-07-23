import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

const Atag = ({ linkname = '', href = '/', className = '', children }) => {
  if (!linkname) return null;

  return (
    <>
      <NavLink to={href} className={`letters-a ${className}`}>
        {children}
        {linkname.split('').map((letter, index) => (
          <span
            key={index}
            className={`pointer-events-none wrap-letter ${index === 0 ? 'uppercase' : ''}`}
            data-letter={letter}
            style={{ color: 'var(--h-color)', transitionDelay: ` ${index * 50}ms`, transitionProperty: 'transform' }}
          >
            {letter}
          </span>
        ))}
      </NavLink>
    </>
  );
};

export default Atag;