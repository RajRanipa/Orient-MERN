import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import MasterRoute from './routes/MasterRoutes';
import { ToastContainer } from 'react-toastify';
import { ScrollObserverProvider } from './context/ScrollObserverContext';
import { injectSpeedInsights } from "@vercel/speed-insights";

injectSpeedInsights();


const App = () => {
  return (
    <>
      <React.StrictMode>
        <ScrollObserverProvider>
          <ThemeProvider>
            <AuthProvider>
              <BrowserRouter>
                <MasterRoute />
              </BrowserRouter>
            </AuthProvider>
          </ThemeProvider>
          <ToastContainer />
        </ScrollObserverProvider>
      </React.StrictMode>
    </>
  );
};

export default App;