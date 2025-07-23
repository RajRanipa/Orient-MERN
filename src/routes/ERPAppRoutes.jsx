import { Routes, Route } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import Dashbord from '../pages/erp/Dashbord';
import SettingsLayout from '../pages/erp/settings/SettingsLayout';
import ProfileSettings from '../pages/erp/settings/ProfileSettings';
import Preferences from '../pages/erp/settings/Preferences';
import Security from '../pages/erp/settings/Security';

const ERPAppRoutes = () => {
    return (
        <Routes>
            <Route path="/Dashbord" element={<PageTransition><Dashbord /></PageTransition>} />
            <Route path="/settings/*" element={<SettingsLayout />}>
                <Route path="profile" element={<PageTransition><ProfileSettings /></PageTransition>} />
                <Route path="preferences" element={<PageTransition><Preferences /></PageTransition>} />
                <Route path="security" element={<PageTransition><Security /></PageTransition>} />
                <Route path="company" element={<PageTransition><Security /></PageTransition>} />
            </Route>
        </Routes>
    );
};

export default ERPAppRoutes;
