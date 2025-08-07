import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import WebRoutes from './routes/WebRoutes';
import { ScrollObserverProvider } from './context/ScrollObserverContext';
import { injectSpeedInsights } from "@vercel/speed-insights";
injectSpeedInsights();


const App = () => {
  return (
    <>
      <React.StrictMode>
          <ScrollObserverProvider>
            <ThemeProvider>
                <BrowserRouter>
                  <WebRoutes />
                </BrowserRouter>
            </ThemeProvider>
          </ScrollObserverProvider>
      </React.StrictMode>
    </>
  );
};

export default App;