import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogInOut = ({ variant = 'header', className = '' }) => {
  const navigate = useNavigate();

  const baseStyle = 'transition';
  const variants = {
    header: 'text-primary hover:text-primaryHover',
    menu: 'flex items-center gap-2 text-sm text-gray-700 hover:text-red-500',
  };

  const combinedStyle = `${baseStyle} ${variants[variant] || variants.header} ${className}`;

  return (
    <a
      href='https://erp.orientfibertech.com/login'
      className={`${combinedStyle} flex items-center gap-2 px-4 py-2 rounded-md`}
      aria-label="Log in"
      id="loginout_button"
    >
      {/* <FiLogIn className="text-lg" /> */}
      <img loading="lazy"src="/front-image/icon/login.svg" alt="logo"/>
      <span>Log in</span>      
    </a>
  );
};

export default LogInOut;