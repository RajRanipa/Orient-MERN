import React from 'react';
// import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LogInOut = ({ variant = 'header', className = '' }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // redirect after logout
  };

  const baseStyle = 'transition';
  const variants = {
    header: 'text-primary hover:text-primaryHover',
    menu: 'flex items-center gap-2 text-sm text-gray-700 hover:text-red-500',
  };

  const combinedStyle = `${baseStyle} ${variants[variant] || variants.header} ${className}`;

  return user ? (
    <button
      onClick={handleLogout}
      className={`${combinedStyle} flex items-center gap-2 px-4 py-2 rounded-md bor `}
      aria-label="Log out"
      id="loginout_button"
    >
      {/* <FiLogOut className="text-lg" /> */}
      <img loading="lazy"src="/public/front-image/icon/logout.svg" alt="logo"/>
      <span>Log out</span>
    </button>
  ) : (
    <button
      onClick={() => navigate('/login')}
      className={`${combinedStyle} flex items-center gap-2 px-4 py-2 rounded-md`}
      aria-label="Log in"
      id="loginout_button"
    >
      {/* <FiLogIn className="text-lg" /> */}
      <img loading="lazy"src="/front-image/icon/login.svg" alt="logo"/>
      <span>Log in</span>      
    </button>
  );
};

export default LogInOut;