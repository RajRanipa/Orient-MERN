import { Routes, Route } from 'react-router-dom';
import WebRoutes from './WebRoutes';
import ERPAppRoutes from './ERPAppRoutes';
import ProtectedRoute from '../components/ProtectedRoute';


const MasterRoute = () => {
    return (
        <Routes>
            <Route path="/*" element={<WebRoutes />} />
            <Route path="/orient/*" element={<ProtectedRoute><ERPAppRoutes /></ProtectedRoute>} />
            {/* <Route path="*" element={<PageTransition><WebContent /></PageTransition>} />
            <Route path="/orient/*" element={<ProtectedRoute><PageTransition><AppContent /></PageTransition></ProtectedRoute>} />
            <Route path="/company" element={<PageTransition><CreateCompany /></PageTransition>} /> */}
        </Routes>
    );
};

export default MasterRoute;
