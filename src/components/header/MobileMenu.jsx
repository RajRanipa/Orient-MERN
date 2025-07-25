// components/header/MobileMenu.jsx

import React, { useEffect, useRef, useState } from 'react';
import NavLinkCustom from './NavLinks';
import { cn } from '../../utils/cn';

const MobileMenu = ({ isOpen, onClose, style }) => {
  const menuRef = useRef();
  const [isClosing, setIsClosing] = useState(false);

  // Handle close animation
  useEffect(() => {
    if (!isOpen) {
      setIsClosing(true);
      const timer = setTimeout(() => setIsClosing(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // ✅ Don't exit early
  // ✅ Keep mounted when isClosing = true
  return (
    (isOpen || isClosing) && (
      <div
        ref={menuRef}
        className={cn(
          'mobile-menu',
          isOpen ? 'animate-slide-from-right' : 'animate-slide-to-right'
        )}
      >
        <div className="flex flex-col space-y-4 relative">
          <NavLinkCustom className="block text-base" onClick={onClose} />
        </div>
      </div>
    )
  );
};

export default MobileMenu;


  // const getMenuClasses = (menuType) => {
  //   switch (menuType) {
  //     case 'full-width':
  //       return 'absolute left-0 top-16 w-full h-auto bg-[rgba(255,255,255,0.2)] text-text px-4 py-4 space-y-4 shadow-lg';
  //     case 'auto-width':
  //       return 'absolute right-0 top-16 w-auto h-auto  bg-[rgba(255,255,255,0.2)] text-text px-4 py-4 space-y-4 shadow-lg';
  //     case 'centered-box':
  //       return 'absolute left-1/2 transform -translate-x-1/2 top-16 w-3/4 h-auto  bg-[rgba(255,255,255,0.2)] text-text px-4 py-4 space-y-4 shadow-lg';
  //     case 'glassmorphism':
  //       return 'absolute right-0 top-16 w-auto h-auto  bg-[rgba(255,255,255,0.2)] text-text border border-border rounded-xl px-4 py-4 space-y-4 shadow-lg';
  //     default:
  //       return 'absolute right-0 top-16 w-3/4 h-auto  bg-[rgba(255,255,255,0.2)] text-text px-4 py-4 space-y-4 shadow-lg';
  //   }
  // };