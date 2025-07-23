import React, { createContext, useContext, useEffect, useState } from 'react';
import { axiosInstance } from '../config/axiosInstance';
import { ThemeContext } from './ThemeContext';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { setThemeModeString } = useContext(ThemeContext);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [preferences, setPreferences] = useState(null);
  const [dirtyPrefs, setDirtyPrefs] = useState({});

  // Function to check if user is authenticated
  const checkAuth = async () => {

    try {
      const res = await axiosInstance.get('/check-auth');
      if (res.data.status) {
        setIsAuthenticated(true);

        if (res.data.user) {
          setUser(res.data.user.role);

          if (res.data.user.preferences) {
            setPreferences(res.data.user.preferences);
            setThemeModeString(res.data.user.preferences.theme);
            localStorage.setItem('theme', res.data.user.preferences.theme);
          }
        }
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.warn('Silent auth check failed (not logged in)', error?.response?.status);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const updatePreferences = async (updates, persist = false) => {
    console.log("updatePreferences is hit - - and persist is a ", persist)

    if (!persist) {
      Object.keys(updates).forEach(key => {
        console.log(`${key}`, updates[key])
        localStorage.setItem(`${key}`, updates[key])
      }
      );
      setDirtyPrefs(prev => ({ ...prev, ...Object.fromEntries(Object.keys(updates).map(k => [k, true])) }));
    } else {
      try {
        const res = await axiosInstance.put('/change-preferences', updates);
        if (res.data.status) {
          setPreferences(res.data.preferences);
          setThemeModeString(res.data.preferences.theme)
          localStorage.setItem(`theme`, res.data.preferences.theme)
          return res;
        }
      } catch (error) {
        console.error('Failed to persist preferences:', error);
        return error;
      }
    }
  };

  const login = (userData) => {
    setIsAuthenticated(true); 
    console.log(userData)
    setUser(userData.role);
  };

  useEffect(()=>{
    console.log(user)
  },[user])

  const logout = async () => {
    try {
      await axiosInstance.post('/logout');
    } catch (err) {
      console.error('Logout failed', err);
    } finally {
      setUser(null);
      setIsAuthenticated(false);
      // navigate('/login');
    }
  };

  // Run checkAuth only once when component mounts
  useEffect(() => {
    checkAuth();
  }, []); // Empty dependency array ensures this effect runs once on mount

  // If loading is true, show loading indicator
  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  return (
    <AuthContext.Provider value={{ user, preferences, setPreferences, isAuthenticated, login, logout, checkAuth, loading, updatePreferences, dirtyPrefs }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
