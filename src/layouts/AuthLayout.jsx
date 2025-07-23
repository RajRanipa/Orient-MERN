import { Outlet } from 'react-router-dom';
// AuthLayout.jsx
const AuthLayout = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Outlet />
  </div>
);

export default AuthLayout;