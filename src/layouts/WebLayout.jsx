import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/Footer';

const WebLayout = () => {

  return (
      <div className="min-h-screen max-w-screen flex flex-col overflow-hidden raja">
        <Header />
        <Outlet />
        <Footer />
      </div>
  );
};

export default WebLayout;