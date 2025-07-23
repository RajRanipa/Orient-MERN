import React, { useState, useEffect } from 'react';
import SubNavBar from './SubNavBar';
import Sidebar from './Sidebar';
import HeaderBar from './HeaderBar';

const Display = ({ children, tabs }) => {

    return (
        <div className="w-full h-full overflow-hidden flex flex-col">
            <SubNavBar links={tabs} title="settings" />
            <main className="flex-1 p-6 overflow-auto bg-box">
                {children}
            </main>
        </div>
    );
};

export default Display;
