import React from 'react';
import { useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AppShell from './ERP component/layout/AppShell';
import AppRoutes from './routes/ERPAppRoutes';

const ERPShellLayout = () => {
    const location = useLocation();

    return (
        <>
            {/* <AuthProvider> */}
                <AppShell>
                    <AppRoutes />
                </AppShell>
            {/* </AuthProvider> */}
        </>
    );
};

export default ERPShellLayout;