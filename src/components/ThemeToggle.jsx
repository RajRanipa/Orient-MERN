// File: components/ThemeToggle.jsx

import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme, isDarkMode } = useContext(ThemeContext);

  const iconMap = {
    light: '🌞',
    dark: '🌙',
    system: '🖥️',
  };

  const nextTheme = {
    light: 'dark',
    dark: 'system',
    system: 'light',
  };

  return (
    <button
      onClick={() => setTheme(nextTheme[theme])}
      title={`Theme: ${theme}`}
      className="text-xl transition-transform duration-300 hover:rotate-12"
    >
      {iconMap[theme]}
    </button>
  );
};

export default ThemeToggle;