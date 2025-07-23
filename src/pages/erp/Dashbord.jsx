import {React, useEffect} from 'react';
import PageContainer from '../../ERP component/layout/PageContainer';
import { toast } from 'react-toastify';

const Dashbord = () => {
  useEffect(() => {
    toast('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }, [1]);
  return (
      <PageContainer>
        <h1 className="text-2xl text-black font-bold mb-4">Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="bg-surface p-4 rounded shadow">
            <p className="text-lg font-semibold text-lightBlack">Total Users</p>
            <p className="text-3xl font-bold mt-2 text-gray">1,200</p>
          </div>
          <div className="bg-surface p-4 rounded shadow">
            <p className="text-lg font-semibold text-lightBlack">Active Sessions</p>
            <p className="text-3xl font-bold mt-2 text-gray">84</p>
          </div>
          <div className="bg-surface p-4 rounded shadow">
            <p className="text-lg font-semibold text-lightBlack">New Signups</p>
            <p className="text-3xl font-bold mt-2 text-gray">45</p>
          </div>
        </div>
      </PageContainer>
  );
};

export default Dashbord;