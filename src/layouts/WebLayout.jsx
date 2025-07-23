import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import { ScrollObserverProvider } from '../context/ScrollObserverContext';
import { useEffect } from 'react';

const WebLayout = () => {

  return (
    <ScrollObserverProvider>
      <div className="min-h-screen max-w-screen flex flex-col overflow-hidden">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ScrollObserverProvider>
  );
};

export default WebLayout;