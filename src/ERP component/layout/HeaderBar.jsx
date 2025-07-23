import React from 'react';
import LogoButton from '../LogoButton'
import ProfileButton from '../ProfileButton';
import ThemeToggleButton from '../../ERP component/ThemeToggleButton';

const HeaderBar = () => {
  return (
    <header className="h-16 w-full bg-background border-b border-border flex items-center px-4 justify-between">
      
      {/* this is company logo component */}
      <LogoButton/>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <ThemeToggleButton />
        {/* User Avatar Placeholder */}
        <ProfileButton/>
      </div>
    </header>
  );
};

export default HeaderBar;