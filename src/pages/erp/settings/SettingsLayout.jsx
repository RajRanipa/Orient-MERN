import React from 'react';
import { FiUser, FiSettings, FiLock } from 'react-icons/fi';
import { Outlet } from 'react-router-dom';
import Display from '../../../ERP component/layout/Display';

const tabs = [
  { name: 'Profile', to: '/orient/settings/profile', icon: <FiUser /> },
  { name: 'Preferences', to: '/orient/settings/preferences', icon: <FiSettings /> },
  { name: 'Security', to: '/orient/settings/security', icon: <FiLock /> },
];

const SettingsLayout = () => {
  return (
    <Display tabs={tabs}>
        <Outlet />
    </Display>
  );
};

export default SettingsLayout;
