import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

const ProfileButton = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const toggleDropdown = () => setOpen(!open);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-surface hover:bg-secondary transition"
      >
        {/* <span className="text-sm font-medium text-text-dark">{user?.fullName || 'User'}</span> */}
       {user?.avatar ? (
          <img
            src={user.avatar}
            alt="avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-text-onSecondary">
            <FiUser className="w-5 h-5" />
          </div>
        )}
      </button>

      {open && (
        <div className="absolute bg-background text-black right-0 mt-2 w-48 shadow-lg border border-border rounded-md z-50 overflow-hidden">
          <button
            onClick={() => {
              navigate('/orient/settings/preferences');
              setOpen(false);
            }}
            className="flex items-center w-full px-4 py-2 text-sm text-text-dark hover:bg-lightGray"
          >
            <FiUser className="mr-2" /> My Profile
          </button>
          <button
            onClick={() => {
              logout();
              navigate('/login');
            }}
            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-lightGray"
          >
            <FiLogOut className="mr-2" /> Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileButton;
