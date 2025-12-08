import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import WebRoutes from './routes/WebRoutes';
import { ScrollObserverProvider } from './context/ScrollObserverContext';
import { injectSpeedInsights } from "@vercel/speed-insights";
import { HelmetProvider } from 'react-helmet-async';
injectSpeedInsights();


const App = () => {
  return (
    <>
      <React.StrictMode>
        <HelmetProvider>
          <ScrollObserverProvider>
            <ThemeProvider>
              <BrowserRouter>
                <WebRoutes />
              </BrowserRouter>
            </ThemeProvider>
          </ScrollObserverProvider>
        </HelmetProvider>
      </React.StrictMode>
    </>
  );
};

export default App;