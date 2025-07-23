import React, { useContext } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggleButton = () => {
  const { themeMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className="text-xl focus:outline-none transition"
      title="Toggle Theme"
    >
      {themeMode ? (
        <FiSun className="text-xl text-black" />
      ) : (
        <FiMoon className="text-xl text-black" />
      )}
    </button>
  );
};

export default ThemeToggleButton;
