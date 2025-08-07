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
        <ThemeProvider>
          <BrowserRouter>
            <ScrollObserverProvider>
              <WebRoutes />
            </ScrollObserverProvider>
          </BrowserRouter>
        </ThemeProvider>
      </React.StrictMode>
    </>
  );
};

export default App;