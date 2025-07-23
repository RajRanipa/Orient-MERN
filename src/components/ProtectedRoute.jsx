import React from 'react';
import { Navigate, useLocation } from 'react-router-dom'; // For redirect after login
import { useAuth } from '../context/AuthContext';
import { FORCE_LOGIN_MODE } from '../config/appConfig';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation(); // <-- get current location
  
  if (loading) {
    return <div>Loading...</div>; // or spinner
  }

  if (FORCE_LOGIN_MODE) {
    return  isAuthenticated ? children : <Navigate state={{ from: location }} to="/login" replace />;
  } else {
    return children;
  }
};

export default ProtectedRoute;