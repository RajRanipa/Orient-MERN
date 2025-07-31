import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import WebRoutes from './routes/WebRoutes';
// import { HelmetProvider } from 'react-helmet';
import { ScrollObserverProvider } from './context/ScrollObserverContext';
import { injectSpeedInsights } from "@vercel/speed-insights";
import { Analytics } from '@vercel/analytics/next';
injectSpeedInsights();


const App = () => {
  return (
    <>
      <React.StrictMode>
        {/* <HelmetProvider> */}
          <ScrollObserverProvider>
            <ThemeProvider>
              <AuthProvider>
                <BrowserRouter>
                  <WebRoutes />
                  <Analytics />
                </BrowserRouter>
              </AuthProvider>
            </ThemeProvider>
          </ScrollObserverProvider>
        {/* </HelmetProvider> */}
      </React.StrictMode>
    </>
  );
};

export default App;