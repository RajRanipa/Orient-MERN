import { createContext, useEffect, useState } from 'react';

// 1. Define the shape of the context data for better autocompletion and clarity
const initialContextState = {
  theme: 'system', // 'light', 'dark', or 'system'
  setTheme: (theme) => { }, // Function to change the theme
  isDarkMode: false, // The currently active mode (boolean)
};

export const ThemeContext = createContext(initialContextState);

export const ThemeProvider = ({ children }) => {
  // 2. Use a SINGLE state to store the user's preference. This is our source of truth.
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme || 'system'; // Default to 'system' if nothing is stored
  });

  // 3. Derive the active theme (isDarkMode) from the state. No need for a separate state.
  const isDarkMode =
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      if (theme === 'system') {
        const isDark = mediaQuery.matches;
        if (isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // 4. Consolidate ALL side effects into one useEffect hook
  useEffect(() => {
    const root = window.document.documentElement;

    // Apply or remove the .dark class
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Save the user's preference to localStorage whenever it changes
    localStorage.setItem('theme', theme);
  }, [theme, isDarkMode]); // Rerun this effect if theme or the derived isDarkMode changes

  // 5. Provide a clean and simple value to consuming components
  const value = {
    theme,      // The current setting ('light', 'dark', 'system')
    setTheme,   // The function to change the setting
    isDarkMode, // The resulting boolean (true for dark, false for light)
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};