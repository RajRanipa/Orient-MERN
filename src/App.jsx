import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import MasterRoute from './routes/MasterRoutes';
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <>
      <React.StrictMode>
        <ThemeProvider>
          <AuthProvider>
            <BrowserRouter>
              <MasterRoute />
            </BrowserRouter>
          </AuthProvider>
        </ThemeProvider>
        <ToastContainer />
      </React.StrictMode>
    </>
  );
};

export default App;