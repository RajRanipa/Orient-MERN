import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import WebRoutes from './routes/WebRoutes';
// import { ToastContainer } from 'react-toastify';
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
                <WebRoutes/>
              </BrowserRouter>
            </AuthProvider>
          </ThemeProvider>
          
        </ScrollObserverProvider>
      </React.StrictMode>
    </>
  );
};

export default App;