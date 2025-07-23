import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import HeaderBar from './HeaderBar';

const AppShell = ({ children, title = 'Dashboard' }) => {

  return (
    <div className="h-screen flex flex-col text-black">
      {/* Header - full width */}
      <HeaderBar />

      {/* Content below header */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Page content */}
        <main className="flex-1 bg-surface overflow-y-auto">
          {/* here we should have sub-navBar which navigar whith in one module like inside seeting page profile to company setting */}
          {children}
        </main>
      </div>

      

    </div>
  );
};

export default AppShell;
