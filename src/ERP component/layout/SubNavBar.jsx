import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

const SubNavBar = ({ title, links }) => {
  const location = useLocation();

  return (
    <nav className="h-12 p-2 bg-surface border-b border-border  flex gap-2 w-full items-center">
      <div className="text-lg font-semibold text-primary capitalize flex items-center gap-1 px-2 border-r-2">
        <h1> {title} </h1>
        {/* <FiChevronRight/> */}
      </div>
      <ul className="flex gap-6 px-2">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `text-m font-medium ${
                  isActive ? 'text-primary' : 'text-gray hover:text-lightBlack'
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubNavBar;
